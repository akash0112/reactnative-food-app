import { MEALS } from "../../data/dummy-data"
import { SET_FILTERS, TOGGLE_FAVOURITE } from "../actions/meals";
const initialState={
    meals:MEALS,
    filteredmeals:MEALS,
    favouritemeals:[],

}
const mealsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex=state.favouritemeals.findIndex(meal=>meal.id===action.mealId)
           if(existingIndex>=0)
           {
               const updatedmeals=[...state.favouritemeals];
               updatedmeals.splice(existingIndex,1);
               return {...state,favouritemeals:updatedmeals}
           }
           else
           {
               const meal=state.meals.find((selectedmeal)=>selectedmeal.id===action.mealId)
               return{...state,favouritemeals:state.favouritemeals.concat(meal)}
           }
           case SET_FILTERS:
               const appliedFilters=action.filters
               const updatedfilteredMeals=state.meals.filter(meal=>{
                //    console.log("updatedFiltermeals",meal);
                //    console.log("meal",meal);
                //    console.log("appliedFilters",appliedFilters);
                   if(appliedFilters.gluttenFree && !meal.isGlutenFree)
                   {
                       return false;
                   }
                   if(appliedFilters.lactoseFree && !meal.isLactoseFree)
                   {
                       return false;
                   }
                   if(appliedFilters.vegetarian && !meal.isVegetarian)
                   {
                       return false;
                   }
                   if(appliedFilters.vegan && !meal.isVegan)
                   {
                       return false;
                   }
                   return true;
               })
            //    console.log("updatedfilteredMeals",updatedfilteredMeals);
               return {...state,filteredmeals:updatedfilteredMeals}
        default:
            return state
    }
}
export default mealsReducer