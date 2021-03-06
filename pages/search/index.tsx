import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import React, { ReactElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import config from '../../assets/config';
import { serverCookie } from '../../assets/helpers';
import routes from '../../assets/routes';
import SearchForm from '../../components/Common/Forms/Search';
import PostsLoader from '../../components/Common/Loader/PostsLoader';
import LoadMore from '../../components/Common/LoadMore';
import Meta from '../../components/Common/Meta';
import Posts from '../../components/Common/Posts';
import { IPostList, IState, IStore } from '../../interfaces';
import { wrapper } from '../../redux/store';
import types from '../../redux/types';
import css from './index.module.css';

const Search = (): ReactElement => {
    const dispatch = useDispatch();
    const { query } = useRouter();

    const init = typeof query?.q === 'object' ? query.q[0] : query.q;
    const [search, setSearch] = useState<string>(init || '');
    const [isPopular, setIsPopular] = useState<boolean>(true);
    const posts = useSelector<IState, IPostList>(state => state.posts.list);

    useEffect(() => {
        setSearch(init || '');
        if (init) setIsPopular(false);
    }, [init]);

    const handleSubmit = (): void => {
        dispatch({
            type: types.GET_POSTS_START,
            payload: { page: 1, limit: config.postPerPage, q: search || null },
        });

        if (search.trim()) {
            setIsPopular(false);
            window.history.replaceState({}, '', routes.search + '?' + queryString.stringify({ q: search }));
        }

        if (!search.trim()) {
            setIsPopular(true);
            window.history.replaceState({}, '', routes.search);
        }
    };

    const handleReset = (): void => {
        setSearch('');
        setIsPopular(true);
        dispatch({
            type: types.GET_POSTS_START,
            payload: { page: 1, limit: config.postPerPage },
        });
        window.history.replaceState({}, '', routes.search);
    };

    const handleMore = (page: number): void => {
        dispatch({ type: types.MORE_POSTS_START, payload: { page, limit: config.postPerPage, q: search || null } });
    };

    return (
        <>
            <Meta title="Blog app | Search posts" />
            <SearchForm value={search} onReset={handleReset} onChange={setSearch} onSubmit={handleSubmit} />
            <div className={css.content}>
                <p className={css.total}>total results: {posts?.data?.count}</p>
                <h2 className={css.title}>{isPopular ? 'Popular posts:' : 'Search result:'}</h2>
                {posts?.data?.posts?.length ? (
                    <>
                        <Posts content={posts.data?.posts} />
                        <LoadMore
                            onSubmit={handleMore}
                            loading={posts.loading}
                            total={posts.data?.total}
                            style={{ marginTop: '4rem' }}
                        >
                            <PostsLoader />
                        </LoadMore>
                    </>
                ) : (
                    <div className={css.empty}>
                        <img src="/img/emoji/exploding.png" alt="" />
                        <p>{`Your search query has broke our mind. We didnt find something related to "${search}"`}</p>
                    </div>
                )}
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async (ctx): Promise<void> => {
        if (serverCookie((ctx as unknown) as GetServerSidePropsContext))
            ctx.store.dispatch({ type: types.GET_USER_INFO_START });

        ctx.store.dispatch({
            type: types.GET_POSTS_START,
            payload: { page: ctx.query?.page || 1, limit: config.postPerPage, q: ctx.query?.q || null },
        });
        ctx.store.dispatch(END);
        await (ctx.store as IStore).sagaTask.toPromise();
    },
);

export default Search;
