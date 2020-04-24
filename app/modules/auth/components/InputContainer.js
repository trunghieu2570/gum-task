import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, StyleSheet } from 'react-native';

class InputContainer extends Component {
    render() {
        const { placeholder, onChangeText } = this.props;
        return (
            <View style={styles.inputContainer}>
                <TextInput autoCorrect={false} placeholder={placeholder} onChangeText={onChangeText} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1,
        width: 250,
        borderColor: "#000",
        marginBottom: 20,
        backgroundColor: "#fff",
    }
});

InputContainer.propTypes = {
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
};

export default InputContainer;