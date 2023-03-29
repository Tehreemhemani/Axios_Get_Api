import { View, Text } from 'react-native'
import React from 'react'
import Abc from './Src/Abc'
import Index from './Src/Index'


export default function App() {
  return (
    <Index/>
  )
}
// import React,{useState,useEffect}from 'react'
// import { StyleSheet, Text, View, FlatList } from 'react-native'
// import { Card } from 'react-native-paper';
// import axios from 'axios';




// export default function Listing(){
//     const [data, setData] = useState([]);
//     const [setLoading] = useState(true);
  
//     useEffect(() => getDataUsingSimpleGetCall(), [])
  
//     const getDataUsingSimpleGetCall = () => {
//       setTimeout(() => {
//         axios.get('https://dummy.restapiexample.com/api/v1/employees')
//         .then((json) => setData(json.data.data))
//         .finally(() => setLoading(false));  
//       }, 1000);
      
//       //console.log(json);
//     };
  

//   return (

//       <View>

//         <FlatList 
//         data={data}
//            keyExtractor={(item) => item.id}
//            renderItem={(itemData)=> {
//             return (
//               <View style={styles.containerFlate}>
//                 <Card style={styles.innerContainer}>
//                   <Card.Content>
//              <Text style={styles.title}>ID : {itemData.item.id}</Text>
//           <Text style={styles.title}>Name : {itemData.item.employee_name}</Text>
//           <Text style={styles.title}> Salary : {itemData.item.employee_salary}</Text>
//           <Text style={styles.title}> Age : {itemData.item.employee_age}</Text>
//                   </Card.Content>
//                 </Card>

//               </View>
//             )
        
        
//           }} />
//       </View>

      

    
//   )
// }
// const styles = StyleSheet.create({

//   bg: {
//     height: '100%'
//   },
  
 

//   containerFlate: {
//     flex: 1,
//     margin: 16,
//     height: 150,
//     // borderRadius: 10,
//     // elevation: 4,
//     // backgroundColor: '#c91111',
//     // shadowColor: 'black',
//     // shadowOpacity: 0.25,
//     // shadowOffset: {
//     //   width: 0,
//     //   height: 2,
//     // },
//     // shadowRadius: 8,
//   },
//   innerContainer: {
//     flex: 1,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'grey',
  
//   },
 
  
//   title: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: 'white',
//   },
// })
