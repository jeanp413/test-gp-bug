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
/** PortPolicy defines the accssbility policy of a workspace port is guarded by an authentication in the proxy */
export var PortPolicy;
(function (PortPolicy) {
    PortPolicy["PORT_POLICY_UNSPECIFIED"] = "PORT_POLICY_UNSPECIFIED";
    /** PORT_POLICY_PRIVATE - Private means the port is accessible by the workspace owner only using the workspace port URL */
    PortPolicy["PORT_POLICY_PRIVATE"] = "PORT_POLICY_PRIVATE";
    /** PORT_POLICY_PUBLIC - Public means the port is accessible by everybody using the workspace port URL */
    PortPolicy["PORT_POLICY_PUBLIC"] = "PORT_POLICY_PUBLIC";
    PortPolicy["UNRECOGNIZED"] = "UNRECOGNIZED";
})(PortPolicy || (PortPolicy = {}));
export function portPolicyFromJSON(object) {
    switch (object) {
        case 0:
        case "PORT_POLICY_UNSPECIFIED":
            return PortPolicy.PORT_POLICY_UNSPECIFIED;
        case 1:
        case "PORT_POLICY_PRIVATE":
            return PortPolicy.PORT_POLICY_PRIVATE;
        case 2:
        case "PORT_POLICY_PUBLIC":
            return PortPolicy.PORT_POLICY_PUBLIC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return PortPolicy.UNRECOGNIZED;
    }
}
export function portPolicyToJSON(object) {
    switch (object) {
        case PortPolicy.PORT_POLICY_UNSPECIFIED:
            return "PORT_POLICY_UNSPECIFIED";
        case PortPolicy.PORT_POLICY_PRIVATE:
            return "PORT_POLICY_PRIVATE";
        case PortPolicy.PORT_POLICY_PUBLIC:
            return "PORT_POLICY_PUBLIC";
        case PortPolicy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export function portPolicyToNumber(object) {
    switch (object) {
        case PortPolicy.PORT_POLICY_UNSPECIFIED:
            return 0;
        case PortPolicy.PORT_POLICY_PRIVATE:
            return 1;
        case PortPolicy.PORT_POLICY_PUBLIC:
            return 2;
        case PortPolicy.UNRECOGNIZED:
        default:
            return -1;
    }
}
/** Admission level describes who can access a workspace instance and its ports. */
export var AdmissionLevel;
(function (AdmissionLevel) {
    AdmissionLevel["ADMISSION_LEVEL_UNSPECIFIED"] = "ADMISSION_LEVEL_UNSPECIFIED";
    /** ADMISSION_LEVEL_OWNER_ONLY - ADMISSION_LEVEL_OWNER_ONLY means the workspace can only be accessed using the owner token */
    AdmissionLevel["ADMISSION_LEVEL_OWNER_ONLY"] = "ADMISSION_LEVEL_OWNER_ONLY";
    /** ADMISSION_LEVEL_EVERYONE - ADMISSION_LEVEL_EVERYONE means the workspace (including ports) can be accessed by everyone. */
    AdmissionLevel["ADMISSION_LEVEL_EVERYONE"] = "ADMISSION_LEVEL_EVERYONE";
    AdmissionLevel["UNRECOGNIZED"] = "UNRECOGNIZED";
})(AdmissionLevel || (AdmissionLevel = {}));
export function admissionLevelFromJSON(object) {
    switch (object) {
        case 0:
        case "ADMISSION_LEVEL_UNSPECIFIED":
            return AdmissionLevel.ADMISSION_LEVEL_UNSPECIFIED;
        case 1:
        case "ADMISSION_LEVEL_OWNER_ONLY":
            return AdmissionLevel.ADMISSION_LEVEL_OWNER_ONLY;
        case 2:
        case "ADMISSION_LEVEL_EVERYONE":
            return AdmissionLevel.ADMISSION_LEVEL_EVERYONE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AdmissionLevel.UNRECOGNIZED;
    }
}
export function admissionLevelToJSON(object) {
    switch (object) {
        case AdmissionLevel.ADMISSION_LEVEL_UNSPECIFIED:
            return "ADMISSION_LEVEL_UNSPECIFIED";
        case AdmissionLevel.ADMISSION_LEVEL_OWNER_ONLY:
            return "ADMISSION_LEVEL_OWNER_ONLY";
        case AdmissionLevel.ADMISSION_LEVEL_EVERYONE:
            return "ADMISSION_LEVEL_EVERYONE";
        case AdmissionLevel.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export function admissionLevelToNumber(object) {
    switch (object) {
        case AdmissionLevel.ADMISSION_LEVEL_UNSPECIFIED:
            return 0;
        case AdmissionLevel.ADMISSION_LEVEL_OWNER_ONLY:
            return 1;
        case AdmissionLevel.ADMISSION_LEVEL_EVERYONE:
            return 2;
        case AdmissionLevel.UNRECOGNIZED:
        default:
            return -1;
    }
}
/**
 * Phase is a simple, high-level summary of where the workspace instance is in its lifecycle.
 * The phase is not intended to be a comprehensive rollup of observations of the workspace state,
 * nor is it intended to be a comprehensive state machine.
 * (based on  https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase)
 */
export var WorkspaceInstanceStatus_Phase;
(function (WorkspaceInstanceStatus_Phase) {
    /**
     * PHASE_UNSPECIFIED - Unknown indicates an issue within the workspace manager in that it cannot determine the actual phase of
     * a workspace. This phase is usually accompanied by an error.
     */
    WorkspaceInstanceStatus_Phase["PHASE_UNSPECIFIED"] = "PHASE_UNSPECIFIED";
    /**
     * PHASE_PREPARING - Preparing means that we haven't actually started the workspace instance just yet, but rather
     * are still preparing for launch.
     */
    WorkspaceInstanceStatus_Phase["PHASE_PREPARING"] = "PHASE_PREPARING";
    /** PHASE_IMAGEBUILD - ImageBuild indicates that there's an image build running for this workspace. */
    WorkspaceInstanceStatus_Phase["PHASE_IMAGEBUILD"] = "PHASE_IMAGEBUILD";
    /**
     * PHASE_PENDING - Pending means the workspace does not yet consume resources in the cluster, but rather is looking for
     * some space within the cluster. If for example the cluster needs to scale up to accomodate the
     * workspace, the workspace will be in Pending state until that happened.
     */
    WorkspaceInstanceStatus_Phase["PHASE_PENDING"] = "PHASE_PENDING";
    /**
     * PHASE_CREATING - Creating means the workspace is currently being created. That includes downloading the images required
     * to run the workspace over the network. The time spent in this phase varies widely and depends on the current
     * network speed, image size and cache states.
     */
    WorkspaceInstanceStatus_Phase["PHASE_CREATING"] = "PHASE_CREATING";
    /**
     * PHASE_INITIALIZING - Initializing is the phase in which the workspace is executing the appropriate workspace initializer (e.g. Git
     * clone or backup download). After this phase one can expect the workspace to either be Running or Failed.
     */
    WorkspaceInstanceStatus_Phase["PHASE_INITIALIZING"] = "PHASE_INITIALIZING";
    /**
     * PHASE_RUNNING - Running means the workspace is able to actively perform work, either by serving a user through Theia,
     * or as a headless workspace.
     */
    WorkspaceInstanceStatus_Phase["PHASE_RUNNING"] = "PHASE_RUNNING";
    /**
     * PHASE_INTERRUPTED - Interrupted is an exceptional state where the container should be running but is temporarily unavailable.
     * When in this state, we expect it to become running or stopping anytime soon.
     */
    WorkspaceInstanceStatus_Phase["PHASE_INTERRUPTED"] = "PHASE_INTERRUPTED";
    /** PHASE_STOPPING - Stopping means that the workspace is currently shutting down. It could go to stopped every moment. */
    WorkspaceInstanceStatus_Phase["PHASE_STOPPING"] = "PHASE_STOPPING";
    /** PHASE_STOPPED - Stopped means the workspace ended regularly because it was shut down. */
    WorkspaceInstanceStatus_Phase["PHASE_STOPPED"] = "PHASE_STOPPED";
    WorkspaceInstanceStatus_Phase["UNRECOGNIZED"] = "UNRECOGNIZED";
})(WorkspaceInstanceStatus_Phase || (WorkspaceInstanceStatus_Phase = {}));
export function workspaceInstanceStatus_PhaseFromJSON(object) {
    switch (object) {
        case 0:
        case "PHASE_UNSPECIFIED":
            return WorkspaceInstanceStatus_Phase.PHASE_UNSPECIFIED;
        case 1:
        case "PHASE_PREPARING":
            return WorkspaceInstanceStatus_Phase.PHASE_PREPARING;
        case 2:
        case "PHASE_IMAGEBUILD":
            return WorkspaceInstanceStatus_Phase.PHASE_IMAGEBUILD;
        case 3:
        case "PHASE_PENDING":
            return WorkspaceInstanceStatus_Phase.PHASE_PENDING;
        case 4:
        case "PHASE_CREATING":
            return WorkspaceInstanceStatus_Phase.PHASE_CREATING;
        case 5:
        case "PHASE_INITIALIZING":
            return WorkspaceInstanceStatus_Phase.PHASE_INITIALIZING;
        case 6:
        case "PHASE_RUNNING":
            return WorkspaceInstanceStatus_Phase.PHASE_RUNNING;
        case 7:
        case "PHASE_INTERRUPTED":
            return WorkspaceInstanceStatus_Phase.PHASE_INTERRUPTED;
        case 8:
        case "PHASE_STOPPING":
            return WorkspaceInstanceStatus_Phase.PHASE_STOPPING;
        case 9:
        case "PHASE_STOPPED":
            return WorkspaceInstanceStatus_Phase.PHASE_STOPPED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return WorkspaceInstanceStatus_Phase.UNRECOGNIZED;
    }
}
export function workspaceInstanceStatus_PhaseToJSON(object) {
    switch (object) {
        case WorkspaceInstanceStatus_Phase.PHASE_UNSPECIFIED:
            return "PHASE_UNSPECIFIED";
        case WorkspaceInstanceStatus_Phase.PHASE_PREPARING:
            return "PHASE_PREPARING";
        case WorkspaceInstanceStatus_Phase.PHASE_IMAGEBUILD:
            return "PHASE_IMAGEBUILD";
        case WorkspaceInstanceStatus_Phase.PHASE_PENDING:
            return "PHASE_PENDING";
        case WorkspaceInstanceStatus_Phase.PHASE_CREATING:
            return "PHASE_CREATING";
        case WorkspaceInstanceStatus_Phase.PHASE_INITIALIZING:
            return "PHASE_INITIALIZING";
        case WorkspaceInstanceStatus_Phase.PHASE_RUNNING:
            return "PHASE_RUNNING";
        case WorkspaceInstanceStatus_Phase.PHASE_INTERRUPTED:
            return "PHASE_INTERRUPTED";
        case WorkspaceInstanceStatus_Phase.PHASE_STOPPING:
            return "PHASE_STOPPING";
        case WorkspaceInstanceStatus_Phase.PHASE_STOPPED:
            return "PHASE_STOPPED";
        case WorkspaceInstanceStatus_Phase.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export function workspaceInstanceStatus_PhaseToNumber(object) {
    switch (object) {
        case WorkspaceInstanceStatus_Phase.PHASE_UNSPECIFIED:
            return 0;
        case WorkspaceInstanceStatus_Phase.PHASE_PREPARING:
            return 1;
        case WorkspaceInstanceStatus_Phase.PHASE_IMAGEBUILD:
            return 2;
        case WorkspaceInstanceStatus_Phase.PHASE_PENDING:
            return 3;
        case WorkspaceInstanceStatus_Phase.PHASE_CREATING:
            return 4;
        case WorkspaceInstanceStatus_Phase.PHASE_INITIALIZING:
            return 5;
        case WorkspaceInstanceStatus_Phase.PHASE_RUNNING:
            return 6;
        case WorkspaceInstanceStatus_Phase.PHASE_INTERRUPTED:
            return 7;
        case WorkspaceInstanceStatus_Phase.PHASE_STOPPING:
            return 8;
        case WorkspaceInstanceStatus_Phase.PHASE_STOPPED:
            return 9;
        case WorkspaceInstanceStatus_Phase.UNRECOGNIZED:
        default:
            return -1;
    }
}
function createBaseListWorkspacesRequest() {
    return { pagination: undefined, fieldMask: undefined };
}
export const ListWorkspacesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.fieldMask !== undefined) {
            FieldMask.encode(FieldMask.wrap(message.fieldMask), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListWorkspacesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = Pagination.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fieldMask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
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
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
            fieldMask: isSet(object.fieldMask) ? FieldMask.unwrap(FieldMask.fromJSON(object.fieldMask)) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        message.fieldMask !== undefined && (obj.fieldMask = FieldMask.toJSON(FieldMask.wrap(message.fieldMask)));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListWorkspacesRequest();
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        message.fieldMask = (_a = object.fieldMask) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseListWorkspacesResponse() {
    return { nextPageToken: "", result: [] };
}
export const ListWorkspacesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.nextPageToken !== "") {
            writer.uint32(10).string(message.nextPageToken);
        }
        for (const v of message.result) {
            Workspace.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListWorkspacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nextPageToken = reader.string();
                    break;
                case 2:
                    message.result.push(Workspace.decode(reader, reader.uint32()));
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
            nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : "",
            result: Array.isArray(object === null || object === void 0 ? void 0 : object.result) ? object.result.map((e) => Workspace.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        if (message.result) {
            obj.result = message.result.map((e) => e ? Workspace.toJSON(e) : undefined);
        }
        else {
            obj.result = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListWorkspacesResponse();
        message.nextPageToken = (_a = object.nextPageToken) !== null && _a !== void 0 ? _a : "";
        message.result = ((_b = object.result) === null || _b === void 0 ? void 0 : _b.map((e) => Workspace.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGetWorkspaceRequest() {
    return { workspaceId: "" };
}
export const GetWorkspaceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workspaceId !== "") {
            writer.uint32(10).string(message.workspaceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWorkspaceRequest();
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
        const message = createBaseGetWorkspaceRequest();
        message.workspaceId = (_a = object.workspaceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetWorkspaceResponse() {
    return { result: undefined };
}
export const GetWorkspaceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== undefined) {
            Workspace.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetWorkspaceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = Workspace.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? Workspace.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? Workspace.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetWorkspaceResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? Workspace.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseStreamWorkspaceStatusRequest() {
    return { workspaceId: "" };
}
export const StreamWorkspaceStatusRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workspaceId !== "") {
            writer.uint32(10).string(message.workspaceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamWorkspaceStatusRequest();
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
        const message = createBaseStreamWorkspaceStatusRequest();
        message.workspaceId = (_a = object.workspaceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseStreamWorkspaceStatusResponse() {
    return { result: undefined };
}
export const StreamWorkspaceStatusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== undefined) {
            WorkspaceStatus.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStreamWorkspaceStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = WorkspaceStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? WorkspaceStatus.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? WorkspaceStatus.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStreamWorkspaceStatusResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? WorkspaceStatus.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetOwnerTokenRequest() {
    return { workspaceId: "" };
}
export const GetOwnerTokenRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workspaceId !== "") {
            writer.uint32(10).string(message.workspaceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOwnerTokenRequest();
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
        const message = createBaseGetOwnerTokenRequest();
        message.workspaceId = (_a = object.workspaceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetOwnerTokenResponse() {
    return { token: "" };
}
export const GetOwnerTokenResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOwnerTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? String(object.token) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetOwnerTokenResponse();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateAndStartWorkspaceRequest() {
    return { idempotencyToken: "", contextUrl: undefined, prebuildId: undefined, startSpec: undefined };
}
export const CreateAndStartWorkspaceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.idempotencyToken !== "") {
            writer.uint32(10).string(message.idempotencyToken);
        }
        if (message.contextUrl !== undefined) {
            writer.uint32(18).string(message.contextUrl);
        }
        if (message.prebuildId !== undefined) {
            writer.uint32(26).string(message.prebuildId);
        }
        if (message.startSpec !== undefined) {
            StartWorkspaceSpec.encode(message.startSpec, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateAndStartWorkspaceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idempotencyToken = reader.string();
                    break;
                case 2:
                    message.contextUrl = reader.string();
                    break;
                case 3:
                    message.prebuildId = reader.string();
                    break;
                case 5:
                    message.startSpec = StartWorkspaceSpec.decode(reader, reader.uint32());
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
            idempotencyToken: isSet(object.idempotencyToken) ? String(object.idempotencyToken) : "",
            contextUrl: isSet(object.contextUrl) ? String(object.contextUrl) : undefined,
            prebuildId: isSet(object.prebuildId) ? String(object.prebuildId) : undefined,
            startSpec: isSet(object.startSpec) ? StartWorkspaceSpec.fromJSON(object.startSpec) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idempotencyToken !== undefined && (obj.idempotencyToken = message.idempotencyToken);
        message.contextUrl !== undefined && (obj.contextUrl = message.contextUrl);
        message.prebuildId !== undefined && (obj.prebuildId = message.prebuildId);
        message.startSpec !== undefined &&
            (obj.startSpec = message.startSpec ? StartWorkspaceSpec.toJSON(message.startSpec) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateAndStartWorkspaceRequest();
        message.idempotencyToken = (_a = object.idempotencyToken) !== null && _a !== void 0 ? _a : "";
        message.contextUrl = (_b = object.contextUrl) !== null && _b !== void 0 ? _b : undefined;
        message.prebuildId = (_c = object.prebuildId) !== null && _c !== void 0 ? _c : undefined;
        message.startSpec = (object.startSpec !== undefined && object.startSpec !== null)
            ? StartWorkspaceSpec.fromPartial(object.startSpec)
            : undefined;
        return message;
    },
};
function createBaseCreateAndStartWorkspaceResponse() {
    return { workspaceId: "" };
}
export const CreateAndStartWorkspaceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workspaceId !== "") {
            writer.uint32(10).string(message.workspaceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateAndStartWorkspaceResponse();
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
        const message = createBaseCreateAndStartWorkspaceResponse();
        message.workspaceId = (_a = object.workspaceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseStartWorkspaceRequest() {
    return { idempotencyToken: "", workspaceId: "", spec: undefined };
}
export const StartWorkspaceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.idempotencyToken !== "") {
            writer.uint32(10).string(message.idempotencyToken);
        }
        if (message.workspaceId !== "") {
            writer.uint32(18).string(message.workspaceId);
        }
        if (message.spec !== undefined) {
            StartWorkspaceSpec.encode(message.spec, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartWorkspaceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.idempotencyToken = reader.string();
                    break;
                case 2:
                    message.workspaceId = reader.string();
                    break;
                case 3:
                    message.spec = StartWorkspaceSpec.decode(reader, reader.uint32());
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
            idempotencyToken: isSet(object.idempotencyToken) ? String(object.idempotencyToken) : "",
            workspaceId: isSet(object.workspaceId) ? String(object.workspaceId) : "",
            spec: isSet(object.spec) ? StartWorkspaceSpec.fromJSON(object.spec) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.idempotencyToken !== undefined && (obj.idempotencyToken = message.idempotencyToken);
        message.workspaceId !== undefined && (obj.workspaceId = message.workspaceId);
        message.spec !== undefined && (obj.spec = message.spec ? StartWorkspaceSpec.toJSON(message.spec) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStartWorkspaceRequest();
        message.idempotencyToken = (_a = object.idempotencyToken) !== null && _a !== void 0 ? _a : "";
        message.workspaceId = (_b = object.workspaceId) !== null && _b !== void 0 ? _b : "";
        message.spec = (object.spec !== undefined && object.spec !== null)
            ? StartWorkspaceSpec.fromPartial(object.spec)
            : undefined;
        return message;
    },
};
function createBaseStartWorkspaceResponse() {
    return { instanceId: "", workspaceUrl: "" };
}
export const StartWorkspaceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.workspaceUrl !== "") {
            writer.uint32(18).string(message.workspaceUrl);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartWorkspaceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.workspaceUrl = reader.string();
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            workspaceUrl: isSet(object.workspaceUrl) ? String(object.workspaceUrl) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.workspaceUrl !== undefined && (obj.workspaceUrl = message.workspaceUrl);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStartWorkspaceResponse();
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.workspaceUrl = (_b = object.workspaceUrl) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseStopWorkspaceRequest() {
    return { workspaceId: "" };
}
export const StopWorkspaceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workspaceId !== "") {
            writer.uint32(10).string(message.workspaceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopWorkspaceRequest();
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
        const message = createBaseStopWorkspaceRequest();
        message.workspaceId = (_a = object.workspaceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseStopWorkspaceResponse() {
    return {};
}
export const StopWorkspaceResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStopWorkspaceResponse();
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
        const message = createBaseStopWorkspaceResponse();
        return message;
    },
};
function createBaseDeleteWorkspaceRequest() {
    return { workspaceId: "" };
}
export const DeleteWorkspaceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workspaceId !== "") {
            writer.uint32(10).string(message.workspaceId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteWorkspaceRequest();
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
        const message = createBaseDeleteWorkspaceRequest();
        message.workspaceId = (_a = object.workspaceId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteWorkspaceResponse() {
    return {};
}
export const DeleteWorkspaceResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteWorkspaceResponse();
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
        const message = createBaseDeleteWorkspaceResponse();
        return message;
    },
};
function createBaseWorkspace() {
    return { workspaceId: "", ownerId: "", projectId: "", context: undefined, description: "", status: undefined };
}
export const Workspace = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workspaceId !== "") {
            writer.uint32(10).string(message.workspaceId);
        }
        if (message.ownerId !== "") {
            writer.uint32(18).string(message.ownerId);
        }
        if (message.projectId !== "") {
            writer.uint32(26).string(message.projectId);
        }
        if (message.context !== undefined) {
            WorkspaceContext.encode(message.context, writer.uint32(34).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        if (message.status !== undefined) {
            WorkspaceStatus.encode(message.status, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspace();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workspaceId = reader.string();
                    break;
                case 2:
                    message.ownerId = reader.string();
                    break;
                case 3:
                    message.projectId = reader.string();
                    break;
                case 4:
                    message.context = WorkspaceContext.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                case 6:
                    message.status = WorkspaceStatus.decode(reader, reader.uint32());
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
            workspaceId: isSet(object.workspaceId) ? String(object.workspaceId) : "",
            ownerId: isSet(object.ownerId) ? String(object.ownerId) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            context: isSet(object.context) ? WorkspaceContext.fromJSON(object.context) : undefined,
            description: isSet(object.description) ? String(object.description) : "",
            status: isSet(object.status) ? WorkspaceStatus.fromJSON(object.status) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.workspaceId !== undefined && (obj.workspaceId = message.workspaceId);
        message.ownerId !== undefined && (obj.ownerId = message.ownerId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.context !== undefined &&
            (obj.context = message.context ? WorkspaceContext.toJSON(message.context) : undefined);
        message.description !== undefined && (obj.description = message.description);
        message.status !== undefined && (obj.status = message.status ? WorkspaceStatus.toJSON(message.status) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseWorkspace();
        message.workspaceId = (_a = object.workspaceId) !== null && _a !== void 0 ? _a : "";
        message.ownerId = (_b = object.ownerId) !== null && _b !== void 0 ? _b : "";
        message.projectId = (_c = object.projectId) !== null && _c !== void 0 ? _c : "";
        message.context = (object.context !== undefined && object.context !== null)
            ? WorkspaceContext.fromPartial(object.context)
            : undefined;
        message.description = (_d = object.description) !== null && _d !== void 0 ? _d : "";
        message.status = (object.status !== undefined && object.status !== null)
            ? WorkspaceStatus.fromPartial(object.status)
            : undefined;
        return message;
    },
};
function createBaseWorkspaceStatus() {
    return { instance: undefined };
}
export const WorkspaceStatus = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instance !== undefined) {
            WorkspaceInstance.encode(message.instance, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspaceStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instance = WorkspaceInstance.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { instance: isSet(object.instance) ? WorkspaceInstance.fromJSON(object.instance) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.instance !== undefined &&
            (obj.instance = message.instance ? WorkspaceInstance.toJSON(message.instance) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWorkspaceStatus();
        message.instance = (object.instance !== undefined && object.instance !== null)
            ? WorkspaceInstance.fromPartial(object.instance)
            : undefined;
        return message;
    },
};
function createBaseWorkspaceContext() {
    return { contextUrl: "", git: undefined, prebuild: undefined, snapshot: undefined };
}
export const WorkspaceContext = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contextUrl !== "") {
            writer.uint32(10).string(message.contextUrl);
        }
        if (message.git !== undefined) {
            WorkspaceContext_Git.encode(message.git, writer.uint32(18).fork()).ldelim();
        }
        if (message.prebuild !== undefined) {
            WorkspaceContext_Prebuild.encode(message.prebuild, writer.uint32(26).fork()).ldelim();
        }
        if (message.snapshot !== undefined) {
            WorkspaceContext_Snapshot.encode(message.snapshot, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspaceContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contextUrl = reader.string();
                    break;
                case 2:
                    message.git = WorkspaceContext_Git.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.prebuild = WorkspaceContext_Prebuild.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.snapshot = WorkspaceContext_Snapshot.decode(reader, reader.uint32());
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
            contextUrl: isSet(object.contextUrl) ? String(object.contextUrl) : "",
            git: isSet(object.git) ? WorkspaceContext_Git.fromJSON(object.git) : undefined,
            prebuild: isSet(object.prebuild) ? WorkspaceContext_Prebuild.fromJSON(object.prebuild) : undefined,
            snapshot: isSet(object.snapshot) ? WorkspaceContext_Snapshot.fromJSON(object.snapshot) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contextUrl !== undefined && (obj.contextUrl = message.contextUrl);
        message.git !== undefined && (obj.git = message.git ? WorkspaceContext_Git.toJSON(message.git) : undefined);
        message.prebuild !== undefined &&
            (obj.prebuild = message.prebuild ? WorkspaceContext_Prebuild.toJSON(message.prebuild) : undefined);
        message.snapshot !== undefined &&
            (obj.snapshot = message.snapshot ? WorkspaceContext_Snapshot.toJSON(message.snapshot) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWorkspaceContext();
        message.contextUrl = (_a = object.contextUrl) !== null && _a !== void 0 ? _a : "";
        message.git = (object.git !== undefined && object.git !== null)
            ? WorkspaceContext_Git.fromPartial(object.git)
            : undefined;
        message.prebuild = (object.prebuild !== undefined && object.prebuild !== null)
            ? WorkspaceContext_Prebuild.fromPartial(object.prebuild)
            : undefined;
        message.snapshot = (object.snapshot !== undefined && object.snapshot !== null)
            ? WorkspaceContext_Snapshot.fromPartial(object.snapshot)
            : undefined;
        return message;
    },
};
function createBaseWorkspaceContext_Git() {
    return { normalizedContextUrl: "", commit: "" };
}
export const WorkspaceContext_Git = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.normalizedContextUrl !== "") {
            writer.uint32(10).string(message.normalizedContextUrl);
        }
        if (message.commit !== "") {
            writer.uint32(18).string(message.commit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspaceContext_Git();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.normalizedContextUrl = reader.string();
                    break;
                case 2:
                    message.commit = reader.string();
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
            normalizedContextUrl: isSet(object.normalizedContextUrl) ? String(object.normalizedContextUrl) : "",
            commit: isSet(object.commit) ? String(object.commit) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.normalizedContextUrl !== undefined && (obj.normalizedContextUrl = message.normalizedContextUrl);
        message.commit !== undefined && (obj.commit = message.commit);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseWorkspaceContext_Git();
        message.normalizedContextUrl = (_a = object.normalizedContextUrl) !== null && _a !== void 0 ? _a : "";
        message.commit = (_b = object.commit) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseWorkspaceContext_Prebuild() {
    return { originalContext: undefined, prebuildId: "" };
}
export const WorkspaceContext_Prebuild = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.originalContext !== undefined) {
            WorkspaceContext_Git.encode(message.originalContext, writer.uint32(10).fork()).ldelim();
        }
        if (message.prebuildId !== "") {
            writer.uint32(18).string(message.prebuildId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspaceContext_Prebuild();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.originalContext = WorkspaceContext_Git.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.prebuildId = reader.string();
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
            originalContext: isSet(object.originalContext)
                ? WorkspaceContext_Git.fromJSON(object.originalContext)
                : undefined,
            prebuildId: isSet(object.prebuildId) ? String(object.prebuildId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.originalContext !== undefined &&
            (obj.originalContext = message.originalContext
                ? WorkspaceContext_Git.toJSON(message.originalContext)
                : undefined);
        message.prebuildId !== undefined && (obj.prebuildId = message.prebuildId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWorkspaceContext_Prebuild();
        message.originalContext = (object.originalContext !== undefined && object.originalContext !== null)
            ? WorkspaceContext_Git.fromPartial(object.originalContext)
            : undefined;
        message.prebuildId = (_a = object.prebuildId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseWorkspaceContext_Snapshot() {
    return { snapshotId: "" };
}
export const WorkspaceContext_Snapshot = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.snapshotId !== "") {
            writer.uint32(10).string(message.snapshotId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspaceContext_Snapshot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshotId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { snapshotId: isSet(object.snapshotId) ? String(object.snapshotId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.snapshotId !== undefined && (obj.snapshotId = message.snapshotId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWorkspaceContext_Snapshot();
        message.snapshotId = (_a = object.snapshotId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseWorkspaceInstance() {
    return { instanceId: "", workspaceId: "", createdAt: undefined, status: undefined };
}
export const WorkspaceInstance = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.instanceId !== "") {
            writer.uint32(10).string(message.instanceId);
        }
        if (message.workspaceId !== "") {
            writer.uint32(18).string(message.workspaceId);
        }
        if (message.createdAt !== undefined) {
            Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(26).fork()).ldelim();
        }
        if (message.status !== undefined) {
            WorkspaceInstanceStatus.encode(message.status, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspaceInstance();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.instanceId = reader.string();
                    break;
                case 2:
                    message.workspaceId = reader.string();
                    break;
                case 3:
                    message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.status = WorkspaceInstanceStatus.decode(reader, reader.uint32());
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
            instanceId: isSet(object.instanceId) ? String(object.instanceId) : "",
            workspaceId: isSet(object.workspaceId) ? String(object.workspaceId) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            status: isSet(object.status) ? WorkspaceInstanceStatus.fromJSON(object.status) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.instanceId !== undefined && (obj.instanceId = message.instanceId);
        message.workspaceId !== undefined && (obj.workspaceId = message.workspaceId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.status !== undefined &&
            (obj.status = message.status ? WorkspaceInstanceStatus.toJSON(message.status) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseWorkspaceInstance();
        message.instanceId = (_a = object.instanceId) !== null && _a !== void 0 ? _a : "";
        message.workspaceId = (_b = object.workspaceId) !== null && _b !== void 0 ? _b : "";
        message.createdAt = (_c = object.createdAt) !== null && _c !== void 0 ? _c : undefined;
        message.status = (object.status !== undefined && object.status !== null)
            ? WorkspaceInstanceStatus.fromPartial(object.status)
            : undefined;
        return message;
    },
};
function createBaseWorkspaceInstanceStatus() {
    return {
        statusVersion: 0,
        phase: WorkspaceInstanceStatus_Phase.PHASE_UNSPECIFIED,
        conditions: undefined,
        message: "",
        url: "",
        admission: AdmissionLevel.ADMISSION_LEVEL_UNSPECIFIED,
        ports: [],
    };
}
export const WorkspaceInstanceStatus = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.statusVersion !== 0) {
            writer.uint32(8).uint64(message.statusVersion);
        }
        if (message.phase !== WorkspaceInstanceStatus_Phase.PHASE_UNSPECIFIED) {
            writer.uint32(16).int32(workspaceInstanceStatus_PhaseToNumber(message.phase));
        }
        if (message.conditions !== undefined) {
            WorkspaceInstanceStatus_Conditions.encode(message.conditions, writer.uint32(26).fork()).ldelim();
        }
        if (message.message !== "") {
            writer.uint32(34).string(message.message);
        }
        if (message.url !== "") {
            writer.uint32(42).string(message.url);
        }
        if (message.admission !== AdmissionLevel.ADMISSION_LEVEL_UNSPECIFIED) {
            writer.uint32(48).int32(admissionLevelToNumber(message.admission));
        }
        for (const v of message.ports) {
            Port.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspaceInstanceStatus();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.statusVersion = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.phase = workspaceInstanceStatus_PhaseFromJSON(reader.int32());
                    break;
                case 3:
                    message.conditions = WorkspaceInstanceStatus_Conditions.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.message = reader.string();
                    break;
                case 5:
                    message.url = reader.string();
                    break;
                case 6:
                    message.admission = admissionLevelFromJSON(reader.int32());
                    break;
                case 7:
                    message.ports.push(Port.decode(reader, reader.uint32()));
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
            statusVersion: isSet(object.statusVersion) ? Number(object.statusVersion) : 0,
            phase: isSet(object.phase)
                ? workspaceInstanceStatus_PhaseFromJSON(object.phase)
                : WorkspaceInstanceStatus_Phase.PHASE_UNSPECIFIED,
            conditions: isSet(object.conditions) ? WorkspaceInstanceStatus_Conditions.fromJSON(object.conditions) : undefined,
            message: isSet(object.message) ? String(object.message) : "",
            url: isSet(object.url) ? String(object.url) : "",
            admission: isSet(object.admission)
                ? admissionLevelFromJSON(object.admission)
                : AdmissionLevel.ADMISSION_LEVEL_UNSPECIFIED,
            ports: Array.isArray(object === null || object === void 0 ? void 0 : object.ports) ? object.ports.map((e) => Port.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.statusVersion !== undefined && (obj.statusVersion = Math.round(message.statusVersion));
        message.phase !== undefined && (obj.phase = workspaceInstanceStatus_PhaseToJSON(message.phase));
        message.conditions !== undefined &&
            (obj.conditions = message.conditions ? WorkspaceInstanceStatus_Conditions.toJSON(message.conditions) : undefined);
        message.message !== undefined && (obj.message = message.message);
        message.url !== undefined && (obj.url = message.url);
        message.admission !== undefined && (obj.admission = admissionLevelToJSON(message.admission));
        if (message.ports) {
            obj.ports = message.ports.map((e) => e ? Port.toJSON(e) : undefined);
        }
        else {
            obj.ports = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseWorkspaceInstanceStatus();
        message.statusVersion = (_a = object.statusVersion) !== null && _a !== void 0 ? _a : 0;
        message.phase = (_b = object.phase) !== null && _b !== void 0 ? _b : WorkspaceInstanceStatus_Phase.PHASE_UNSPECIFIED;
        message.conditions = (object.conditions !== undefined && object.conditions !== null)
            ? WorkspaceInstanceStatus_Conditions.fromPartial(object.conditions)
            : undefined;
        message.message = (_c = object.message) !== null && _c !== void 0 ? _c : "";
        message.url = (_d = object.url) !== null && _d !== void 0 ? _d : "";
        message.admission = (_e = object.admission) !== null && _e !== void 0 ? _e : AdmissionLevel.ADMISSION_LEVEL_UNSPECIFIED;
        message.ports = ((_f = object.ports) === null || _f === void 0 ? void 0 : _f.map((e) => Port.fromPartial(e))) || [];
        return message;
    },
};
function createBaseWorkspaceInstanceStatus_Conditions() {
    return { failed: "", timeout: "", firstUserActivity: undefined, stoppedByRequest: undefined };
}
export const WorkspaceInstanceStatus_Conditions = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.failed !== "") {
            writer.uint32(10).string(message.failed);
        }
        if (message.timeout !== "") {
            writer.uint32(18).string(message.timeout);
        }
        if (message.firstUserActivity !== undefined) {
            Timestamp.encode(toTimestamp(message.firstUserActivity), writer.uint32(74).fork()).ldelim();
        }
        if (message.stoppedByRequest !== undefined) {
            writer.uint32(88).bool(message.stoppedByRequest);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspaceInstanceStatus_Conditions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.failed = reader.string();
                    break;
                case 2:
                    message.timeout = reader.string();
                    break;
                case 9:
                    message.firstUserActivity = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.stoppedByRequest = reader.bool();
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
            failed: isSet(object.failed) ? String(object.failed) : "",
            timeout: isSet(object.timeout) ? String(object.timeout) : "",
            firstUserActivity: isSet(object.firstUserActivity) ? fromJsonTimestamp(object.firstUserActivity) : undefined,
            stoppedByRequest: isSet(object.stoppedByRequest) ? Boolean(object.stoppedByRequest) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.failed !== undefined && (obj.failed = message.failed);
        message.timeout !== undefined && (obj.timeout = message.timeout);
        message.firstUserActivity !== undefined && (obj.firstUserActivity = message.firstUserActivity.toISOString());
        message.stoppedByRequest !== undefined && (obj.stoppedByRequest = message.stoppedByRequest);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseWorkspaceInstanceStatus_Conditions();
        message.failed = (_a = object.failed) !== null && _a !== void 0 ? _a : "";
        message.timeout = (_b = object.timeout) !== null && _b !== void 0 ? _b : "";
        message.firstUserActivity = (_c = object.firstUserActivity) !== null && _c !== void 0 ? _c : undefined;
        message.stoppedByRequest = (_d = object.stoppedByRequest) !== null && _d !== void 0 ? _d : undefined;
        return message;
    },
};
function createBasePort() {
    return { port: 0, policy: PortPolicy.PORT_POLICY_UNSPECIFIED, url: "" };
}
export const Port = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).uint64(message.port);
        }
        if (message.policy !== PortPolicy.PORT_POLICY_UNSPECIFIED) {
            writer.uint32(16).int32(portPolicyToNumber(message.policy));
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePort();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.policy = portPolicyFromJSON(reader.int32());
                    break;
                case 3:
                    message.url = reader.string();
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
            port: isSet(object.port) ? Number(object.port) : 0,
            policy: isSet(object.policy) ? portPolicyFromJSON(object.policy) : PortPolicy.PORT_POLICY_UNSPECIFIED,
            url: isSet(object.url) ? String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.policy !== undefined && (obj.policy = portPolicyToJSON(message.policy));
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePort();
        message.port = (_a = object.port) !== null && _a !== void 0 ? _a : 0;
        message.policy = (_b = object.policy) !== null && _b !== void 0 ? _b : PortPolicy.PORT_POLICY_UNSPECIFIED;
        message.url = (_c = object.url) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseStartWorkspaceSpec() {
    return {};
}
export const StartWorkspaceSpec = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStartWorkspaceSpec();
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
        const message = createBaseStartWorkspaceSpec();
        return message;
    },
};
function createBasePortSpec() {
    return { port: 0, policy: PortPolicy.PORT_POLICY_UNSPECIFIED };
}
export const PortSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port !== 0) {
            writer.uint32(8).uint64(message.port);
        }
        if (message.policy !== PortPolicy.PORT_POLICY_UNSPECIFIED) {
            writer.uint32(16).int32(portPolicyToNumber(message.policy));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePortSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.policy = portPolicyFromJSON(reader.int32());
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
            port: isSet(object.port) ? Number(object.port) : 0,
            policy: isSet(object.policy) ? portPolicyFromJSON(object.policy) : PortPolicy.PORT_POLICY_UNSPECIFIED,
        };
    },
    toJSON(message) {
        const obj = {};
        message.port !== undefined && (obj.port = Math.round(message.port));
        message.policy !== undefined && (obj.policy = portPolicyToJSON(message.policy));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePortSpec();
        message.port = (_a = object.port) !== null && _a !== void 0 ? _a : 0;
        message.policy = (_b = object.policy) !== null && _b !== void 0 ? _b : PortPolicy.PORT_POLICY_UNSPECIFIED;
        return message;
    },
};
function createBaseUpdatePortRequest() {
    return { workspaceId: "", port: undefined };
}
export const UpdatePortRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.workspaceId !== "") {
            writer.uint32(10).string(message.workspaceId);
        }
        if (message.port !== undefined) {
            PortSpec.encode(message.port, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePortRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.workspaceId = reader.string();
                    break;
                case 2:
                    message.port = PortSpec.decode(reader, reader.uint32());
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
            workspaceId: isSet(object.workspaceId) ? String(object.workspaceId) : "",
            port: isSet(object.port) ? PortSpec.fromJSON(object.port) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.workspaceId !== undefined && (obj.workspaceId = message.workspaceId);
        message.port !== undefined && (obj.port = message.port ? PortSpec.toJSON(message.port) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdatePortRequest();
        message.workspaceId = (_a = object.workspaceId) !== null && _a !== void 0 ? _a : "";
        message.port = (object.port !== undefined && object.port !== null) ? PortSpec.fromPartial(object.port) : undefined;
        return message;
    },
};
function createBaseUpdatePortResponse() {
    return {};
}
export const UpdatePortResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePortResponse();
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
        const message = createBaseUpdatePortResponse();
        return message;
    },
};
export const WorkspacesServiceService = {
    /** ListWorkspaces enumerates all workspaces belonging to the authenticated user. */
    listWorkspaces: {
        path: "/gitpod.experimental.v1.WorkspacesService/ListWorkspaces",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListWorkspacesRequest.encode(value).finish()),
        requestDeserialize: (value) => ListWorkspacesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListWorkspacesResponse.encode(value).finish()),
        responseDeserialize: (value) => ListWorkspacesResponse.decode(value),
    },
    /** GetWorkspace returns a single workspace. */
    getWorkspace: {
        path: "/gitpod.experimental.v1.WorkspacesService/GetWorkspace",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetWorkspaceRequest.encode(value).finish()),
        requestDeserialize: (value) => GetWorkspaceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetWorkspaceResponse.encode(value).finish()),
        responseDeserialize: (value) => GetWorkspaceResponse.decode(value),
    },
    /** StreamWorkspaceStatus returns workspace status once it changed. */
    streamWorkspaceStatus: {
        path: "/gitpod.experimental.v1.WorkspacesService/StreamWorkspaceStatus",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(StreamWorkspaceStatusRequest.encode(value).finish()),
        requestDeserialize: (value) => StreamWorkspaceStatusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(StreamWorkspaceStatusResponse.encode(value).finish()),
        responseDeserialize: (value) => StreamWorkspaceStatusResponse.decode(value),
    },
    /** GetOwnerToken returns an owner token. */
    getOwnerToken: {
        path: "/gitpod.experimental.v1.WorkspacesService/GetOwnerToken",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetOwnerTokenRequest.encode(value).finish()),
        requestDeserialize: (value) => GetOwnerTokenRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetOwnerTokenResponse.encode(value).finish()),
        responseDeserialize: (value) => GetOwnerTokenResponse.decode(value),
    },
    /** CreateAndStartWorkspace creates a new workspace and starts it. */
    createAndStartWorkspace: {
        path: "/gitpod.experimental.v1.WorkspacesService/CreateAndStartWorkspace",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateAndStartWorkspaceRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateAndStartWorkspaceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(CreateAndStartWorkspaceResponse.encode(value).finish()),
        responseDeserialize: (value) => CreateAndStartWorkspaceResponse.decode(value),
    },
    /**
     * StopWorkspace stops a running workspace (instance).
     * Errors:
     *   NOT_FOUND:           the workspace_id is unkown
     *   FAILED_PRECONDITION: if there's no running instance
     */
    stopWorkspace: {
        path: "/gitpod.experimental.v1.WorkspacesService/StopWorkspace",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(StopWorkspaceRequest.encode(value).finish()),
        requestDeserialize: (value) => StopWorkspaceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(StopWorkspaceResponse.encode(value).finish()),
        responseDeserialize: (value) => StopWorkspaceResponse.decode(value),
    },
    /**
     * DeleteWorkspace deletes a workspace.
     * When the workspace is running, it will be stopped as well.
     * Deleted workspaces cannot be started again.
     */
    deleteWorkspace: {
        path: "/gitpod.experimental.v1.WorkspacesService/DeleteWorkspace",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteWorkspaceRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteWorkspaceRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DeleteWorkspaceResponse.encode(value).finish()),
        responseDeserialize: (value) => DeleteWorkspaceResponse.decode(value),
    },
    updatePort: {
        path: "/gitpod.experimental.v1.WorkspacesService/UpdatePort",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdatePortRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdatePortRequest.decode(value),
        responseSerialize: (value) => Buffer.from(UpdatePortResponse.encode(value).finish()),
        responseDeserialize: (value) => UpdatePortResponse.decode(value),
    },
};
export const WorkspacesServiceClient = makeGenericClientConstructor(WorkspacesServiceService, "gitpod.experimental.v1.WorkspacesService");
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
//# sourceMappingURL=workspaces.pb.js.map