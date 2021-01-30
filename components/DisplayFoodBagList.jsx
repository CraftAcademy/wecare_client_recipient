import React from 'react'
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native'
import { useSelector } from 'react-redux'

const DisplayFoodBagList = ({ navigation, foodbag }) => {
  const { credentials } = useSelector((state) => state)

  return (
    <View>
      <Text style={styles.title}>{foodbag.status}</Text>
      <Text>{foodbag.pickuptime}</Text>
      <Text>{foodbag.created_at}</Text>
    </View>
  )
}

export default DisplayFoodBagList

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    paddingLeft: 10,
    paddingRight: 10,
    bottom: 0,
    backgroundColor: 'rgba(14, 13, 13, 0.6)',
  },
  title: {
    backgroundColor: 'black',
    fontSize: 20,
  },
  lead: {
    color: 'white',
    fontSize: 16,
  },
  created: {
    color: 'black',
    fontSize: 12,
    paddingBottom: 5,
    paddingTop: 3,
  },
  image: {
    height: 250,
    width: Dimensions.get('window').width,
  },
})
