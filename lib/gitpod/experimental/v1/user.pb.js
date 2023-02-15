/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/* eslint-disable */
import { makeGenericClientConstructor, } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";
import { Timestamp } from "../../../google/protobuf/timestamp.pb.js";
export const protobufPackage = "gitpod.experimental.v1";
function createBaseUser() {
    return { id: "", name: "", avatarUrl: "", createdAt: undefined };
}
export const User = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.avatarUrl !== "") {
            writer.uint32(26).string(message.avatarUrl);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUser();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.avatarUrl = reader.string();
                    break;
                case 5:
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
            name: isSet(object.name) ? String(object.name) : "",
            avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUser();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.avatarUrl = (_c = object.avatarUrl) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseSSHKey() {
    return { id: "", name: "", key: "", createdAt: undefined };
}
export const SSHKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.key !== "") {
            writer.uint32(26).string(message.key);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSSHKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
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
            name: isSet(object.name) ? String(object.name) : "",
            key: isSet(object.key) ? String(object.key) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.key !== undefined && (obj.key = message.key);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSSHKey();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : "";
        message.createdAt = (_d = object.createdAt) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBaseGetAuthenticatedUserRequest() {
    return {};
}
export const GetAuthenticatedUserRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthenticatedUserRequest();
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
        const message = createBaseGetAuthenticatedUserRequest();
        return message;
    },
};
function createBaseGetAuthenticatedUserResponse() {
    return { user: undefined };
}
export const GetAuthenticatedUserResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.user !== undefined) {
            User.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthenticatedUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user = User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined && (obj.user = message.user ? User.toJSON(message.user) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetAuthenticatedUserResponse();
        message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseListSSHKeysRequest() {
    return {};
}
export const ListSSHKeysRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListSSHKeysRequest();
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
        const message = createBaseListSSHKeysRequest();
        return message;
    },
};
function createBaseListSSHKeysResponse() {
    return { keys: [] };
}
export const ListSSHKeysResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.keys) {
            SSHKey.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListSSHKeysResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keys.push(SSHKey.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { keys: Array.isArray(object === null || object === void 0 ? void 0 : object.keys) ? object.keys.map((e) => SSHKey.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.keys) {
            obj.keys = message.keys.map((e) => e ? SSHKey.toJSON(e) : undefined);
        }
        else {
            obj.keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListSSHKeysResponse();
        message.keys = ((_a = object.keys) === null || _a === void 0 ? void 0 : _a.map((e) => SSHKey.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCreateSSHKeyRequest() {
    return { name: "", key: "" };
}
export const CreateSSHKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.key !== "") {
            writer.uint32(18).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSSHKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.key = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { name: isSet(object.name) ? String(object.name) : "", key: isSet(object.key) ? String(object.key) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateSSHKeyRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.key = (_b = object.key) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreateSSHKeyResponse() {
    return { key: undefined };
}
export const CreateSSHKeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== undefined) {
            SSHKey.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateSSHKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = SSHKey.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? SSHKey.fromJSON(object.key) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key ? SSHKey.toJSON(message.key) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateSSHKeyResponse();
        message.key = (object.key !== undefined && object.key !== null) ? SSHKey.fromPartial(object.key) : undefined;
        return message;
    },
};
function createBaseGetSSHKeyRequest() {
    return { keyId: "" };
}
export const GetSSHKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSSHKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { keyId: isSet(object.keyId) ? String(object.keyId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetSSHKeyRequest();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetSSHKeyResponse() {
    return { key: undefined };
}
export const GetSSHKeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== undefined) {
            SSHKey.encode(message.key, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSSHKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = SSHKey.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { key: isSet(object.key) ? SSHKey.fromJSON(object.key) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key ? SSHKey.toJSON(message.key) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetSSHKeyResponse();
        message.key = (object.key !== undefined && object.key !== null) ? SSHKey.fromPartial(object.key) : undefined;
        return message;
    },
};
function createBaseDeleteSSHKeyRequest() {
    return { keyId: "" };
}
export const DeleteSSHKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.keyId !== "") {
            writer.uint32(10).string(message.keyId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteSSHKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.keyId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { keyId: isSet(object.keyId) ? String(object.keyId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.keyId !== undefined && (obj.keyId = message.keyId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteSSHKeyRequest();
        message.keyId = (_a = object.keyId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteSSHKeyResponse() {
    return {};
}
export const DeleteSSHKeyResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteSSHKeyResponse();
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
        const message = createBaseDeleteSSHKeyResponse();
        return message;
    },
};
function createBaseGetGitTokenRequest() {
    return { host: "" };
}
export const GetGitTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.host !== "") {
            writer.uint32(10).string(message.host);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetGitTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { host: isSet(object.host) ? String(object.host) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.host !== undefined && (obj.host = message.host);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetGitTokenRequest();
        message.host = (_a = object.host) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetGitTokenResponse() {
    return { token: undefined };
}
export const GetGitTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== undefined) {
            GitToken.encode(message.token, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetGitTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = GitToken.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? GitToken.fromJSON(object.token) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token ? GitToken.toJSON(message.token) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetGitTokenResponse();
        message.token = (object.token !== undefined && object.token !== null)
            ? GitToken.fromPartial(object.token)
            : undefined;
        return message;
    },
};
function createBaseGitToken() {
    return { expiryDate: "", idToken: "", refreshToken: "", scopes: [], updateDate: "", username: "", value: "" };
}
export const GitToken = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.expiryDate !== "") {
            writer.uint32(10).string(message.expiryDate);
        }
        if (message.idToken !== "") {
            writer.uint32(18).string(message.idToken);
        }
        if (message.refreshToken !== "") {
            writer.uint32(26).string(message.refreshToken);
        }
        for (const v of message.scopes) {
            writer.uint32(34).string(v);
        }
        if (message.updateDate !== "") {
            writer.uint32(42).string(message.updateDate);
        }
        if (message.username !== "") {
            writer.uint32(50).string(message.username);
        }
        if (message.value !== "") {
            writer.uint32(58).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGitToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.expiryDate = reader.string();
                    break;
                case 2:
                    message.idToken = reader.string();
                    break;
                case 3:
                    message.refreshToken = reader.string();
                    break;
                case 4:
                    message.scopes.push(reader.string());
                    break;
                case 5:
                    message.updateDate = reader.string();
                    break;
                case 6:
                    message.username = reader.string();
                    break;
                case 7:
                    message.value = reader.string();
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
            expiryDate: isSet(object.expiryDate) ? String(object.expiryDate) : "",
            idToken: isSet(object.idToken) ? String(object.idToken) : "",
            refreshToken: isSet(object.refreshToken) ? String(object.refreshToken) : "",
            scopes: Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => String(e)) : [],
            updateDate: isSet(object.updateDate) ? String(object.updateDate) : "",
            username: isSet(object.username) ? String(object.username) : "",
            value: isSet(object.value) ? String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.expiryDate !== undefined && (obj.expiryDate = message.expiryDate);
        message.idToken !== undefined && (obj.idToken = message.idToken);
        message.refreshToken !== undefined && (obj.refreshToken = message.refreshToken);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        message.updateDate !== undefined && (obj.updateDate = message.updateDate);
        message.username !== undefined && (obj.username = message.username);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseGitToken();
        message.expiryDate = (_a = object.expiryDate) !== null && _a !== void 0 ? _a : "";
        message.idToken = (_b = object.idToken) !== null && _b !== void 0 ? _b : "";
        message.refreshToken = (_c = object.refreshToken) !== null && _c !== void 0 ? _c : "";
        message.scopes = ((_d = object.scopes) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.updateDate = (_e = object.updateDate) !== null && _e !== void 0 ? _e : "";
        message.username = (_f = object.username) !== null && _f !== void 0 ? _f : "";
        message.value = (_g = object.value) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
export const UserServiceService = {
    /** GetAuthenticatedUser gets the user info. */
    getAuthenticatedUser: {
        path: "/gitpod.experimental.v1.UserService/GetAuthenticatedUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetAuthenticatedUserRequest.encode(value).finish()),
        requestDeserialize: (value) => GetAuthenticatedUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetAuthenticatedUserResponse.encode(value).finish()),
        responseDeserialize: (value) => GetAuthenticatedUserResponse.decode(value),
    },
    /** ListSSHKeys lists the public SSH keys. */
    listSSHKeys: {
        path: "/gitpod.experimental.v1.UserService/ListSSHKeys",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListSSHKeysRequest.encode(value).finish()),
        requestDeserialize: (value) => ListSSHKeysRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListSSHKeysResponse.encode(value).finish()),
        responseDeserialize: (value) => ListSSHKeysResponse.decode(value),
    },
    /** CreateSSHKey adds a public SSH key. */
    createSSHKey: {
        path: "/gitpod.experimental.v1.UserService/CreateSSHKey",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateSSHKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateSSHKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(CreateSSHKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => CreateSSHKeyResponse.decode(value),
    },
    /** GetSSHKey retrieves an ssh key by ID. */
    getSSHKey: {
        path: "/gitpod.experimental.v1.UserService/GetSSHKey",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetSSHKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => GetSSHKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetSSHKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => GetSSHKeyResponse.decode(value),
    },
    /** DeleteSSHKey removes a public SSH key. */
    deleteSSHKey: {
        path: "/gitpod.experimental.v1.UserService/DeleteSSHKey",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteSSHKeyRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteSSHKeyRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DeleteSSHKeyResponse.encode(value).finish()),
        responseDeserialize: (value) => DeleteSSHKeyResponse.decode(value),
    },
    getGitToken: {
        path: "/gitpod.experimental.v1.UserService/GetGitToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetGitTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => GetGitTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetGitTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => GetGitTokenResponse.decode(value),
    },
};
export const UserServiceClient = makeGenericClientConstructor(UserServiceService, "gitpod.experimental.v1.UserService");
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
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=user.pb.js.map