/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/* eslint-disable */
import { makeGenericClientConstructor, } from "@grpc/grpc-js";
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { FieldMask } from "../../../google/protobuf/field_mask.pb.js";
import { Timestamp } from "../../../google/protobuf/timestamp.pb.js";
import { Pagination } from "./pagination.pb.js";
export const protobufPackage = "gitpod.experimental.v1";
function createBasePersonalAccessToken() {
    return { id: "", value: "", name: "", expirationTime: undefined, scopes: [], createdAt: undefined };
}
export const PersonalAccessToken = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.expirationTime !== undefined) {
            Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.scopes) {
            writer.uint32(42).string(v);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePersonalAccessToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.scopes.push(reader.string());
                    break;
                case 6:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            value: isSet(object.value) ? String(object.value) : "",
            name: isSet(object.name) ? String(object.name) : "",
            expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
            scopes: Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => String(e)) : [],
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.value !== undefined && (obj.value = message.value);
        message.name !== undefined && (obj.name = message.name);
        message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime.toISOString());
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBasePersonalAccessToken();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.expirationTime = (_d = object.expirationTime) !== null && _d !== void 0 ? _d : undefined;
        message.scopes = ((_e = object.scopes) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.createdAt = (_f = object.createdAt) !== null && _f !== void 0 ? _f : undefined;
        return message;
    },
};
function createBaseCreatePersonalAccessTokenRequest() {
    return { token: undefined };
}
export const CreatePersonalAccessTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== undefined) {
            PersonalAccessToken.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePersonalAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = PersonalAccessToken.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? PersonalAccessToken.fromJSON(object.token) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? PersonalAccessToken.toJSON(message.token) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreatePersonalAccessTokenRequest();
        message.token = (object.token !== undefined && object.token !== null)
            ? PersonalAccessToken.fromPartial(object.token)
            : undefined;
        return message;
    },
};
function createBaseCreatePersonalAccessTokenResponse() {
    return { token: undefined };
}
export const CreatePersonalAccessTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== undefined) {
            PersonalAccessToken.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePersonalAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = PersonalAccessToken.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? PersonalAccessToken.fromJSON(object.token) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? PersonalAccessToken.toJSON(message.token) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreatePersonalAccessTokenResponse();
        message.token = (object.token !== undefined && object.token !== null)
            ? PersonalAccessToken.fromPartial(object.token)
            : undefined;
        return message;
    },
};
function createBaseGetPersonalAccessTokenRequest() {
    return { id: "" };
}
export const GetPersonalAccessTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPersonalAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetPersonalAccessTokenRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetPersonalAccessTokenResponse() {
    return { token: undefined };
}
export const GetPersonalAccessTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== undefined) {
            PersonalAccessToken.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPersonalAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = PersonalAccessToken.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? PersonalAccessToken.fromJSON(object.token) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? PersonalAccessToken.toJSON(message.token) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetPersonalAccessTokenResponse();
        message.token = (object.token !== undefined && object.token !== null)
            ? PersonalAccessToken.fromPartial(object.token)
            : undefined;
        return message;
    },
};
function createBaseListPersonalAccessTokensRequest() {
    return { pagination: undefined };
}
export const ListPersonalAccessTokensRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPersonalAccessTokensRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseListPersonalAccessTokensRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseListPersonalAccessTokensResponse() {
    return { tokens: [], totalResults: 0 };
}
export const ListPersonalAccessTokensResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tokens) {
            PersonalAccessToken.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalResults !== 0) {
            writer.uint32(16).int64(message.totalResults);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPersonalAccessTokensResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens.push(PersonalAccessToken.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalResults = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            tokens: Array.isArray(object === null || object === void 0 ? void 0 : object.tokens) ? object.tokens.map((e) => PersonalAccessToken.fromJSON(e)) : [],
            totalResults: isSet(object.totalResults) ? Number(object.totalResults) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => e ? PersonalAccessToken.toJSON(e) : undefined);
        }
        else {
            obj.tokens = [];
        }
        message.totalResults !== undefined && (obj.totalResults = Math.round(message.totalResults));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListPersonalAccessTokensResponse();
        message.tokens = ((_a = object.tokens) === null || _a === void 0 ? void 0 : _a.map((e) => PersonalAccessToken.fromPartial(e))) || [];
        message.totalResults = (_b = object.totalResults) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseRegeneratePersonalAccessTokenRequest() {
    return { id: "", expirationTime: undefined };
}
export const RegeneratePersonalAccessTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.expirationTime !== undefined) {
            Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegeneratePersonalAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRegeneratePersonalAccessTokenRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.expirationTime = (_b = object.expirationTime) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseRegeneratePersonalAccessTokenResponse() {
    return { token: undefined };
}
export const RegeneratePersonalAccessTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== undefined) {
            PersonalAccessToken.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegeneratePersonalAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = PersonalAccessToken.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? PersonalAccessToken.fromJSON(object.token) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? PersonalAccessToken.toJSON(message.token) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseRegeneratePersonalAccessTokenResponse();
        message.token = (object.token !== undefined && object.token !== null)
            ? PersonalAccessToken.fromPartial(object.token)
            : undefined;
        return message;
    },
};
function createBaseUpdatePersonalAccessTokenRequest() {
    return { token: undefined, updateMask: undefined };
}
export const UpdatePersonalAccessTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== undefined) {
            PersonalAccessToken.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateMask !== undefined) {
            FieldMask.encode(FieldMask.wrap(message.updateMask), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePersonalAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = PersonalAccessToken.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.updateMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            token: isSet(object.token) ? PersonalAccessToken.fromJSON(object.token) : undefined,
            updateMask: isSet(object.updateMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? PersonalAccessToken.toJSON(message.token) : undefined);
        message.updateMask !== undefined && (obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask)));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdatePersonalAccessTokenRequest();
        message.token = (object.token !== undefined && object.token !== null)
            ? PersonalAccessToken.fromPartial(object.token)
            : undefined;
        message.updateMask = (_a = object.updateMask) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseUpdatePersonalAccessTokenResponse() {
    return { token: undefined };
}
export const UpdatePersonalAccessTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== undefined) {
            PersonalAccessToken.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePersonalAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = PersonalAccessToken.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? PersonalAccessToken.fromJSON(object.token) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? PersonalAccessToken.toJSON(message.token) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdatePersonalAccessTokenResponse();
        message.token = (object.token !== undefined && object.token !== null)
            ? PersonalAccessToken.fromPartial(object.token)
            : undefined;
        return message;
    },
};
function createBaseDeletePersonalAccessTokenRequest() {
    return { id: "" };
}
export const DeletePersonalAccessTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePersonalAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeletePersonalAccessTokenRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeletePersonalAccessTokenResponse() {
    return {};
}
export const DeletePersonalAccessTokenResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePersonalAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseDeletePersonalAccessTokenResponse();
        return message;
    },
};
export const TokensServiceService = {
    /** CreatePersonalAccessTokenRequest creates a new token. */
    createPersonalAccessToken: {
        path: "/gitpod.experimental.v1.TokensService/CreatePersonalAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreatePersonalAccessTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => CreatePersonalAccessTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(CreatePersonalAccessTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => CreatePersonalAccessTokenResponse.decode(value),
    },
    /** ListPersonalAccessTokens returns token by ID. */
    getPersonalAccessToken: {
        path: "/gitpod.experimental.v1.TokensService/GetPersonalAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetPersonalAccessTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => GetPersonalAccessTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetPersonalAccessTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => GetPersonalAccessTokenResponse.decode(value),
    },
    /** ListPersonalAccessTokens returns a list of tokens. */
    listPersonalAccessTokens: {
        path: "/gitpod.experimental.v1.TokensService/ListPersonalAccessTokens",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListPersonalAccessTokensRequest.encode(value).finish()),
        requestDeserialize: (value) => ListPersonalAccessTokensRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListPersonalAccessTokensResponse.encode(value).finish()),
        responseDeserialize: (value) => ListPersonalAccessTokensResponse.decode(value),
    },
    /** RegeneratePersonalAccessToken generates a new token and replaces the previous one. */
    regeneratePersonalAccessToken: {
        path: "/gitpod.experimental.v1.TokensService/RegeneratePersonalAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(RegeneratePersonalAccessTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => RegeneratePersonalAccessTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(RegeneratePersonalAccessTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => RegeneratePersonalAccessTokenResponse.decode(value),
    },
    /** UpdatePersonalAccessToken updates writable properties of a PersonalAccessToken. */
    updatePersonalAccessToken: {
        path: "/gitpod.experimental.v1.TokensService/UpdatePersonalAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdatePersonalAccessTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdatePersonalAccessTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(UpdatePersonalAccessTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => UpdatePersonalAccessTokenResponse.decode(value),
    },
    /** DeletePersonalAccessToken removes token by ID. */
    deletePersonalAccessToken: {
        path: "/gitpod.experimental.v1.TokensService/DeletePersonalAccessToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeletePersonalAccessTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => DeletePersonalAccessTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DeletePersonalAccessTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => DeletePersonalAccessTokenResponse.decode(value),
    },
};
export const TokensServiceClient = makeGenericClientConstructor(TokensServiceService, "gitpod.experimental.v1.TokensService");
var globalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tokens.pb.js.map