import Products from "./Products"
import { bestsellers } from '../../data'

const Bestsellers = () => {
  return (
    <Products items={bestsellers} heading="Bestsellers"/>
  )
}

export default Bestsellers