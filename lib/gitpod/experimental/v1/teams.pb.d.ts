/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/// <reference types="node" />
import { CallOptions, ChannelCredentials, ChannelOptions, Client, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";
export declare const protobufPackage = "gitpod.experimental.v1";
export declare enum TeamRole {
    /** TEAM_ROLE_UNSPECIFIED - TEAM_ROLE_UNKNOWN is the unkwnon state. */
    TEAM_ROLE_UNSPECIFIED = "TEAM_ROLE_UNSPECIFIED",
    /**
     * TEAM_ROLE_OWNER - TEAM_ROLE_OWNER is the owner of the team.
     * A team can have multiple owners, but there must always be at least one owner.
     */
    TEAM_ROLE_OWNER = "TEAM_ROLE_OWNER",
    /** TEAM_ROLE_MEMBER - TEAM_ROLE_MEMBER is a regular member of a team. */
    TEAM_ROLE_MEMBER = "TEAM_ROLE_MEMBER",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function teamRoleFromJSON(object: any): TeamRole;
export declare function teamRoleToJSON(object: TeamRole): string;
export declare function teamRoleToNumber(object: TeamRole): number;
export interface Team {
    /** id is a UUID of the Team */
    id: string;
    /** name is the name of the Team */
    name: string;
    /** members are the team members of this Team */
    members: TeamMember[];
    /** team_invitation is the team invitation. */
    teamInvitation: TeamInvitation | undefined;
}
export interface TeamMember {
    /** user_id is the identifier of the user */
    userId: string;
    /** role is the role this member is assigned */
    role: TeamRole;
    /** member_since is the timestamp when the member joined the team */
    memberSince: Date | undefined;
    /** avatar_url is the URL for the TeamMember */
    avatarUrl: string;
    /** full_name is the name of the TeamMember */
    fullName: string;
    /** primary_email is the primary email of the TeamMember */
    primaryEmail: string;
}
export interface TeamInvitation {
    /** id is the invitation ID. */
    id: string;
}
export interface CreateTeamRequest {
    /** name is the team name */
    name: string;
}
export interface CreateTeamResponse {
    team: Team | undefined;
}
export interface GetTeamRequest {
    /** team_id is the unique identifier of the Team to retreive. */
    teamId: string;
}
export interface GetTeamResponse {
    team: Team | undefined;
}
/** TODO: pagination options */
export interface ListTeamsRequest {
}
export interface ListTeamsResponse {
    teams: Team[];
}
export interface DeleteTeamRequest {
    /** team_id is the ID of the team to delete */
    teamId: string;
}
export interface DeleteTeamResponse {
}
export interface JoinTeamRequest {
    /** invitation_id is the invitation ID for a Team */
    invitationId: string;
}
export interface JoinTeamResponse {
    /** team is the team the user has just joined */
    team: Team | undefined;
}
export interface ResetTeamInvitationRequest {
    teamId: string;
}
export interface ResetTeamInvitationResponse {
    /** team_invitation is the new invitation for the team. */
    teamInvitation: TeamInvitation | undefined;
}
export interface UpdateTeamMemberRequest {
    /** team_id is the ID of the team in which the role is to be updated */
    teamId: string;
    /** team_member is the team member being updated. */
    teamMember: TeamMember | undefined;
}
export interface UpdateTeamMemberResponse {
    teamMember: TeamMember | undefined;
}
export interface DeleteTeamMemberRequest {
    /** team_id is the ID of the team in which a member should be deleted. */
    teamId: string;
    /** team_member_id is the ID of the TeamMember that should be deleted from the team. */
    teamMemberId: string;
}
export interface DeleteTeamMemberResponse {
}
export declare const Team: {
    encode(message: Team, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Team;
    fromJSON(object: any): Team;
    toJSON(message: Team): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        name?: string | undefined;
        members?: {
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        }[] | undefined;
        teamInvitation?: {
            id?: string | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        name?: string | undefined;
        members?: ({
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        }[] & ({
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        } & {
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        } & { [K in Exclude<keyof I["members"][number], keyof TeamMember>]: never; })[] & { [K_1 in Exclude<keyof I["members"], keyof {
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        }[]>]: never; }) | undefined;
        teamInvitation?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & { [K_2 in Exclude<keyof I["teamInvitation"], "id">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Team>]: never; }>(object: I): Team;
};
export declare const TeamMember: {
    encode(message: TeamMember, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TeamMember;
    fromJSON(object: any): TeamMember;
    toJSON(message: TeamMember): unknown;
    fromPartial<I extends {
        userId?: string | undefined;
        role?: TeamRole | undefined;
        memberSince?: Date | undefined;
        avatarUrl?: string | undefined;
        fullName?: string | undefined;
        primaryEmail?: string | undefined;
    } & {
        userId?: string | undefined;
        role?: TeamRole | undefined;
        memberSince?: Date | undefined;
        avatarUrl?: string | undefined;
        fullName?: string | undefined;
        primaryEmail?: string | undefined;
    } & { [K in Exclude<keyof I, keyof TeamMember>]: never; }>(object: I): TeamMember;
};
export declare const TeamInvitation: {
    encode(message: TeamInvitation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TeamInvitation;
    fromJSON(object: any): TeamInvitation;
    toJSON(message: TeamInvitation): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): TeamInvitation;
};
export declare const CreateTeamRequest: {
    encode(message: CreateTeamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTeamRequest;
    fromJSON(object: any): CreateTeamRequest;
    toJSON(message: CreateTeamRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & { [K in Exclude<keyof I, "name">]: never; }>(object: I): CreateTeamRequest;
};
export declare const CreateTeamResponse: {
    encode(message: CreateTeamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTeamResponse;
    fromJSON(object: any): CreateTeamResponse;
    toJSON(message: CreateTeamResponse): unknown;
    fromPartial<I extends {
        team?: {
            id?: string | undefined;
            name?: string | undefined;
            members?: {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] | undefined;
            teamInvitation?: {
                id?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        team?: ({
            id?: string | undefined;
            name?: string | undefined;
            members?: {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] | undefined;
            teamInvitation?: {
                id?: string | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            members?: ({
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] & ({
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            } & {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            } & { [K in Exclude<keyof I["team"]["members"][number], keyof TeamMember>]: never; })[] & { [K_1 in Exclude<keyof I["team"]["members"], keyof {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[]>]: never; }) | undefined;
            teamInvitation?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & { [K_2 in Exclude<keyof I["team"]["teamInvitation"], "id">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["team"], keyof Team>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "team">]: never; }>(object: I): CreateTeamResponse;
};
export declare const GetTeamRequest: {
    encode(message: GetTeamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTeamRequest;
    fromJSON(object: any): GetTeamRequest;
    toJSON(message: GetTeamRequest): unknown;
    fromPartial<I extends {
        teamId?: string | undefined;
    } & {
        teamId?: string | undefined;
    } & { [K in Exclude<keyof I, "teamId">]: never; }>(object: I): GetTeamRequest;
};
export declare const GetTeamResponse: {
    encode(message: GetTeamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetTeamResponse;
    fromJSON(object: any): GetTeamResponse;
    toJSON(message: GetTeamResponse): unknown;
    fromPartial<I extends {
        team?: {
            id?: string | undefined;
            name?: string | undefined;
            members?: {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] | undefined;
            teamInvitation?: {
                id?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        team?: ({
            id?: string | undefined;
            name?: string | undefined;
            members?: {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] | undefined;
            teamInvitation?: {
                id?: string | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            members?: ({
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] & ({
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            } & {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            } & { [K in Exclude<keyof I["team"]["members"][number], keyof TeamMember>]: never; })[] & { [K_1 in Exclude<keyof I["team"]["members"], keyof {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[]>]: never; }) | undefined;
            teamInvitation?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & { [K_2 in Exclude<keyof I["team"]["teamInvitation"], "id">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["team"], keyof Team>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "team">]: never; }>(object: I): GetTeamResponse;
};
export declare const ListTeamsRequest: {
    encode(_: ListTeamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTeamsRequest;
    fromJSON(_: any): ListTeamsRequest;
    toJSON(_: ListTeamsRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): ListTeamsRequest;
};
export declare const ListTeamsResponse: {
    encode(message: ListTeamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListTeamsResponse;
    fromJSON(object: any): ListTeamsResponse;
    toJSON(message: ListTeamsResponse): unknown;
    fromPartial<I extends {
        teams?: {
            id?: string | undefined;
            name?: string | undefined;
            members?: {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] | undefined;
            teamInvitation?: {
                id?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        teams?: ({
            id?: string | undefined;
            name?: string | undefined;
            members?: {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] | undefined;
            teamInvitation?: {
                id?: string | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            name?: string | undefined;
            members?: {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] | undefined;
            teamInvitation?: {
                id?: string | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            members?: ({
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] & ({
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            } & {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            } & { [K in Exclude<keyof I["teams"][number]["members"][number], keyof TeamMember>]: never; })[] & { [K_1 in Exclude<keyof I["teams"][number]["members"], keyof {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[]>]: never; }) | undefined;
            teamInvitation?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & { [K_2 in Exclude<keyof I["teams"][number]["teamInvitation"], "id">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["teams"][number], keyof Team>]: never; })[] & { [K_4 in Exclude<keyof I["teams"], keyof {
            id?: string | undefined;
            name?: string | undefined;
            members?: {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] | undefined;
            teamInvitation?: {
                id?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "teams">]: never; }>(object: I): ListTeamsResponse;
};
export declare const DeleteTeamRequest: {
    encode(message: DeleteTeamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTeamRequest;
    fromJSON(object: any): DeleteTeamRequest;
    toJSON(message: DeleteTeamRequest): unknown;
    fromPartial<I extends {
        teamId?: string | undefined;
    } & {
        teamId?: string | undefined;
    } & { [K in Exclude<keyof I, "teamId">]: never; }>(object: I): DeleteTeamRequest;
};
export declare const DeleteTeamResponse: {
    encode(_: DeleteTeamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTeamResponse;
    fromJSON(_: any): DeleteTeamResponse;
    toJSON(_: DeleteTeamResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): DeleteTeamResponse;
};
export declare const JoinTeamRequest: {
    encode(message: JoinTeamRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JoinTeamRequest;
    fromJSON(object: any): JoinTeamRequest;
    toJSON(message: JoinTeamRequest): unknown;
    fromPartial<I extends {
        invitationId?: string | undefined;
    } & {
        invitationId?: string | undefined;
    } & { [K in Exclude<keyof I, "invitationId">]: never; }>(object: I): JoinTeamRequest;
};
export declare const JoinTeamResponse: {
    encode(message: JoinTeamResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): JoinTeamResponse;
    fromJSON(object: any): JoinTeamResponse;
    toJSON(message: JoinTeamResponse): unknown;
    fromPartial<I extends {
        team?: {
            id?: string | undefined;
            name?: string | undefined;
            members?: {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] | undefined;
            teamInvitation?: {
                id?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        team?: ({
            id?: string | undefined;
            name?: string | undefined;
            members?: {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] | undefined;
            teamInvitation?: {
                id?: string | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            name?: string | undefined;
            members?: ({
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[] & ({
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            } & {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            } & { [K in Exclude<keyof I["team"]["members"][number], keyof TeamMember>]: never; })[] & { [K_1 in Exclude<keyof I["team"]["members"], keyof {
                userId?: string | undefined;
                role?: TeamRole | undefined;
                memberSince?: Date | undefined;
                avatarUrl?: string | undefined;
                fullName?: string | undefined;
                primaryEmail?: string | undefined;
            }[]>]: never; }) | undefined;
            teamInvitation?: ({
                id?: string | undefined;
            } & {
                id?: string | undefined;
            } & { [K_2 in Exclude<keyof I["team"]["teamInvitation"], "id">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["team"], keyof Team>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "team">]: never; }>(object: I): JoinTeamResponse;
};
export declare const ResetTeamInvitationRequest: {
    encode(message: ResetTeamInvitationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResetTeamInvitationRequest;
    fromJSON(object: any): ResetTeamInvitationRequest;
    toJSON(message: ResetTeamInvitationRequest): unknown;
    fromPartial<I extends {
        teamId?: string | undefined;
    } & {
        teamId?: string | undefined;
    } & { [K in Exclude<keyof I, "teamId">]: never; }>(object: I): ResetTeamInvitationRequest;
};
export declare const ResetTeamInvitationResponse: {
    encode(message: ResetTeamInvitationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResetTeamInvitationResponse;
    fromJSON(object: any): ResetTeamInvitationResponse;
    toJSON(message: ResetTeamInvitationResponse): unknown;
    fromPartial<I extends {
        teamInvitation?: {
            id?: string | undefined;
        } | undefined;
    } & {
        teamInvitation?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & { [K in Exclude<keyof I["teamInvitation"], "id">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "teamInvitation">]: never; }>(object: I): ResetTeamInvitationResponse;
};
export declare const UpdateTeamMemberRequest: {
    encode(message: UpdateTeamMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTeamMemberRequest;
    fromJSON(object: any): UpdateTeamMemberRequest;
    toJSON(message: UpdateTeamMemberRequest): unknown;
    fromPartial<I extends {
        teamId?: string | undefined;
        teamMember?: {
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        } | undefined;
    } & {
        teamId?: string | undefined;
        teamMember?: ({
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        } & {
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        } & { [K in Exclude<keyof I["teamMember"], keyof TeamMember>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof UpdateTeamMemberRequest>]: never; }>(object: I): UpdateTeamMemberRequest;
};
export declare const UpdateTeamMemberResponse: {
    encode(message: UpdateTeamMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateTeamMemberResponse;
    fromJSON(object: any): UpdateTeamMemberResponse;
    toJSON(message: UpdateTeamMemberResponse): unknown;
    fromPartial<I extends {
        teamMember?: {
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        } | undefined;
    } & {
        teamMember?: ({
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        } & {
            userId?: string | undefined;
            role?: TeamRole | undefined;
            memberSince?: Date | undefined;
            avatarUrl?: string | undefined;
            fullName?: string | undefined;
            primaryEmail?: string | undefined;
        } & { [K in Exclude<keyof I["teamMember"], keyof TeamMember>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "teamMember">]: never; }>(object: I): UpdateTeamMemberResponse;
};
export declare const DeleteTeamMemberRequest: {
    encode(message: DeleteTeamMemberRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTeamMemberRequest;
    fromJSON(object: any): DeleteTeamMemberRequest;
    toJSON(message: DeleteTeamMemberRequest): unknown;
    fromPartial<I extends {
        teamId?: string | undefined;
        teamMemberId?: string | undefined;
    } & {
        teamId?: string | undefined;
        teamMemberId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeleteTeamMemberRequest>]: never; }>(object: I): DeleteTeamMemberRequest;
};
export declare const DeleteTeamMemberResponse: {
    encode(_: DeleteTeamMemberResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteTeamMemberResponse;
    fromJSON(_: any): DeleteTeamMemberResponse;
    toJSON(_: DeleteTeamMemberResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): DeleteTeamMemberResponse;
};
export declare type TeamsServiceService = typeof TeamsServiceService;
export declare const TeamsServiceService: {
    /** CreateTeam creates a new Team. */
    readonly createTeam: {
        readonly path: "/gitpod.experimental.v1.TeamsService/CreateTeam";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTeamRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTeamRequest;
        readonly responseSerialize: (value: CreateTeamResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateTeamResponse;
    };
    /** GetTeam retrieves a single Team. */
    readonly getTeam: {
        readonly path: "/gitpod.experimental.v1.TeamsService/GetTeam";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTeamRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTeamRequest;
        readonly responseSerialize: (value: GetTeamResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetTeamResponse;
    };
    /** ListTeams lists the caller has access to. */
    readonly listTeams: {
        readonly path: "/gitpod.experimental.v1.TeamsService/ListTeams";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListTeamsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTeamsRequest;
        readonly responseSerialize: (value: ListTeamsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListTeamsResponse;
    };
    /** DeleteTeam deletes the specified team. */
    readonly deleteTeam: {
        readonly path: "/gitpod.experimental.v1.TeamsService/DeleteTeam";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteTeamRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteTeamRequest;
        readonly responseSerialize: (value: DeleteTeamResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteTeamResponse;
    };
    /** JoinTeam makes the caller a TeamMember of the Team. */
    readonly joinTeam: {
        readonly path: "/gitpod.experimental.v1.TeamsService/JoinTeam";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: JoinTeamRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => JoinTeamRequest;
        readonly responseSerialize: (value: JoinTeamResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => JoinTeamResponse;
    };
    /** ResetTeamInvitation resets the invitation_id for a Team. */
    readonly resetTeamInvitation: {
        readonly path: "/gitpod.experimental.v1.TeamsService/ResetTeamInvitation";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ResetTeamInvitationRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ResetTeamInvitationRequest;
        readonly responseSerialize: (value: ResetTeamInvitationResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ResetTeamInvitationResponse;
    };
    /** UpdateTeamMember updates team membership properties. */
    readonly updateTeamMember: {
        readonly path: "/gitpod.experimental.v1.TeamsService/UpdateTeamMember";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateTeamMemberRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateTeamMemberRequest;
        readonly responseSerialize: (value: UpdateTeamMemberResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateTeamMemberResponse;
    };
    /** DeleteTeamMember removes a TeamMember from the Team. */
    readonly deleteTeamMember: {
        readonly path: "/gitpod.experimental.v1.TeamsService/DeleteTeamMember";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteTeamMemberRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteTeamMemberRequest;
        readonly responseSerialize: (value: DeleteTeamMemberResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteTeamMemberResponse;
    };
};
export interface TeamsServiceServer extends UntypedServiceImplementation {
    /** CreateTeam creates a new Team. */
    createTeam: handleUnaryCall<CreateTeamRequest, CreateTeamResponse>;
    /** GetTeam retrieves a single Team. */
    getTeam: handleUnaryCall<GetTeamRequest, GetTeamResponse>;
    /** ListTeams lists the caller has access to. */
    listTeams: handleUnaryCall<ListTeamsRequest, ListTeamsResponse>;
    /** DeleteTeam deletes the specified team. */
    deleteTeam: handleUnaryCall<DeleteTeamRequest, DeleteTeamResponse>;
    /** JoinTeam makes the caller a TeamMember of the Team. */
    joinTeam: handleUnaryCall<JoinTeamRequest, JoinTeamResponse>;
    /** ResetTeamInvitation resets the invitation_id for a Team. */
    resetTeamInvitation: handleUnaryCall<ResetTeamInvitationRequest, ResetTeamInvitationResponse>;
    /** UpdateTeamMember updates team membership properties. */
    updateTeamMember: handleUnaryCall<UpdateTeamMemberRequest, UpdateTeamMemberResponse>;
    /** DeleteTeamMember removes a TeamMember from the Team. */
    deleteTeamMember: handleUnaryCall<DeleteTeamMemberRequest, DeleteTeamMemberResponse>;
}
export interface TeamsServiceClient extends Client {
    /** CreateTeam creates a new Team. */
    createTeam(request: CreateTeamRequest, callback: (error: ServiceError | null, response: CreateTeamResponse) => void): ClientUnaryCall;
    createTeam(request: CreateTeamRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateTeamResponse) => void): ClientUnaryCall;
    createTeam(request: CreateTeamRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateTeamResponse) => void): ClientUnaryCall;
    /** GetTeam retrieves a single Team. */
    getTeam(request: GetTeamRequest, callback: (error: ServiceError | null, response: GetTeamResponse) => void): ClientUnaryCall;
    getTeam(request: GetTeamRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetTeamResponse) => void): ClientUnaryCall;
    getTeam(request: GetTeamRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetTeamResponse) => void): ClientUnaryCall;
    /** ListTeams lists the caller has access to. */
    listTeams(request: ListTeamsRequest, callback: (error: ServiceError | null, response: ListTeamsResponse) => void): ClientUnaryCall;
    listTeams(request: ListTeamsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListTeamsResponse) => void): ClientUnaryCall;
    listTeams(request: ListTeamsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListTeamsResponse) => void): ClientUnaryCall;
    /** DeleteTeam deletes the specified team. */
    deleteTeam(request: DeleteTeamRequest, callback: (error: ServiceError | null, response: DeleteTeamResponse) => void): ClientUnaryCall;
    deleteTeam(request: DeleteTeamRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteTeamResponse) => void): ClientUnaryCall;
    deleteTeam(request: DeleteTeamRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteTeamResponse) => void): ClientUnaryCall;
    /** JoinTeam makes the caller a TeamMember of the Team. */
    joinTeam(request: JoinTeamRequest, callback: (error: ServiceError | null, response: JoinTeamResponse) => void): ClientUnaryCall;
    joinTeam(request: JoinTeamRequest, metadata: Metadata, callback: (error: ServiceError | null, response: JoinTeamResponse) => void): ClientUnaryCall;
    joinTeam(request: JoinTeamRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: JoinTeamResponse) => void): ClientUnaryCall;
    /** ResetTeamInvitation resets the invitation_id for a Team. */
    resetTeamInvitation(request: ResetTeamInvitationRequest, callback: (error: ServiceError | null, response: ResetTeamInvitationResponse) => void): ClientUnaryCall;
    resetTeamInvitation(request: ResetTeamInvitationRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ResetTeamInvitationResponse) => void): ClientUnaryCall;
    resetTeamInvitation(request: ResetTeamInvitationRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ResetTeamInvitationResponse) => void): ClientUnaryCall;
    /** UpdateTeamMember updates team membership properties. */
    updateTeamMember(request: UpdateTeamMemberRequest, callback: (error: ServiceError | null, response: UpdateTeamMemberResponse) => void): ClientUnaryCall;
    updateTeamMember(request: UpdateTeamMemberRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateTeamMemberResponse) => void): ClientUnaryCall;
    updateTeamMember(request: UpdateTeamMemberRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateTeamMemberResponse) => void): ClientUnaryCall;
    /** DeleteTeamMember removes a TeamMember from the Team. */
    deleteTeamMember(request: DeleteTeamMemberRequest, callback: (error: ServiceError | null, response: DeleteTeamMemberResponse) => void): ClientUnaryCall;
    deleteTeamMember(request: DeleteTeamMemberRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteTeamMemberResponse) => void): ClientUnaryCall;
    deleteTeamMember(request: DeleteTeamMemberRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteTeamMemberResponse) => void): ClientUnaryCall;
}
export declare const TeamsServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): TeamsServiceClient;
    service: typeof TeamsServiceService;
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
//# sourceMappingURL=teams.pb.d.ts.map