import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Keyboard, Text, ActivityIndicator, View, StyleSheet, TouchableOpacity } from 'react-native';
import InputContainer from '../components/InputContainer';
import { bindActionCreators } from 'redux';
import { register } from '../auth';
import { actionResetErrorMessage, actionValidateInput } from '../actions';
import Snackbar from 'react-native-snackbar';
import { validateRegister } from '../utils/validateRegister';
import SubmitButton from '../components/SubmitButton';


const defaultState = {
    email: null,
    password: null,
    confirmPassword: null
}

class Register extends Component {

    constructor() {
        super();
        this.state = defaultState;
        this.doRegister = this.doRegister.bind(this);
        this.showError = this.showError.bind(this);
        this.getValidate = this.getValidate.bind(this);
    }

    doRegister() {
        Keyboard.dismiss();
        const { register } = this.props;
        register(this.state.email, this.state.password)
    }


    getValidate(type, validate) {
        if (typeof (validate) == "object"
            && typeof (validate[type]) == "object"
            && this.state[type] != null
        )
            return validate[type][0];
        else null;
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

        const { email, password, confirmPassword } = this.state;

        const validate = validateRegister({
            email,
            password,
            confirmPassword
        });
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <InputContainer validate={this.getValidate('email', validate)} placeholder="Email" onChangeText={email => this.setState({ email })} />
                    <InputContainer validate={this.getValidate('password', validate)} placeholder="Password" onChangeText={password => this.setState({ password })} />
                    <InputContainer validate={this.getValidate('confirmPassword', validate)} placeholder="Confirm password" onChangeText={confirmPassword => this.setState({ confirmPassword })} />
                    {
                        <SubmitButton
                            disabled={pending || validate != null}
                            style={styles.button}
                            onPress={this.doRegister}
                        >
                            <Text>Register</Text>
                        </SubmitButton>
                    }

                </View>
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
        backgroundColor: "#eef",
    },
    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 20
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
    },
    button: {
        marginTop: 20,
        backgroundColor: '#d00',
        padding: 10,
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