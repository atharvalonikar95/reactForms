import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AddProduct = ({ mobiles, setMobiles }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const item = mobiles.find(item => item.id === Number(id))
    const [data, setData] = useState({
        name: item?.name || "",
        description: item?.description || "",
        price: item?.price || "",
        image: item?.image || "",
    })
    const handleOnchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (id) {
            const updatedMobile = mobiles.map(mobile => {
                if (mobile.id === Number(id)) {
                    return {
                        ...mobile,
                        ...data,
                        id: mobile.id
                    }
                }
                return mobile
            })
            setMobiles(updatedMobile)
        } else {

            const newProduct = {
                id: mobiles.length+1,
                ...data
            }

            setMobiles([
                ...mobiles,
                newProduct
            ])
        }

        navigate("/admin")
}
const handleDelete = () => {
    const filteredMobiles = mobiles.filter(item => item.id !== Number(id))
    setMobiles(filteredMobiles)
    console.log(mobiles)
    navigate('/')
}
return (
    <form onSubmit={handleOnSubmit} style={{ border: '1px solid black', display: "flex", alignItems: "center", justifyContent: 'center', flexDirection: "column", gap: 10,padding:10 }}>
        <input className="form-control" style={{ width: "60%",padding:10 }} placeholder='name' name='name' value={data.name} onChange={handleOnchange} />
        <input className="form-control" style={{ width: "60%",padding:10 }} placeholder='description' name='description' value={data.description} onChange={handleOnchange} />
        <input className="form-control" style={{ width: "60%",padding:10 }} placeholder='price' name='price' value={data.price} onChange={handleOnchange} />
        <input className="form-control" style={{ width: "60%",padding:10 }} placeholder='image' name='image' value={data.image} onChange={handleOnchange} />
        <button className="float-right" type='submit'>{id ? "Save" : "Add"}</button>
        <button className="float-right" type="button" onClick={handleDelete}>Delete</button>
    </form>
)
}

export default AddProduct