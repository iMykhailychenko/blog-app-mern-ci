import * as types from './Modal.types';

export const open = (state: types.IModal): types.IAction => ({
    type: types.OPEN_MODAL,
    payload: state,
});

export const close = (): types.IAction => ({
    type: types.CLOSE_MODAL,
    payload: { node: null },
});
