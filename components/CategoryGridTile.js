import React from "react";
import { StyleSheet, Text, TouchableOpacity, View,Platform,TouchableNativeFeedback } from "react-native";

const CategoryGridTile = (props) => {
    let TouchableCmp=TouchableOpacity
    if(Platform.OS=="android" && Platform.Version>=21)
    {
TouchableCmp=TouchableNativeFeedback
    }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp
         style={{flex:1}}
        onPress={props.onSelect}
      >
        <View style={{...styles.container,...{backgroundColor:props.color}}}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default CategoryGridTile;
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:10,
        overflow:"hidden"
      },
      container:{
          flex:1,
          borderRadius:10,
          shadowColor:'black',
          shadowOpacity:0.25,
          shadowOffset:{width:0,height:2},
          shadowRadius:10,
          elevation:3,
          padding:10,
          justifyContent:"flex-end",
          alignItems:"flex-end"
      },
      title:{
          fontSize:22,
          textAlign:"right"
      }
});
