import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import MealsList from '../components/MealsList'

const FavouriteScreen = (props) => {
    const favmeals = useSelector(state => state.meals.favouritemeals)
    if(favmeals.length==0|| !favmeals)
    {
        return(
            <View style={styles.content}>
                <Text>There is No Favourite Meals</Text>
            </View>
        )
    }
    // const favmeals=availablemeals.filter((meal)=>meal.id==="m1"||meal.id==="m2")
    return <MealsList listdata={favmeals} navigation={props.navigation}/>
}
export default FavouriteScreen
FavouriteScreen.navigationOptions={
    headerTitle:"Your Favourites"
    }
const styles=StyleSheet.create({
    content:{
flex:1,
justifyContent:"center",
alignItems:"center"
    }
})