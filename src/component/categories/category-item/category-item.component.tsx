import { FunctionComponent } from "react";
//utilities
import Category from "../../../types/category.types";
//styles
import "./category-item.styles.css";
interface CategoryItemProps {
  category: Category;
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <div
      className="category-item-container"
      style={{ backgroundImage: category.imageUrl }}
    >
      <div className="category-name">
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </div>
    </div>
  );
};

export default CategoryItem;
