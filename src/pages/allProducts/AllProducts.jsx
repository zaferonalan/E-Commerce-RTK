import Products from '../../components/products/Products'
import { allProducts } from '../../data'

const AllProducts = () => {
  return (
    <Products heading="Products" items={allProducts}/>
  )
}

export default AllProducts