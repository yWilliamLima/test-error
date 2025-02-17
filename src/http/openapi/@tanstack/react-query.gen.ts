// This file is auto-generated by @hey-api/openapi-ts

import { type Options, getApiV1Activities, postApiV1Activities, deleteApiV1ActivitiesById, getApiV1ActivitiesById, putApiV1ActivitiesById, getApiV1Authors, postApiV1Authors, getApiV1AuthorsAuthorsBooksByIdBook, deleteApiV1AuthorsById, getApiV1AuthorsById, putApiV1AuthorsById, getApiV1Books, postApiV1Books, deleteApiV1BooksById, getApiV1BooksById, putApiV1BooksById, getApiV1CoverPhotos, postApiV1CoverPhotos, getApiV1CoverPhotosBooksCoversByIdBook, deleteApiV1CoverPhotosById, getApiV1CoverPhotosById, putApiV1CoverPhotosById, getApiV1Users, postApiV1Users, deleteApiV1UsersById, getApiV1UsersById, putApiV1UsersById } from '../sdk.gen';
import { queryOptions, type UseMutationOptions, type DefaultError } from '@tanstack/react-query';
import type { GetApiV1ActivitiesData, PostApiV1ActivitiesData, PostApiV1ActivitiesResponse, DeleteApiV1ActivitiesByIdData, GetApiV1ActivitiesByIdData, PutApiV1ActivitiesByIdData, PutApiV1ActivitiesByIdResponse, GetApiV1AuthorsData, PostApiV1AuthorsData, PostApiV1AuthorsResponse, GetApiV1AuthorsAuthorsBooksByIdBookData, DeleteApiV1AuthorsByIdData, GetApiV1AuthorsByIdData, PutApiV1AuthorsByIdData, PutApiV1AuthorsByIdResponse, GetApiV1BooksData, PostApiV1BooksData, DeleteApiV1BooksByIdData, GetApiV1BooksByIdData, PutApiV1BooksByIdData, GetApiV1CoverPhotosData, PostApiV1CoverPhotosData, PostApiV1CoverPhotosResponse, GetApiV1CoverPhotosBooksCoversByIdBookData, DeleteApiV1CoverPhotosByIdData, GetApiV1CoverPhotosByIdData, PutApiV1CoverPhotosByIdData, PutApiV1CoverPhotosByIdResponse, GetApiV1UsersData, PostApiV1UsersData, DeleteApiV1UsersByIdData, GetApiV1UsersByIdData, PutApiV1UsersByIdData } from '../types.gen';
import { client as _heyApiClient } from '../client.gen';

export type QueryKey<TOptions extends Options> = [
    Pick<TOptions, 'baseUrl' | 'body' | 'headers' | 'path' | 'query'> & {
        _id: string;
        _infinite?: boolean;
    }
];

const createQueryKey = <TOptions extends Options>(id: string, options?: TOptions, infinite?: boolean): [
    QueryKey<TOptions>[0]
] => {
    const params: QueryKey<TOptions>[0] = { _id: id, baseUrl: (options?.client ?? _heyApiClient).getConfig().baseUrl } as QueryKey<TOptions>[0];
    if (infinite) {
        params._infinite = infinite;
    }
    if (options?.body) {
        params.body = options.body;
    }
    if (options?.headers) {
        params.headers = options.headers;
    }
    if (options?.path) {
        params.path = options.path;
    }
    if (options?.query) {
        params.query = options.query;
    }
    return [
        params
    ];
};

export const getApiV1ActivitiesQueryKey = (options?: Options<GetApiV1ActivitiesData>) => createQueryKey('getApiV1Activities', options);

export const getApiV1ActivitiesOptions = (options?: Options<GetApiV1ActivitiesData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1Activities({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1ActivitiesQueryKey(options)
    });
};

export const postApiV1ActivitiesQueryKey = (options?: Options<PostApiV1ActivitiesData>) => createQueryKey('postApiV1Activities', options);

export const postApiV1ActivitiesOptions = (options?: Options<PostApiV1ActivitiesData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await postApiV1Activities({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: postApiV1ActivitiesQueryKey(options)
    });
};

export const postApiV1ActivitiesMutation = (options?: Partial<Options<PostApiV1ActivitiesData>>) => {
    const mutationOptions: UseMutationOptions<PostApiV1ActivitiesResponse, DefaultError, Options<PostApiV1ActivitiesData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await postApiV1Activities({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const deleteApiV1ActivitiesByIdMutation = (options?: Partial<Options<DeleteApiV1ActivitiesByIdData>>) => {
    const mutationOptions: UseMutationOptions<unknown, DefaultError, Options<DeleteApiV1ActivitiesByIdData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await deleteApiV1ActivitiesById({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1ActivitiesByIdQueryKey = (options: Options<GetApiV1ActivitiesByIdData>) => createQueryKey('getApiV1ActivitiesById', options);

export const getApiV1ActivitiesByIdOptions = (options: Options<GetApiV1ActivitiesByIdData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1ActivitiesById({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1ActivitiesByIdQueryKey(options)
    });
};

export const putApiV1ActivitiesByIdMutation = (options?: Partial<Options<PutApiV1ActivitiesByIdData>>) => {
    const mutationOptions: UseMutationOptions<PutApiV1ActivitiesByIdResponse, DefaultError, Options<PutApiV1ActivitiesByIdData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await putApiV1ActivitiesById({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1AuthorsQueryKey = (options?: Options<GetApiV1AuthorsData>) => createQueryKey('getApiV1Authors', options);

export const getApiV1AuthorsOptions = (options?: Options<GetApiV1AuthorsData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1Authors({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1AuthorsQueryKey(options)
    });
};

export const postApiV1AuthorsQueryKey = (options?: Options<PostApiV1AuthorsData>) => createQueryKey('postApiV1Authors', options);

export const postApiV1AuthorsOptions = (options?: Options<PostApiV1AuthorsData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await postApiV1Authors({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: postApiV1AuthorsQueryKey(options)
    });
};

export const postApiV1AuthorsMutation = (options?: Partial<Options<PostApiV1AuthorsData>>) => {
    const mutationOptions: UseMutationOptions<PostApiV1AuthorsResponse, DefaultError, Options<PostApiV1AuthorsData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await postApiV1Authors({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1AuthorsAuthorsBooksByIdBookQueryKey = (options: Options<GetApiV1AuthorsAuthorsBooksByIdBookData>) => createQueryKey('getApiV1AuthorsAuthorsBooksByIdBook', options);

export const getApiV1AuthorsAuthorsBooksByIdBookOptions = (options: Options<GetApiV1AuthorsAuthorsBooksByIdBookData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1AuthorsAuthorsBooksByIdBook({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1AuthorsAuthorsBooksByIdBookQueryKey(options)
    });
};

export const deleteApiV1AuthorsByIdMutation = (options?: Partial<Options<DeleteApiV1AuthorsByIdData>>) => {
    const mutationOptions: UseMutationOptions<unknown, DefaultError, Options<DeleteApiV1AuthorsByIdData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await deleteApiV1AuthorsById({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1AuthorsByIdQueryKey = (options: Options<GetApiV1AuthorsByIdData>) => createQueryKey('getApiV1AuthorsById', options);

export const getApiV1AuthorsByIdOptions = (options: Options<GetApiV1AuthorsByIdData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1AuthorsById({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1AuthorsByIdQueryKey(options)
    });
};

export const putApiV1AuthorsByIdMutation = (options?: Partial<Options<PutApiV1AuthorsByIdData>>) => {
    const mutationOptions: UseMutationOptions<PutApiV1AuthorsByIdResponse, DefaultError, Options<PutApiV1AuthorsByIdData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await putApiV1AuthorsById({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1BooksQueryKey = (options?: Options<GetApiV1BooksData>) => createQueryKey('getApiV1Books', options);

export const getApiV1BooksOptions = (options?: Options<GetApiV1BooksData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1Books({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1BooksQueryKey(options)
    });
};

export const postApiV1BooksQueryKey = (options?: Options<PostApiV1BooksData>) => createQueryKey('postApiV1Books', options);

export const postApiV1BooksOptions = (options?: Options<PostApiV1BooksData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await postApiV1Books({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: postApiV1BooksQueryKey(options)
    });
};

export const postApiV1BooksMutation = (options?: Partial<Options<PostApiV1BooksData>>) => {
    const mutationOptions: UseMutationOptions<unknown, DefaultError, Options<PostApiV1BooksData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await postApiV1Books({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const deleteApiV1BooksByIdMutation = (options?: Partial<Options<DeleteApiV1BooksByIdData>>) => {
    const mutationOptions: UseMutationOptions<unknown, DefaultError, Options<DeleteApiV1BooksByIdData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await deleteApiV1BooksById({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1BooksByIdQueryKey = (options: Options<GetApiV1BooksByIdData>) => createQueryKey('getApiV1BooksById', options);

export const getApiV1BooksByIdOptions = (options: Options<GetApiV1BooksByIdData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1BooksById({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1BooksByIdQueryKey(options)
    });
};

export const putApiV1BooksByIdMutation = (options?: Partial<Options<PutApiV1BooksByIdData>>) => {
    const mutationOptions: UseMutationOptions<unknown, DefaultError, Options<PutApiV1BooksByIdData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await putApiV1BooksById({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1CoverPhotosQueryKey = (options?: Options<GetApiV1CoverPhotosData>) => createQueryKey('getApiV1CoverPhotos', options);

export const getApiV1CoverPhotosOptions = (options?: Options<GetApiV1CoverPhotosData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1CoverPhotos({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1CoverPhotosQueryKey(options)
    });
};

export const postApiV1CoverPhotosQueryKey = (options?: Options<PostApiV1CoverPhotosData>) => createQueryKey('postApiV1CoverPhotos', options);

export const postApiV1CoverPhotosOptions = (options?: Options<PostApiV1CoverPhotosData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await postApiV1CoverPhotos({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: postApiV1CoverPhotosQueryKey(options)
    });
};

export const postApiV1CoverPhotosMutation = (options?: Partial<Options<PostApiV1CoverPhotosData>>) => {
    const mutationOptions: UseMutationOptions<PostApiV1CoverPhotosResponse, DefaultError, Options<PostApiV1CoverPhotosData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await postApiV1CoverPhotos({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1CoverPhotosBooksCoversByIdBookQueryKey = (options: Options<GetApiV1CoverPhotosBooksCoversByIdBookData>) => createQueryKey('getApiV1CoverPhotosBooksCoversByIdBook', options);

export const getApiV1CoverPhotosBooksCoversByIdBookOptions = (options: Options<GetApiV1CoverPhotosBooksCoversByIdBookData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1CoverPhotosBooksCoversByIdBook({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1CoverPhotosBooksCoversByIdBookQueryKey(options)
    });
};

export const deleteApiV1CoverPhotosByIdMutation = (options?: Partial<Options<DeleteApiV1CoverPhotosByIdData>>) => {
    const mutationOptions: UseMutationOptions<unknown, DefaultError, Options<DeleteApiV1CoverPhotosByIdData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await deleteApiV1CoverPhotosById({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1CoverPhotosByIdQueryKey = (options: Options<GetApiV1CoverPhotosByIdData>) => createQueryKey('getApiV1CoverPhotosById', options);

export const getApiV1CoverPhotosByIdOptions = (options: Options<GetApiV1CoverPhotosByIdData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1CoverPhotosById({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1CoverPhotosByIdQueryKey(options)
    });
};

export const putApiV1CoverPhotosByIdMutation = (options?: Partial<Options<PutApiV1CoverPhotosByIdData>>) => {
    const mutationOptions: UseMutationOptions<PutApiV1CoverPhotosByIdResponse, DefaultError, Options<PutApiV1CoverPhotosByIdData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await putApiV1CoverPhotosById({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1UsersQueryKey = (options?: Options<GetApiV1UsersData>) => createQueryKey('getApiV1Users', options);

export const getApiV1UsersOptions = (options?: Options<GetApiV1UsersData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1Users({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1UsersQueryKey(options)
    });
};

export const postApiV1UsersQueryKey = (options?: Options<PostApiV1UsersData>) => createQueryKey('postApiV1Users', options);

export const postApiV1UsersOptions = (options?: Options<PostApiV1UsersData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await postApiV1Users({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: postApiV1UsersQueryKey(options)
    });
};

export const postApiV1UsersMutation = (options?: Partial<Options<PostApiV1UsersData>>) => {
    const mutationOptions: UseMutationOptions<unknown, DefaultError, Options<PostApiV1UsersData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await postApiV1Users({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const deleteApiV1UsersByIdMutation = (options?: Partial<Options<DeleteApiV1UsersByIdData>>) => {
    const mutationOptions: UseMutationOptions<unknown, DefaultError, Options<DeleteApiV1UsersByIdData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await deleteApiV1UsersById({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};

export const getApiV1UsersByIdQueryKey = (options: Options<GetApiV1UsersByIdData>) => createQueryKey('getApiV1UsersById', options);

export const getApiV1UsersByIdOptions = (options: Options<GetApiV1UsersByIdData>) => {
    return queryOptions({
        queryFn: async ({ queryKey, signal }) => {
            const { data } = await getApiV1UsersById({
                ...options,
                ...queryKey[0],
                signal,
                throwOnError: true
            });
            return data;
        },
        queryKey: getApiV1UsersByIdQueryKey(options)
    });
};

export const putApiV1UsersByIdMutation = (options?: Partial<Options<PutApiV1UsersByIdData>>) => {
    const mutationOptions: UseMutationOptions<unknown, DefaultError, Options<PutApiV1UsersByIdData>> = {
        mutationFn: async (localOptions) => {
            const { data } = await putApiV1UsersById({
                ...options,
                ...localOptions,
                throwOnError: true
            });
            return data;
        }
    };
    return mutationOptions;
};