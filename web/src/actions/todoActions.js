let id = 0
export const addItem = text => {return {type:"ADD_ITEM",text,id:id++}}
export const removeItem  = id   => {return {type:"REMOVE_ITEM",id}}