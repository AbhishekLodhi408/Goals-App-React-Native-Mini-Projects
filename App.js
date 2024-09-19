
import {View,Text,StyleSheet,Button,FlatList} from 'react-native';
import {useState} from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function CourseGoalApp(){
  const [goalsArray,AddGoalsArray]=useState([]);
  const [modalVisible,setModalVisible]=useState(false);
  function addGoalArray(userGoals){ 
    if(userGoals!=""){
    AddGoalsArray((currentCourseGoal)=>([...currentCourseGoal, {title:userGoals,key:Math.random().toString()}]));}
    endGoalHandler();
  }

  function AddGoalHandler(){
    setModalVisible(true);
  }
  function endGoalHandler(){
    setModalVisible(false);
  }
  function DeleteGoal(id){
      AddGoalsArray((currentCourseGoal)=>{
          return currentCourseGoal.filter((goal)=>goal.key!==id);
        });
  }

  return(
    <View style={mystyles.appContainer}>
      <Button title="Add New Goal" onPress={AddGoalHandler}/>
      <GoalInput AddGoalHandler={addGoalArray} 
        visible={modalVisible}
        onCancel={endGoalHandler}
        />
      <View style={mystyles.showGoalContainer}>
        <FlatList
          data={goalsArray}
          renderItem={(itemData) => {return <GoalItem 
          text={itemData.item.title} 
          id={itemData.item.key}
          DeleteHandler={DeleteGoal}/>}}
        />
      </View>
    </View>
  );
}

const mystyles=StyleSheet.create({
  appContainer:{
    paddingTop: 50,
    paddingHorizontal:20,
    //backgroundColor:'lightblue',
    flex:1,
    backgroundColor: '#34cceb'
  },
  showGoalContainer:{
    flex:4,
    padding: 10,
  },
  // goalItemhead:{
  //   margin:8,
  //   padding:8,
  //   backgroundColor:'black',
  //   borderRadius:5,
  // },
});