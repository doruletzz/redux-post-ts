import React from 'react'
import { useSelector } from 'react-redux'
import { usePostDispatch, usePostSelector } from '../redux/app/hooks';

import { Container, Button, Card, Row, Col} from 'react-bootstrap'


import { receivePosts } from '../redux/blog/postsUtils';
import { fetchPosts } from '../redux/blog/postsSlice';

const PostCardList = ({ count }) => {
    
    const posts = usePostSelector(state => state.posts.posts);

    const dispatch = usePostDispatch();



    return (
        <>
            <Container fluid className="pt-2">
                {posts.map(({ title, summary, createdAt, slug }, idx) => (
                    <Row key={idx} className="mt-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Subtitle>{createdAt.toString()}</Card.Subtitle>
                                <Card.Text>{summary}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                ))}

                <Button onClick={() => dispatch(fetchPosts(count))} >fetch 2</Button>
            </Container>

        </>
    )
}

export default PostCardList