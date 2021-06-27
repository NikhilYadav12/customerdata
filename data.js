import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  View,
} from "react-native";
import Dataa from "./data.json";



export default class Customer extends Component {

    //constructor to set default state
   

  constructor() {
    super();
    this.state = {customer:[],address:[], click: 0 };
  }



  componentDidMount() {
   
        this.setState({ customer: Dataa});
      }




   _renderIem = ({ item, index }) => {
    let customerData = Dataa;

    return (
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.buttoncontainer}
          onPress={() => {
            this.setState({click:1});
            this.setState({address:customerData[index].adress1});

          }}
        >
          <Text
            style={styles.buttontext}
          >{`  ${customerData[index].Name} ${customerData[index].customerId} ${customerData[index].sex} ${customerData[index].AGE}`}</Text>
        </TouchableOpacity>
      </View>
    );
  };

   adress = this.state.address.length == 0 ? "No Adress " : this.state.address;
   render(){  return (
    <View>
    
      <View style={styles.Container}>
        <FlatList
          data={this.state.customer}
          renderItem={this._renderIem}
          keyExtractor={(item, index) => index.toString()}
        />
        <Text style={styles.buttontext}>
          {this.state.click == 0 ? "Click on any customer to get the address" : this.adress}
        </Text>
      </View>
    </View>
  );
}};

const styles = StyleSheet.create({
  Container1: {
    paddingLeft: 180,
  },
  Container2: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#50DBB4",
  },
  Container3: {
    flex: 1,
  },
  Container: {
    flex: 1,
    flexDirection: "row",

    padding: 10,
    paddingTop: 50,
    backgroundColor: "#50DBB4",
  },
  item: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#50DBB4",
    // borderRadius: 50,
  },
  icon: {
    padding: 20,
    justifyContent: "flex-start",
    alignContent: "left",
  },
  buttoncontainer: {
    backgroundColor: "#66AD47",
    paddingVertical: 15,
    borderRadius: 30,
  },
  buttontext: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});

