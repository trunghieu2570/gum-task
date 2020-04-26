import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Text, View, StyleSheet } from 'react-native';

class InputContainer extends Component {
    render() {
        const { placeholder, onChangeText, onEndEditing, validate } = this.props;
        return (
            <View style={styles.inputContainer}>
                <View style={styles.inputBox}>
                    <TextInput onEndEditing={onEndEditing} autoCorrect={false} placeholder={placeholder} onChangeText={onChangeText} />
                </View>
                {
                    validate != null &&
                    <Text style={styles.validateMessage}>{validate}</Text>
                }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        marginTop: 20,

    },
    inputBox: {
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#000",
    },
    validateMessage: {
        color: '#f00',
        alignSelf: "flex-end"
    },
});

InputContainer.propTypes = {
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    onEndEditing: PropTypes.func,
    validate: PropTypes.any,
};

export default InputContainer;