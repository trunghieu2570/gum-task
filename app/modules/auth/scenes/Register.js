import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableHighlight, View, StyleSheet, Button } from 'react-native';
import InputContainer from '../components/InputContainer';
import { bindActionCreators } from 'redux';
import { register } from '../auth';

function mapStateToProps(state) {
    return {

    };
}



class Register extends Component {

    constructor() {
        super();
        this.doRegister = this.doRegister.bind(this);
    }

    doRegister() {
        const { register } = this.props;
        register(this.state.email, this.state.password)
    }

    render() {

        return (
            <View style={styles.container}>
                <InputContainer placeholder="Email" onChangeText={email => this.setState({ email })} />
                <InputContainer placeholder="Password" onChangeText={password => this.setState({ password })} />
                <InputContainer placeholder="Retype password" onChangeText={rePassword => this.setState({ rePassword })} />
                <Button title="Register" onPress={this.doRegister} />
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
        backgroundColor: "#fff"
    }
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    register
}, dispatch);

export default connect(null, mapDispatchToProps)(Register);