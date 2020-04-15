'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,
    CheckBox,
    TouchableOpacity,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTask, updateTask } from '../firestore'; //Import your actions

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            check: false,
        };

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.getTask(); //call our action
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true} />
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20 }}>
                    <FlatList
                        ref='listRef'
                        data={this.props.tasks}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index} />
                </View>
            );
        }
    }

    renderTitle(text, complete) {
        if (complete)
            return (
                <Text style={styles.titleComplete}>
                    {text}
                </Text>
            );
        else
            return (
                <Text style={styles.titleIncomplete}>
                    {text}
                </Text>
            );
    }

    renderItem({ item, index }) {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.updateTask(item.id, !item.complete)}>
                <View style={styles.row}>
                    <CheckBox value={item.complete}
                        onValueChange={() => this.props.updateTask(item.id, !item.complete)}
                    />
                    {this.renderTitle(item.title, item.complete)}
                </View>
            </TouchableOpacity>

        )
    }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.taskReducer.loading,
        tasks: state.taskReducer.tasks
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getTask,
    updateTask,
}, dispatch);

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    titleIncomplete: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "600"
    },

    titleComplete: {
        marginTop: 5,
        fontSize: 15,
        fontWeight: "600",
        textDecorationLine: "line-through",
    },

    description: {
        marginTop: 5,
        fontSize: 14,
    }
});