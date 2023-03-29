import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Animated,
  Image, ActivityIndicator
} from 'react-native';

const Index = () => {
  const marginBottomItem = 0;
  const paddingItem = 0;
  const imgHeight = 100;
  const sizeOfItem = imgHeight + paddingItem * 1 + marginBottomItem;


  const backgroundImg = 'https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg'

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const Yscroll = useRef(new Animated.Value(0)).current;

  useEffect(() => getDataUsingSimpleGetCall(), [])

  const getDataUsingSimpleGetCall = () => {
    setTimeout(() => {
      axios.get('https://dummy.restapiexample.com/api/v1/employees')
        .then((json) => setData(json.data.data))
        .finally(() => setLoading(false));
    }, 1000);

    //console.log(json);
  };
  const itemData = ({ index, item }) => {
    const scale = Yscroll.interpolate({
      inputRange: [
        -1, 0,
        sizeOfItem * index,
        sizeOfItem * (index + 2)
      ],
      outputRange: [1, 1, 1, 0]
    })


    return (
      <Animated.View style={
        [styles.item,
        {
          transform: [{ scale }]
        }
        ]
      }>


        <View>
          <View>
            <Text style={styles.wrapText}>ID : {item.id}</Text>
            <Text style={styles.wrapText}>Name : {item.employee_name}</Text>
            <Text style={styles.wrapText}> Salary : {item.employee_salary}</Text>
            <Text style={styles.wrapText}> Age : {item.employee_age}</Text>
          </View>
        </View>
      </Animated.View>

    );
  }

  return (

    <SafeAreaView>
      <Image
        source={{ uri: backgroundImg }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      {
        isLoading ? <ActivityIndicator /> : (
          <Animated.FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={itemData}
            contentContainerStyle={{
              padding: 30,
            }}
            onScroll={
              Animated.event(
                [{ nativeEvent: { contentOffset: { y: Yscroll } } }],
                { useNativeDriver: true }
              )}
          />
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // image: {
  //   width: 100,
  //   height: imgHeight
  // },


  wrapText: {
    flex: 1,
    fontSize: 18,
    textAlign: "center",
    color:"white",
    fontWeight:'bold'


  },
  item: {
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#93BFCF',
    


  },


});
export default Index;
