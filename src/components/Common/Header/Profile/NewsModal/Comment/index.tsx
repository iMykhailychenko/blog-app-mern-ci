import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { INotification } from '../../../../../../interfaces';

import styles from './index.module.css';
import routes from '../../../../../../routes';

const text: { [key: string]: string } = {
    post: ' leave the comment on your post:',
    comment: ' replied to your comment, on this post:',
};

const Comment = ({ user, target, post }: INotification): ReactElement => (
    <li className={styles.notif}>
        <div className={styles.icon}>
            <FontAwesomeIcon icon={faCommentAlt} />
        </div>

        <div className={styles.wrp}>
            <Link className={styles.user} to={routes.User.path[0](user.id)}>
                {user.name}
            </Link>
            <span>{text[target]}</span>
            <Link className={styles.title} to={routes.Post.Single.path[0](post.items.id)}>
                {post.items.title}
            </Link>
        </div>
    </li>
);

export default Comment;
