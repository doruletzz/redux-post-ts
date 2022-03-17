import faker from '@faker-js/faker';
import { Dispatch } from '@reduxjs/toolkit';

import { Post, PostAction, PostFetchError } from './types/post'

const {
    date: { past },
    lorem: { paragraph, paragraphs, slug, words },
    random: { uuid },
} = faker;

type OptionsType = {
    id?: number,
    slug?: string
}

const POST_COUNT = 10;

export const receivePosts = (count: number = 1, options: OptionsType = {}): Array<Post> => {

    const posts = Array<Post>(count)
        .fill({} as Post)
        .map(() => {
            const summary = paragraph();
            return {
                id: options.id || uuid().split('-')[0],
                title: words(),
                summary,
                content: `${summary}\n${paragraphs()}`,
                date: past(),
                createdAt: past(),
                updatedAt: past(),
                slug: options.slug || slug(),
                user: words()
            } as Post;
        });

    if (posts.length !== count)
        throw { message: "Fetch Unsuccesful" }

    return posts;


}