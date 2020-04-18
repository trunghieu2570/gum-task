import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableHighlight, View, StyleSheet, Button } from 'react-native';
import InputContainer from '../components/InputContainer';

function mapStateToProps(state) {
    return {

    };
}

class Login extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <InputContainer placeholder="Email" />
                <InputContainer placeholder="Password" />
                <Button title="Login" />
                <TouchableHighlight
                    underlayColor="#eee"
                    style={styles.buttonContainer}
                    onPress={() => {
                        console.log("pass");
                        return navigation.navigate('Register');
                    }}
                >
                    <Text>Create account</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd",
    },
    buttonContainer: {
        marginTop: 20,
    }
});

export default connect(
    mapStateToProps,
)(Login);