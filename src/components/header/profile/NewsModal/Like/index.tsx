import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import router from '../../../../../config/router';
import { INotification } from '../../../../../helpers/interfaces';
import styles from './index.module.css';

const text: { [key: string]: string } = {
    post: ' liked your post:',
    comment: ' liked your comment on this post:',
};

export default ({ user, target, post }: INotification) => (
    <li className={styles.notif}>
        <div className={styles.icon}>
            <FontAwesomeIcon icon={faHeart} />
        </div>

        <div className={styles.wrp}>
            <Link className={styles.user} to={router.user[0](user.id)}>
                {user.name}
            </Link>
            <span>{text[target]}</span>
            <Link
                className={styles.title}
                to={router.post.single[0](post.items.id)}
            >
                {post.items.title}
            </Link>
        </div>
    </li>
);