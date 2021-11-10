import React, { useState } from 'react'
import PropTypes from 'prop-types'
const Categories =React.memo( ({activeCategory,items, onClickCategory}) => {
  // const list=items.map(num=><li>{num}</li>)  

    // const[activeItem, setActiveItem] = useState(null)

    const onSelectItem=(index)=>{
      onClickCategory(index);
    }

    return ( 
            <div className="categories">
                <ul>
                  <li className={activeCategory === null ? 'active' : ''} onClick={()=>onSelectItem(null)}>Все</li>
                  {items && items.map((element,index)=><li className={activeCategory===index ? 'active' : ''} onClick={()=>onSelectItem(index)} key={`${element}_${index}`}>{element}</li>)}
                </ul>
              </div> 
    )
})



Categories.propTypes={
  // activeCategory:PropTypes.oneOf([PropTypes.number.isRequired, null]),
  items:PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory:PropTypes.func,

};

Categories.defaultProps={
  activeItem : null,items: [],
}

export default Categories
