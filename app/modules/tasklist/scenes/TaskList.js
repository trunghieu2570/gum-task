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
import { actionTouchTitle } from '../actions';
import { getTask, updateTask, getTaskSheet, getTasksFromSheet } from '../firestore'; //Import your actions

class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            check: false,
        };

        this.renderItem = this.renderTaskItem.bind(this);
        this.renderSheetItem = this.renderSheetItem.bind(this);
        this.renderTaskItem = this.renderTaskItem.bind(this);
        this.onSheetPress = this.onSheetPress.bind(this);
        this.renderTitle = this.renderTitle.bind(this);
    }

    componentDidMount() {
        //this.props.getTask(); //call our action
        this.props.getTaskSheet();
    }

    onSheetPress(sheetId) {
        this.props.toggleShowSheets();
        this.props.getTasksFromSheet(sheetId);
    }

    render() {
        if (this.props.showTaskSheet) {
            return (
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
                    <FlatList
                        ref='listRef2'
                        data={this.props.sheets}
                        renderItem={this.renderSheetItem}
                        keyExtractor={(item, index) => index} />
                </View>
            );
        }
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
                        renderItem={this.renderTaskItem}
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

    renderTaskItem({ item, index }) {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.props.updateTask(item.id, !item.complete)}>
                <View style={styles.row}>
                    <CheckBox value={item.complete}
                        onValueChange={() => this.props.updateTask(item.sheetId, item.id, !item.complete)}
                    />
                    {this.renderTitle(item.title ?? item.summary, item.complete)}
                </View>
            </TouchableOpacity>

        )
    }

    renderSheetItem({ item, index }) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.onSheetPress(item.id)}
            >
                <View style={styles.row}>
                    <Text style={styles.titleIncomplete}>
                        {item.name}
                    </Text>
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
        tasks: state.taskReducer.tasks,
        sheets: state.taskReducer.sheets,
        showTaskSheet: state.taskReducer.showTaskSheet
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
const mapDispatchToProps = (dispatch) => bindActionCreators({
    getTask,
    updateTask,
    getTaskSheet,
    getTasksFromSheet,
    toggleShowSheets: actionTouchTitle,
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