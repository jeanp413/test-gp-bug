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
export var TeamRole;
(function (TeamRole) {
    /** TEAM_ROLE_UNSPECIFIED - TEAM_ROLE_UNKNOWN is the unkwnon state. */
    TeamRole["TEAM_ROLE_UNSPECIFIED"] = "TEAM_ROLE_UNSPECIFIED";
    /**
     * TEAM_ROLE_OWNER - TEAM_ROLE_OWNER is the owner of the team.
     * A team can have multiple owners, but there must always be at least one owner.
     */
    TeamRole["TEAM_ROLE_OWNER"] = "TEAM_ROLE_OWNER";
    /** TEAM_ROLE_MEMBER - TEAM_ROLE_MEMBER is a regular member of a team. */
    TeamRole["TEAM_ROLE_MEMBER"] = "TEAM_ROLE_MEMBER";
    TeamRole["UNRECOGNIZED"] = "UNRECOGNIZED";
})(TeamRole || (TeamRole = {}));
export function teamRoleFromJSON(object) {
    switch (object) {
        case 0:
        case "TEAM_ROLE_UNSPECIFIED":
            return TeamRole.TEAM_ROLE_UNSPECIFIED;
        case 1:
        case "TEAM_ROLE_OWNER":
            return TeamRole.TEAM_ROLE_OWNER;
        case 2:
        case "TEAM_ROLE_MEMBER":
            return TeamRole.TEAM_ROLE_MEMBER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TeamRole.UNRECOGNIZED;
    }
}
export function teamRoleToJSON(object) {
    switch (object) {
        case TeamRole.TEAM_ROLE_UNSPECIFIED:
            return "TEAM_ROLE_UNSPECIFIED";
        case TeamRole.TEAM_ROLE_OWNER:
            return "TEAM_ROLE_OWNER";
        case TeamRole.TEAM_ROLE_MEMBER:
            return "TEAM_ROLE_MEMBER";
        case TeamRole.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export function teamRoleToNumber(object) {
    switch (object) {
        case TeamRole.TEAM_ROLE_UNSPECIFIED:
            return 0;
        case TeamRole.TEAM_ROLE_OWNER:
            return 1;
        case TeamRole.TEAM_ROLE_MEMBER:
            return 2;
        case TeamRole.UNRECOGNIZED:
        default:
            return -1;
    }
}
function createBaseTeam() {
    return { id: "", name: "", members: [], teamInvitation: undefined };
}
export const Team = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        for (const v of message.members) {
            TeamMember.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.teamInvitation !== undefined) {
            TeamInvitation.encode(message.teamInvitation, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTeam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 4:
                    message.members.push(TeamMember.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.teamInvitation = TeamInvitation.decode(reader, reader.uint32());
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
            members: Array.isArray(object === null || object === void 0 ? void 0 : object.members) ? object.members.map((e) => TeamMember.fromJSON(e)) : [],
            teamInvitation: isSet(object.teamInvitation) ? TeamInvitation.fromJSON(object.teamInvitation) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        if (message.members) {
            obj.members = message.members.map((e) => e ? TeamMember.toJSON(e) : undefined);
        }
        else {
            obj.members = [];
        }
        message.teamInvitation !== undefined &&
            (obj.teamInvitation = message.teamInvitation ? TeamInvitation.toJSON(message.teamInvitation) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTeam();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.members = ((_c = object.members) === null || _c === void 0 ? void 0 : _c.map((e) => TeamMember.fromPartial(e))) || [];
        message.teamInvitation = (object.teamInvitation !== undefined && object.teamInvitation !== null)
            ? TeamInvitation.fromPartial(object.teamInvitation)
            : undefined;
        return message;
    },
};
function createBaseTeamMember() {
    return {
        userId: "",
        role: TeamRole.TEAM_ROLE_UNSPECIFIED,
        memberSince: undefined,
        avatarUrl: "",
        fullName: "",
        primaryEmail: "",
    };
}
export const TeamMember = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.role !== TeamRole.TEAM_ROLE_UNSPECIFIED) {
            writer.uint32(16).int32(teamRoleToNumber(message.role));
        }
        if (message.memberSince !== undefined) {
            Timestamp.encode(toTimestamp(message.memberSince), writer.uint32(26).fork()).ldelim();
        }
        if (message.avatarUrl !== "") {
            writer.uint32(34).string(message.avatarUrl);
        }
        if (message.fullName !== "") {
            writer.uint32(42).string(message.fullName);
        }
        if (message.primaryEmail !== "") {
            writer.uint32(50).string(message.primaryEmail);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTeamMember();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.role = teamRoleFromJSON(reader.int32());
                    break;
                case 3:
                    message.memberSince = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.avatarUrl = reader.string();
                    break;
                case 5:
                    message.fullName = reader.string();
                    break;
                case 6:
                    message.primaryEmail = reader.string();
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
            role: isSet(object.role) ? teamRoleFromJSON(object.role) : TeamRole.TEAM_ROLE_UNSPECIFIED,
            memberSince: isSet(object.memberSince) ? fromJsonTimestamp(object.memberSince) : undefined,
            avatarUrl: isSet(object.avatarUrl) ? String(object.avatarUrl) : "",
            fullName: isSet(object.fullName) ? String(object.fullName) : "",
            primaryEmail: isSet(object.primaryEmail) ? String(object.primaryEmail) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.role !== undefined && (obj.role = teamRoleToJSON(message.role));
        message.memberSince !== undefined && (obj.memberSince = message.memberSince.toISOString());
        message.avatarUrl !== undefined && (obj.avatarUrl = message.avatarUrl);
        message.fullName !== undefined && (obj.fullName = message.fullName);
        message.primaryEmail !== undefined && (obj.primaryEmail = message.primaryEmail);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseTeamMember();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.role = (_b = object.role) !== null && _b !== void 0 ? _b : TeamRole.TEAM_ROLE_UNSPECIFIED;
        message.memberSince = (_c = object.memberSince) !== null && _c !== void 0 ? _c : undefined;
        message.avatarUrl = (_d = object.avatarUrl) !== null && _d !== void 0 ? _d : "";
        message.fullName = (_e = object.fullName) !== null && _e !== void 0 ? _e : "";
        message.primaryEmail = (_f = object.primaryEmail) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseTeamInvitation() {
    return { id: "" };
}
export const TeamInvitation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTeamInvitation();
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
        const message = createBaseTeamInvitation();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateTeamRequest() {
    return { name: "" };
}
export const CreateTeamRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTeamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { name: isSet(object.name) ? String(object.name) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateTeamRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateTeamResponse() {
    return { team: undefined };
}
export const CreateTeamResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.team !== undefined) {
            Team.encode(message.team, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateTeamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.team = Team.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { team: isSet(object.team) ? Team.fromJSON(object.team) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.team !== undefined && (obj.team = message.team ? Team.toJSON(message.team) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCreateTeamResponse();
        message.team = (object.team !== undefined && object.team !== null) ? Team.fromPartial(object.team) : undefined;
        return message;
    },
};
function createBaseGetTeamRequest() {
    return { teamId: "" };
}
export const GetTeamRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.teamId !== "") {
            writer.uint32(10).string(message.teamId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTeamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.teamId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { teamId: isSet(object.teamId) ? String(object.teamId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.teamId !== undefined && (obj.teamId = message.teamId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetTeamRequest();
        message.teamId = (_a = object.teamId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetTeamResponse() {
    return { team: undefined };
}
export const GetTeamResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.team !== undefined) {
            Team.encode(message.team, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTeamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.team = Team.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { team: isSet(object.team) ? Team.fromJSON(object.team) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.team !== undefined && (obj.team = message.team ? Team.toJSON(message.team) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTeamResponse();
        message.team = (object.team !== undefined && object.team !== null) ? Team.fromPartial(object.team) : undefined;
        return message;
    },
};
function createBaseListTeamsRequest() {
    return {};
}
export const ListTeamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListTeamsRequest();
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
        const message = createBaseListTeamsRequest();
        return message;
    },
};
function createBaseListTeamsResponse() {
    return { teams: [] };
}
export const ListTeamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.teams) {
            Team.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListTeamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.teams.push(Team.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { teams: Array.isArray(object === null || object === void 0 ? void 0 : object.teams) ? object.teams.map((e) => Team.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.teams) {
            obj.teams = message.teams.map((e) => e ? Team.toJSON(e) : undefined);
        }
        else {
            obj.teams = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListTeamsResponse();
        message.teams = ((_a = object.teams) === null || _a === void 0 ? void 0 : _a.map((e) => Team.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDeleteTeamRequest() {
    return { teamId: "" };
}
export const DeleteTeamRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.teamId !== "") {
            writer.uint32(10).string(message.teamId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteTeamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.teamId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { teamId: isSet(object.teamId) ? String(object.teamId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.teamId !== undefined && (obj.teamId = message.teamId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteTeamRequest();
        message.teamId = (_a = object.teamId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteTeamResponse() {
    return {};
}
export const DeleteTeamResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteTeamResponse();
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
        const message = createBaseDeleteTeamResponse();
        return message;
    },
};
function createBaseJoinTeamRequest() {
    return { invitationId: "" };
}
export const JoinTeamRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.invitationId !== "") {
            writer.uint32(10).string(message.invitationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJoinTeamRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.invitationId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { invitationId: isSet(object.invitationId) ? String(object.invitationId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.invitationId !== undefined && (obj.invitationId = message.invitationId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseJoinTeamRequest();
        message.invitationId = (_a = object.invitationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseJoinTeamResponse() {
    return { team: undefined };
}
export const JoinTeamResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.team !== undefined) {
            Team.encode(message.team, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJoinTeamResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.team = Team.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { team: isSet(object.team) ? Team.fromJSON(object.team) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.team !== undefined && (obj.team = message.team ? Team.toJSON(message.team) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseJoinTeamResponse();
        message.team = (object.team !== undefined && object.team !== null) ? Team.fromPartial(object.team) : undefined;
        return message;
    },
};
function createBaseResetTeamInvitationRequest() {
    return { teamId: "" };
}
export const ResetTeamInvitationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.teamId !== "") {
            writer.uint32(10).string(message.teamId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResetTeamInvitationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.teamId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { teamId: isSet(object.teamId) ? String(object.teamId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.teamId !== undefined && (obj.teamId = message.teamId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResetTeamInvitationRequest();
        message.teamId = (_a = object.teamId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseResetTeamInvitationResponse() {
    return { teamInvitation: undefined };
}
export const ResetTeamInvitationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.teamInvitation !== undefined) {
            TeamInvitation.encode(message.teamInvitation, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResetTeamInvitationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.teamInvitation = TeamInvitation.decode(reader, reader.uint32());
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
            teamInvitation: isSet(object.teamInvitation) ? TeamInvitation.fromJSON(object.teamInvitation) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.teamInvitation !== undefined &&
            (obj.teamInvitation = message.teamInvitation ? TeamInvitation.toJSON(message.teamInvitation) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResetTeamInvitationResponse();
        message.teamInvitation = (object.teamInvitation !== undefined && object.teamInvitation !== null)
            ? TeamInvitation.fromPartial(object.teamInvitation)
            : undefined;
        return message;
    },
};
function createBaseUpdateTeamMemberRequest() {
    return { teamId: "", teamMember: undefined };
}
export const UpdateTeamMemberRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.teamId !== "") {
            writer.uint32(10).string(message.teamId);
        }
        if (message.teamMember !== undefined) {
            TeamMember.encode(message.teamMember, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateTeamMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.teamId = reader.string();
                    break;
                case 2:
                    message.teamMember = TeamMember.decode(reader, reader.uint32());
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
            teamId: isSet(object.teamId) ? String(object.teamId) : "",
            teamMember: isSet(object.teamMember) ? TeamMember.fromJSON(object.teamMember) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.teamId !== undefined && (obj.teamId = message.teamId);
        message.teamMember !== undefined &&
            (obj.teamMember = message.teamMember ? TeamMember.toJSON(message.teamMember) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateTeamMemberRequest();
        message.teamId = (_a = object.teamId) !== null && _a !== void 0 ? _a : "";
        message.teamMember = (object.teamMember !== undefined && object.teamMember !== null)
            ? TeamMember.fromPartial(object.teamMember)
            : undefined;
        return message;
    },
};
function createBaseUpdateTeamMemberResponse() {
    return { teamMember: undefined };
}
export const UpdateTeamMemberResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.teamMember !== undefined) {
            TeamMember.encode(message.teamMember, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateTeamMemberResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.teamMember = TeamMember.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { teamMember: isSet(object.teamMember) ? TeamMember.fromJSON(object.teamMember) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.teamMember !== undefined &&
            (obj.teamMember = message.teamMember ? TeamMember.toJSON(message.teamMember) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpdateTeamMemberResponse();
        message.teamMember = (object.teamMember !== undefined && object.teamMember !== null)
            ? TeamMember.fromPartial(object.teamMember)
            : undefined;
        return message;
    },
};
function createBaseDeleteTeamMemberRequest() {
    return { teamId: "", teamMemberId: "" };
}
export const DeleteTeamMemberRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.teamId !== "") {
            writer.uint32(10).string(message.teamId);
        }
        if (message.teamMemberId !== "") {
            writer.uint32(18).string(message.teamMemberId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteTeamMemberRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.teamId = reader.string();
                    break;
                case 2:
                    message.teamMemberId = reader.string();
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
            teamId: isSet(object.teamId) ? String(object.teamId) : "",
            teamMemberId: isSet(object.teamMemberId) ? String(object.teamMemberId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.teamId !== undefined && (obj.teamId = message.teamId);
        message.teamMemberId !== undefined && (obj.teamMemberId = message.teamMemberId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteTeamMemberRequest();
        message.teamId = (_a = object.teamId) !== null && _a !== void 0 ? _a : "";
        message.teamMemberId = (_b = object.teamMemberId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteTeamMemberResponse() {
    return {};
}
export const DeleteTeamMemberResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteTeamMemberResponse();
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
        const message = createBaseDeleteTeamMemberResponse();
        return message;
    },
};
export const TeamsServiceService = {
    /** CreateTeam creates a new Team. */
    createTeam: {
        path: "/gitpod.experimental.v1.TeamsService/CreateTeam",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(CreateTeamRequest.encode(value).finish()),
        requestDeserialize: (value) => CreateTeamRequest.decode(value),
        responseSerialize: (value) => Buffer.from(CreateTeamResponse.encode(value).finish()),
        responseDeserialize: (value) => CreateTeamResponse.decode(value),
    },
    /** GetTeam retrieves a single Team. */
    getTeam: {
        path: "/gitpod.experimental.v1.TeamsService/GetTeam",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(GetTeamRequest.encode(value).finish()),
        requestDeserialize: (value) => GetTeamRequest.decode(value),
        responseSerialize: (value) => Buffer.from(GetTeamResponse.encode(value).finish()),
        responseDeserialize: (value) => GetTeamResponse.decode(value),
    },
    /** ListTeams lists the caller has access to. */
    listTeams: {
        path: "/gitpod.experimental.v1.TeamsService/ListTeams",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ListTeamsRequest.encode(value).finish()),
        requestDeserialize: (value) => ListTeamsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ListTeamsResponse.encode(value).finish()),
        responseDeserialize: (value) => ListTeamsResponse.decode(value),
    },
    /** DeleteTeam deletes the specified team. */
    deleteTeam: {
        path: "/gitpod.experimental.v1.TeamsService/DeleteTeam",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteTeamRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteTeamRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DeleteTeamResponse.encode(value).finish()),
        responseDeserialize: (value) => DeleteTeamResponse.decode(value),
    },
    /** JoinTeam makes the caller a TeamMember of the Team. */
    joinTeam: {
        path: "/gitpod.experimental.v1.TeamsService/JoinTeam",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(JoinTeamRequest.encode(value).finish()),
        requestDeserialize: (value) => JoinTeamRequest.decode(value),
        responseSerialize: (value) => Buffer.from(JoinTeamResponse.encode(value).finish()),
        responseDeserialize: (value) => JoinTeamResponse.decode(value),
    },
    /** ResetTeamInvitation resets the invitation_id for a Team. */
    resetTeamInvitation: {
        path: "/gitpod.experimental.v1.TeamsService/ResetTeamInvitation",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ResetTeamInvitationRequest.encode(value).finish()),
        requestDeserialize: (value) => ResetTeamInvitationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ResetTeamInvitationResponse.encode(value).finish()),
        responseDeserialize: (value) => ResetTeamInvitationResponse.decode(value),
    },
    /** UpdateTeamMember updates team membership properties. */
    updateTeamMember: {
        path: "/gitpod.experimental.v1.TeamsService/UpdateTeamMember",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(UpdateTeamMemberRequest.encode(value).finish()),
        requestDeserialize: (value) => UpdateTeamMemberRequest.decode(value),
        responseSerialize: (value) => Buffer.from(UpdateTeamMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => UpdateTeamMemberResponse.decode(value),
    },
    /** DeleteTeamMember removes a TeamMember from the Team. */
    deleteTeamMember: {
        path: "/gitpod.experimental.v1.TeamsService/DeleteTeamMember",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(DeleteTeamMemberRequest.encode(value).finish()),
        requestDeserialize: (value) => DeleteTeamMemberRequest.decode(value),
        responseSerialize: (value) => Buffer.from(DeleteTeamMemberResponse.encode(value).finish()),
        responseDeserialize: (value) => DeleteTeamMemberResponse.decode(value),
    },
};
export const TeamsServiceClient = makeGenericClientConstructor(TeamsServiceService, "gitpod.experimental.v1.TeamsService");
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
//# sourceMappingURL=teams.pb.js.map