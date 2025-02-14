import Categories from '../../components/categories/Categories'
import Newsletter from "../../components/newsletter/Newsletter"
import Bestsellers from "../../components/products/Bestsellers"
import NewArrivals from "../../components/products/NewArrivals"
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <Categories/>
      <NewArrivals/>
      <Bestsellers/>
      <Newsletter/>
    </div>
  )
}

export default Home