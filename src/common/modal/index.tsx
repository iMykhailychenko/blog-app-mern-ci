import React, { MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getModal } from '../../redux/selectors';
import styles from './index.module.css';
import { close } from './Modal.action';

const width: { [key: string]: string } = {
    s: '30%',
    m: '45%',
    l: '80%',
};

export default () => {
    const dispatch = useDispatch();
    const modal = useSelector(getModal);

    const handleClick = (event: MouseEvent<HTMLDivElement>): void => {
        event.target === event.currentTarget && dispatch(close());
    };

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent): void => {
            modal.node && event.code === 'Escape' && dispatch(close());
        };

        window.addEventListener('keydown', handleKeydown);

        return (): void => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [modal, dispatch]);

    return modal.node ? (
        <div className={styles.wrp} onClick={handleClick}>
            <div
                className={styles.content}
                style={{ width: width[modal.size ? modal.size : 's'] }}
            >
                <button
                    className={styles.close}
                    onClick={(): void => {
                        dispatch(close());
                    }}
                />

                <div className={styles.inner}>{modal.node}</div>
            </div>
        </div>
    ) : null;
};