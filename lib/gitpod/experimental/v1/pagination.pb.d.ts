/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
import _m0 from "protobufjs/minimal.js";
export declare const protobufPackage = "gitpod.experimental.v1";
export interface Pagination {
    /**
     * Page size is the maximum number of results to retrieve per page.
     * Defaults to 25. Maximum 100.
     */
    pageSize: number;
    /**
     * Page is the page number of results to retrieve.
     * The first page starts at 1.
     * Defaults to 1.
     */
    page: number;
}
export declare const Pagination: {
    encode(message: Pagination, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Pagination;
    fromJSON(object: any): Pagination;
    toJSON(message: Pagination): unknown;
    fromPartial<I extends {
        pageSize?: number | undefined;
        page?: number | undefined;
    } & {
        pageSize?: number | undefined;
        page?: number | undefined;
    } & { [K in Exclude<keyof I, keyof Pagination>]: never; }>(object: I): Pagination;
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
//# sourceMappingURL=pagination.pb.d.ts.map