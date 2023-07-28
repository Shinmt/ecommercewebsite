import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {BsPlus, BsEyeFill} from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
  const {addToCart} = useContext(CartContext)
  const {id, image, category, title, price} = product;
  return (
    <div>
    <div className='border border-black h-72 mb-4 relative overflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>

        <div className=' w-48 mx-auto flex justify-center items-center'>
          <img className=' max-h-40 group-hover:scale-110 transition duration-300 ' src={image} alt='' />
        </div>

        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex-col items-center justify-center gap-y-2
         opacity-0 group-hover:opacity-100 transition-all duration-300 '>
          <button onClick={() => addToCart(product, id)}>
            <div className='flex justify-center items-center text-white w-6 h-6 bg-sky-900'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
          <Link to={`/product/${id}`} className=' w-6 h-6 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
    </div>
        <div>
          <div className=' capitalize font-light'>{category}</div>
          <Link to={`/product/${id}`}>
            <h2 className=' font-semibold mb-1'>{title}</h2>
          </Link>
          <div className=' font-medium'>$ {price}</div>
        </div>
    </div>
    
  );
};

export default Product;
