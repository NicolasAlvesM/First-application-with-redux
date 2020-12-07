export default (status=[],action)=>{
    switch (action.type) {
        case 'ADD_ITEM':
            return [...status,{id:action.id,text:action.text}]
        case 'REMOVE_ITEM':
            return status.filter(item=>action.id!==item.id)
        default:
            return status
    }
}