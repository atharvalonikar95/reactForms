import React from 'react'
import { useParams } from 'react-router-dom';

const ItemDetail = ({items}) => {
    const { id } = useParams();
    const item = items.find(item => item.id === Number(id))

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
        </div>
    )
}

export default ItemDetail