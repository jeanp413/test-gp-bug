/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/* eslint-disable */
import { makeGenericClientConstructor, } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";
import { Timestamp } from "../../../google/protobuf/timestamp.pb.js";
import { Pagination } from "./pagination.pb.js";
export const protobufPackage = "gitpod.experimental.v1";
function createBaseProject() {
    return {
        id: "",
        teamId: "",
        userId: "",
        name: "",
        slug: "",
        cloneUrl: "",
        creationTime: undefined,
        settings: undefined,
    };
}
export const Project = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.teamId !== "") {
            writer.uint32(18).string(message.teamId);
        }
        if (message.userId !== "") {
            writer.uint32(26).string(message.userId);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.slug !== "") {
            writer.uint32(42).string(message.slug);
        }
        if (message.cloneUrl !== "") {
            writer.uint32(50).string(message.cloneUrl);
        }
        if (message.creationTime !== undefined) {
            Timestamp.encode(toTimestamp(message.creationTime), writer.uint32(58).fork()).ldelim();
        }
        if (message.settings !== undefined) {
            ProjectSettings.encode(message.settings, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProject();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.teamId = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.slug = reader.string();
                    break;
                case 6:
                    message.cloneUrl = reader.string();
                    break;
                case 7:
                    message.creationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.settings = ProjectSettings.decode(reader, reader.uint32());
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
            teamId: isSet(object.teamId) ? String(object.teamId) : "",
            userId: isSet(object.userId) ? String(object.userId) : "",
            name: isSet(object.name) ? String(object.name) : "",
            slug: isSet(object.slug) ? String(object.slug) : "",
            cloneUrl: isSet(object.cloneUrl) ? String(object.cloneUrl) : "",
            creationTime: isSet(object.creationTime) ? fromJsonTimestamp(object.creationTime) : undefined,
            settings: isSet(object.settings) ? ProjectSettings.fromJSON(object.settings) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.teamId !== undefined && (obj.teamId = message.teamId);
        message.userId !== undefined && (obj.userId = message.userId);
        message.name !== undefined && (obj.name = message.name);
        message.slug !== undefined && (obj.slug = message.slug);
        message.cloneUrl !== undefined && (obj.cloneUrl = message.cloneUrl);
        message.creationTime !== undefined && (obj.creationTime = message.creationTime.toISOString());
        message.settings !== undefined &&
            (obj.settings = message.settings ? ProjectSettings.toJSON(message.settings) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseProject();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.teamId = (_b = object.teamId) !== null && _b !== void 0 ? _b : "";
        message.userId = (_c = object.userId) !== null && _c !== void 0 ? _c : "";
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.slug = (_e = object.slug) !== null && _e !== void 0 ? _e : "";
        message.cloneUrl = (_f = object.cloneUrl) !== null && _f !== void 0 ? _f : "";
        message.creationTime = (_g = object.creationTime) !== null && _g !== void 0 ? _g : undefined;
        message.settings = (object.settings !== undefined && object.settings !== null)
            ? ProjectSettings.fromPartial(object.settings)
            : undefined;
        return message;
    },
};
function createBaseProjectSettings() {
    return { prebuild: undefined, workspace: undefined };
}
export const ProjectSettings = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.prebuild !== undefined) {
            PrebuildSettings.encode(message.prebuild, writer.uint32(10).fork()).ldelim();
        }
        if (message.workspace !== undefined) {
            WorkspaceSettings.encode(message.workspace, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProjectSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prebuild = PrebuildSettings.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.workspace = WorkspaceSettings.decode(reader, reader.uint32());
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
            prebuild: isSet(object.prebuild) ? PrebuildSettings.fromJSON(object.prebuild) : undefined,
            workspace: isSet(object.workspace) ? WorkspaceSettings.fromJSON(object.workspace) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.prebuild !== undefined &&
            (obj.prebuild = message.prebuild ? PrebuildSettings.toJSON(message.prebuild) : undefined);
        message.workspace !== undefined &&
            (obj.workspace = message.workspace ? WorkspaceSettings.toJSON(message.workspace) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProjectSettings();
        message.prebuild = (object.prebuild !== undefined && object.prebuild !== null)
            ? PrebuildSettings.fromPartial(object.prebuild)
            : undefined;
        message.workspace = (object.workspace !== undefined && object.workspace !== null)
            ? WorkspaceSettings.fromPartial(object.workspace)
            : undefined;
        return message;
    },
};
function createBasePrebuildSettings() {
    return {
        enableIncrementalPrebuilds: false,
        keepOutdatedPrebuildsRunning: false,
        usePreviousPrebuilds: false,
        prebuildEveryNth: 0,
    };
}
export const PrebuildSettings = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enableIncrementalPrebuilds === true) {
            writer.uint32(8).bool(message.enableIncrementalPrebuilds);
        }
        if (message.keepOutdatedPrebuildsRunning === true) {
            writer.uint32(16).bool(message.keepOutdatedPrebuildsRunning);
        }
        if (message.usePreviousPrebuilds === true) {
            writer.uint32(24).bool(message.usePreviousPrebuilds);
        }
        if (message.prebuildEveryNth !== 0) {
            writer.uint32(32).int32(message.prebuildEveryNth);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrebuildSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enableIncrementalPrebuilds = reader.bool();
                    break;
                case 2:
                    message.keepOutdatedPrebuildsRunning = reader.bool();
                    break;
                case 3:
                    message.usePreviousPrebuilds = reader.bool();
                    break;
                case 4:
                    message.prebuildEveryNth = reader.int32();
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
            enableIncrementalPrebuilds: isSet(object.enableIncrementalPrebuilds)
                ? Boolean(object.enableIncrementalPrebuilds)
                : false,
            keepOutdatedPrebuildsRunning: isSet(object.keepOutdatedPrebuildsRunning)
                ? Boolean(object.keepOutdatedPrebuildsRunning)
                : false,
            usePreviousPrebuilds: isSet(object.usePreviousPrebuilds) ? Boolean(object.usePreviousPrebuilds) : false,
            prebuildEveryNth: isSet(object.prebuildEveryNth) ? Number(object.prebuildEveryNth) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.enableIncrementalPrebuilds !== undefined &&
            (obj.enableIncrementalPrebuilds = message.enableIncrementalPrebuilds);
        message.keepOutdatedPrebuildsRunning !== undefined &&
            (obj.keepOutdatedPrebuildsRunning = message.keepOutdatedPrebuildsRunning);
        message.usePreviousPrebuilds !== undefined && (obj.usePreviousPrebuilds = message.usePreviousPrebuilds);
        message.prebuildEveryNth !== undefined && (obj.prebuildEveryNth = Math.round(message.prebuildEveryNth));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePrebuildSettings();
        message.enableIncrementalPrebuilds = (_a = object.enableIncrementalPrebuilds) !== null && _a !== void 0 ? _a : false;
        message.keepOutdatedPrebuildsRunning = (_b = object.keepOutdatedPrebuildsRunning) !== null && _b !== void 0 ? _b : false;
        message.usePreviousPrebuilds = (_c = object.usePreviousPrebuilds) !== null && _c !== void 0 ? _c : false;
        message.prebuildEveryNth = (_d = object.prebuildEveryNth) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseWorkspaceSettings() {
    return { enablePersistentVolumeClaim: false, workspaceClass: undefined };
}
export const WorkspaceSettings = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enablePersistentVolumeClaim === true) {
            writer.uint32(8).bool(message.enablePersistentVolumeClaim);
        }
        if (message.workspaceClass !== undefined) {
            WorkspaceClassSettings.encode(message.workspaceClass, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspaceSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enablePersistentVolumeClaim = reader.bool();
                    break;
                case 2:
                    message.workspaceClass = WorkspaceClassSettings.decode(reader, reader.uint32());
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
            enablePersistentVolumeClaim: isSet(object.enablePersistentVolumeClaim)
                ? Boolean(object.enablePersistentVolumeClaim)
                : false,
            workspaceClass: isSet(object.workspaceClass) ? WorkspaceClassSettings.fromJSON(object.workspaceClass) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.enablePersistentVolumeClaim !== undefined &&
            (obj.enablePersistentVolumeClaim = message.enablePersistentVolumeClaim);
        message.workspaceClass !== undefined &&
            (obj.workspaceClass = message.workspaceClass ? WorkspaceClassSettings.toJSON(message.workspaceClass) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseWorkspaceSettings();
        message.enablePersistentVolumeClaim = (_a = object.enablePersistentVolumeClaim) !== null && _a !== void 0 ? _a : false;
        message.workspaceClass = (object.workspaceClass !== undefined && object.workspaceClass !== null)
            ? WorkspaceClassSettings.fromPartial(object.workspaceClass)
            : undefined;
        return message;
    },
};
function createBaseWorkspaceClassSettings() {
    return { regular: "", prebuild: "" };
}
export const WorkspaceClassSettings = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.regular !== "") {
            writer.uint32(10).string(message.regular);
        }
        if (message.prebuild !== "") {
            writer.uint32(18).string(message.prebuild);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWorkspaceClassSettings();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.regular = reader.string();
                    break;
                case 2:
                    message.prebuild = reader.string();
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
            regular: isSet(object.regular) ? String(object.regular) : "",
            prebuild: isSet(object.prebuild) ? String(object.prebuild) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.regular !== undefined && (obj.regular = message.regular);
        message.prebuild !== undefined && (obj.prebuild = message.prebuild);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseWorkspaceClassSettings();
        message.regular = (_a = object.regular) !== null && _a !== void 0 ? _a : "";
        message.prebuild = (_b = object.prebuild) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreateProjectRequest() {
    return { project: undefined };
}
export const CreateProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.project !== undefined) {
            Project.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = Project.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { project: isSet(object.project) ? Project.fromJSON(object.project) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined && (obj.project = message.project ? Project.toJSON(message.project) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateProjectRequest();
        message.project = (object.project !== undefined && object.project !== null)
            ? Project.fromPartial(object.project)
            : undefined;
        return message;
    },
};
function createBaseCreateProjectResponse() {
    return { project: undefined };
}
export const CreateProjectResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.project !== undefined) {
            Project.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = Project.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { project: isSet(object.project) ? Project.fromJSON(object.project) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined && (obj.project = message.project ? Project.toJSON(message.project) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateProjectResponse();
        message.project = (object.project !== undefined && object.project !== null)
            ? Project.fromPartial(object.project)
            : undefined;
        return message;
    },
};
function createBaseGetProjectRequest() {
    return { projectId: "" };
}
export const GetProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetProjectRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetProjectResponse() {
    return { project: undefined };
}
export const GetProjectResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.project !== undefined) {
            Project.encode(message.project, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.project = Project.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { project: isSet(object.project) ? Project.fromJSON(object.project) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined && (obj.project = message.project ? Project.toJSON(message.project) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetProjectResponse();
        message.project = (object.project !== undefined && object.project !== null)
            ? Project.fromPartial(object.project)
            : undefined;
        return message;
    },
};
function createBaseListProjectsRequest() {
    return { userId: "", teamId: "", pagination: undefined };
}
export const ListProjectsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.teamId !== "") {
            writer.uint32(18).string(message.teamId);
        }
        if (message.pagination !== undefined) {
            Pagination.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListProjectsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.teamId = reader.string();
                    break;
                case 3:
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
            userId: isSet(object.userId) ? String(object.userId) : "",
            teamId: isSet(object.teamId) ? String(object.teamId) : "",
            pagination: isSet(object.pagination) ? Pagination.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.teamId !== undefined && (obj.teamId = message.teamId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? Pagination.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListProjectsRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.teamId = (_b = object.teamId) !== null && _b !== void 0 ? _b : "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? Pagination.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseListProjectsResponse() {
    return { projects: [], totalResults: 0 };
}
export const ListProjectsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.projects) {
            Project.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.totalResults !== 0) {
            writer.uint32(16).int32(message.totalResults);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListProjectsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projects.push(Project.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.totalResults = reader.int32();
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
            projects: Array.isArray(object === null || object === void 0 ? void 0 : object.projects) ? object.projects.map((e) => Project.fromJSON(e)) : [],
            totalResults: isSet(object.totalResults) ? Number(object.totalResults) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map((e) => e ? Project.toJSON(e) : undefined);
        }
        else {
            obj.projects = [];
        }
        message.totalResults !== undefined && (obj.totalResults = Math.round(message.totalResults));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseListProjectsResponse();
        message.projects = ((_a = object.projects) === null || _a === void 0 ? void 0 : _a.map((e) => Project.fromPartial(e))) || [];
        message.totalResults = (_b = object.totalResults) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseDeleteProjectRequest() {
    return { projectId: "" };
}
export const DeleteProjectRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.projectId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteProjectRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteProjectResponse() {
    return {};
}
export const DeleteProjectResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteProjectResponse();
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
        const message = createBaseDeleteProjectResponse();
        return message;
    },
};
export const ProjectsServiceService = {
    /** Creates a new project. */
    createProject: {
        path: "/gitpod.experimental.v1.ProjectsService/CreateProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(CreateProjectResponse.encode(value).finish()),
        responseDeserialize: (value) => CreateProjectResponse.decode(value),
    },
    /** Retrieves a project. */
    getProject: {
        path: "/gitpod.experimental.v1.ProjectsService/GetProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => GetProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetProjectResponse.encode(value).finish()),
        responseDeserialize: (value) => GetProjectResponse.decode(value),
    },
    /** Lists projects. */
    listProjects: {
        path: "/gitpod.experimental.v1.ProjectsService/ListProjects",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListProjectsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListProjectsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListProjectsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListProjectsResponse.decode(value),
    },
    /** Deletes a project. */
    deleteProject: {
        path: "/gitpod.experimental.v1.ProjectsService/DeleteProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteProjectRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteProjectRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DeleteProjectResponse.encode(value).finish()),
        responseDeserialize: (value) => DeleteProjectResponse.decode(value),
    },
};
export const ProjectsServiceClient = makeGenericClientConstructor(ProjectsServiceService, "gitpod.experimental.v1.ProjectsService");
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
//# sourceMappingURL=projects.pb.js.map