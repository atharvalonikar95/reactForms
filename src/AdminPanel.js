import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminPanel = ({ mobiles }) => {
    const nav=useNavigate()
    return (
        <div style={{display:'flex', flexDirection:'column',justifyContent:"center",alignItems:"center"}}>
            <button onClick={()=>nav('/admin/addProduct')}  >Add Product</button>
            {
                mobiles.map(item => {
                    return (
                        <div key={item.id} style={{ display: 'flex', width: "40%", padding: 2, border: "1px solid black", gap: 2, alignItems: "center",paddingLeft:20 }}  >
                            <img src={item.image} alt={item.name} height={20} width={20}/>
                            <h4 onClick={()=>nav(`/admin/products/${item.id}`)}>{item.name}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AdminPanel