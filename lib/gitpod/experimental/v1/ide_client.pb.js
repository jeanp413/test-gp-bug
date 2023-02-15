/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/* eslint-disable */
import { makeGenericClientConstructor, } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";
export const protobufPackage = "gitpod.experimental.v1";
function createBaseSendHeartbeatRequest() {
    return { workspaceId: "" };
}
export const SendHeartbeatRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workspaceId !== "") {
            writer.uint32(10).string(message.workspaceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendHeartbeatRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workspaceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { workspaceId: isSet(object.workspaceId) ? String(object.workspaceId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.workspaceId !== undefined && (obj.workspaceId = message.workspaceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSendHeartbeatRequest();
        message.workspaceId = (_a = object.workspaceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSendHeartbeatResponse() {
    return {};
}
export const SendHeartbeatResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendHeartbeatResponse();
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
        const message = createBaseSendHeartbeatResponse();
        return message;
    },
};
function createBaseSendDidCloseRequest() {
    return { workspaceId: "" };
}
export const SendDidCloseRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workspaceId !== "") {
            writer.uint32(10).string(message.workspaceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendDidCloseRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workspaceId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { workspaceId: isSet(object.workspaceId) ? String(object.workspaceId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.workspaceId !== undefined && (obj.workspaceId = message.workspaceId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSendDidCloseRequest();
        message.workspaceId = (_a = object.workspaceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSendDidCloseResponse() {
    return {};
}
export const SendDidCloseResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendDidCloseResponse();
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
        const message = createBaseSendDidCloseResponse();
        return message;
    },
};
export const IDEClientServiceService = {
    /** SendHeartbeat sends a clientheartbeat signal for a running workspace. */
    sendHeartbeat: {
        path: "/gitpod.experimental.v1.IDEClientService/SendHeartbeat",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SendHeartbeatRequest.encode(value).finish()),
        requestDeserialize: (value) => SendHeartbeatRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SendHeartbeatResponse.encode(value).finish()),
        responseDeserialize: (value) => SendHeartbeatResponse.decode(value),
    },
    /** SendDidClose sends a client close signal for a running workspace. */
    sendDidClose: {
        path: "/gitpod.experimental.v1.IDEClientService/SendDidClose",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SendDidCloseRequest.encode(value).finish()),
        requestDeserialize: (value) => SendDidCloseRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SendDidCloseResponse.encode(value).finish()),
        responseDeserialize: (value) => SendDidCloseResponse.decode(value),
    },
};
export const IDEClientServiceClient = makeGenericClientConstructor(IDEClientServiceService, "gitpod.experimental.v1.IDEClientService");
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=ide_client.pb.js.map