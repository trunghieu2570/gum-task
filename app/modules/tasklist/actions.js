import { GET_TASKS, TOGGLE_COMPLETE_TRUE, GET_TASKS_SHEET, TITLE_BAR_TOUCH_TITLE } from './actionTypes';

export function actionTouchTitle() {
    return {
        type: TITLE_BAR_TOUCH_TITLE,
    }
}

export function actionGetTask(tasks) {
    console.log(tasks);
    return {
        type: GET_TASKS,
        tasks,
    }
}

export function actionGetTaskSheet(sheets) {
    return {
        type: GET_TASKS_SHEET,
        sheets,
    }
}

export function actionToggleComplete(task_id, complete) {
    return {
        type: TOGGLE_COMPLETE_TRUE,
        task_id,
        complete,
    }
}