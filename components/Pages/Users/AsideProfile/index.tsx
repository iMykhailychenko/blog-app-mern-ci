import { faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import config from '../../../../assets/config';
import routes from '../../../../assets/routes';
import { IAuth, IState, IUser } from '../../../../interfaces';
import types from '../../../../redux/types';
import Likes from '../../../Common/Likes';
import css from './index.module.css';

const AsideProfile = (): ReactElement | null => {
    const { query } = useRouter();
    const dispatch = useDispatch();

    const auth = useSelector<IState, IAuth | null>(state => state.auth);
    const profile = useSelector<IState, IUser | null>(state => state.profile);

    const handleSubscribe = (): void => {
        dispatch({ type: types.FOLLOW_USER_START, payload: query.userId });
    };

    return profile ? (
        <div className={css.inner}>
            {profile.avatar ? (
                <img className={css.avatar} src={config.img(profile.avatar)} alt="" />
            ) : (
                <p className={css.avatar} style={{ color: config.colors[profile.name[0]] || 'var(--blue-01)' }}>
                    {profile.name[0] + profile.surname[0]}
                </p>
            )}

            <p className={css.text}>{`${profile.name} ${profile.surname}`}</p>
            <p className={clsx(css.text, css.email)}>{profile.email}</p>

            <div className={css.likes}>
                <Likes
                    targetId={profile._id}
                    typeLike={types.LIKE_PROFILE_START}
                    typeDislike={types.DISLIKE_PROFILE_START}
                    feedback={profile.feedback}
                />
            </div>

            {auth?.user ? (
                auth?.user?._id === profile._id ? (
                    <Link href={routes.settings[0](auth?.user?._id)}>
                        <a className={css.add}>
                            <button className={css.addBtn} type="button">
                                <FontAwesomeIcon icon={faKeyboard} />
                            </button>
                            <p className={clsx(css.text, css.addText)}>Edit profile</p>
                        </a>
                    </Link>
                ) : (
                    <button className={css.add} type="button" onClick={handleSubscribe}>
                        <div className="add" />
                        <p className={clsx(css.text, css.addText)}>Subscribe</p>
                    </button>
                )
            ) : null}
        </div>
    ) : null;
};

export default AsideProfile;
