
export interface PostFetchError {
    message: string
}

export interface PostState {
    isFetching: boolean,
    isError: boolean,
    error: PostFetchError,
    posts: Array<Post>
}

export type PostAction = {
    type: string
    posts: Array<Post>
  }

export type Post = {
    title: string,
    summary: string,
    createdAt?: Date | undefined,
    updatedAt?: Date | undefined,
    user: string,
    content: string,
    slug : string,
}
