import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { navigationRef } from '../../../Navigator';
import { bindActionCreators, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { actionTouchTitle } from '../actions';

class TitleBar extends Component {

    doTouchTitle = () => {
        const { touchTitle } = this.props;
        touchTitle();
    }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.doTouchTitle}
            >
                <View style={styles.textWrap}>
                    <Text style={styles.text}>{this.props.children}</Text>
                    <Text style={styles.iconWrap}>^
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    textWrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        display: 'flex',
        alignItems: 'center',
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    iconWrap: {
        marginTop: 2,
        marginLeft: 3
    }
})

function mapDispatchToState (dispatch) {
    return bindActionCreators({
        touchTitle: actionTouchTitle,
    }, dispatch)
}

export default connect(null, mapDispatchToState)(TitleBar);