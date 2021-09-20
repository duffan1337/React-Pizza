import React, { useState } from 'react'

const Categories = ({items, onClick}) => {
  const list=items.map(num=><li>{num}</li>)

    const[activeItem, setActiveItem] = useState(null)

    const onSelectItem=(index)=>{
      setActiveItem(index)
    }

    return (
            <div className="categories">
                <ul>
                  <li className={activeItem=== null ? 'active' : ''} onClick={()=>onSelectItem(null)}>Все</li>
                  {items && items.map((element,index)=><li className={activeItem===index ? 'active' : ''} onClick={()=>onSelectItem(index)} key={`${element}_${index}`}>{element}</li>)}
                </ul>
              </div> 
    )
}

export default Categories
