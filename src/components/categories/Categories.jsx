import "./Categories.css"
import { categories } from "../../data";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories-container">
        {categories.map((item) => (
            <div className="category-container" key={item.id}>
                <img src={item.img} alt="" />
                <div className="category-info">
                    <h1>{item.title}</h1>
                    <Link to="/products">
                      <button>Show Now</button>
                    </Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Categories