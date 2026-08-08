import React from 'react'
import { Link } from 'react-router-dom';

const ItemList = ({items}) => {

    return (
        <div>
            <ul>
                {
                    items.map(item=>{
                        return(
                            <li >
                                <Link to={`/items/${item.id}`}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default ItemList