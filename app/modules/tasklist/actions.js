import { GET_TASKS, TOGGLE_COMPLETE_TRUE } from './actionTypes';

export function actionGetTask(tasks) {
    return {
        type: GET_TASKS,
        tasks,
    }
}

export function actionToggleComplete(task_id, complete) {
    return {
        type: TOGGLE_COMPLETE_TRUE,
        task_id,
        complete,
    }
}