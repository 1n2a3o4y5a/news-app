import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'gray',
  },
});



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image style={{width: 100, height: 100}}
                 source={{url :'https://picsum.photos/536/354'}}
          ></Image>
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
          Just add your desired image size (width & height) after our URL, and you'll get a random image.
          </Text>
          <Text style={styles.subText}>
            React News
          </Text>
        </View>
      </View>
    </View>
  );
}

