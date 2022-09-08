import { FunctionComponent } from "react";
//utilities
import Category from "../../../types/category.types";
//styles
import "./category-item.styles.css";
import { CategoryItemContainer, CategoryName } from "./category-item.styles";
interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <div className="category-name">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
