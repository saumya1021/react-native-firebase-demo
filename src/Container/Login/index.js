import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated
} from "react-native";
import LoginForm from "./LoginForm";
import { LOGO_PNG } from "../../config/images";
import { styles } from "./style";

const SlideUpAnim = props => {
  const [slideUpValue] = useState(new Animated.Value(0)); // Initial value for opacity: 0
  useEffect(() => {
    Animated.timing(slideUpValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  }, []);
  return (
    <Animated.View // Special animatable View
      style={{
        transform: [
          {
            translateY: slideUpValue.interpolate({
              inputRange: [0, 1],
              outputRange: [500, 0]
            })
          }
        ],
        opacity: slideUpValue
      }}
    >
      {props.children}
    </Animated.View>
  );
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAnimation1Done: false,
      isAnimation1Done: false
    };
  }

  handleChange = (e, name) => {
    this.setState({
      [name]: e
    });
  };

  handleSubmit = () => {
   console.log('-----------')
  };

  render() {
    return (
      <View style={styles.containers}>
          <Text style={{fontSize:18,color:'grey', textAlign:'center', top:10, fontWeight:'bold'}}>Login</Text>
          <SlideUpAnim>
            <Image
              style={{ top: 100, left: "35%", height:100 }}
              source={LOGO_PNG}
            />
          </SlideUpAnim>
          <SlideUpAnim>
            <View style={styles.formWrapper}>
              <LoginForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
              <View style={styles.bottomBar}>
                <View style={styles.registerHereTextWrapper}>
                  <Text style={styles.newMemberText}>Not Member yet?</Text>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Signup")}
                  >
                    <Text style={styles.registerHereText}>Register Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SlideUpAnim>
      </View>
    );
  }
}


export default Login;
