/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/// <reference types="node" />
import { CallOptions, ChannelCredentials, ChannelOptions, Client, ClientUnaryCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";
import { Pagination } from "./pagination.pb.js";
export declare const protobufPackage = "gitpod.experimental.v1";
export interface Project {
    /**
     * ID is the unique identifier for the project.
     * Read only.
     */
    id: string;
    /**
     * Team ID is the Team this Project belongs to.
     * team_id will be empty if the Project belongs to a User, in which case user_id will be set.
     */
    teamId: string;
    /**
     * User ID is the User this Project belongs to.
     * user_id will be empty if the Project belongs to a Team, in which case team_id will be set.
     */
    userId: string;
    /**
     * Name is the name of the Project.
     * Required.
     */
    name: string;
    /**
     * Slug is a short-hand identifier for a project.
     * Read-only.
     */
    slug: string;
    /**
     * Clone URL is the clone URL on which this Project is based.
     * Required.
     */
    cloneUrl: string;
    /**
     * Time when the Project was created.
     * Read-only.
     */
    creationTime: Date | undefined;
    /** Settings are configuration options for a Project. */
    settings: ProjectSettings | undefined;
}
export interface ProjectSettings {
    prebuild: PrebuildSettings | undefined;
    workspace: WorkspaceSettings | undefined;
}
export interface PrebuildSettings {
    enableIncrementalPrebuilds: boolean;
    keepOutdatedPrebuildsRunning: boolean;
    usePreviousPrebuilds: boolean;
    prebuildEveryNth: number;
}
export interface WorkspaceSettings {
    enablePersistentVolumeClaim: boolean;
    workspaceClass: WorkspaceClassSettings | undefined;
}
export interface WorkspaceClassSettings {
    regular: string;
    prebuild: string;
}
export interface CreateProjectRequest {
    project: Project | undefined;
}
export interface CreateProjectResponse {
    project: Project | undefined;
}
export interface GetProjectRequest {
    projectId: string;
}
export interface GetProjectResponse {
    project: Project | undefined;
}
export interface ListProjectsRequest {
    /** User ID filters Projects owned by user_id */
    userId: string;
    /** Team ID filters Projects owned by team_id */
    teamId: string;
    /** Page information */
    pagination: Pagination | undefined;
}
export interface ListProjectsResponse {
    projects: Project[];
    totalResults: number;
}
export interface DeleteProjectRequest {
    projectId: string;
}
export interface DeleteProjectResponse {
}
export declare const Project: {
    encode(message: Project, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Project;
    fromJSON(object: any): Project;
    toJSON(message: Project): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        teamId?: string | undefined;
        userId?: string | undefined;
        name?: string | undefined;
        slug?: string | undefined;
        cloneUrl?: string | undefined;
        creationTime?: Date | undefined;
        settings?: {
            prebuild?: {
                enableIncrementalPrebuilds?: boolean | undefined;
                keepOutdatedPrebuildsRunning?: boolean | undefined;
                usePreviousPrebuilds?: boolean | undefined;
                prebuildEveryNth?: number | undefined;
            } | undefined;
            workspace?: {
                enablePersistentVolumeClaim?: boolean | undefined;
                workspaceClass?: {
                    regular?: string | undefined;
                    prebuild?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        teamId?: string | undefined;
        userId?: string | undefined;
        name?: string | undefined;
        slug?: string | undefined;
        cloneUrl?: string | undefined;
        creationTime?: Date | undefined;
        settings?: ({
            prebuild?: {
                enableIncrementalPrebuilds?: boolean | undefined;
                keepOutdatedPrebuildsRunning?: boolean | undefined;
                usePreviousPrebuilds?: boolean | undefined;
                prebuildEveryNth?: number | undefined;
            } | undefined;
            workspace?: {
                enablePersistentVolumeClaim?: boolean | undefined;
                workspaceClass?: {
                    regular?: string | undefined;
                    prebuild?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            prebuild?: ({
                enableIncrementalPrebuilds?: boolean | undefined;
                keepOutdatedPrebuildsRunning?: boolean | undefined;
                usePreviousPrebuilds?: boolean | undefined;
                prebuildEveryNth?: number | undefined;
            } & {
                enableIncrementalPrebuilds?: boolean | undefined;
                keepOutdatedPrebuildsRunning?: boolean | undefined;
                usePreviousPrebuilds?: boolean | undefined;
                prebuildEveryNth?: number | undefined;
            } & { [K in Exclude<keyof I["settings"]["prebuild"], keyof PrebuildSettings>]: never; }) | undefined;
            workspace?: ({
                enablePersistentVolumeClaim?: boolean | undefined;
                workspaceClass?: {
                    regular?: string | undefined;
                    prebuild?: string | undefined;
                } | undefined;
            } & {
                enablePersistentVolumeClaim?: boolean | undefined;
                workspaceClass?: ({
                    regular?: string | undefined;
                    prebuild?: string | undefined;
                } & {
                    regular?: string | undefined;
                    prebuild?: string | undefined;
                } & { [K_1 in Exclude<keyof I["settings"]["workspace"]["workspaceClass"], keyof WorkspaceClassSettings>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["settings"]["workspace"], keyof WorkspaceSettings>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["settings"], keyof ProjectSettings>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Project>]: never; }>(object: I): Project;
};
export declare const ProjectSettings: {
    encode(message: ProjectSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProjectSettings;
    fromJSON(object: any): ProjectSettings;
    toJSON(message: ProjectSettings): unknown;
    fromPartial<I extends {
        prebuild?: {
            enableIncrementalPrebuilds?: boolean | undefined;
            keepOutdatedPrebuildsRunning?: boolean | undefined;
            usePreviousPrebuilds?: boolean | undefined;
            prebuildEveryNth?: number | undefined;
        } | undefined;
        workspace?: {
            enablePersistentVolumeClaim?: boolean | undefined;
            workspaceClass?: {
                regular?: string | undefined;
                prebuild?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        prebuild?: ({
            enableIncrementalPrebuilds?: boolean | undefined;
            keepOutdatedPrebuildsRunning?: boolean | undefined;
            usePreviousPrebuilds?: boolean | undefined;
            prebuildEveryNth?: number | undefined;
        } & {
            enableIncrementalPrebuilds?: boolean | undefined;
            keepOutdatedPrebuildsRunning?: boolean | undefined;
            usePreviousPrebuilds?: boolean | undefined;
            prebuildEveryNth?: number | undefined;
        } & { [K in Exclude<keyof I["prebuild"], keyof PrebuildSettings>]: never; }) | undefined;
        workspace?: ({
            enablePersistentVolumeClaim?: boolean | undefined;
            workspaceClass?: {
                regular?: string | undefined;
                prebuild?: string | undefined;
            } | undefined;
        } & {
            enablePersistentVolumeClaim?: boolean | undefined;
            workspaceClass?: ({
                regular?: string | undefined;
                prebuild?: string | undefined;
            } & {
                regular?: string | undefined;
                prebuild?: string | undefined;
            } & { [K_1 in Exclude<keyof I["workspace"]["workspaceClass"], keyof WorkspaceClassSettings>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["workspace"], keyof WorkspaceSettings>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof ProjectSettings>]: never; }>(object: I): ProjectSettings;
};
export declare const PrebuildSettings: {
    encode(message: PrebuildSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PrebuildSettings;
    fromJSON(object: any): PrebuildSettings;
    toJSON(message: PrebuildSettings): unknown;
    fromPartial<I extends {
        enableIncrementalPrebuilds?: boolean | undefined;
        keepOutdatedPrebuildsRunning?: boolean | undefined;
        usePreviousPrebuilds?: boolean | undefined;
        prebuildEveryNth?: number | undefined;
    } & {
        enableIncrementalPrebuilds?: boolean | undefined;
        keepOutdatedPrebuildsRunning?: boolean | undefined;
        usePreviousPrebuilds?: boolean | undefined;
        prebuildEveryNth?: number | undefined;
    } & { [K in Exclude<keyof I, keyof PrebuildSettings>]: never; }>(object: I): PrebuildSettings;
};
export declare const WorkspaceSettings: {
    encode(message: WorkspaceSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkspaceSettings;
    fromJSON(object: any): WorkspaceSettings;
    toJSON(message: WorkspaceSettings): unknown;
    fromPartial<I extends {
        enablePersistentVolumeClaim?: boolean | undefined;
        workspaceClass?: {
            regular?: string | undefined;
            prebuild?: string | undefined;
        } | undefined;
    } & {
        enablePersistentVolumeClaim?: boolean | undefined;
        workspaceClass?: ({
            regular?: string | undefined;
            prebuild?: string | undefined;
        } & {
            regular?: string | undefined;
            prebuild?: string | undefined;
        } & { [K in Exclude<keyof I["workspaceClass"], keyof WorkspaceClassSettings>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof WorkspaceSettings>]: never; }>(object: I): WorkspaceSettings;
};
export declare const WorkspaceClassSettings: {
    encode(message: WorkspaceClassSettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkspaceClassSettings;
    fromJSON(object: any): WorkspaceClassSettings;
    toJSON(message: WorkspaceClassSettings): unknown;
    fromPartial<I extends {
        regular?: string | undefined;
        prebuild?: string | undefined;
    } & {
        regular?: string | undefined;
        prebuild?: string | undefined;
    } & { [K in Exclude<keyof I, keyof WorkspaceClassSettings>]: never; }>(object: I): WorkspaceClassSettings;
};
export declare const CreateProjectRequest: {
    encode(message: CreateProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProjectRequest;
    fromJSON(object: any): CreateProjectRequest;
    toJSON(message: CreateProjectRequest): unknown;
    fromPartial<I extends {
        project?: {
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: {
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        project?: ({
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: {
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: ({
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                prebuild?: ({
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } & {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } & { [K in Exclude<keyof I["project"]["settings"]["prebuild"], keyof PrebuildSettings>]: never; }) | undefined;
                workspace?: ({
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } & {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: ({
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } & {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["project"]["settings"]["workspace"]["workspaceClass"], keyof WorkspaceClassSettings>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["project"]["settings"]["workspace"], keyof WorkspaceSettings>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["project"]["settings"], keyof ProjectSettings>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["project"], keyof Project>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "project">]: never; }>(object: I): CreateProjectRequest;
};
export declare const CreateProjectResponse: {
    encode(message: CreateProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateProjectResponse;
    fromJSON(object: any): CreateProjectResponse;
    toJSON(message: CreateProjectResponse): unknown;
    fromPartial<I extends {
        project?: {
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: {
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        project?: ({
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: {
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: ({
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                prebuild?: ({
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } & {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } & { [K in Exclude<keyof I["project"]["settings"]["prebuild"], keyof PrebuildSettings>]: never; }) | undefined;
                workspace?: ({
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } & {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: ({
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } & {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["project"]["settings"]["workspace"]["workspaceClass"], keyof WorkspaceClassSettings>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["project"]["settings"]["workspace"], keyof WorkspaceSettings>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["project"]["settings"], keyof ProjectSettings>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["project"], keyof Project>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "project">]: never; }>(object: I): CreateProjectResponse;
};
export declare const GetProjectRequest: {
    encode(message: GetProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProjectRequest;
    fromJSON(object: any): GetProjectRequest;
    toJSON(message: GetProjectRequest): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
    } & {
        projectId?: string | undefined;
    } & { [K in Exclude<keyof I, "projectId">]: never; }>(object: I): GetProjectRequest;
};
export declare const GetProjectResponse: {
    encode(message: GetProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetProjectResponse;
    fromJSON(object: any): GetProjectResponse;
    toJSON(message: GetProjectResponse): unknown;
    fromPartial<I extends {
        project?: {
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: {
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        project?: ({
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: {
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: ({
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                prebuild?: ({
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } & {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } & { [K in Exclude<keyof I["project"]["settings"]["prebuild"], keyof PrebuildSettings>]: never; }) | undefined;
                workspace?: ({
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } & {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: ({
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } & {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["project"]["settings"]["workspace"]["workspaceClass"], keyof WorkspaceClassSettings>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["project"]["settings"]["workspace"], keyof WorkspaceSettings>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["project"]["settings"], keyof ProjectSettings>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["project"], keyof Project>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "project">]: never; }>(object: I): GetProjectResponse;
};
export declare const ListProjectsRequest: {
    encode(message: ListProjectsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProjectsRequest;
    fromJSON(object: any): ListProjectsRequest;
    toJSON(message: ListProjectsRequest): unknown;
    fromPartial<I extends {
        userId?: string | undefined;
        teamId?: string | undefined;
        pagination?: {
            pageSize?: number | undefined;
            page?: number | undefined;
        } | undefined;
    } & {
        userId?: string | undefined;
        teamId?: string | undefined;
        pagination?: ({
            pageSize?: number | undefined;
            page?: number | undefined;
        } & {
            pageSize?: number | undefined;
            page?: number | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof Pagination>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ListProjectsRequest>]: never; }>(object: I): ListProjectsRequest;
};
export declare const ListProjectsResponse: {
    encode(message: ListProjectsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListProjectsResponse;
    fromJSON(object: any): ListProjectsResponse;
    toJSON(message: ListProjectsResponse): unknown;
    fromPartial<I extends {
        projects?: {
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: {
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        totalResults?: number | undefined;
    } & {
        projects?: ({
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: {
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: {
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: ({
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } & {
                prebuild?: ({
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } & {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } & { [K in Exclude<keyof I["projects"][number]["settings"]["prebuild"], keyof PrebuildSettings>]: never; }) | undefined;
                workspace?: ({
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } & {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: ({
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } & {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["projects"][number]["settings"]["workspace"]["workspaceClass"], keyof WorkspaceClassSettings>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["projects"][number]["settings"]["workspace"], keyof WorkspaceSettings>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["projects"][number]["settings"], keyof ProjectSettings>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["projects"][number], keyof Project>]: never; })[] & { [K_5 in Exclude<keyof I["projects"], keyof {
            id?: string | undefined;
            teamId?: string | undefined;
            userId?: string | undefined;
            name?: string | undefined;
            slug?: string | undefined;
            cloneUrl?: string | undefined;
            creationTime?: Date | undefined;
            settings?: {
                prebuild?: {
                    enableIncrementalPrebuilds?: boolean | undefined;
                    keepOutdatedPrebuildsRunning?: boolean | undefined;
                    usePreviousPrebuilds?: boolean | undefined;
                    prebuildEveryNth?: number | undefined;
                } | undefined;
                workspace?: {
                    enablePersistentVolumeClaim?: boolean | undefined;
                    workspaceClass?: {
                        regular?: string | undefined;
                        prebuild?: string | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        totalResults?: number | undefined;
    } & { [K_6 in Exclude<keyof I, keyof ListProjectsResponse>]: never; }>(object: I): ListProjectsResponse;
};
export declare const DeleteProjectRequest: {
    encode(message: DeleteProjectRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteProjectRequest;
    fromJSON(object: any): DeleteProjectRequest;
    toJSON(message: DeleteProjectRequest): unknown;
    fromPartial<I extends {
        projectId?: string | undefined;
    } & {
        projectId?: string | undefined;
    } & { [K in Exclude<keyof I, "projectId">]: never; }>(object: I): DeleteProjectRequest;
};
export declare const DeleteProjectResponse: {
    encode(_: DeleteProjectResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteProjectResponse;
    fromJSON(_: any): DeleteProjectResponse;
    toJSON(_: DeleteProjectResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): DeleteProjectResponse;
};
export declare type ProjectsServiceService = typeof ProjectsServiceService;
export declare const ProjectsServiceService: {
    /** Creates a new project. */
    readonly createProject: {
        readonly path: "/gitpod.experimental.v1.ProjectsService/CreateProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateProjectRequest;
        readonly responseSerialize: (value: CreateProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateProjectResponse;
    };
    /** Retrieves a project. */
    readonly getProject: {
        readonly path: "/gitpod.experimental.v1.ProjectsService/GetProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetProjectRequest;
        readonly responseSerialize: (value: GetProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetProjectResponse;
    };
    /** Lists projects. */
    readonly listProjects: {
        readonly path: "/gitpod.experimental.v1.ProjectsService/ListProjects";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListProjectsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListProjectsRequest;
        readonly responseSerialize: (value: ListProjectsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListProjectsResponse;
    };
    /** Deletes a project. */
    readonly deleteProject: {
        readonly path: "/gitpod.experimental.v1.ProjectsService/DeleteProject";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteProjectRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteProjectRequest;
        readonly responseSerialize: (value: DeleteProjectResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteProjectResponse;
    };
};
export interface ProjectsServiceServer extends UntypedServiceImplementation {
    /** Creates a new project. */
    createProject: handleUnaryCall<CreateProjectRequest, CreateProjectResponse>;
    /** Retrieves a project. */
    getProject: handleUnaryCall<GetProjectRequest, GetProjectResponse>;
    /** Lists projects. */
    listProjects: handleUnaryCall<ListProjectsRequest, ListProjectsResponse>;
    /** Deletes a project. */
    deleteProject: handleUnaryCall<DeleteProjectRequest, DeleteProjectResponse>;
}
export interface ProjectsServiceClient extends Client {
    /** Creates a new project. */
    createProject(request: CreateProjectRequest, callback: (error: ServiceError | null, response: CreateProjectResponse) => void): ClientUnaryCall;
    createProject(request: CreateProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateProjectResponse) => void): ClientUnaryCall;
    createProject(request: CreateProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateProjectResponse) => void): ClientUnaryCall;
    /** Retrieves a project. */
    getProject(request: GetProjectRequest, callback: (error: ServiceError | null, response: GetProjectResponse) => void): ClientUnaryCall;
    getProject(request: GetProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetProjectResponse) => void): ClientUnaryCall;
    getProject(request: GetProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetProjectResponse) => void): ClientUnaryCall;
    /** Lists projects. */
    listProjects(request: ListProjectsRequest, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    listProjects(request: ListProjectsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    listProjects(request: ListProjectsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListProjectsResponse) => void): ClientUnaryCall;
    /** Deletes a project. */
    deleteProject(request: DeleteProjectRequest, callback: (error: ServiceError | null, response: DeleteProjectResponse) => void): ClientUnaryCall;
    deleteProject(request: DeleteProjectRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteProjectResponse) => void): ClientUnaryCall;
    deleteProject(request: DeleteProjectRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteProjectResponse) => void): ClientUnaryCall;
}
export declare const ProjectsServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): ProjectsServiceClient;
    service: typeof ProjectsServiceService;
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
//# sourceMappingURL=projects.pb.d.ts.map