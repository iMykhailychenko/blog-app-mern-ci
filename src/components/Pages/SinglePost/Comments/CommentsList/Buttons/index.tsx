import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import EditModal from '../../EditModal';
import CommentModal from '../../CommentModal';
import Confirm from '../../../../../Common/Confirm';
import Likes from '../../../../../Common/Likes';
import modal from '../../../../../Common/Modal/Modal.operations';
import { getAuth } from '../../../../../../redux/selectors';
import { IComment } from '../../../../../../interfaces';
import styles from '../index.module.css';

const Buttons = (comment: IComment): ReactElement => {
    const { isAuth } = useSelector(getAuth);

    return (
        <div className={styles.likes}>
            <Likes like={comment.like} dislike={comment.dislike} click />

            {isAuth && (
                <>
                    <button
                        className={styles.link}
                        onClick={(): void => {
                            modal({
                                node: <CommentModal user={comment.user} />,
                                size: 'm',
                            });
                        }}
                    >
                        Answer
                    </button>

                    <button
                        className={styles.link}
                        onClick={(): void => {
                            modal({
                                node: <EditModal text={comment.text} />,
                                size: 'm',
                            });
                        }}
                    >
                        Edit
                    </button>

                    <button
                        className={styles.link}
                        onClick={(): void => {
                            modal({
                                node: (
                                    <Confirm
                                        title="Attention! if you delete this comment you will not be able to restore it. Confirm your action"
                                        onSubmit={() => {
                                            console.log('asdsadasdas');
                                        }}
                                    />
                                ),
                            });
                        }}
                    >
                        Delete
                    </button>
                </>
            )}
        </div>
    );
};

export default Buttons;
