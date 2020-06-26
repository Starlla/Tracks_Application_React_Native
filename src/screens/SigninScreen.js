import React from 'react';
import {View, StyleSheet} from 'react-native';
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage=""
                submitButtonText="Sign In"
                onSubmit={()=>{}}
            />
            <NavLink
                routeName="Signup"
                text="Don't have an account? Sign up instead!"
            />

        </View>
    );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;