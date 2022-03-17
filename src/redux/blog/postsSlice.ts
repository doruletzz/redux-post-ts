import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {Post, PostAction, PostFetchError, PostState} from './types/post'

import {receivePosts} from './postsUtils'
import { AppThunk } from '../app/store';

export type DispatchType = (args: PostAction) => PostAction

const initialState : PostState = {
    isFetching: false,
    isError: false,
    error: {message: ""},
    posts: [] ,
} ;


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsFetching: (state) => {
            state.isFetching = true;
        },

        postsReceived: (state, action: PayloadAction<Array<Post>>) => {
            state.posts = state.posts.concat(action.payload)
            state.isFetching = false;
        },

        postsFailed: (state, action: PayloadAction<PostFetchError>) => {
            state.error = action.payload;
            state.isFetching = false;
        }

    }
})

const POST_COUNT = 10;

const { actions, reducer } = postSlice

export const { postsReceived,  postsFetching, postsFailed } = actions

export default reducer


// Actions
export const fetchPosts = (count : number) : AppThunk => {
    return async (dispatch)  => {
        try{
            dispatch(postsFetching());
            const posts = receivePosts(count);
            dispatch(postsReceived(posts))
        } catch (error) {
            dispatch(postsFailed(error));
        }
    }
    
}

