import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard, ActivityIndicator, View, StyleSheet, Button } from 'react-native';
import InputContainer from '../components/InputContainer';
import { bindActionCreators } from 'redux';
import { register } from '../auth';
import { actionResetErrorMessage } from '../actions';
import Snackbar from 'react-native-snackbar';
import { color } from 'react-native-reanimated';



class Register extends Component {

    constructor() {
        super();
        this.doRegister = this.doRegister.bind(this);
        this.showError = this.showError.bind(this);
    }

    doRegister() {
        Keyboard.dismiss();
        const { register } = this.props;
        register(this.state.email, this.state.password)
    }

    showError(error) {
        Snackbar.show({
            text: `${error}`,
            duration: Snackbar.LENGTH_LONG,
        });
    }



    render() {
        const { error, resetMessage, pending } = this.props;
        if (error != undefined) {
            this.showError(error);
            resetMessage();
        }
        return (
            <View style={styles.container}>
                <InputContainer placeholder="Email" onChangeText={email => this.setState({ email })} />
                <InputContainer placeholder="Password" onChangeText={password => this.setState({ password })} />
                <InputContainer placeholder="Retype password" onChangeText={rePassword => this.setState({ rePassword })} />
                <Button title="Register" disabled={pending} onPress={this.doRegister} />
                {
                    pending &&
                    <View style={styles.pending}>
                        <ActivityIndicator size='large' color="#fff" />
                    </View>
                }

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
        backgroundColor: "#fff",

    },
    pending: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#111",
        opacity: 0.5,
        zIndex: 100
    }
});

function mapStateToProps(state) {
    console.log(state.authReducer.error);
    return {
        error: state.authReducer.error,
        pending: state.authReducer.pending,
    };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    register,
    resetMessage: actionResetErrorMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register);