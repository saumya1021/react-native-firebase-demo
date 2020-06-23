import React, {Component, Fragment} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import TextField from '../../Components/InputField';
import {styles} from './style';
import {USER_ICON, PASS_ICON} from '../../config/images';

export default class LoginForm extends Component {
  render() {
    const {handleChange, handleSubmit, username, password} = this.props;
    return (
      <Fragment>
        <View style={styles.inputImageWrapper}>
          <Image source={USER_ICON} style={styles.inputImage} />
          <TextField
            inputStyle={styles.input}
            onInputChange={e => handleChange(e, 'username')}
            placeHolderText={'Enter Email'}
            name={'username'}
            value={username}
            placeholderTextColor="#787878"
            label={'Email Address'}
            // styleLabel
          />
        </View>
        <View style={styles.inputImageWrapper}>
          <Image source={PASS_ICON} style={styles.inputImage} />
          <TextField
            inputStyle={styles.input}
            onInputChange={e => handleChange(e, 'password')}
            placeHolderText={'Enter Password'}
            name={'password'}
            value={password}
            label={'Password'}
            placeholderTextColor="#787878"
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => handleSubmit()}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}
