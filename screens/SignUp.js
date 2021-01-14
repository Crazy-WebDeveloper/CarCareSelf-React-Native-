
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, ScrollView, TextInput, Button, TouchableOpacity, SafeAreaView, FlatList, Image, Rating, AirbnbRating } from 'react-native';
// import axios from "axios";
// import FormData from "form-data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      businessName: "",
      email: "",
      mobileNumber: "",
      vertical: "",
      cr_number: "",
      city: "",
      country: "",
      password: ""
    }
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{
          width: "100%",
          height: "100%"
        }}
        resizeMode={'cover'}
        source={require('../assets/imgs/login/bg.png')}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textHeading}> Sign Up </Text>
            <Text style={styles.textLabel}> Name </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Name"
              onChangeText={text => this.setState({ name: text })}
            />
            <Text style={styles.textLabel}> Business Name </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Business Name"
              onChangeText={text => this.setState({ businessName: text })}
            />
            <Text style={styles.textLabel}> Email </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Email"
              onChangeText={text => this.setState({ email: text })}
            />
            <Text style={styles.textLabel}> Mobile Number </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Mobile Number"
              onChangeText={text => this.setState({ mobileNumber: text })}
            />

            <Text style={styles.textLabel}> Vertical </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Select Vertical"
              onChangeText={text => this.setState({ vertical: text })}
            />

            <Text style={styles.textLabel}> CR Number </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter CR Number"
              onChangeText={text => this.setState({ cr_number: text })}
            />

            <Text style={styles.textLabel}> City </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter City"
              onChangeText={text => this.setState({ city: text })}
            />

            <Text
              style={styles.textLabel}> Country </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Country"
              onChangeText={text => this.setState({ country: text })}
            />

            <Text
              style={styles.textLabel}> Passowrd </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter Passowrd"
              onChangeText={text => this.setState({ password: text })}
            />

            <Text
              style={{
                fontSize: 13,
                marginBottom: 2,
                marginTop: 8,
                color: "#444",
                fontWeight: 'bold'
              }}>
              I agree to<Text style={{ color: "#00C8E4" }}> Terms & Conditions</Text> of Self Care & Car Care
                </Text>

            <View style={[{
              width: "94%",
              marginStart: 10,
              marginEnd: 10,
              marginTop: 24,
              marginBottom: 16,
              backgroundColor: "#00C8E4",
              borderRadius: 6,
            }]}>
              <Button
                title="Sign Up"
                color="#00C8E4"
              //onPress={() => this.submitHandle()}
              />
            </View>

            <Text
              style={{
                fontSize: 16,
                marginBottom: 16,
                color: "#808080"
              }}>Sign in with Social Account</Text>


            <View style={styles.buttonContainer}>
              <View style={styles.socialButtonContainer}>
                <TouchableOpacity style={styles.centerAlign}>
                  <Image style={styles.socialIcon} source={require('../assets/2-Login/fb.png')} />
                  <Text style={[styles.textButtonSocial, { color: '#FFFFFF' }]}>Facebook</Text>
                </TouchableOpacity>
              </View>

              <View style={[styles.socialButtonContainer, { backgroundColor: '#FFFFFF' }]}>
                <TouchableOpacity style={styles.centerAlign}>
                  <Image style={styles.socialIcon} source={require('../assets/2-Login/goolge.png')} />
                  <Text style={styles.textButtonSocial}>Google</Text>
                </TouchableOpacity>
              </View>
            </View>


            <Text
              style={{
                fontSize: 16,
                marginBottom: 48,
                marginTop: 32,
                color: "#1A1A1A"
              }}>Already have an account?
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                <Text style={{ color: "#00C8E4" }}> Sign In </Text>
              </TouchableOpacity>
            </Text>
            <StatusBar style="auto" />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
  socialIcon: {
    width: 16,
    height: 16
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  textHeading: {
    fontSize: 18,
    marginStart: 16,
    marginBottom: 16,
    marginTop: 42,
    fontWeight: 'bold'
  },
  textLabel: {
    textAlign: 'left',
    marginStart: 8,
    marginBottom: 8,
    color: '#4D4D4D',
    marginTop: 16,
    fontWeight: 'bold',
    width: "94%",
  },
  textInput: {
    height: 40,
    width: "94%",
    padding: 10,
    borderRadius: 4,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
  },
  textButtonSocial: {
    textAlign: 'center',
    marginStart: 8
  },
  socialButtonContainer: {
    width: "44%",
    margin: 8,
    backgroundColor: "#3B5998",
    padding: 10,
    borderRadius: 4,
  },
  centerAlign: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    width: "46%",
    marginEnd: 8,
    backgroundColor: "#00C8E4",
    borderRadius: 40,
  },
  buttonStyleWhite: {
    width: "46%",
    marginEnd: 8,
    backgroundColor: "#E6E6E6",
    borderRadius: 40,
  },
  containerList: {
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    width: "92%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  textBorder: {
    width: "50%",
    fontSize: 11,
    color: '#333333',
    fontWeight: 'bold',
    marginTop: 4,
    marginEnd: 4,
    marginStart: 4,
    borderRadius: 4,
    borderColor: '#E6E6E6',
    borderWidth: 1, padding: 4
  },
});



