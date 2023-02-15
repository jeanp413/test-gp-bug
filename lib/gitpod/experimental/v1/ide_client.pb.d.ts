/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/// <reference types="node" />
import { CallOptions, ChannelCredentials, ChannelOptions, Client, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";
export declare const protobufPackage = "gitpod.experimental.v1";
export interface SendHeartbeatRequest {
    workspaceId: string;
}
export interface SendHeartbeatResponse {
}
export interface SendDidCloseRequest {
    workspaceId: string;
}
export interface SendDidCloseResponse {
}
export declare const SendHeartbeatRequest: {
    encode(message: SendHeartbeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SendHeartbeatRequest;
    fromJSON(object: any): SendHeartbeatRequest;
    toJSON(message: SendHeartbeatRequest): unknown;
    fromPartial<I extends {
        workspaceId?: string | undefined;
    } & {
        workspaceId?: string | undefined;
    } & { [K in Exclude<keyof I, "workspaceId">]: never; }>(object: I): SendHeartbeatRequest;
};
export declare const SendHeartbeatResponse: {
    encode(_: SendHeartbeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SendHeartbeatResponse;
    fromJSON(_: any): SendHeartbeatResponse;
    toJSON(_: SendHeartbeatResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): SendHeartbeatResponse;
};
export declare const SendDidCloseRequest: {
    encode(message: SendDidCloseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SendDidCloseRequest;
    fromJSON(object: any): SendDidCloseRequest;
    toJSON(message: SendDidCloseRequest): unknown;
    fromPartial<I extends {
        workspaceId?: string | undefined;
    } & {
        workspaceId?: string | undefined;
    } & { [K in Exclude<keyof I, "workspaceId">]: never; }>(object: I): SendDidCloseRequest;
};
export declare const SendDidCloseResponse: {
    encode(_: SendDidCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SendDidCloseResponse;
    fromJSON(_: any): SendDidCloseResponse;
    toJSON(_: SendDidCloseResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): SendDidCloseResponse;
};
export declare type IDEClientServiceService = typeof IDEClientServiceService;
export declare const IDEClientServiceService: {
    /** SendHeartbeat sends a clientheartbeat signal for a running workspace. */
    readonly sendHeartbeat: {
        readonly path: "/gitpod.experimental.v1.IDEClientService/SendHeartbeat";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SendHeartbeatRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SendHeartbeatRequest;
        readonly responseSerialize: (value: SendHeartbeatResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SendHeartbeatResponse;
    };
    /** SendDidClose sends a client close signal for a running workspace. */
    readonly sendDidClose: {
        readonly path: "/gitpod.experimental.v1.IDEClientService/SendDidClose";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SendDidCloseRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SendDidCloseRequest;
        readonly responseSerialize: (value: SendDidCloseResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => SendDidCloseResponse;
    };
};
export interface IDEClientServiceServer extends UntypedServiceImplementation {
    /** SendHeartbeat sends a clientheartbeat signal for a running workspace. */
    sendHeartbeat: handleUnaryCall<SendHeartbeatRequest, SendHeartbeatResponse>;
    /** SendDidClose sends a client close signal for a running workspace. */
    sendDidClose: handleUnaryCall<SendDidCloseRequest, SendDidCloseResponse>;
}
export interface IDEClientServiceClient extends Client {
    /** SendHeartbeat sends a clientheartbeat signal for a running workspace. */
    sendHeartbeat(request: SendHeartbeatRequest, callback: (error: ServiceError | null, response: SendHeartbeatResponse) => void): ClientUnaryCall;
    sendHeartbeat(request: SendHeartbeatRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SendHeartbeatResponse) => void): ClientUnaryCall;
    sendHeartbeat(request: SendHeartbeatRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SendHeartbeatResponse) => void): ClientUnaryCall;
    /** SendDidClose sends a client close signal for a running workspace. */
    sendDidClose(request: SendDidCloseRequest, callback: (error: ServiceError | null, response: SendDidCloseResponse) => void): ClientUnaryCall;
    sendDidClose(request: SendDidCloseRequest, metadata: Metadata, callback: (error: ServiceError | null, response: SendDidCloseResponse) => void): ClientUnaryCall;
    sendDidClose(request: SendDidCloseRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: SendDidCloseResponse) => void): ClientUnaryCall;
}
export declare const IDEClientServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): IDEClientServiceClient;
    service: typeof IDEClientServiceService;
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
//# sourceMappingURL=ide_client.pb.d.ts.map