import React from 'react';
import { StyleSheet, View, Button, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

function Map(props) {
  return( 
        <View>
            <View style={styles.container}>
                <MapView
                  style={{flex: 1}}
                  region={{
                    latitude: props.stateObj.latitude,
                    longitude: props.stateObj.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                <Marker
                    coordinate={{latitude: props.stateObj.latitude, longitude: props.stateObj.longitude}}
                />
                </MapView>
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                onPress={() => props.postToDB()}
                title='Tap to confirm'
                color='white'
                />
            </View>
        </View>
    );
}

export default Map;

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
