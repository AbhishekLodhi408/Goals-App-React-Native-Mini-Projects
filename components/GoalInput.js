import{View,TextInput,Button,StyleSheet,Modal,Image} from 'react-native';
import {useState} from 'react';
function GoalInput(props){
  const [userGoals,AddUserGoal]=useState("");
  function goalInput(text){
    AddUserGoal(text);
  }

  function AddGoalsArray(){
    props.AddGoalHandler(userGoals);
    AddUserGoal('');
  }
  
  return(
  <Modal visible={props.visible} 
  onRequestClose={props.onCancel}>
    <View style={mystyles.inputContainer}>
    <Image source={require('../assets/images.jpg')} style={mystyles.img}/>
      <TextInput placeholder="Enter your goals..." 
          style={mystyles.inputField} 
          onChangeText={goalInput} 
          value={userGoals}/>
      <View style={mystyles.buttonContainer}>
        <View style={mystyles.buttonContainerView}>
          <Button title="Add Goal" onPress={AddGoalsArray} color='#5e0acc'/>
        </View>
        <View style={mystyles.buttonContainerView}>
          <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
        </View>
      </View>
    </View>
  </Modal>
  );
}

export default GoalInput;

const mystyles=StyleSheet.create({
  inputContainer:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    //backgroundColor: '#311b6b',
    backgroundColor: '#f5f3f0',
  },
  inputField:{
    borderWidth:2,
    backgroundColor:'white',
    width: '70%',
    padding:16,
    borderRadius: 8,
  },
  buttonContainer:{
    flexDirection:'row',
  },
  buttonContainerView:{
    width: '30%',
    marginHorizontal: 16,
    margin: 8,
  },
  img:{
    width: 250,
    height: 250,
    margin: 10,
  }
});