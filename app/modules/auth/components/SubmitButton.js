import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';

class SubmitButton extends Component {
    render() {
        const { disabled, onPress, children, style } = this.props;
        if (disabled) {
            return (
                <TouchableOpacity style={[styles.disabled, style]} disabled onPress={onPress} >
                    {children}
                </TouchableOpacity>
            );
        } else
            return (
                <TouchableOpacity style={[styles.enabled, style]} onPress={onPress} >
                    {children}
                </TouchableOpacity>
            );
    }
}

const styles = StyleSheet.create({
    enabled: {
        backgroundColor: '#ddd',
    },
    disabled: {
        backgroundColor: '#ddd',
        opacity: 0.2,
    }
});

SubmitButton.defaultProps = {
    disabled: false,
}

SubmitButton.propTypes = {
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    style: PropTypes.object,
};

export default SubmitButton;