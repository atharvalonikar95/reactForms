import React from 'react'

const Menu = ({menuItems}) => {
  return (
    <div className="menu-container">
        {
            menuItems.map(item=>{
                return(
                    <div key={item.id} className="menu-item" data-test-id={`menu-item-${item.category}`}>
                        <img src={item.img} alt="img" className="menu-img" />
                        <div className="menu-info">
                            <p>{item.title}</p>
                            <p>{item.category}</p>
                            <p>{item.price}</p>
                        </div>

                    </div>
                )
            })
        }
    </div>
  )
}

export default Menu