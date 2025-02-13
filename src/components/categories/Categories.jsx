import "./Categories.css"
import { categories } from "../../data";

const Categories = () => {
  return (
    <div className="categories-container">
        {categories.map((item) => (
            <div className="category-container" key={item.id}>
                <img src={item.img} alt="" />
                <div className="category-info">
                    <h1>{item.title}</h1>
                    <button>Show Now</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Categories