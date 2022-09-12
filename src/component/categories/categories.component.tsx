import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

// Utilities
import CategoryItem from "./category-item/category-item.component";
import Category from "../../types/category.types";

// Styles
import "./categories.styles.css";
import {
  CategoriesContainer,
  CategoriesContent,
} from "../categories/categories.styles";
import { db } from "../../config/firebase-config";
import { categoryConvert } from "../../converters/firestore.converters";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  console.log({ categories });

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = [];
      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConvert)
      );
      querySnapshot.forEach((doc) => {
        const result = doc.data();
        categoriesFromFirestore.push(doc.data());
      });
      setCategories(categoriesFromFirestore);
      console.log({ categoriesFromFirestore });
    } catch (error) {
      console.error({ error });
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  );
};

export default Categories;
