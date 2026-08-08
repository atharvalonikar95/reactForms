import React from 'react'
import { Router, useNavigate } from 'react-router-dom'

const ProductList = ({mobiles}) => {
    const navigate =useNavigate()
  return (
      <div style={{ display:"flex",flexWrap:"wrap",width:"100%",justifyContent:"center",gap:10,marginTop:10}}>
        {
          mobiles.map(item=>{return(
            <div key={item.id} style={{display:'flex', width:"40%",padding:10,border:"px solid black",gap:5,alignItems:"center"}} >
              <img src={item.image} alt={item.name} style={{objectFit:"contain" ,   width:"100%",height: "180px"}}/>
              <div>
                <h4>{item.name}</h4>
                <h4>{item.price}</h4>
                {/* <p>{item.description}</p> */}
                <button onClick={()=>navigate(`/products/${item.id}`)}>Buy</button>
              </div>
            </div>
          )
          })
        }
      </div>
  )
}

export default ProductList