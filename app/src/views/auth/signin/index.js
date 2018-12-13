import React, { Component } from "react";
import { View, Image, ImageBackground, Text, Alert } from "react-native";
import styles from "./styles";
import { Button, Input } from "../../../components";
import logo from "../../../assets/logo.png";
import wallpaper from "../../../assets/wallpaper.jpg";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  handleUsernameChange = text => {
    this.setState({ username: text });
  };

  handlePasswordChange = text => {
    this.setState({ password: text });
  };

  handleButtonTouch = () => {
    const { username, password } = this.state;

    if (username != "ClementeSerrano" || password != "Clemente") {
      Alert.alert(
        "Ooops! Seems that your username or password are wrong :( Please try again!"
      );
    } else {
      Alert.alert("Welcome Clemente!");
      this.props.navigation.navigate("Challenge");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={wallpaper} style={styles.wallpaper}>
          <View style={styles.titleContainer}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.title}>Flippo</Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              changed={this.handleUsernameChange}
              placeholder="Username"
              textColor="white"
              backgroundColor="rgba(255, 255, 255, 0.3)"
              isPassword={false}
            />
            <Input
              changed={this.handlePasswordChange}
              placeholder="Password"
              textColor="white"
              backgroundColor="rgba(255, 255, 255, 0.3)"
              isPassword={true}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Sign in"
              textColor="white"
              backgroundColor="#70db70"
              touched={this.handleButtonTouch}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default SignIn;
