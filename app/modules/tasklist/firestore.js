import firestore from '@react-native-firebase/firestore';
import { actionGetTask, actionGetTaskSheet } from './actions';


export function getTaskSheet() {
    return (dispatch) => {
        firestore()
            .collection('tasksheets')
            .onSnapshot((QuerySnapshot) => {
                const sheets = [];
                QuerySnapshot.forEach(item => {
                    const { name, members, owner } = item.data();
                    sheets.push({
                        id: item.id,
                        name,
                        members,
                        owner,
                    });
                });
                dispatch(actionGetTaskSheet(sheets));
            }, null);
    }
}

export function getTasksFromSheet(id) {
    return (dispatch) => {
        firestore()
            .collection('tasksheets')
            .doc(id)
            .collection('tasks')
            .onSnapshot((QuerySnapshot) => {
                console.log(id);
                const tasks = [];
                QuerySnapshot.forEach(item => {
                    const {
                        complete,
                        createdAt,
                        createdBy,
                        description,
                        section,
                        summary,
                        tags
                    } = item.data();
                    tasks.push({
                        sheetId: id,
                        id: item.id,
                        complete,
                        createdAt,
                        createdBy,
                        description,
                        section,
                        summary,
                        tags
                    });
                });
                dispatch(actionGetTask(tasks));
            }, null);
    }
}

export function getTask() {
    return (dispatch) => {
        firestore()
            .collection('tasks')
            .onSnapshot((QuerySnapshot) => {
                const tasks = [];
                QuerySnapshot.forEach(item => {
                    const { title, description, complete } = item.data();
                    tasks.push({
                        id: item.id,
                        title,
                        description,
                        complete,
                    });
                });
                dispatch(actionGetTask(tasks));
            }, null);
    }
}

export function updateTask(sheetId, id, complete) {
    return (dispatch) => {
        firestore()
            .collection('tasksheets')
            .doc(sheetId)
            .collection('tasks')
            .doc(id).update({ complete });
    }
}