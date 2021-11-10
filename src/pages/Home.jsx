import React from 'react'
import { Categories,SortPopup,PizzaBlock} from "../Components";
import { useSelector, useDispatch} from "react-redux";
import { setCategory, setSortBy } from '../redux/actions/filters';
import {fetchPizzas} from "../redux/actions/pizzas"
import PizzaLoader from '../Components/PizzaBlock/PizzaLoader';
import { addPizzaToCard } from '../redux/actions/card';
const categoryNames=[ 'Мясные',
'Вегетарианская',
'Гриль',
'Острая',
'Закрытые',];

const sortItems = [{name: 'популярности',type:'rating', order: 'desc'},
{name: 'цене',type:'price', order: 'desc'},
{name: 'алфавиту',type:'name', order: 'asc'},]




const Home=() =>{

  const dispatch=useDispatch()

  const {items}=useSelector((state)=>{
    return{
      items:state.pizzas.items,
    };
  });

  const {cardItems}=useSelector((state)=>{
    return{
      cardItems:state.card.items,
    };
  });
  
  const {isLoading}=useSelector((state)=>{
    return{
      isLoading:state.pizzas.isLoaded,
    };
  });

  const {category}=useSelector((state)=>{
    return{
      category:state.filters.category
    };
  });

  const {sortBy}=useSelector((state)=>{
    return{
      sortBy:state.filters.sortBy
    };
  });

  const handleAddPizzaToCard=(obj)=>{
    dispatch(addPizzaToCard(obj))
  }

    
  React.useEffect(()=>{
    dispatch(fetchPizzas(sortBy, category))
 },[category, sortBy]);

 const onSelectCategory=React.useCallback((index)=>{
   dispatch(setCategory(index));
 },[]);

 const onSelectSortType=React.useCallback((type)=>{
   dispatch(setSortBy(type));
 },[]);
 
    return (
        <div className="container">
        <div className="content__top">
          <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames}/>
          <SortPopup  activeSortType={sortBy.type} items = {sortItems} onClickSortType={onSelectSortType}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoading ? items.map(obj=> <PizzaBlock
               addedCount={cardItems[obj.id] && cardItems[obj.id].items.length}
               onClickAddPizza={handleAddPizzaToCard} 
               isLoading={isLoading} 
               key={obj.id} 
               {...obj} />)
                      :Array(10).fill(0)
                      .map((_,index)=><PizzaLoader key = {index}/>)
          }
    </div>
      </div>
    )
}

export default Home