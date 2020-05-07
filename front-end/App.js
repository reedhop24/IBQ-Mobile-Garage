import React from 'react';
import { ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import GarageLookup from './components/garageLookup';
import GarageConfirmation from './components/confirmation';
import Map from './components/mapView';
import {GOOGLE_MAP} from 'react-native-dotenv';
import axios from 'axios';

export default class GarageInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      address: null,
      city: null,
      state: null,
      zip: null,
      displayMap: false,
      latitude: 0,
      longitude: 0,
      vehObj: undefined
    }
  }

  getCoordinates = () => {
    if(this.state.address && this.state.city && this.state.state && this.state.zip){
      const paramAddr = this.state.address.trim().split(' ').join('+');
      const paramCity = this.state.address.trim().split(' ').join('+');
      axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${paramAddr},+${paramCity},+${this.state.state.trim()},+${this.state.zip.trim()}&key=${GOOGLE_MAP}`)
      .then(res => {
        if(typeof(res.data.results[0].geometry.location.lat) == undefined) {
          alert('Address is invalid');
        } else {
          this.setState({
            displayMap: true,
            latitude: res.data.results[0].geometry.location.lat,
            longitude: res.data.results[0].geometry.location.lng
          })
        }
      });
    } else {
      for(const x in this.state){
        if(x === 'city' || x == 'state' || x =='zip' || x == 'address') {
          if(!this.state[x]) {
            alert('Required: ' + x[0].toUpperCase() + x.substring(1, x.length));
            break;
          }
        }
      }
    }
  }

  submitDB = () => {
    const objToSend = {
      "quoteNumber": "343434",
      "garage" : {
        "address": this.state.address,
        "city": this.state.city, 
        "state": this.state.state,
        "zip": this.state.zip
      }
    }

    axios.post('http://172.20.10.2:5000/GarageInfo', objToSend)
      .then(res => {
        this.setState({
          onConfirmation: true,
          vehObj: res.data.vehArr
        })
      });
  }

  render() {
    return (
      <ScrollView>
        <Header
          containerStyle = {{
            backgroundColor:'#2c81e4'
          }}
          /* Icons simply for style */
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'GARAGE INFO', style: { color: '#fff', fontSize: 20 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        {this.state.vehObj === undefined ? 
          <GarageLookup 
            handleChange={(x, y) => this.setState({[x]: y})} 
            getCoordinates={() => this.getCoordinates()}
            stateObj={this.state}
          /> : 
          <GarageConfirmation
            stateObj={this.state}
            editGarage={() => this.setState({
              vehObj: undefined, 
              onConfirmation: false
            })}
          />}
        {this.state.displayMap && !this.state.onConfirmation ? 
          <Map 
            stateObj={this.state}
            postToDB={() => this.submitDB()}
          />
          : null}
      </ScrollView>
    );
  }
}