import React from 'react';
import { Text, View, Button, Dimensions} from 'react-native';

function GarageConfirmation(props) {
  return(
    <View>
      <View style={styles.baseText}>
        <Text style={styles.titleText}>Review and Approve(tap to edit)</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={`${props.stateObj.address}, ${props.stateObj.city}, ${props.stateObj.state} ${props.stateObj.zip}`}
          color='white'
          onPress={() => props.editGarage()}
        />
      </View>
      {props.stateObj.vehObj.map((x) =>
        <View style={styles.buttonContainer}>
        <Button
          title={`${x.year} ${x.make}, ${x.model}`}
          color='white'
        />
      </View>
      )}
    </View>
  );
}

export default GarageConfirmation

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
  baseText: {
    fontFamily: "Cochin",
    textAlign: "center"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
};