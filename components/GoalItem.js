import {Text, View,StyleSheet,Pressable} from 'react-native';
 function GoalItem(props)
{
  return(
    <View style={mystyles.goalItem}>
      <Pressable onLongPress={props.DeleteHandler.bind(this,props.id)} 
       android_ripple={{color:'#210644'}}
        style={({Pressed})=> Pressed && mystyles.pressedItem}>
        <Text style={mystyles.goalvalue}>{props.text}</Text>
      </Pressable>
     </View>
  );
}
export default GoalItem;
const mystyles=StyleSheet.create({
  goalItem:{
    margin:8,
    backgroundColor:'#5e0acc',
    borderRadius:5,
    color:'white'
  },
  goalvalue:{
    color: 'white',
    padding:8,
  },
  pressedItem:{
    opacity: 0.5,
  }
});
