import React from 'react'
import "./Products.scss"

const Products = () => {
  return (
    <div className='products'>
      <div className="left">
        {/* Filter elements section */}
        <div className="filterItem">
          {/* Filter by categories */}
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='2' value={2}/>
            <label htmlFor='2'>Skirts</label>
          </div>
          <div className="inputItem">
            <input type='checkbox' id='3' value={3}/>
            <label htmlFor='3'>Coats</label>
          </div>
        </div>
        <div className="filterItem">
          {/* Filter by price range */}
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000}/>
            <span>1000</span>
          </div>
        </div>
        <div className="filterItem">
          {/* Filter by highest/lowest first */}
          <h2>Sort by price</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price'/>
            <label htmlFor='asc'>Lowest first</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price'/>
            <label htmlFor='desc'>Highest first</label>
          </div>
        </div>
      </div>
      <div className="right">
      <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
    </div>
  )
}

export default Products