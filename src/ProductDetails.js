import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = ({ mobiles }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const item = mobiles.find(item => item.id === Number(id))
    return (
        <div style={{ display: "flex",  width: "100%", justifyContent: "center", gap: 10, marginTop: 10 }}>

            <div key={item.id} style={{ display: 'flex', width: "40%", padding: 10, border: "px solid black", gap: 5 }} >
                <img src={item.image} alt={item.name} style={{ objectFit: "cover", width: "100%", height: "280px" }} />
                <div>
                    <h4>{item.name}</h4>
                    <h4>{item.price}</h4>
                    <p>{item.description}</p>
                    <button className="btn" onClick={() => navigate(`/`)}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails