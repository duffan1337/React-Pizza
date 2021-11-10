export const addPizzaToCard=(pizzaObj)=>({
    type:'ADD_PIZZA_CARD',
    payload: pizzaObj
})

export const clearCard=()=>({
    type:'CLEAR_CARD',
})

export const removeCardItem=(id)=>({
    type:'REMOVE_CARD_ITEM',
    payload: id
})
export const plusCardItem=(id)=>({
    type:'PLUS_CARD_ITEM',
    payload: id
})
export const minusCardItem=(id)=>({
    type:'MINUS_CARD_ITEM',
    payload: id
})