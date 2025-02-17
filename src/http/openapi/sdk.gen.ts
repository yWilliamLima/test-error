// This file is auto-generated by @hey-api/openapi-ts

import type { Options as ClientOptions, TDataShape, Client } from '@hey-api/client-next';
import type { GetApiV1ActivitiesData, GetApiV1ActivitiesResponse, PostApiV1ActivitiesData, PostApiV1ActivitiesResponse, DeleteApiV1ActivitiesByIdData, GetApiV1ActivitiesByIdData, GetApiV1ActivitiesByIdResponse, PutApiV1ActivitiesByIdData, PutApiV1ActivitiesByIdResponse, GetApiV1AuthorsData, GetApiV1AuthorsResponse, PostApiV1AuthorsData, PostApiV1AuthorsResponse, GetApiV1AuthorsAuthorsBooksByIdBookData, GetApiV1AuthorsAuthorsBooksByIdBookResponse, DeleteApiV1AuthorsByIdData, GetApiV1AuthorsByIdData, GetApiV1AuthorsByIdResponse, PutApiV1AuthorsByIdData, PutApiV1AuthorsByIdResponse, GetApiV1BooksData, GetApiV1BooksResponse, PostApiV1BooksData, DeleteApiV1BooksByIdData, GetApiV1BooksByIdData, GetApiV1BooksByIdResponse, PutApiV1BooksByIdData, GetApiV1CoverPhotosData, GetApiV1CoverPhotosResponse, PostApiV1CoverPhotosData, PostApiV1CoverPhotosResponse, GetApiV1CoverPhotosBooksCoversByIdBookData, GetApiV1CoverPhotosBooksCoversByIdBookResponse, DeleteApiV1CoverPhotosByIdData, GetApiV1CoverPhotosByIdData, GetApiV1CoverPhotosByIdResponse, PutApiV1CoverPhotosByIdData, PutApiV1CoverPhotosByIdResponse, GetApiV1UsersData, GetApiV1UsersResponse, PostApiV1UsersData, DeleteApiV1UsersByIdData, GetApiV1UsersByIdData, PutApiV1UsersByIdData } from './types.gen';
import { client as _heyApiClient } from './client.gen';

export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};

export const getApiV1Activities = <ThrowOnError extends boolean = false>(options?: Options<GetApiV1ActivitiesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetApiV1ActivitiesResponse, unknown, ThrowOnError>({
        url: '/api/v1/Activities',
        ...options
    });
};

export const postApiV1Activities = <ThrowOnError extends boolean = false>(options?: Options<PostApiV1ActivitiesData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostApiV1ActivitiesResponse, unknown, ThrowOnError>({
        url: '/api/v1/Activities',
        ...options,
        headers: {
            'Content-Type': 'application/json; v=1.0',
            ...options?.headers
        }
    });
};

export const deleteApiV1ActivitiesById = <ThrowOnError extends boolean = false>(options: Options<DeleteApiV1ActivitiesByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v1/Activities/{id}',
        ...options
    });
};

export const getApiV1ActivitiesById = <ThrowOnError extends boolean = false>(options: Options<GetApiV1ActivitiesByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetApiV1ActivitiesByIdResponse, unknown, ThrowOnError>({
        url: '/api/v1/Activities/{id}',
        ...options
    });
};

export const putApiV1ActivitiesById = <ThrowOnError extends boolean = false>(options: Options<PutApiV1ActivitiesByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutApiV1ActivitiesByIdResponse, unknown, ThrowOnError>({
        url: '/api/v1/Activities/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json; v=1.0',
            ...options?.headers
        }
    });
};

export const getApiV1Authors = <ThrowOnError extends boolean = false>(options?: Options<GetApiV1AuthorsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetApiV1AuthorsResponse, unknown, ThrowOnError>({
        url: '/api/v1/Authors',
        ...options
    });
};

export const postApiV1Authors = <ThrowOnError extends boolean = false>(options?: Options<PostApiV1AuthorsData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostApiV1AuthorsResponse, unknown, ThrowOnError>({
        url: '/api/v1/Authors',
        ...options,
        headers: {
            'Content-Type': 'application/json; v=1.0',
            ...options?.headers
        }
    });
};

export const getApiV1AuthorsAuthorsBooksByIdBook = <ThrowOnError extends boolean = false>(options: Options<GetApiV1AuthorsAuthorsBooksByIdBookData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetApiV1AuthorsAuthorsBooksByIdBookResponse, unknown, ThrowOnError>({
        url: '/api/v1/Authors/authors/books/{idBook}',
        ...options
    });
};

export const deleteApiV1AuthorsById = <ThrowOnError extends boolean = false>(options: Options<DeleteApiV1AuthorsByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v1/Authors/{id}',
        ...options
    });
};

export const getApiV1AuthorsById = <ThrowOnError extends boolean = false>(options: Options<GetApiV1AuthorsByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetApiV1AuthorsByIdResponse, unknown, ThrowOnError>({
        url: '/api/v1/Authors/{id}',
        ...options
    });
};

export const putApiV1AuthorsById = <ThrowOnError extends boolean = false>(options: Options<PutApiV1AuthorsByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutApiV1AuthorsByIdResponse, unknown, ThrowOnError>({
        url: '/api/v1/Authors/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json; v=1.0',
            ...options?.headers
        }
    });
};

export const getApiV1Books = <ThrowOnError extends boolean = false>(options?: Options<GetApiV1BooksData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetApiV1BooksResponse, unknown, ThrowOnError>({
        url: '/api/v1/Books',
        ...options
    });
};

export const postApiV1Books = <ThrowOnError extends boolean = false>(options?: Options<PostApiV1BooksData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v1/Books',
        ...options,
        headers: {
            'Content-Type': 'application/json; v=1.0',
            ...options?.headers
        }
    });
};

export const deleteApiV1BooksById = <ThrowOnError extends boolean = false>(options: Options<DeleteApiV1BooksByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v1/Books/{id}',
        ...options
    });
};

export const getApiV1BooksById = <ThrowOnError extends boolean = false>(options: Options<GetApiV1BooksByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetApiV1BooksByIdResponse, unknown, ThrowOnError>({
        url: '/api/v1/Books/{id}',
        ...options
    });
};

export const putApiV1BooksById = <ThrowOnError extends boolean = false>(options: Options<PutApiV1BooksByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
        url: '/api/v1/Books/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json; v=1.0',
            ...options?.headers
        }
    });
};

export const getApiV1CoverPhotos = <ThrowOnError extends boolean = false>(options?: Options<GetApiV1CoverPhotosData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetApiV1CoverPhotosResponse, unknown, ThrowOnError>({
        url: '/api/v1/CoverPhotos',
        ...options
    });
};

export const postApiV1CoverPhotos = <ThrowOnError extends boolean = false>(options?: Options<PostApiV1CoverPhotosData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<PostApiV1CoverPhotosResponse, unknown, ThrowOnError>({
        url: '/api/v1/CoverPhotos',
        ...options,
        headers: {
            'Content-Type': 'application/json; v=1.0',
            ...options?.headers
        }
    });
};

export const getApiV1CoverPhotosBooksCoversByIdBook = <ThrowOnError extends boolean = false>(options: Options<GetApiV1CoverPhotosBooksCoversByIdBookData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetApiV1CoverPhotosBooksCoversByIdBookResponse, unknown, ThrowOnError>({
        url: '/api/v1/CoverPhotos/books/covers/{idBook}',
        ...options
    });
};

export const deleteApiV1CoverPhotosById = <ThrowOnError extends boolean = false>(options: Options<DeleteApiV1CoverPhotosByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v1/CoverPhotos/{id}',
        ...options
    });
};

export const getApiV1CoverPhotosById = <ThrowOnError extends boolean = false>(options: Options<GetApiV1CoverPhotosByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<GetApiV1CoverPhotosByIdResponse, unknown, ThrowOnError>({
        url: '/api/v1/CoverPhotos/{id}',
        ...options
    });
};

export const putApiV1CoverPhotosById = <ThrowOnError extends boolean = false>(options: Options<PutApiV1CoverPhotosByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<PutApiV1CoverPhotosByIdResponse, unknown, ThrowOnError>({
        url: '/api/v1/CoverPhotos/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json; v=1.0',
            ...options?.headers
        }
    });
};

export const getApiV1Users = <ThrowOnError extends boolean = false>(options?: Options<GetApiV1UsersData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).get<GetApiV1UsersResponse, unknown, ThrowOnError>({
        url: '/api/v1/Users',
        ...options
    });
};

export const postApiV1Users = <ThrowOnError extends boolean = false>(options?: Options<PostApiV1UsersData, ThrowOnError>) => {
    return (options?.client ?? _heyApiClient).post<unknown, unknown, ThrowOnError>({
        url: '/api/v1/Users',
        ...options,
        headers: {
            'Content-Type': 'application/json; v=1.0',
            ...options?.headers
        }
    });
};

export const deleteApiV1UsersById = <ThrowOnError extends boolean = false>(options: Options<DeleteApiV1UsersByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).delete<unknown, unknown, ThrowOnError>({
        url: '/api/v1/Users/{id}',
        ...options
    });
};

export const getApiV1UsersById = <ThrowOnError extends boolean = false>(options: Options<GetApiV1UsersByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).get<unknown, unknown, ThrowOnError>({
        url: '/api/v1/Users/{id}',
        ...options
    });
};

export const putApiV1UsersById = <ThrowOnError extends boolean = false>(options: Options<PutApiV1UsersByIdData, ThrowOnError>) => {
    return (options.client ?? _heyApiClient).put<unknown, unknown, ThrowOnError>({
        url: '/api/v1/Users/{id}',
        ...options,
        headers: {
            'Content-Type': 'application/json; v=1.0',
            ...options?.headers
        }
    });
};