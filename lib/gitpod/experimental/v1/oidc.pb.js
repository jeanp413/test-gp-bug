/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/* eslint-disable */
import { makeGenericClientConstructor, } from "@grpc/grpc-js";
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Timestamp } from "../../../google/protobuf/timestamp.pb.js";
import { Pagination } from "./pagination.pb.js";
export const protobufPackage = "gitpod.experimental.v1";
function createBaseOIDCClientConfig() {
    return {
        id: "",
        organizationId: "",
        oidcConfig: undefined,
        oauth2Config: undefined,
        oauthOnly: false,
        idTokenSigningAlgValuesSupported: [],
        creationTime: undefined,
        status: undefined,
    };
}
export const OIDCClientConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== "") {
            writer.uint32(18).string(message.organizationId);
        }
        if (message.oidcConfig !== undefined) {
            OIDCConfig.encode(message.oidcConfig, writer.uint32(26).fork()).ldelim();
        }
        if (message.oauth2Config !== undefined) {
            OAuth2Config.encode(message.oauth2Config, writer.uint32(34).fork()).ldelim();
        }
        if (message.oauthOnly === true) {
            writer.uint32(40).bool(message.oauthOnly);
        }
        for (const v of message.idTokenSigningAlgValuesSupported) {
            writer.uint32(50).string(v);
        }
        if (message.creationTime !== undefined) {
            Timestamp.encode(toTimestamp(message.creationTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.status !== undefined) {
            OIDCClientConfigStatus.encode(message.status, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOIDCClientConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
                    break;
                case 3:
                    message.oidcConfig = OIDCConfig.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.oauth2Config = OAuth2Config.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.oauthOnly = reader.bool();
                    break;
                case 6:
                    message.idTokenSigningAlgValuesSupported.push(reader.string());
                    break;
                case 7:
                    message.creationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.status = OIDCClientConfigStatus.decode(reader, reader.uint32());
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
            organizationId: isSet(object.organizationId) ? String(object.organizationId) : "",
            oidcConfig: isSet(object.oidcConfig) ? OIDCConfig.fromJSON(object.oidcConfig) : undefined,
            oauth2Config: isSet(object.oauth2Config) ? OAuth2Config.fromJSON(object.oauth2Config) : undefined,
            oauthOnly: isSet(object.oauthOnly) ? Boolean(object.oauthOnly) : false,
            idTokenSigningAlgValuesSupported: Array.isArray(object === null || object === void 0 ? void 0 : object.idTokenSigningAlgValuesSupported)
                ? object.idTokenSigningAlgValuesSupported.map((e) => String(e))
                : [],
            creationTime: isSet(object.creationTime) ? fromJsonTimestamp(object.creationTime) : undefined,
            status: isSet(object.status) ? OIDCClientConfigStatus.fromJSON(object.status) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.oidcConfig !== undefined &&
            (obj.oidcConfig = message.oidcConfig ? OIDCConfig.toJSON(message.oidcConfig) : undefined);
        message.oauth2Config !== undefined &&
            (obj.oauth2Config = message.oauth2Config ? OAuth2Config.toJSON(message.oauth2Config) : undefined);
        message.oauthOnly !== undefined && (obj.oauthOnly = message.oauthOnly);
        if (message.idTokenSigningAlgValuesSupported) {
            obj.idTokenSigningAlgValuesSupported = message.idTokenSigningAlgValuesSupported.map((e) => e);
        }
        else {
            obj.idTokenSigningAlgValuesSupported = [];
        }
        message.creationTime !== undefined && (obj.creationTime = message.creationTime.toISOString());
        message.status !== undefined &&
            (obj.status = message.status ? OIDCClientConfigStatus.toJSON(message.status) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseOIDCClientConfig();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.organizationId = (_b = object.organizationId) !== null && _b !== void 0 ? _b : "";
        message.oidcConfig = (object.oidcConfig !== undefined && object.oidcConfig !== null)
            ? OIDCConfig.fromPartial(object.oidcConfig)
            : undefined;
        message.oauth2Config = (object.oauth2Config !== undefined && object.oauth2Config !== null)
            ? OAuth2Config.fromPartial(object.oauth2Config)
            : undefined;
        message.oauthOnly = (_c = object.oauthOnly) !== null && _c !== void 0 ? _c : false;
        message.idTokenSigningAlgValuesSupported = ((_d = object.idTokenSigningAlgValuesSupported) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        message.creationTime = (_e = object.creationTime) !== null && _e !== void 0 ? _e : undefined;
        message.status = (object.status !== undefined && object.status !== null)
            ? OIDCClientConfigStatus.fromPartial(object.status)
            : undefined;
        return message;
    },
};
function createBaseOIDCConfig() {
    return { issuer: "", jwks: "", jwksUrl: "", hints: undefined, overrideClaimMapping: undefined };
}
export const OIDCConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.jwks !== "") {
            writer.uint32(18).string(message.jwks);
        }
        if (message.jwksUrl !== "") {
            writer.uint32(26).string(message.jwksUrl);
        }
        if (message.hints !== undefined) {
            ConsentScreenHints.encode(message.hints, writer.uint32(34).fork()).ldelim();
        }
        if (message.overrideClaimMapping !== undefined) {
            ClaimMappingOverride.encode(message.overrideClaimMapping, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOIDCConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.issuer = reader.string();
                    break;
                case 2:
                    message.jwks = reader.string();
                    break;
                case 3:
                    message.jwksUrl = reader.string();
                    break;
                case 4:
                    message.hints = ConsentScreenHints.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.overrideClaimMapping = ClaimMappingOverride.decode(reader, reader.uint32());
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
            issuer: isSet(object.issuer) ? String(object.issuer) : "",
            jwks: isSet(object.jwks) ? String(object.jwks) : "",
            jwksUrl: isSet(object.jwksUrl) ? String(object.jwksUrl) : "",
            hints: isSet(object.hints) ? ConsentScreenHints.fromJSON(object.hints) : undefined,
            overrideClaimMapping: isSet(object.overrideClaimMapping)
                ? ClaimMappingOverride.fromJSON(object.overrideClaimMapping)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.issuer !== undefined && (obj.issuer = message.issuer);
        message.jwks !== undefined && (obj.jwks = message.jwks);
        message.jwksUrl !== undefined && (obj.jwksUrl = message.jwksUrl);
        message.hints !== undefined && (obj.hints = message.hints ? ConsentScreenHints.toJSON(message.hints) : undefined);
        message.overrideClaimMapping !== undefined && (obj.overrideClaimMapping = message.overrideClaimMapping
            ? ClaimMappingOverride.toJSON(message.overrideClaimMapping)
            : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseOIDCConfig();
        message.issuer = (_a = object.issuer) !== null && _a !== void 0 ? _a : "";
        message.jwks = (_b = object.jwks) !== null && _b !== void 0 ? _b : "";
        message.jwksUrl = (_c = object.jwksUrl) !== null && _c !== void 0 ? _c : "";
        message.hints = (object.hints !== undefined && object.hints !== null)
            ? ConsentScreenHints.fromPartial(object.hints)
            : undefined;
        message.overrideClaimMapping = (object.overrideClaimMapping !== undefined && object.overrideClaimMapping !== null)
            ? ClaimMappingOverride.fromPartial(object.overrideClaimMapping)
            : undefined;
        return message;
    },
};
function createBaseConsentScreenHints() {
    return { prompt: "", domainHint: "", loginHint: "" };
}
export const ConsentScreenHints = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.prompt !== "") {
            writer.uint32(10).string(message.prompt);
        }
        if (message.domainHint !== "") {
            writer.uint32(18).string(message.domainHint);
        }
        if (message.loginHint !== "") {
            writer.uint32(26).string(message.loginHint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsentScreenHints();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prompt = reader.string();
                    break;
                case 2:
                    message.domainHint = reader.string();
                    break;
                case 3:
                    message.loginHint = reader.string();
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
            prompt: isSet(object.prompt) ? String(object.prompt) : "",
            domainHint: isSet(object.domainHint) ? String(object.domainHint) : "",
            loginHint: isSet(object.loginHint) ? String(object.loginHint) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.prompt !== undefined && (obj.prompt = message.prompt);
        message.domainHint !== undefined && (obj.domainHint = message.domainHint);
        message.loginHint !== undefined && (obj.loginHint = message.loginHint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseConsentScreenHints();
        message.prompt = (_a = object.prompt) !== null && _a !== void 0 ? _a : "";
        message.domainHint = (_b = object.domainHint) !== null && _b !== void 0 ? _b : "";
        message.loginHint = (_c = object.loginHint) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseClaimMappingOverride() {
    return { claimEmailKey: "", claimGroupsKey: "", claimUsernameKey: "" };
}
export const ClaimMappingOverride = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.claimEmailKey !== "") {
            writer.uint32(10).string(message.claimEmailKey);
        }
        if (message.claimGroupsKey !== "") {
            writer.uint32(18).string(message.claimGroupsKey);
        }
        if (message.claimUsernameKey !== "") {
            writer.uint32(26).string(message.claimUsernameKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaimMappingOverride();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.claimEmailKey = reader.string();
                    break;
                case 2:
                    message.claimGroupsKey = reader.string();
                    break;
                case 3:
                    message.claimUsernameKey = reader.string();
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
            claimEmailKey: isSet(object.claimEmailKey) ? String(object.claimEmailKey) : "",
            claimGroupsKey: isSet(object.claimGroupsKey) ? String(object.claimGroupsKey) : "",
            claimUsernameKey: isSet(object.claimUsernameKey) ? String(object.claimUsernameKey) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.claimEmailKey !== undefined && (obj.claimEmailKey = message.claimEmailKey);
        message.claimGroupsKey !== undefined && (obj.claimGroupsKey = message.claimGroupsKey);
        message.claimUsernameKey !== undefined && (obj.claimUsernameKey = message.claimUsernameKey);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseClaimMappingOverride();
        message.claimEmailKey = (_a = object.claimEmailKey) !== null && _a !== void 0 ? _a : "";
        message.claimGroupsKey = (_b = object.claimGroupsKey) !== null && _b !== void 0 ? _b : "";
        message.claimUsernameKey = (_c = object.claimUsernameKey) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseOAuth2Config() {
    return {
        clientId: "",
        clientSecret: "",
        authorizationEndpoint: "",
        tokenEndpoint: "",
        scopes: [],
        userinfoEndpoint: "",
        userinfoKeys: undefined,
    };
}
export const OAuth2Config = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.clientSecret !== "") {
            writer.uint32(18).string(message.clientSecret);
        }
        if (message.authorizationEndpoint !== "") {
            writer.uint32(26).string(message.authorizationEndpoint);
        }
        if (message.tokenEndpoint !== "") {
            writer.uint32(34).string(message.tokenEndpoint);
        }
        for (const v of message.scopes) {
            writer.uint32(42).string(v);
        }
        if (message.userinfoEndpoint !== "") {
            writer.uint32(50).string(message.userinfoEndpoint);
        }
        if (message.userinfoKeys !== undefined) {
            UserInfoKeys.encode(message.userinfoKeys, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOAuth2Config();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.clientSecret = reader.string();
                    break;
                case 3:
                    message.authorizationEndpoint = reader.string();
                    break;
                case 4:
                    message.tokenEndpoint = reader.string();
                    break;
                case 5:
                    message.scopes.push(reader.string());
                    break;
                case 6:
                    message.userinfoEndpoint = reader.string();
                    break;
                case 7:
                    message.userinfoKeys = UserInfoKeys.decode(reader, reader.uint32());
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
            clientId: isSet(object.clientId) ? String(object.clientId) : "",
            clientSecret: isSet(object.clientSecret) ? String(object.clientSecret) : "",
            authorizationEndpoint: isSet(object.authorizationEndpoint) ? String(object.authorizationEndpoint) : "",
            tokenEndpoint: isSet(object.tokenEndpoint) ? String(object.tokenEndpoint) : "",
            scopes: Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => String(e)) : [],
            userinfoEndpoint: isSet(object.userinfoEndpoint) ? String(object.userinfoEndpoint) : "",
            userinfoKeys: isSet(object.userinfoKeys) ? UserInfoKeys.fromJSON(object.userinfoKeys) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.clientSecret !== undefined && (obj.clientSecret = message.clientSecret);
        message.authorizationEndpoint !== undefined && (obj.authorizationEndpoint = message.authorizationEndpoint);
        message.tokenEndpoint !== undefined && (obj.tokenEndpoint = message.tokenEndpoint);
        if (message.scopes) {
            obj.scopes = message.scopes.map((e) => e);
        }
        else {
            obj.scopes = [];
        }
        message.userinfoEndpoint !== undefined && (obj.userinfoEndpoint = message.userinfoEndpoint);
        message.userinfoKeys !== undefined &&
            (obj.userinfoKeys = message.userinfoKeys ? UserInfoKeys.toJSON(message.userinfoKeys) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseOAuth2Config();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.clientSecret = (_b = object.clientSecret) !== null && _b !== void 0 ? _b : "";
        message.authorizationEndpoint = (_c = object.authorizationEndpoint) !== null && _c !== void 0 ? _c : "";
        message.tokenEndpoint = (_d = object.tokenEndpoint) !== null && _d !== void 0 ? _d : "";
        message.scopes = ((_e = object.scopes) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.userinfoEndpoint = (_f = object.userinfoEndpoint) !== null && _f !== void 0 ? _f : "";
        message.userinfoKeys = (object.userinfoKeys !== undefined && object.userinfoKeys !== null)
            ? UserInfoKeys.fromPartial(object.userinfoKeys)
            : undefined;
        return message;
    },
};
function createBaseUserInfoKeys() {
    return { userinfoIdKey: "", userinfoNameKey: "" };
}
export const UserInfoKeys = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userinfoIdKey !== "") {
            writer.uint32(10).string(message.userinfoIdKey);
        }
        if (message.userinfoNameKey !== "") {
            writer.uint32(18).string(message.userinfoNameKey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserInfoKeys();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userinfoIdKey = reader.string();
                    break;
                case 2:
                    message.userinfoNameKey = reader.string();
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
            userinfoIdKey: isSet(object.userinfoIdKey) ? String(object.userinfoIdKey) : "",
            userinfoNameKey: isSet(object.userinfoNameKey) ? String(object.userinfoNameKey) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userinfoIdKey !== undefined && (obj.userinfoIdKey = message.userinfoIdKey);
        message.userinfoNameKey !== undefined && (obj.userinfoNameKey = message.userinfoNameKey);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserInfoKeys();
        message.userinfoIdKey = (_a = object.userinfoIdKey) !== null && _a !== void 0 ? _a : "";
        message.userinfoNameKey = (_b = object.userinfoNameKey) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseOIDCClientConfigStatus() {
    return {};
}
export const OIDCClientConfigStatus = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOIDCClientConfigStatus();
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
        const message = createBaseOIDCClientConfigStatus();
        return message;
    },
};
function createBaseCreateClientConfigRequest() {
    return { config: undefined, useDiscovery: false };
}
export const CreateClientConfigRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            OIDCClientConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        if (message.useDiscovery === true) {
            writer.uint32(16).bool(message.useDiscovery);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateClientConfigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = OIDCClientConfig.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.useDiscovery = reader.bool();
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
            config: isSet(object.config) ? OIDCClientConfig.fromJSON(object.config) : undefined,
            useDiscovery: isSet(object.useDiscovery) ? Boolean(object.useDiscovery) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? OIDCClientConfig.toJSON(message.config) : undefined);
        message.useDiscovery !== undefined && (obj.useDiscovery = message.useDiscovery);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateClientConfigRequest();
        message.config = (object.config !== undefined && object.config !== null)
            ? OIDCClientConfig.fromPartial(object.config)
            : undefined;
        message.useDiscovery = (_a = object.useDiscovery) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseCreateClientConfigResponse() {
    return { config: undefined };
}
export const CreateClientConfigResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            OIDCClientConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateClientConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = OIDCClientConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { config: isSet(object.config) ? OIDCClientConfig.fromJSON(object.config) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? OIDCClientConfig.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateClientConfigResponse();
        message.config = (object.config !== undefined && object.config !== null)
            ? OIDCClientConfig.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function createBaseGetClientConfigRequest() {
    return { id: "", organizationId: "" };
}
export const GetClientConfigRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== "") {
            writer.uint32(18).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetClientConfigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
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
            organizationId: isSet(object.organizationId) ? String(object.organizationId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetClientConfigRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.organizationId = (_b = object.organizationId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetClientConfigResponse() {
    return { config: undefined };
}
export const GetClientConfigResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            OIDCClientConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetClientConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = OIDCClientConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { config: isSet(object.config) ? OIDCClientConfig.fromJSON(object.config) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? OIDCClientConfig.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetClientConfigResponse();
        message.config = (object.config !== undefined && object.config !== null)
            ? OIDCClientConfig.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function createBaseListClientConfigsRequest() {
    return { organizationId: "", pagination: undefined };
}
export const ListClientConfigsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListClientConfigsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.organizationId = reader.string();
                    break;
                case 2:
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
        return {
            organizationId: isSet(object.organizationId) ? String(object.organizationId) : "",
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListClientConfigsRequest();
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseListClientConfigsResponse() {
    return { clientConfigs: [], totalResults: 0 };
}
export const ListClientConfigsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.clientConfigs) {
            OIDCClientConfig.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalResults !== 0) {
            writer.uint32(16).int64(message.totalResults);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListClientConfigsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientConfigs.push(OIDCClientConfig.decode(reader, reader.uint32()));
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
            clientConfigs: Array.isArray(object === null || object === void 0 ? void 0 : object.clientConfigs)
                ? object.clientConfigs.map((e) => OIDCClientConfig.fromJSON(e))
                : [],
            totalResults: isSet(object.totalResults) ? Number(object.totalResults) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clientConfigs) {
            obj.clientConfigs = message.clientConfigs.map((e) => e ? OIDCClientConfig.toJSON(e) : undefined);
        }
        else {
            obj.clientConfigs = [];
        }
        message.totalResults !== undefined && (obj.totalResults = Math.round(message.totalResults));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListClientConfigsResponse();
        message.clientConfigs = ((_a = object.clientConfigs) === null || _a === void 0 ? void 0 : _a.map((e) => OIDCClientConfig.fromPartial(e))) || [];
        message.totalResults = (_b = object.totalResults) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseUpdateClientConfigRequest() {
    return { config: undefined };
}
export const UpdateClientConfigRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            OIDCClientConfig.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateClientConfigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = OIDCClientConfig.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { config: isSet(object.config) ? OIDCClientConfig.fromJSON(object.config) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? OIDCClientConfig.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateClientConfigRequest();
        message.config = (object.config !== undefined && object.config !== null)
            ? OIDCClientConfig.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function createBaseUpdateClientConfigResponse() {
    return {};
}
export const UpdateClientConfigResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateClientConfigResponse();
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
        const message = createBaseUpdateClientConfigResponse();
        return message;
    },
};
function createBaseDeleteClientConfigRequest() {
    return { id: "", organizationId: "" };
}
export const DeleteClientConfigRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.organizationId !== "") {
            writer.uint32(18).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteClientConfigRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.organizationId = reader.string();
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
            organizationId: isSet(object.organizationId) ? String(object.organizationId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.organizationId !== undefined && (obj.organizationId = message.organizationId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteClientConfigRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.organizationId = (_b = object.organizationId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteClientConfigResponse() {
    return {};
}
export const DeleteClientConfigResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteClientConfigResponse();
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
        const message = createBaseDeleteClientConfigResponse();
        return message;
    },
};
export const OIDCServiceService = {
    /** Creates a new OIDC client configuration. */
    createClientConfig: {
        path: "/gitpod.experimental.v1.OIDCService/CreateClientConfig",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateClientConfigRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateClientConfigRequest.decode(value),
        responseSerialize: (value) => Buffer.from(CreateClientConfigResponse.encode(value).finish()),
        responseDeserialize: (value) => CreateClientConfigResponse.decode(value),
    },
    /** Retrieves an OIDC client configuration by ID. */
    getClientConfig: {
        path: "/gitpod.experimental.v1.OIDCService/GetClientConfig",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetClientConfigRequest.encode(value).finish()),
        requestDeserialize: (value) => GetClientConfigRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetClientConfigResponse.encode(value).finish()),
        responseDeserialize: (value) => GetClientConfigResponse.decode(value),
    },
    /** Lists OIDC client configurations. */
    listClientConfigs: {
        path: "/gitpod.experimental.v1.OIDCService/ListClientConfigs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListClientConfigsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListClientConfigsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListClientConfigsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListClientConfigsResponse.decode(value),
    },
    /** Updates modifiable properties of an existing OIDC client configuration. */
    updateClientConfig: {
        path: "/gitpod.experimental.v1.OIDCService/UpdateClientConfig",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateClientConfigRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateClientConfigRequest.decode(value),
        responseSerialize: (value) => Buffer.from(UpdateClientConfigResponse.encode(value).finish()),
        responseDeserialize: (value) => UpdateClientConfigResponse.decode(value),
    },
    /** Removes a OIDC client configuration by ID. */
    deleteClientConfig: {
        path: "/gitpod.experimental.v1.OIDCService/DeleteClientConfig",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteClientConfigRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteClientConfigRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DeleteClientConfigResponse.encode(value).finish()),
        responseDeserialize: (value) => DeleteClientConfigResponse.decode(value),
    },
};
export const OIDCServiceClient = makeGenericClientConstructor(OIDCServiceService, "gitpod.experimental.v1.OIDCService");
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
//# sourceMappingURL=oidc.pb.js.map