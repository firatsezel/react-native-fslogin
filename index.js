import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  Text,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Image
} from 'react-native';
const { width, height } = Dimensions.get('window');

class Fslogin extends Component {
  render() {
    return (
        <View style={this.props.containerStyle}>
          <KeyboardAvoidingView behavior="padding" style= {{marginTop: height / 5, flex: 1,
            justifyContent: 'center', alignItems: 'center'}}>
          <View style={this.props.loginContainerStyle}>

          </View>
        {this.props.children}
        <TouchableOpacity style={this.props.buttonContainerStyle} onPress={this.props.onLoginPress}>
          <Text  style={this.props.buttonTextStyle}>{this.props.loginText}</Text>
        </TouchableOpacity>
        <Text style = {this.props.underlineTextStyle}>
            {this.props.forgetPasswordtext}
        </Text>

      </KeyboardAvoidingView>
    </View>
    );
  }
}

Fslogin.propTypes = {
  style: Text.propTypes.style,
  containerStyle: Text.propTypes.style,
  logoStyle: Text.propTypes.style,
  loginContainerStyle: Text.propTypes.style,
  inputStyle: Text.propTypes.style,
  buttonTextStyle: Text.propTypes.style,
  buttonContainerStyle: Text.propTypes.style,
  underlineTextStyle: Text.propTypes.style,
  forgetPasswordtext: PropTypes.string,
  passwordText: PropTypes.string,
  loginText: PropTypes.string,
  usernameText: PropTypes.string,
  onLoginPress: PropTypes.func,
  logoPath: PropTypes.string,
};

Fslogin.defaultProps = {
  style: {},
  children: {},
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#89F9E6',
  },
  logoStyle: {
      position: 'absolute',
      width: 300,
      height: 100,
  },
  loginContainerStyle: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  inputStyle: {
    width: width - 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  },
  buttonTextStyle:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  buttonContainerStyle: {
    width: width - 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#2980b6',
    paddingVertical: 15
  },
  underlineTextStyle: {
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'rgba(0,50,0,0.7)',
  },
  forgetPasswordtext: 'Forgot Password?',
  passwordText: 'Password',
  loginText: 'Login',
  usernameText: 'Phone or E-mail?',
  onLoginPress: null,
  logoPath: '',
};

export default Fslogin;
