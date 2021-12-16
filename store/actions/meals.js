export const TOGGLE_FAVOURITE="TOGGLE_FAVOURITE"
export const SET_FILTERS="SET_FILTERS"

export const toggleFavoourite=(id)=>{
    return {
        type:TOGGLE_FAVOURITE,
        mealId:id
    }
}
export const setFilters=(filtersSetting)=>{
    return{
        type:SET_FILTERS,
        filters:filtersSetting

    }
}