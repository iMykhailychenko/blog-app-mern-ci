import clsx from 'clsx';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../assets/config';
import { formatDate, parseCookie } from '../../assets/helpers';
import routes from '../../assets/routes';
import useAuth from '../../components/Common/Auth/AuthContext';
import Likes from '../../components/Common/Likes';
import Meta from '../../components/Common/Meta';
import ProfileBig from '../../components/Common/Profile/ProfileBig';
import Comments from '../../components/Pages/SinglePost/Comments';
import Socials from '../../components/Pages/SinglePost/Socials';
import { IPost, IState, IStore, IUser } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const SinglePost = (): ReactElement => {
    const router = useRouter();
    const dispatch = useDispatch();
    const auth = useAuth();

    const post = useSelector<IState, IPost>(state => state.posts.single.data);

    const handleDelete = (): void => {
        dispatch({
            type: types.DELETE_POST_START,
            payload: post._id,
        });
        router.replace(routes.home);
    };

    return (
        <>
            <Meta title={post?.title} description={post?.desc} keywords={post?.tags?.join(' ')} icon={post?.banner} />
            {post && (
                <div className={css.container}>
                    <div className={css.content}>
                        {auth?.user?._id === post?.user?._id && (
                            <>
                                <div key="subtext1" className={css.subtext}>
                                    <Link href={routes.posts.edit[0](post._id)}>
                                        <a className={css.manage}>Edit post</a>
                                    </Link>
                                    <button className={css.manage} type="button" onClick={handleDelete}>
                                        Delete post
                                    </button>
                                </div>
                            </>
                        )}

                        <div className={css.likesHead}>
                            <div>
                                <p key="subtext2" className={css.subtext}>
                                    Share this post in social media:
                                </p>
                                <Socials key="socials1" title={post.title} />
                            </div>

                            <div>
                                <p key="subtext3" className={css.subtext}>
                                    User feedbacks:
                                </p>
                                <div className={css.likes}>
                                    <Likes
                                        key="likes1"
                                        targetId={post._id}
                                        typeLike={types.LIKE_POST_START}
                                        typeDislike={types.DISLIKE_POST_START}
                                        like={post.feedback.like}
                                        dislike={post.feedback.dislike}
                                        view={post.feedback.view}
                                    />
                                </div>
                            </div>
                        </div>

                        <p className={clsx(css.subtext, css.flex)}>
                            <span>{`Publication date: ${formatDate(post.date)} `}</span>
                            <span>{`Edited: ${formatDate(post.edited)}`}</span>
                        </p>

                        <h1 className={css.title}>{post.title}</h1>

                        <div className={css.tags}>
                            {post?.tags?.map(tag => (
                                <Link href={routes.posts.tag[0](tag)} key={tag}>
                                    <a className={css.tag}>{`#${tag}`}</a>
                                </Link>
                            ))}
                        </div>

                        {post.banner && <img className={css.banner} src={config.img + post.banner} alt={post.title} />}

                        <div className="ready quill">
                            <div className="ql-container ql-post-container ql-snow">
                                <div className="ql-editor ql-post" dangerouslySetInnerHTML={{ __html: post.content }} />
                            </div>
                        </div>

                        <div key="subtext4" className={css.subtext}>
                            <h4 className={css.author}>Post author:</h4>
                            <ProfileBig user={post?.user} />
                        </div>

                        {auth?.user?._id === post?.user?._id && (
                            <>
                                <div key="subtext5" className={css.subtext}>
                                    <Link href={routes.posts.edit[0](post._id)}>
                                        <a className={css.manage}>Edit post</a>
                                    </Link>
                                    <button className={css.manage} type="button" onClick={handleDelete}>
                                        Delete post
                                    </button>
                                </div>
                            </>
                        )}

                        <p key="subtext6" className={css.subtext}>
                            Share this post in social media:
                        </p>
                        <div className={css.likes}>
                            <Socials key="socials2" title={post.title} />
                        </div>

                        <p key="subtext7" className={css.subtext}>
                            User feedbacks:
                        </p>
                        <div className={css.likes}>
                            <Likes
                                key="likes2"
                                targetId={post._id}
                                typeLike={types.LIKE_POST_START}
                                typeDislike={types.DISLIKE_POST_START}
                                like={post.feedback.like}
                                dislike={post.feedback.dislike}
                                view={post.feedback.view}
                            />
                        </div>

                        <Comments />
                    </div>
                </div>
            )}
        </>
    );
};

interface ICookiesData {
    token: string | null;
    user: IUser | null;
}

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, ...ctx }: GetServerSidePropsContext & { store: IStore }): Promise<void> => {
        if (!ctx.query?.postId) return null;

        store.dispatch({
            type: types.GET_COMMENTS_START,
            payload: ctx.query.postId,
        });

        store.dispatch({
            type: types.GET_SINGLE_POST_START,
            payload: ctx.query.postId,
            user: parseCookie<ICookiesData>(ctx.req.headers.cookie)?.user?._id,
        });
        store.dispatch(END);
        await store.sagaTask.toPromise();
    },
);

export default SinglePost;
