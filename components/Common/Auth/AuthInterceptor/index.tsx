import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IState } from '../../../../interfaces';
import types from '../../../../redux/types';

const AuthInterceptor = (): null => {
    const dispatch = useDispatch();
    const token = useSelector<IState, string | null>(state => state.auth.token);

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            dispatch({ type: types.GET_USER_INFO_START });
        } else {
            delete axios.defaults.headers.common.Authorization;
        }
    }, [token]);

    return null;
};

export default AuthInterceptor;
