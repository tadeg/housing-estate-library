import { ADD_WORKER, REMOVE_WORKER } from "./workersActionsTypes";

export const addWorker = worker => {
    return {
        type: ADD_WORKER,
        worker
    };
};

export const removeWorker = id => {
    return {
        type: REMOVE_WORKER,
        id
    };
};