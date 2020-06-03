import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';


const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up for Tracker</Text>
            </Spacer>
            <Spacer/>
            <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false}/>
            <Input label="Password" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry/>
            <Spacer/>
            <Spacer>
                <Button title="Sign Up"/>
            </Spacer>
        </View>);

};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false
    };
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 200,
        flex: 1,
        justifyContent: 'center'
    }
});

export default SignupScreen;