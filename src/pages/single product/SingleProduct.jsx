import './SingleProduct.css'
import {allProducts} from '../../data';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const SingleProduct = () => {

  const {id} = useParams();

  const product = allProducts.find((product) => product.id === parseInt(id))

  const colors = ["red", "purple", "teal", "green", "black"]
  const [selectedColor, setselectedColor] = useState(null)
  const handleCircleClick = (color) => {
    setselectedColor(color)
  }

  const sizes = ["xs", "s", "m", "l", "xl"]
  const [selectedSize, setselectedSize] = useState(null)
  const handleSizeClick = (size) => {
    setselectedSize(size)
  }

  return (
    <div className='singleProduct-container'>
      <div className='singleProduct-wrapper'>
        <div className='singleProduct-imageSection'>
          <img src={product.img} alt="" className='singleProduct-image'/>
        </div>

        <div className='singleProduct-infoSection'>
          <h2 className='singleProduct-title'>{product.title}</h2>
          <p className='singleProduct-number'>{product.price}</p>
          <h4 className='singleProduct-title'>Description</h4>
          <p className='singleProduct-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis labore cumque eos distinctio iure earum assumenda, nihil temporibus, nesciunt quos sint, nemo nostrum officiis itaque nulla eius facere placeat quis.
          </p>
          <div className='singleProduct-options'>
            <div className='colors-section'>
              <h4>Color</h4>
              <div className='colors'>
                {colors.map((color) => (
                  <div key={color} className='color-circle' style={{backgroundColor: color, outline: selectedColor === color ? `3px solid ${color}` : "" }}  onClick={() => handleCircleClick(color)}>

                  </div>
                ))}
              </div>
            </div>
            <div className='sizes-section'>
              <h4>Size</h4>
              <div className='sizes'>
                {sizes.map((size) => (
                  <span key={size} style={{border: selectedSize === size ? "1px solid #ccc": ""}} onClick={() => handleSizeClick(size)}>{size}</span>
                ))}
              </div>
            </div>
          </div>
          <div className='addToCart'>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct