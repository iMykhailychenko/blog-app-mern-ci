import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

import { modal } from '../../Modal';
import css from './index.module.css';

interface IProps {
    text: string;
}

const NotificationError = ({ text }: IProps): ReactElement => {
    return (
        <div className={css.modal}>
            <button className={css.close} type="button" onClick={modal.close}>
                <FontAwesomeIcon icon={faTimes} />
            </button>

            <img src="/img/emoji/error.png" alt="" />

            <h4>Opsss</h4>
            <p>{text}</p>
        </div>
    );
};

export default NotificationError;
