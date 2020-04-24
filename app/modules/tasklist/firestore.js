import firestore from '@react-native-firebase/firestore';
import { actionGetTask } from './actions';


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

export function updateTask(id, complete) {
    return (dispatch) => {
        firestore()
            .collection('tasks')
            .doc(id).update({ complete });
    }
}