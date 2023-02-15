/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/// <reference types="node" />
import { CallOptions, ChannelCredentials, ChannelOptions, Client, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";
import { Pagination } from "./pagination.pb.js";
export declare const protobufPackage = "gitpod.experimental.v1";
/** PersonalAccessToken represents details of an access token for personal use. */
export interface PersonalAccessToken {
    /**
     * id is the unique identifier of this token
     * Read only.
     */
    id: string;
    /**
     * value is the secret value of the token
     * The value property is only populated when the PersonalAccessToken is first created, and never again.
     * Read only.
     */
    value: string;
    /**
     * name is the name of the token for humans, set by the user.
     * Must match regexp ^[a-zA-Z0-9-_ ]{3,63}$
     */
    name: string;
    /**
     * expiration_time is the time when the token expires
     * Read only.
     */
    expirationTime: Date | undefined;
    /**
     * scopes are the permission scopes attached to this token.
     * By default, no scopes are attached and therefore no access is granted to this token.
     * Specifying '*' grants all permissions the owner of the token has.
     */
    scopes: string[];
    /** created_time is the time when the token was first created. */
    createdAt: Date | undefined;
}
export interface CreatePersonalAccessTokenRequest {
    token: PersonalAccessToken | undefined;
}
export interface CreatePersonalAccessTokenResponse {
    token: PersonalAccessToken | undefined;
}
export interface GetPersonalAccessTokenRequest {
    id: string;
}
export interface GetPersonalAccessTokenResponse {
    token: PersonalAccessToken | undefined;
}
export interface ListPersonalAccessTokensRequest {
    /** Page information */
    pagination: Pagination | undefined;
}
export interface ListPersonalAccessTokensResponse {
    tokens: PersonalAccessToken[];
    totalResults: number;
}
export interface RegeneratePersonalAccessTokenRequest {
    /** id is the ID of the PersonalAccessToken */
    id: string;
    /** expiration time is the time when the new token should expire */
    expirationTime: Date | undefined;
}
export interface RegeneratePersonalAccessTokenResponse {
    token: PersonalAccessToken | undefined;
}
export interface UpdatePersonalAccessTokenRequest {
    token: PersonalAccessToken | undefined;
    updateMask: string[] | undefined;
}
export interface UpdatePersonalAccessTokenResponse {
    token: PersonalAccessToken | undefined;
}
export interface DeletePersonalAccessTokenRequest {
    id: string;
}
export interface DeletePersonalAccessTokenResponse {
}
export declare const PersonalAccessToken: {
    encode(message: PersonalAccessToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PersonalAccessToken;
    fromJSON(object: any): PersonalAccessToken;
    toJSON(message: PersonalAccessToken): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        value?: string | undefined;
        name?: string | undefined;
        expirationTime?: Date | undefined;
        scopes?: string[] | undefined;
        createdAt?: Date | undefined;
    } & {
        id?: string | undefined;
        value?: string | undefined;
        name?: string | undefined;
        expirationTime?: Date | undefined;
        scopes?: (string[] & string[] & { [K in Exclude<keyof I["scopes"], keyof string[]>]: never; }) | undefined;
        createdAt?: Date | undefined;
    } & { [K_1 in Exclude<keyof I, keyof PersonalAccessToken>]: never; }>(object: I): PersonalAccessToken;
};
export declare const CreatePersonalAccessTokenRequest: {
    encode(message: CreatePersonalAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePersonalAccessTokenRequest;
    fromJSON(object: any): CreatePersonalAccessTokenRequest;
    toJSON(message: CreatePersonalAccessTokenRequest): unknown;
    fromPartial<I extends {
        token?: {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        token?: ({
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: (string[] & string[] & { [K in Exclude<keyof I["token"]["scopes"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["token"], keyof PersonalAccessToken>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "token">]: never; }>(object: I): CreatePersonalAccessTokenRequest;
};
export declare const CreatePersonalAccessTokenResponse: {
    encode(message: CreatePersonalAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePersonalAccessTokenResponse;
    fromJSON(object: any): CreatePersonalAccessTokenResponse;
    toJSON(message: CreatePersonalAccessTokenResponse): unknown;
    fromPartial<I extends {
        token?: {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        token?: ({
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: (string[] & string[] & { [K in Exclude<keyof I["token"]["scopes"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["token"], keyof PersonalAccessToken>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "token">]: never; }>(object: I): CreatePersonalAccessTokenResponse;
};
export declare const GetPersonalAccessTokenRequest: {
    encode(message: GetPersonalAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetPersonalAccessTokenRequest;
    fromJSON(object: any): GetPersonalAccessTokenRequest;
    toJSON(message: GetPersonalAccessTokenRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): GetPersonalAccessTokenRequest;
};
export declare const GetPersonalAccessTokenResponse: {
    encode(message: GetPersonalAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetPersonalAccessTokenResponse;
    fromJSON(object: any): GetPersonalAccessTokenResponse;
    toJSON(message: GetPersonalAccessTokenResponse): unknown;
    fromPartial<I extends {
        token?: {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        token?: ({
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: (string[] & string[] & { [K in Exclude<keyof I["token"]["scopes"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["token"], keyof PersonalAccessToken>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "token">]: never; }>(object: I): GetPersonalAccessTokenResponse;
};
export declare const ListPersonalAccessTokensRequest: {
    encode(message: ListPersonalAccessTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPersonalAccessTokensRequest;
    fromJSON(object: any): ListPersonalAccessTokensRequest;
    toJSON(message: ListPersonalAccessTokensRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            pageSize?: number | undefined;
            page?: number | undefined;
        } | undefined;
    } & {
        pagination?: ({
            pageSize?: number | undefined;
            page?: number | undefined;
        } & {
            pageSize?: number | undefined;
            page?: number | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof Pagination>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(object: I): ListPersonalAccessTokensRequest;
};
export declare const ListPersonalAccessTokensResponse: {
    encode(message: ListPersonalAccessTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListPersonalAccessTokensResponse;
    fromJSON(object: any): ListPersonalAccessTokensResponse;
    toJSON(message: ListPersonalAccessTokensResponse): unknown;
    fromPartial<I extends {
        tokens?: {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        }[] | undefined;
        totalResults?: number | undefined;
    } & {
        tokens?: ({
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        }[] & ({
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: (string[] & string[] & { [K in Exclude<keyof I["tokens"][number]["scopes"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["tokens"][number], keyof PersonalAccessToken>]: never; })[] & { [K_2 in Exclude<keyof I["tokens"], keyof {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        }[]>]: never; }) | undefined;
        totalResults?: number | undefined;
    } & { [K_3 in Exclude<keyof I, keyof ListPersonalAccessTokensResponse>]: never; }>(object: I): ListPersonalAccessTokensResponse;
};
export declare const RegeneratePersonalAccessTokenRequest: {
    encode(message: RegeneratePersonalAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegeneratePersonalAccessTokenRequest;
    fromJSON(object: any): RegeneratePersonalAccessTokenRequest;
    toJSON(message: RegeneratePersonalAccessTokenRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        expirationTime?: Date | undefined;
    } & {
        id?: string | undefined;
        expirationTime?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof RegeneratePersonalAccessTokenRequest>]: never; }>(object: I): RegeneratePersonalAccessTokenRequest;
};
export declare const RegeneratePersonalAccessTokenResponse: {
    encode(message: RegeneratePersonalAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegeneratePersonalAccessTokenResponse;
    fromJSON(object: any): RegeneratePersonalAccessTokenResponse;
    toJSON(message: RegeneratePersonalAccessTokenResponse): unknown;
    fromPartial<I extends {
        token?: {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        token?: ({
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: (string[] & string[] & { [K in Exclude<keyof I["token"]["scopes"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["token"], keyof PersonalAccessToken>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "token">]: never; }>(object: I): RegeneratePersonalAccessTokenResponse;
};
export declare const UpdatePersonalAccessTokenRequest: {
    encode(message: UpdatePersonalAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePersonalAccessTokenRequest;
    fromJSON(object: any): UpdatePersonalAccessTokenRequest;
    toJSON(message: UpdatePersonalAccessTokenRequest): unknown;
    fromPartial<I extends {
        token?: {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } | undefined;
        updateMask?: string[] | undefined;
    } & {
        token?: ({
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: (string[] & string[] & { [K in Exclude<keyof I["token"]["scopes"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["token"], keyof PersonalAccessToken>]: never; }) | undefined;
        updateMask?: (string[] & string[] & { [K_2 in Exclude<keyof I["updateMask"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof UpdatePersonalAccessTokenRequest>]: never; }>(object: I): UpdatePersonalAccessTokenRequest;
};
export declare const UpdatePersonalAccessTokenResponse: {
    encode(message: UpdatePersonalAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePersonalAccessTokenResponse;
    fromJSON(object: any): UpdatePersonalAccessTokenResponse;
    toJSON(message: UpdatePersonalAccessTokenResponse): unknown;
    fromPartial<I extends {
        token?: {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        token?: ({
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: string[] | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            value?: string | undefined;
            name?: string | undefined;
            expirationTime?: Date | undefined;
            scopes?: (string[] & string[] & { [K in Exclude<keyof I["token"]["scopes"], keyof string[]>]: never; }) | undefined;
            createdAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["token"], keyof PersonalAccessToken>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "token">]: never; }>(object: I): UpdatePersonalAccessTokenResponse;
};
export declare const DeletePersonalAccessTokenRequest: {
    encode(message: DeletePersonalAccessTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeletePersonalAccessTokenRequest;
    fromJSON(object: any): DeletePersonalAccessTokenRequest;
    toJSON(message: DeletePersonalAccessTokenRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): DeletePersonalAccessTokenRequest;
};
export declare const DeletePersonalAccessTokenResponse: {
    encode(_: DeletePersonalAccessTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeletePersonalAccessTokenResponse;
    fromJSON(_: any): DeletePersonalAccessTokenResponse;
    toJSON(_: DeletePersonalAccessTokenResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): DeletePersonalAccessTokenResponse;
};
export declare type TokensServiceService = typeof TokensServiceService;
export declare const TokensServiceService: {
    /** CreatePersonalAccessTokenRequest creates a new token. */
    readonly createPersonalAccessToken: {
        readonly path: "/gitpod.experimental.v1.TokensService/CreatePersonalAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreatePersonalAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreatePersonalAccessTokenRequest;
        readonly responseSerialize: (value: CreatePersonalAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreatePersonalAccessTokenResponse;
    };
    /** ListPersonalAccessTokens returns token by ID. */
    readonly getPersonalAccessToken: {
        readonly path: "/gitpod.experimental.v1.TokensService/GetPersonalAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetPersonalAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetPersonalAccessTokenRequest;
        readonly responseSerialize: (value: GetPersonalAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetPersonalAccessTokenResponse;
    };
    /** ListPersonalAccessTokens returns a list of tokens. */
    readonly listPersonalAccessTokens: {
        readonly path: "/gitpod.experimental.v1.TokensService/ListPersonalAccessTokens";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListPersonalAccessTokensRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListPersonalAccessTokensRequest;
        readonly responseSerialize: (value: ListPersonalAccessTokensResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListPersonalAccessTokensResponse;
    };
    /** RegeneratePersonalAccessToken generates a new token and replaces the previous one. */
    readonly regeneratePersonalAccessToken: {
        readonly path: "/gitpod.experimental.v1.TokensService/RegeneratePersonalAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: RegeneratePersonalAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => RegeneratePersonalAccessTokenRequest;
        readonly responseSerialize: (value: RegeneratePersonalAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => RegeneratePersonalAccessTokenResponse;
    };
    /** UpdatePersonalAccessToken updates writable properties of a PersonalAccessToken. */
    readonly updatePersonalAccessToken: {
        readonly path: "/gitpod.experimental.v1.TokensService/UpdatePersonalAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdatePersonalAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdatePersonalAccessTokenRequest;
        readonly responseSerialize: (value: UpdatePersonalAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdatePersonalAccessTokenResponse;
    };
    /** DeletePersonalAccessToken removes token by ID. */
    readonly deletePersonalAccessToken: {
        readonly path: "/gitpod.experimental.v1.TokensService/DeletePersonalAccessToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeletePersonalAccessTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeletePersonalAccessTokenRequest;
        readonly responseSerialize: (value: DeletePersonalAccessTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeletePersonalAccessTokenResponse;
    };
};
export interface TokensServiceServer extends UntypedServiceImplementation {
    /** CreatePersonalAccessTokenRequest creates a new token. */
    createPersonalAccessToken: handleUnaryCall<CreatePersonalAccessTokenRequest, CreatePersonalAccessTokenResponse>;
    /** ListPersonalAccessTokens returns token by ID. */
    getPersonalAccessToken: handleUnaryCall<GetPersonalAccessTokenRequest, GetPersonalAccessTokenResponse>;
    /** ListPersonalAccessTokens returns a list of tokens. */
    listPersonalAccessTokens: handleUnaryCall<ListPersonalAccessTokensRequest, ListPersonalAccessTokensResponse>;
    /** RegeneratePersonalAccessToken generates a new token and replaces the previous one. */
    regeneratePersonalAccessToken: handleUnaryCall<RegeneratePersonalAccessTokenRequest, RegeneratePersonalAccessTokenResponse>;
    /** UpdatePersonalAccessToken updates writable properties of a PersonalAccessToken. */
    updatePersonalAccessToken: handleUnaryCall<UpdatePersonalAccessTokenRequest, UpdatePersonalAccessTokenResponse>;
    /** DeletePersonalAccessToken removes token by ID. */
    deletePersonalAccessToken: handleUnaryCall<DeletePersonalAccessTokenRequest, DeletePersonalAccessTokenResponse>;
}
export interface TokensServiceClient extends Client {
    /** CreatePersonalAccessTokenRequest creates a new token. */
    createPersonalAccessToken(request: CreatePersonalAccessTokenRequest, callback: (error: ServiceError | null, response: CreatePersonalAccessTokenResponse) => void): ClientUnaryCall;
    createPersonalAccessToken(request: CreatePersonalAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreatePersonalAccessTokenResponse) => void): ClientUnaryCall;
    createPersonalAccessToken(request: CreatePersonalAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreatePersonalAccessTokenResponse) => void): ClientUnaryCall;
    /** ListPersonalAccessTokens returns token by ID. */
    getPersonalAccessToken(request: GetPersonalAccessTokenRequest, callback: (error: ServiceError | null, response: GetPersonalAccessTokenResponse) => void): ClientUnaryCall;
    getPersonalAccessToken(request: GetPersonalAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetPersonalAccessTokenResponse) => void): ClientUnaryCall;
    getPersonalAccessToken(request: GetPersonalAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetPersonalAccessTokenResponse) => void): ClientUnaryCall;
    /** ListPersonalAccessTokens returns a list of tokens. */
    listPersonalAccessTokens(request: ListPersonalAccessTokensRequest, callback: (error: ServiceError | null, response: ListPersonalAccessTokensResponse) => void): ClientUnaryCall;
    listPersonalAccessTokens(request: ListPersonalAccessTokensRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListPersonalAccessTokensResponse) => void): ClientUnaryCall;
    listPersonalAccessTokens(request: ListPersonalAccessTokensRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListPersonalAccessTokensResponse) => void): ClientUnaryCall;
    /** RegeneratePersonalAccessToken generates a new token and replaces the previous one. */
    regeneratePersonalAccessToken(request: RegeneratePersonalAccessTokenRequest, callback: (error: ServiceError | null, response: RegeneratePersonalAccessTokenResponse) => void): ClientUnaryCall;
    regeneratePersonalAccessToken(request: RegeneratePersonalAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: RegeneratePersonalAccessTokenResponse) => void): ClientUnaryCall;
    regeneratePersonalAccessToken(request: RegeneratePersonalAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: RegeneratePersonalAccessTokenResponse) => void): ClientUnaryCall;
    /** UpdatePersonalAccessToken updates writable properties of a PersonalAccessToken. */
    updatePersonalAccessToken(request: UpdatePersonalAccessTokenRequest, callback: (error: ServiceError | null, response: UpdatePersonalAccessTokenResponse) => void): ClientUnaryCall;
    updatePersonalAccessToken(request: UpdatePersonalAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdatePersonalAccessTokenResponse) => void): ClientUnaryCall;
    updatePersonalAccessToken(request: UpdatePersonalAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdatePersonalAccessTokenResponse) => void): ClientUnaryCall;
    /** DeletePersonalAccessToken removes token by ID. */
    deletePersonalAccessToken(request: DeletePersonalAccessTokenRequest, callback: (error: ServiceError | null, response: DeletePersonalAccessTokenResponse) => void): ClientUnaryCall;
    deletePersonalAccessToken(request: DeletePersonalAccessTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeletePersonalAccessTokenResponse) => void): ClientUnaryCall;
    deletePersonalAccessToken(request: DeletePersonalAccessTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeletePersonalAccessTokenResponse) => void): ClientUnaryCall;
}
export declare const TokensServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TokensServiceClient;
    service: typeof TokensServiceService;
};
export interface DataLoaderOptions {
    cache?: boolean;
}
export interface DataLoaders {
    rpcDataLoaderOptions?: DataLoaderOptions;
    getDataLoader<T>(identifier: string, constructorFn: () => T): T;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
//# sourceMappingURL=tokens.pb.d.ts.map