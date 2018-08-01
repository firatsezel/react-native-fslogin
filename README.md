
# react-native-fslogin

## Getting started

`$ npm install react-native-fslogin --save`

TODO: What to do with the module?
- [ ] Adding Dynamic Logo Path

## Usage(Simple)
```javascript
import FsLogin from 'react-native-fslogin';

<Fslogin>
...
    <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType='email-address'
        returnKeyType="next"
        placeholder='Phone or E-Mail'
        placeholderTextColor='rgba(0,0,0,0.7)'
    />

    <TextInput
        returnKeyType="go"
        placeholder='Password'
        placeholderTextColor='rgba(0,0,0,0.7)'
        secureTextEntry
    />
...
</Fslogin>
```

## Usage(with props)
```javascript
import FsLogin from 'react-native-fslogin';

<Fslogin
  containerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#89F9E6',}},
  loginContainerStyle={{alignItems: 'center', flexGrow: 1, justifyContent: 'center'}},
  inputStyle={{width: window.width - 10, alignItems: 'center', justifyContent: 'center', height: 40, backgroundColor: '#FFFFFF', marginBottom: 10, padding: 10, color: '#ffff'}},
  buttonTextStyle:{{color: '#ffff', textAlign: 'center', fontWeight: '700'}},
  buttonContainerStyle={{width: window.width - 10, alignItems: 'center', justifyContent: 'center', height: 40, marginBottom: 10, padding: 10, backgroundColor: '#2980b6', paddingVertical: 15}},
  underlineTextStyle={{textAlign: 'center', fontSize: 20, textDecorationLine: 'underline', color: 'rgba(0,50,0,0.7)'}},
  forgetPasswordtext='Forget Password?',
  passwordText='Password',
  loginText='LOGIN',
  usernameText='Username',
>
...
    <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType='email-address'
        returnKeyType="next"
        placeholder='Phone or E-Mail'
        placeholderTextColor='rgba(0,0,0,0.7)'
    />

    <TextInput
        returnKeyType="go"
        placeholder='Password'
        placeholderTextColor='rgba(0,0,0,0.7)'
        secureTextEntry
    />
...
</Fslogin>
```

| Prop Name | Prop Type | Purpose | Default Define |
| ------------- | ------------- | ------------- | ------------- |
| containerStyle  | style  | Styles Container | Yes |
| logoStyle | style | Styles Logo in the middle | Yes |
| loginContainerStyle | style | Styles Login Button| Yes |
| buttonTextStyle | style | Button Text | Yes |
| buttonContainerStyle | style | Button Container | Yes |
| underlineTextStyle | style | Styles underline text at the bottom of view | Yes |
| forgetPasswordtext | String | Forget Password String | Yes |
| passwordText | String | Placeholder - Password text area | Yes |
| loginText | String | Login button text | Yes |
| usernameText | String | Placeholder - Username text area | Yes |
| onLoginPress | Function | Execute when press on login button | No |
