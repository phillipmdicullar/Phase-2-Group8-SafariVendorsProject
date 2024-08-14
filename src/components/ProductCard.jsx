import React, { useEffect, useState } from 'react'
// import React from 'react'



function ProductCard() {
    const [products, setProducts] =useState([])

useEffect(() => {
  fetch('http://localhost:3000/products')
      .then(res =>res.json())
      .then(data =>setProducts(data))
      .catch(err=>console.log(err))
}, ([]))

const displayProducts = products.map(product => {
    return (
       <div className=' grid-cols-4 grid '>
        <div key={product.id} className=''>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.category}</p>
              <p>{product.vendor}</p>
          </div>
        </div>
    )
})

return(
    <div>
        {displayProducts}
    </div>
)
}

export default ProductCard