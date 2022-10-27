import { ADD_WORKER, REMOVE_WORKER } from "../actions/workersActionsTypes";

let workersCounter = 0;

const initialState = {
    workers: []
};

const workersReducer = (state = initialState, action) => {
    if (action.type === ADD_WORKER) {
        let data = {
            id: ++workersCounter,
            ...action.worker
        };
        return {
            workers: [...state.workers, data]
        };
    } else if (action.type === REMOVE_WORKER) {
        return {
            ...state,
            workers: state.workers.filter(worker => worker.id !== action.id)
        };
    }


    return state;
}

export default workersReducer;