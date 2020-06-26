import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";


const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage = {state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text = "Already have an account? Sign in instead!"
                />

        </View>);
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: ()=>false
    };
};


const styles = StyleSheet.create({
    container: {
        marginBottom: 200,
        flex: 1,
        justifyContent: 'center'
    },

});

export default SignupScreen;