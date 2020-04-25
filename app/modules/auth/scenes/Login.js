import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, TouchableHighlight, Keyboard, View, StyleSheet, ActivityIndicator } from 'react-native';
import InputContainer from '../components/InputContainer';
import SubmitButton from '../components/SubmitButton';
import { validateLogin } from '../utils/validateLogin';
import { actionResetErrorMessage } from '../actions';
import { login } from '../auth';

const defaultState = {
    email: null,
    password: null,
}


class Login extends Component {
    constructor() {
        super();
        this.state = defaultState;
        this.doLogin = this.doLogin.bind(this);
        this.showError = this.showError.bind(this);
        this.getValidate = this.getValidate.bind(this);
    }

    doLogin() {
        Keyboard.dismiss();
        const { login } = this.props;
        login(this.state.email, this.state.password)
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
        const { navigation } = this.props;
        const { error, resetMessage, pending } = this.props;

        if (error != undefined) {
            this.showError(error);
            resetMessage();
        }

        const { email, password } = this.state;

        const validate = validateLogin({
            email,
            password,
        });

        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <InputContainer placeholder="Email" onChangeText={email => this.setState({ email })} />
                    <InputContainer placeholder="Password" onChangeText={password => this.setState({ password })} />
                    <SubmitButton
                        disabled={pending || validate != null}
                        style={styles.button}
                        onPress={this.doLogin}
                    >
                        <Text style={{color: '#fff'}}>Login</Text>
                    </SubmitButton>
                    <TouchableHighlight
                        underlayColor="#eee"
                        style={styles.buttonContainer}
                        onPress={() => {
                            return navigation.navigate('Register');
                        }}
                    >
                        <Text>Create account</Text>
                    </TouchableHighlight>
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
    login,
    resetMessage: actionResetErrorMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);