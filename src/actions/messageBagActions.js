import { MESSAGE_SUCCESS } from "./messageBagActionsTypes";
import { MESSAGE_ERROR } from "./messageBagActionsTypes";
import { MESSAGE_CLEAR } from "./messageBagActionsTypes";

const success = message => {
    return { type: MESSAGE_SUCCESS, message };
};

const error = message => {
    return { type: MESSAGE_ERROR, message };
};

const clear = () => { 
    return { type: MESSAGE_CLEAR };
};

export const messageBagActions = {
    success,
    error,
    clear
};