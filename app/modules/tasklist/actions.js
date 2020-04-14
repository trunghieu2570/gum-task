import { GET_TASKS } from './actionTypes';

export function actionGetTask(tasks) {
    return {
        type: GET_TASKS,
        tasks,
    }
}