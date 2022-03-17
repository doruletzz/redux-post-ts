import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { usePostDispatch, usePostSelector } from '../redux/app/hooks';
import { find } from 'lodash';
import { useParams } from "react-router";
import { fetchPost } from '../redux/blog/slice';
import { Post } from '../redux/blog/types/post';


const PostContainer = () => {
    const dispatch = usePostDispatch();
    const slug = useParams();
    const { posts, isFetching, isError, error } = usePostSelector(state => state.posts);

    const post = find(posts, {slug});

    useEffect(() => {
        if (!post){
            dispatch(fetchPost(slug));
            console.log(post, posts, slug);
        }
    }, []);

    return (
        <div>
            {post ?  (
                <>
                <h1>{post.title}</h1>
                <h4>{post.content}</h4>
                </>
            ) : (<h4>it's fetching</h4>)
            }
        </div>
    )
}


export default PostContainer