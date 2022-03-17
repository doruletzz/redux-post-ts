import React from 'react'
import { useSelector } from 'react-redux'
import { usePostDispatch, usePostSelector } from '../redux/app/hooks';

import { Container, Button, Card, Row, Col } from 'react-bootstrap'


import { fetchPosts } from '../redux/blog/slice';
import { Link } from 'react-router-dom';

type PostCardListParamType = {
    count: number;
}

const PostCardList = ({ count }: PostCardListParamType) => {

    const data = usePostSelector(state => state.posts);

    const dispatch = usePostDispatch();


    return (
        <>
            <Container fluid className="pt-2">
                {data.posts.map(({ title, summary, createdAt, slug }, idx) => (
                    <Row key={idx} className="mt-4">
                        <Link to={`/blog/${slug}`}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Subtitle>{createdAt.toString()}</Card.Subtitle>
                                    <Card.Text>{summary}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Row>
                ))}

                <Button onClick={() => dispatch(fetchPosts(count))} >fetch 2</Button>
            </Container>

        </>
    )
}

export default PostCardList