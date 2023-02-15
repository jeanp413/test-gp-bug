/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/// <reference types="node" />
import { CallOptions, ChannelCredentials, ChannelOptions, Client, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";
export declare const protobufPackage = "gitpod.experimental.v1";
export interface User {
    /** id is a UUID of the user */
    id: string;
    /** name is the username */
    name: string;
    /** avatar_url is a link to the user avatar */
    avatarUrl: string;
    /** created_at is the creation time */
    createdAt: Date | undefined;
}
export interface SSHKey {
    /** id is a UUID of the SSH key */
    id: string;
    /** name is the name of the SSH key */
    name: string;
    /** key is the public SSH key */
    key: string;
    /** created_at is the creation time */
    createdAt: Date | undefined;
}
export interface GetAuthenticatedUserRequest {
}
export interface GetAuthenticatedUserResponse {
    user: User | undefined;
}
/** TODO: pagination options */
export interface ListSSHKeysRequest {
}
export interface ListSSHKeysResponse {
    keys: SSHKey[];
}
export interface CreateSSHKeyRequest {
    /** name is the SSH key name */
    name: string;
    /** the public SSH key */
    key: string;
}
export interface CreateSSHKeyResponse {
    key: SSHKey | undefined;
}
export interface GetSSHKeyRequest {
    /** id is the unique identifier of the SSH key to retreive. */
    keyId: string;
}
export interface GetSSHKeyResponse {
    key: SSHKey | undefined;
}
export interface DeleteSSHKeyRequest {
    /** id is the unique identifier of the SSH key to retreive. */
    keyId: string;
}
export interface DeleteSSHKeyResponse {
}
export interface GetGitTokenRequest {
    host: string;
}
export interface GetGitTokenResponse {
    token: GitToken | undefined;
}
export interface GitToken {
    /** expiry_date is the date when the token will expire */
    expiryDate: string;
    /** id_token is the unique identifier for the token */
    idToken: string;
    /** refresh_token is the token used to refresh the git token */
    refreshToken: string;
    /** scopes is a list of permissions associated with the token */
    scopes: string[];
    /** update_date is the date when the token was last updated */
    updateDate: string;
    /** username is the username associated with the token */
    username: string;
    /** value is the actual token value for the token */
    value: string;
}
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        avatarUrl?: string | undefined;
        createdAt?: Date | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        avatarUrl?: string | undefined;
        createdAt?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof User>]: never; }>(object: I): User;
};
export declare const SSHKey: {
    encode(message: SSHKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SSHKey;
    fromJSON(object: any): SSHKey;
    toJSON(message: SSHKey): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        key?: string | undefined;
        createdAt?: Date | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        key?: string | undefined;
        createdAt?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof SSHKey>]: never; }>(object: I): SSHKey;
};
export declare const GetAuthenticatedUserRequest: {
    encode(_: GetAuthenticatedUserRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAuthenticatedUserRequest;
    fromJSON(_: any): GetAuthenticatedUserRequest;
    toJSON(_: GetAuthenticatedUserRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): GetAuthenticatedUserRequest;
};
export declare const GetAuthenticatedUserResponse: {
    encode(message: GetAuthenticatedUserResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetAuthenticatedUserResponse;
    fromJSON(object: any): GetAuthenticatedUserResponse;
    toJSON(message: GetAuthenticatedUserResponse): unknown;
    fromPartial<I extends {
        user?: {
            id?: string | undefined;
            name?: string | undefined;
            avatarUrl?: string | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        user?: ({
            id?: string | undefined;
            name?: string | undefined;
            avatarUrl?: string | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            avatarUrl?: string | undefined;
            createdAt?: Date | undefined;
        } & { [K in Exclude<keyof I["user"], keyof User>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "user">]: never; }>(object: I): GetAuthenticatedUserResponse;
};
export declare const ListSSHKeysRequest: {
    encode(_: ListSSHKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSSHKeysRequest;
    fromJSON(_: any): ListSSHKeysRequest;
    toJSON(_: ListSSHKeysRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): ListSSHKeysRequest;
};
export declare const ListSSHKeysResponse: {
    encode(message: ListSSHKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListSSHKeysResponse;
    fromJSON(object: any): ListSSHKeysResponse;
    toJSON(message: ListSSHKeysResponse): unknown;
    fromPartial<I extends {
        keys?: {
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        }[] | undefined;
    } & {
        keys?: ({
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        } & { [K in Exclude<keyof I["keys"][number], keyof SSHKey>]: never; })[] & { [K_1 in Exclude<keyof I["keys"], keyof {
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "keys">]: never; }>(object: I): ListSSHKeysResponse;
};
export declare const CreateSSHKeyRequest: {
    encode(message: CreateSSHKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSSHKeyRequest;
    fromJSON(object: any): CreateSSHKeyRequest;
    toJSON(message: CreateSSHKeyRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        key?: string | undefined;
    } & {
        name?: string | undefined;
        key?: string | undefined;
    } & { [K in Exclude<keyof I, keyof CreateSSHKeyRequest>]: never; }>(object: I): CreateSSHKeyRequest;
};
export declare const CreateSSHKeyResponse: {
    encode(message: CreateSSHKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateSSHKeyResponse;
    fromJSON(object: any): CreateSSHKeyResponse;
    toJSON(message: CreateSSHKeyResponse): unknown;
    fromPartial<I extends {
        key?: {
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        key?: ({
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        } & { [K in Exclude<keyof I["key"], keyof SSHKey>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "key">]: never; }>(object: I): CreateSSHKeyResponse;
};
export declare const GetSSHKeyRequest: {
    encode(message: GetSSHKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSSHKeyRequest;
    fromJSON(object: any): GetSSHKeyRequest;
    toJSON(message: GetSSHKeyRequest): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, "keyId">]: never; }>(object: I): GetSSHKeyRequest;
};
export declare const GetSSHKeyResponse: {
    encode(message: GetSSHKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSSHKeyResponse;
    fromJSON(object: any): GetSSHKeyResponse;
    toJSON(message: GetSSHKeyResponse): unknown;
    fromPartial<I extends {
        key?: {
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        } | undefined;
    } & {
        key?: ({
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            key?: string | undefined;
            createdAt?: Date | undefined;
        } & { [K in Exclude<keyof I["key"], keyof SSHKey>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "key">]: never; }>(object: I): GetSSHKeyResponse;
};
export declare const DeleteSSHKeyRequest: {
    encode(message: DeleteSSHKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSSHKeyRequest;
    fromJSON(object: any): DeleteSSHKeyRequest;
    toJSON(message: DeleteSSHKeyRequest): unknown;
    fromPartial<I extends {
        keyId?: string | undefined;
    } & {
        keyId?: string | undefined;
    } & { [K in Exclude<keyof I, "keyId">]: never; }>(object: I): DeleteSSHKeyRequest;
};
export declare const DeleteSSHKeyResponse: {
    encode(_: DeleteSSHKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteSSHKeyResponse;
    fromJSON(_: any): DeleteSSHKeyResponse;
    toJSON(_: DeleteSSHKeyResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): DeleteSSHKeyResponse;
};
export declare const GetGitTokenRequest: {
    encode(message: GetGitTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGitTokenRequest;
    fromJSON(object: any): GetGitTokenRequest;
    toJSON(message: GetGitTokenRequest): unknown;
    fromPartial<I extends {
        host?: string | undefined;
    } & {
        host?: string | undefined;
    } & { [K in Exclude<keyof I, "host">]: never; }>(object: I): GetGitTokenRequest;
};
export declare const GetGitTokenResponse: {
    encode(message: GetGitTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetGitTokenResponse;
    fromJSON(object: any): GetGitTokenResponse;
    toJSON(message: GetGitTokenResponse): unknown;
    fromPartial<I extends {
        token?: {
            expiryDate?: string | undefined;
            idToken?: string | undefined;
            refreshToken?: string | undefined;
            scopes?: string[] | undefined;
            updateDate?: string | undefined;
            username?: string | undefined;
            value?: string | undefined;
        } | undefined;
    } & {
        token?: ({
            expiryDate?: string | undefined;
            idToken?: string | undefined;
            refreshToken?: string | undefined;
            scopes?: string[] | undefined;
            updateDate?: string | undefined;
            username?: string | undefined;
            value?: string | undefined;
        } & {
            expiryDate?: string | undefined;
            idToken?: string | undefined;
            refreshToken?: string | undefined;
            scopes?: (string[] & string[] & { [K in Exclude<keyof I["token"]["scopes"], keyof string[]>]: never; }) | undefined;
            updateDate?: string | undefined;
            username?: string | undefined;
            value?: string | undefined;
        } & { [K_1 in Exclude<keyof I["token"], keyof GitToken>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "token">]: never; }>(object: I): GetGitTokenResponse;
};
export declare const GitToken: {
    encode(message: GitToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GitToken;
    fromJSON(object: any): GitToken;
    toJSON(message: GitToken): unknown;
    fromPartial<I extends {
        expiryDate?: string | undefined;
        idToken?: string | undefined;
        refreshToken?: string | undefined;
        scopes?: string[] | undefined;
        updateDate?: string | undefined;
        username?: string | undefined;
        value?: string | undefined;
    } & {
        expiryDate?: string | undefined;
        idToken?: string | undefined;
        refreshToken?: string | undefined;
        scopes?: (string[] & string[] & { [K in Exclude<keyof I["scopes"], keyof string[]>]: never; }) | undefined;
        updateDate?: string | undefined;
        username?: string | undefined;
        value?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof GitToken>]: never; }>(object: I): GitToken;
};
export declare type UserServiceService = typeof UserServiceService;
export declare const UserServiceService: {
    /** GetAuthenticatedUser gets the user info. */
    readonly getAuthenticatedUser: {
        readonly path: "/gitpod.experimental.v1.UserService/GetAuthenticatedUser";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetAuthenticatedUserRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetAuthenticatedUserRequest;
        readonly responseSerialize: (value: GetAuthenticatedUserResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetAuthenticatedUserResponse;
    };
    /** ListSSHKeys lists the public SSH keys. */
    readonly listSSHKeys: {
        readonly path: "/gitpod.experimental.v1.UserService/ListSSHKeys";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListSSHKeysRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListSSHKeysRequest;
        readonly responseSerialize: (value: ListSSHKeysResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListSSHKeysResponse;
    };
    /** CreateSSHKey adds a public SSH key. */
    readonly createSSHKey: {
        readonly path: "/gitpod.experimental.v1.UserService/CreateSSHKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateSSHKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateSSHKeyRequest;
        readonly responseSerialize: (value: CreateSSHKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateSSHKeyResponse;
    };
    /** GetSSHKey retrieves an ssh key by ID. */
    readonly getSSHKey: {
        readonly path: "/gitpod.experimental.v1.UserService/GetSSHKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetSSHKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetSSHKeyRequest;
        readonly responseSerialize: (value: GetSSHKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetSSHKeyResponse;
    };
    /** DeleteSSHKey removes a public SSH key. */
    readonly deleteSSHKey: {
        readonly path: "/gitpod.experimental.v1.UserService/DeleteSSHKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteSSHKeyRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteSSHKeyRequest;
        readonly responseSerialize: (value: DeleteSSHKeyResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteSSHKeyResponse;
    };
    readonly getGitToken: {
        readonly path: "/gitpod.experimental.v1.UserService/GetGitToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetGitTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetGitTokenRequest;
        readonly responseSerialize: (value: GetGitTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetGitTokenResponse;
    };
};
export interface UserServiceServer extends UntypedServiceImplementation {
    /** GetAuthenticatedUser gets the user info. */
    getAuthenticatedUser: handleUnaryCall<GetAuthenticatedUserRequest, GetAuthenticatedUserResponse>;
    /** ListSSHKeys lists the public SSH keys. */
    listSSHKeys: handleUnaryCall<ListSSHKeysRequest, ListSSHKeysResponse>;
    /** CreateSSHKey adds a public SSH key. */
    createSSHKey: handleUnaryCall<CreateSSHKeyRequest, CreateSSHKeyResponse>;
    /** GetSSHKey retrieves an ssh key by ID. */
    getSSHKey: handleUnaryCall<GetSSHKeyRequest, GetSSHKeyResponse>;
    /** DeleteSSHKey removes a public SSH key. */
    deleteSSHKey: handleUnaryCall<DeleteSSHKeyRequest, DeleteSSHKeyResponse>;
    getGitToken: handleUnaryCall<GetGitTokenRequest, GetGitTokenResponse>;
}
export interface UserServiceClient extends Client {
    /** GetAuthenticatedUser gets the user info. */
    getAuthenticatedUser(request: GetAuthenticatedUserRequest, callback: (error: ServiceError | null, response: GetAuthenticatedUserResponse) => void): ClientUnaryCall;
    getAuthenticatedUser(request: GetAuthenticatedUserRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetAuthenticatedUserResponse) => void): ClientUnaryCall;
    getAuthenticatedUser(request: GetAuthenticatedUserRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetAuthenticatedUserResponse) => void): ClientUnaryCall;
    /** ListSSHKeys lists the public SSH keys. */
    listSSHKeys(request: ListSSHKeysRequest, callback: (error: ServiceError | null, response: ListSSHKeysResponse) => void): ClientUnaryCall;
    listSSHKeys(request: ListSSHKeysRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListSSHKeysResponse) => void): ClientUnaryCall;
    listSSHKeys(request: ListSSHKeysRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListSSHKeysResponse) => void): ClientUnaryCall;
    /** CreateSSHKey adds a public SSH key. */
    createSSHKey(request: CreateSSHKeyRequest, callback: (error: ServiceError | null, response: CreateSSHKeyResponse) => void): ClientUnaryCall;
    createSSHKey(request: CreateSSHKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateSSHKeyResponse) => void): ClientUnaryCall;
    createSSHKey(request: CreateSSHKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateSSHKeyResponse) => void): ClientUnaryCall;
    /** GetSSHKey retrieves an ssh key by ID. */
    getSSHKey(request: GetSSHKeyRequest, callback: (error: ServiceError | null, response: GetSSHKeyResponse) => void): ClientUnaryCall;
    getSSHKey(request: GetSSHKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetSSHKeyResponse) => void): ClientUnaryCall;
    getSSHKey(request: GetSSHKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetSSHKeyResponse) => void): ClientUnaryCall;
    /** DeleteSSHKey removes a public SSH key. */
    deleteSSHKey(request: DeleteSSHKeyRequest, callback: (error: ServiceError | null, response: DeleteSSHKeyResponse) => void): ClientUnaryCall;
    deleteSSHKey(request: DeleteSSHKeyRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteSSHKeyResponse) => void): ClientUnaryCall;
    deleteSSHKey(request: DeleteSSHKeyRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteSSHKeyResponse) => void): ClientUnaryCall;
    getGitToken(request: GetGitTokenRequest, callback: (error: ServiceError | null, response: GetGitTokenResponse) => void): ClientUnaryCall;
    getGitToken(request: GetGitTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetGitTokenResponse) => void): ClientUnaryCall;
    getGitToken(request: GetGitTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetGitTokenResponse) => void): ClientUnaryCall;
}
export declare const UserServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): UserServiceClient;
    service: typeof UserServiceService;
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
//# sourceMappingURL=user.pb.d.ts.map