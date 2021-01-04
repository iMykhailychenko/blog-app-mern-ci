const types = {
    /**
     * AUTH
     */
    // LOGIN
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    // SIGNUP
    SIGNUP_START: 'SIGNUP_START',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_ERROR: 'SIGNUP_ERROR',
    // LOGOUT
    LOGOUT_START: 'LOGOUT_START',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_ERROR: 'LOGOUT_ERROR',
    // GET_USER_INFO
    GET_USER_INFO_START: 'GET_USER_INFO_START',
    GET_USER_INFO_SUCCESS: 'GET_USER_INFO_SUCCESS',
    GET_USER_INFO_ERROR: 'GET_USER_INFO_ERROR',

    /**
     * POSTS
     */
    // GET_POSTS
    GET_POSTS_START: 'GET_POSTS_START',
    GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
    GET_POSTS_ERROR: 'GET_POSTS_ERROR',
    // WRITE NEW POST
    NEW_POST_TITLE: 'NEW_POST_TITLE',
    NEW_POST_TAGS: 'NEW_POST_TAGS',
    NEW_POST_BANNER: 'NEW_POST_BANNER',
    NEW_POST_DESC: 'NEW_POST_DESC',
    NEW_POST_CONTENT: 'NEW_POST_CONTENT',
    NEW_POST_MEDIA: 'NEW_POST_MEDIA',
    NEW_POST_EDIT: 'NEW_POST_EDIT',
    // PUBLISH NEW POST
    PUBLISH_POSTS_START: 'PUBLISH_POSTS_START',
    PUBLISH_POSTS_SUCCESS: 'PUBLISH_POSTS_SUCCESS',
    PUBLISH_POSTS_ERROR: 'PUBLISH_POSTS_ERROR',
    // BANNER OFR NEW POST
    BANNER_POSTS_START: 'BANNER_POSTS_START',
    BANNER_POSTS_SUCCESS: 'BANNER_POSTS_SUCCESS',
    BANNER_POSTS_ERROR: 'BANNER_POSTS_ERROR',
    // SINGLE POST
    GET_SINGLE_POST_START: 'GET_SINGLE_POST_START',
    GET_SINGLE_POST_SUCCESS: 'GET_SINGLE_POST_SUCCESS',
    GET_SINGLE_POST_ERROR: 'GET_SINGLE_POST_ERROR',
    // DELETE_POST
    DELETE_POST_START: 'DELETE_POST_START',
    DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
    DELETE_POST_ERROR: 'DELETE_POST_ERROR',
    // GET_EDIT_POST
    GET_EDIT_POST_START: 'GET_EDIT_POST_START',
    GET_EDIT_POST_SUCCESS: 'GET_EDIT_POST_SUCCESS',
    GET_EDIT_POST_ERROR: 'GET_EDIT_POST_ERROR',
    // PUBLISH_EDIT_POST
    UPDATE_POST_START: 'UPDATE_POST_START',
    UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
    UPDATE_POST_ERROR: 'UPDATE_POST_ERROR',
    // RESET_POST_FORM
    RESET_POST_FORM: 'RESET_POST_FORM',

    /**
     * COMMENT
     */
    // GET_COMMENTS
    GET_COMMENTS_START: 'GET_COMMENTS_START',
    GET_COMMENTS_SUCCESS: 'GET_COMMENTS_SUCCESS',
    GET_COMMENTS_ERROR: 'GET_COMMENTS_ERROR',
    // POST_COMMENT
    POST_COMMENT_START: 'POST_COMMENT_START',
    POST_COMMENT_SUCCESS: 'POST_COMMENT_SUCCESS',
    POST_COMMENT_ERROR: 'POST_COMMENT_ERROR',
    // POST_ANSWER
    POST_ANSWER_START: 'POST_ANSWER_START',
    POST_ANSWER_SUCCESS: 'POST_ANSWER_SUCCESS',
    POST_ANSWER_ERROR: 'POST_ANSWER_ERROR',
    // DELETE_COMMENT
    DELETE_COMMENT_START: 'DELETE_COMMENT_START',
    DELETE_COMMENT_SUCCESS: 'DELETE_COMMENT_SUCCESS',
    DELETE_COMMENT_ERROR: 'DELETE_COMMENT_ERROR',
    // EDIT_COMMENT
    EDIT_COMMENT_START: 'EDIT_COMMENT_START',
    EDIT_COMMENT_SUCCESS: 'EDIT_COMMENT_SUCCESS',
    EDIT_COMMENT_ERROR: 'EDIT_COMMENT_ERROR',
    // POST_COMMENT_LIKE
    POST_COMMENT_LIKE_START: 'POST_COMMENT_LIKE_START',
    POST_COMMENT_LIKE_SUCCESS: 'POST_COMMENT_LIKE_SUCCESS',
    POST_COMMENT_LIKE_ERROR: 'POST_COMMENT_LIKE_ERROR',
    // POST_COMMENT_DISLIKE
    POST_COMMENT_DISLIKE_START: 'POST_COMMENT_DISLIKE_START',
    POST_COMMENT_DISLIKE_SUCCESS: 'POST_COMMENT_DISLIKE_SUCCESS',
    POST_COMMENT_DISLIKE_ERROR: 'POST_COMMENT_DISLIKE_ERROR',

    /**
     * FEEDBACK
     */
    // LIKE_POST
    LIKE_POST_START: 'LIKE_POST_START',
    LIKE_POST_SUCCESS: 'LIKE_POST_SUCCESS',
    LIKE_POST_ERROR: 'LIKE_POST_ERROR',
    // DISLIKE_POST
    DISLIKE_POST_START: 'DISLIKE_POST_START',
    DISLIKE_POST_SUCCESS: 'DISLIKE_POST_SUCCESS',
    DISLIKE_POST_ERROR: 'DISLIKE_POST_ERROR',
    // LIKE_POPULAR_POSTS
    LIKE_POPULAR_POSTS_START: 'LIKE_POPULAR_POSTS_START',
    LIKE_POPULAR_POSTS_SUCCESS: 'LIKE_POPULAR_POSTS_SUCCESS',
    LIKE_POPULAR_POSTS_ERROR: 'LIKE_POPULAR_POSTS_ERROR',
    // DISLIKE_POPULAR_POSTS
    DISLIKE_POPULAR_POSTS_START: 'DISLIKE_POPULAR_POSTS_START',
    DISLIKE_POPULAR_POSTS_SUCCESS: 'DISLIKE_POPULAR_POSTS_SUCCESS',
    DISLIKE_POPULAR_POSTS_ERROR: 'DISLIKE_POPULAR_POSTS_ERROR',
};

export default types;