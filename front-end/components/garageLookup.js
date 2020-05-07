import React from 'react';
import { StyleSheet, View, TextInput, Button, Dimensions } from 'react-native';

function GarageLookup(props) {
  return(
    <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{fontSize: 25}}
            placeholder={props.stateObj.address ? props.stateObj.address : 'Address'}
            onChangeText={(x) => props.handleChange('address', x)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{fontSize: 25}}
            placeholder={props.stateObj.city ? props.stateObj.city : 'City'}
            onChangeText={(x) => props.handleChange('city', x)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{fontSize: 25}}
            placeholder={props.stateObj.state ? props.stateObj.state : 'State'}
            onChangeText={(x) => props.handleChange('state', x)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={{fontSize: 25}}
            placeholder={props.stateObj.zip ? props.stateObj.zip : 'Postal Code'}
            onChangeText={(x) => props.handleChange('zip', x)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            onPress={() => props.getCoordinates()}
            title='Verify Address'
            color='white'
          />
        </View>
    </View>
  );
}

export default GarageLookup

let {height, width} = Dimensions.get('window');
const styles = {
  buttonContainer: {
      margin: width*.1,
      backgroundColor:'#2c81e4',
      borderRadius:10
  },
  inputContainer: {
      margin: width*.1,
      borderBottomColor:'#68a0cf',
      height: 25,
      borderBottomWidth: 1
    },
  bottomBreak: {
      flex:1,
      margin: width*.1,
  },
  container: {
    height: height*.4,
    width: width*.8,
    margin: width*.1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
};

