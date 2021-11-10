const initialState={
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice= arr=>{
    return arr.reduce((sum,obj)=>obj.price+sum,0);
}
    const _get=(obj, path)=>{
        const [firstKey, ...keys]=path.split('.')
        return keys.reduce((val,key)=>
        {
           return val[key]
        }, obj[firstKey])
    }

const getTotalSum=(obj,path)=>{
    return Object.values(obj).reduce((sum,obj)=>{
        const value= _get(obj, path);
            return sum+value},0,);
}


const card=(state = initialState, action)=>{
    if(action.type==='ADD_PIZZA_CARD'){
        const currentPizzaItems= !state.items[action.payload.id] 
        ? [action.payload] 
        : [...state.items[action.payload.id].items, action.payload]

        const newItems={ 
            ...state.items,
            [action.payload.id]:{
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems),
            }

            }
            // const totalCount=Object.keys(newItems).reduce((sum,key)=>newItems[key].items.length+sum, 0)
            // const totalPrice=Object.keys(newItems).reduce((sum,key)=>newItems[key].totalPrice +sum, 0)
            //const items = Object.values(newItems).map(obj=>obj.items)
            //const allPizzas=[].concat.apply([], items)  
            //const totalPrice= getTotalPrice(allPizzas);

           const totalCount= getTotalSum(newItems,'items.length')
           const totalPrice= getTotalSum(newItems,'totalPrice')

        return{
            ...state,
            items:newItems,
            totalCount: totalCount,
            totalPrice: totalPrice,
        };
    }
    else if(action.type==='CLEAR_CARD'){
        return {
            totalPrice: 0,
            totalCount: 0,
            items:{},
        }
    }
    else if(action.type==='PLUS_CARD_ITEM'){

        const newObjItems= [...state.items[action.payload].items, state.items[action.payload].items[0]]
        const newItems={
            ...state.items,
          [action.payload]:{
              items:newObjItems, 
              totalPrice: getTotalPrice(newObjItems),
          }
        }
        const totalCount= getTotalSum(newItems,'items.length')
        const totalPrice= getTotalSum(newItems,'totalPrice')

        return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice,
          }
    }
    else if(action.type==='MINUS_CARD_ITEM'){

        const oldItems=state.items[action.payload].items;
        const newObjItems= oldItems.length > 1 ? state.items[action.payload].items.slice(1): oldItems;
            const newItems={
                ...state.items,
              [action.payload]:{
                  items:newObjItems, 
                  totalPrice: getTotalPrice(newObjItems),
              }
            }


        const totalCount= getTotalSum(newItems,'items.length')
        const totalPrice= getTotalSum(newItems,'totalPrice')
        return {
            ...state,
            items: newItems,
            totalCount,
            totalPrice,
          }
    }
    else if(action.type==='REMOVE_CARD_ITEM'){

    const newItems={
        ...state.items
    }

    const currentTotalPrice=newItems[action.payload].totalPrice;
    const currentTotalCount=newItems[action.payload].items.length;

    delete newItems[action.payload]
        return {
           ...state,
           items:newItems,
           totalPrice:state.totalPrice-currentTotalPrice,
           totalCount:state.totalCount-currentTotalCount,
        }
    }

    return state;
}

export default card