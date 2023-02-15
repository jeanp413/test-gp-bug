/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/// <reference types="node" />
import { CallOptions, ChannelCredentials, ChannelOptions, Client, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal.js";
import { Pagination } from "./pagination.pb.js";
export declare const protobufPackage = "gitpod.experimental.v1";
/** PortPolicy defines the accssbility policy of a workspace port is guarded by an authentication in the proxy */
export declare enum PortPolicy {
    PORT_POLICY_UNSPECIFIED = "PORT_POLICY_UNSPECIFIED",
    /** PORT_POLICY_PRIVATE - Private means the port is accessible by the workspace owner only using the workspace port URL */
    PORT_POLICY_PRIVATE = "PORT_POLICY_PRIVATE",
    /** PORT_POLICY_PUBLIC - Public means the port is accessible by everybody using the workspace port URL */
    PORT_POLICY_PUBLIC = "PORT_POLICY_PUBLIC",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function portPolicyFromJSON(object: any): PortPolicy;
export declare function portPolicyToJSON(object: PortPolicy): string;
export declare function portPolicyToNumber(object: PortPolicy): number;
/** Admission level describes who can access a workspace instance and its ports. */
export declare enum AdmissionLevel {
    ADMISSION_LEVEL_UNSPECIFIED = "ADMISSION_LEVEL_UNSPECIFIED",
    /** ADMISSION_LEVEL_OWNER_ONLY - ADMISSION_LEVEL_OWNER_ONLY means the workspace can only be accessed using the owner token */
    ADMISSION_LEVEL_OWNER_ONLY = "ADMISSION_LEVEL_OWNER_ONLY",
    /** ADMISSION_LEVEL_EVERYONE - ADMISSION_LEVEL_EVERYONE means the workspace (including ports) can be accessed by everyone. */
    ADMISSION_LEVEL_EVERYONE = "ADMISSION_LEVEL_EVERYONE",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function admissionLevelFromJSON(object: any): AdmissionLevel;
export declare function admissionLevelToJSON(object: AdmissionLevel): string;
export declare function admissionLevelToNumber(object: AdmissionLevel): number;
export interface ListWorkspacesRequest {
    pagination: Pagination | undefined;
    fieldMask: string[] | undefined;
}
export interface ListWorkspacesResponse {
    nextPageToken: string;
    result: Workspace[];
}
export interface GetWorkspaceRequest {
    workspaceId: string;
}
export interface GetWorkspaceResponse {
    result: Workspace | undefined;
}
export interface StreamWorkspaceStatusRequest {
    workspaceId: string;
}
export interface StreamWorkspaceStatusResponse {
    result: WorkspaceStatus | undefined;
}
export interface GetOwnerTokenRequest {
    workspaceId: string;
}
export interface GetOwnerTokenResponse {
    token: string;
}
export interface CreateAndStartWorkspaceRequest {
    idempotencyToken: string;
    contextUrl: string | undefined;
    prebuildId: string | undefined;
    startSpec: StartWorkspaceSpec | undefined;
}
export interface CreateAndStartWorkspaceResponse {
    workspaceId: string;
}
export interface StartWorkspaceRequest {
    idempotencyToken: string;
    workspaceId: string;
    spec: StartWorkspaceSpec | undefined;
}
export interface StartWorkspaceResponse {
    instanceId: string;
    workspaceUrl: string;
}
export interface StopWorkspaceRequest {
    workspaceId: string;
}
export interface StopWorkspaceResponse {
}
export interface DeleteWorkspaceRequest {
    workspaceId: string;
}
export interface DeleteWorkspaceResponse {
}
/** Workspace describes a single workspace */
export interface Workspace {
    /** workspace_id is the ID of the workspace */
    workspaceId: string;
    /** owner_id is the ID of the user who created this workspace */
    ownerId: string;
    /** project_id is the ID of the project which this workspace belongs to */
    projectId: string;
    /** context reports the original context the workspace was created from */
    context: WorkspaceContext | undefined;
    /** description is a human readable description of the workspace */
    description: string;
    /** status is the current status of this Workspace. */
    status: WorkspaceStatus | undefined;
}
/** WorkspaceStatus represents the currently observed status of a Workspace, including data about child resources that belong to this Workspace. */
export interface WorkspaceStatus {
    /** instance is the currently assigned WorkspaceInstance to this workspace. Empty when there is no WorkspaceInstance assigned. */
    instance: WorkspaceInstance | undefined;
}
/** WorkspaceContext describes the context a workspace was created from */
export interface WorkspaceContext {
    /**
     * All workspace context originates from a URL - this is the context URL
     * which led to the creation of a workspace.
     */
    contextUrl: string;
    git: WorkspaceContext_Git | undefined;
    prebuild: WorkspaceContext_Prebuild | undefined;
    snapshot: WorkspaceContext_Snapshot | undefined;
}
/** Explicit Git context */
export interface WorkspaceContext_Git {
    normalizedContextUrl: string;
    commit: string;
}
/** Workspace was created from a prebuild */
export interface WorkspaceContext_Prebuild {
    /**
     * original_context is the Git context which lead to the selection
     * of a prebuild.
     */
    originalContext: WorkspaceContext_Git | undefined;
    /** prebuild_id is the ID of the prebuild which was used to create this workspace */
    prebuildId: string;
}
/** Snapshot context points to the snapshot which the workspace was created from */
export interface WorkspaceContext_Snapshot {
    snapshotId: string;
}
/** WorkspaceInstance describes a single workspace instance */
export interface WorkspaceInstance {
    /** Instance ID is the unique identifier of the workspace instance */
    instanceId: string;
    /** Worksapce ID is the unique identifier of the workspace this instance belongs to */
    workspaceId: string;
    createdAt: Date | undefined;
    status: WorkspaceInstanceStatus | undefined;
}
/** WorkspaceStatus describes a workspace status */
export interface WorkspaceInstanceStatus {
    /**
     * version of the status update. Workspace instances themselves are unversioned,
     * but their statuus has different versions.
     * The value of this field has no semantic meaning (e.g. don't interpret it as
     * as a timestemp), but it can be used to impose a partial order.
     * If a.status_version < b.status_version then a was the status before b.
     */
    statusVersion: number;
    /** the phase of a workspace is a simple, high-level summary of where the workspace instance is in its lifecycle */
    phase: WorkspaceInstanceStatus_Phase;
    /** conditions detail the current state of the workspace instance */
    conditions: WorkspaceInstanceStatus_Conditions | undefined;
    /** message is an optional human-readable message detailing the current phase */
    message: string;
    /** URL contains the endpoint at which the workspace instance is available */
    url: string;
    /** Admission describes who can access a workspace instance and its ports. */
    admission: AdmissionLevel;
    /** ports is the list of exposed ports in the workspace. */
    ports: Port[];
}
/**
 * Phase is a simple, high-level summary of where the workspace instance is in its lifecycle.
 * The phase is not intended to be a comprehensive rollup of observations of the workspace state,
 * nor is it intended to be a comprehensive state machine.
 * (based on  https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase)
 */
export declare enum WorkspaceInstanceStatus_Phase {
    /**
     * PHASE_UNSPECIFIED - Unknown indicates an issue within the workspace manager in that it cannot determine the actual phase of
     * a workspace. This phase is usually accompanied by an error.
     */
    PHASE_UNSPECIFIED = "PHASE_UNSPECIFIED",
    /**
     * PHASE_PREPARING - Preparing means that we haven't actually started the workspace instance just yet, but rather
     * are still preparing for launch.
     */
    PHASE_PREPARING = "PHASE_PREPARING",
    /** PHASE_IMAGEBUILD - ImageBuild indicates that there's an image build running for this workspace. */
    PHASE_IMAGEBUILD = "PHASE_IMAGEBUILD",
    /**
     * PHASE_PENDING - Pending means the workspace does not yet consume resources in the cluster, but rather is looking for
     * some space within the cluster. If for example the cluster needs to scale up to accomodate the
     * workspace, the workspace will be in Pending state until that happened.
     */
    PHASE_PENDING = "PHASE_PENDING",
    /**
     * PHASE_CREATING - Creating means the workspace is currently being created. That includes downloading the images required
     * to run the workspace over the network. The time spent in this phase varies widely and depends on the current
     * network speed, image size and cache states.
     */
    PHASE_CREATING = "PHASE_CREATING",
    /**
     * PHASE_INITIALIZING - Initializing is the phase in which the workspace is executing the appropriate workspace initializer (e.g. Git
     * clone or backup download). After this phase one can expect the workspace to either be Running or Failed.
     */
    PHASE_INITIALIZING = "PHASE_INITIALIZING",
    /**
     * PHASE_RUNNING - Running means the workspace is able to actively perform work, either by serving a user through Theia,
     * or as a headless workspace.
     */
    PHASE_RUNNING = "PHASE_RUNNING",
    /**
     * PHASE_INTERRUPTED - Interrupted is an exceptional state where the container should be running but is temporarily unavailable.
     * When in this state, we expect it to become running or stopping anytime soon.
     */
    PHASE_INTERRUPTED = "PHASE_INTERRUPTED",
    /** PHASE_STOPPING - Stopping means that the workspace is currently shutting down. It could go to stopped every moment. */
    PHASE_STOPPING = "PHASE_STOPPING",
    /** PHASE_STOPPED - Stopped means the workspace ended regularly because it was shut down. */
    PHASE_STOPPED = "PHASE_STOPPED",
    UNRECOGNIZED = "UNRECOGNIZED"
}
export declare function workspaceInstanceStatus_PhaseFromJSON(object: any): WorkspaceInstanceStatus_Phase;
export declare function workspaceInstanceStatus_PhaseToJSON(object: WorkspaceInstanceStatus_Phase): string;
export declare function workspaceInstanceStatus_PhaseToNumber(object: WorkspaceInstanceStatus_Phase): number;
/**
 * Conditions gives more detailed information as to the state of the workspace. Which condition actually
 * has a value depends on the phase the workspace is in.
 */
export interface WorkspaceInstanceStatus_Conditions {
    /**
     * failed contains the reason the workspace failed to operate. If this field is empty, the workspace has not failed.
     * This field is filled exclusively when caused by system errors.
     */
    failed: string;
    /** timeout contains the reason the workspace has timed out. If this field is empty, the workspace has not timed out. */
    timeout: string;
    /** first_user_activity is the time when MarkActive was first called on the workspace */
    firstUserActivity: Date | undefined;
    /** stopped_by_request is true if the workspace was stopped using a StopWorkspace call */
    stoppedByRequest?: boolean | undefined;
}
export interface Port {
    /** port number */
    port: number;
    /** policy of this port */
    policy: PortPolicy;
    /** url that can be used to access the port */
    url: string;
}
/** StartWorkspaceSpec influences the workspace start */
export interface StartWorkspaceSpec {
}
export interface PortSpec {
    /** port number */
    port: number;
    /** policy of this port */
    policy: PortPolicy;
}
export interface UpdatePortRequest {
    workspaceId: string;
    port: PortSpec | undefined;
}
export interface UpdatePortResponse {
}
export declare const ListWorkspacesRequest: {
    encode(message: ListWorkspacesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListWorkspacesRequest;
    fromJSON(object: any): ListWorkspacesRequest;
    toJSON(message: ListWorkspacesRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            pageSize?: number | undefined;
            page?: number | undefined;
        } | undefined;
        fieldMask?: string[] | undefined;
    } & {
        pagination?: ({
            pageSize?: number | undefined;
            page?: number | undefined;
        } & {
            pageSize?: number | undefined;
            page?: number | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof Pagination>]: never; }) | undefined;
        fieldMask?: (string[] & string[] & { [K_1 in Exclude<keyof I["fieldMask"], keyof string[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ListWorkspacesRequest>]: never; }>(object: I): ListWorkspacesRequest;
};
export declare const ListWorkspacesResponse: {
    encode(message: ListWorkspacesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListWorkspacesResponse;
    fromJSON(object: any): ListWorkspacesResponse;
    toJSON(message: ListWorkspacesResponse): unknown;
    fromPartial<I extends {
        nextPageToken?: string | undefined;
        result?: {
            workspaceId?: string | undefined;
            ownerId?: string | undefined;
            projectId?: string | undefined;
            context?: {
                contextUrl?: string | undefined;
                git?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuild?: {
                    originalContext?: {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } | undefined;
                    prebuildId?: string | undefined;
                } | undefined;
                snapshot?: {
                    snapshotId?: string | undefined;
                } | undefined;
            } | undefined;
            description?: string | undefined;
            status?: {
                instance?: {
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        nextPageToken?: string | undefined;
        result?: ({
            workspaceId?: string | undefined;
            ownerId?: string | undefined;
            projectId?: string | undefined;
            context?: {
                contextUrl?: string | undefined;
                git?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuild?: {
                    originalContext?: {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } | undefined;
                    prebuildId?: string | undefined;
                } | undefined;
                snapshot?: {
                    snapshotId?: string | undefined;
                } | undefined;
            } | undefined;
            description?: string | undefined;
            status?: {
                instance?: {
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[] & ({
            workspaceId?: string | undefined;
            ownerId?: string | undefined;
            projectId?: string | undefined;
            context?: {
                contextUrl?: string | undefined;
                git?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuild?: {
                    originalContext?: {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } | undefined;
                    prebuildId?: string | undefined;
                } | undefined;
                snapshot?: {
                    snapshotId?: string | undefined;
                } | undefined;
            } | undefined;
            description?: string | undefined;
            status?: {
                instance?: {
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            workspaceId?: string | undefined;
            ownerId?: string | undefined;
            projectId?: string | undefined;
            context?: ({
                contextUrl?: string | undefined;
                git?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuild?: {
                    originalContext?: {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } | undefined;
                    prebuildId?: string | undefined;
                } | undefined;
                snapshot?: {
                    snapshotId?: string | undefined;
                } | undefined;
            } & {
                contextUrl?: string | undefined;
                git?: ({
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } & {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } & { [K in Exclude<keyof I["result"][number]["context"]["git"], keyof WorkspaceContext_Git>]: never; }) | undefined;
                prebuild?: ({
                    originalContext?: {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } | undefined;
                    prebuildId?: string | undefined;
                } & {
                    originalContext?: ({
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } & {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["result"][number]["context"]["prebuild"]["originalContext"], keyof WorkspaceContext_Git>]: never; }) | undefined;
                    prebuildId?: string | undefined;
                } & { [K_2 in Exclude<keyof I["result"][number]["context"]["prebuild"], keyof WorkspaceContext_Prebuild>]: never; }) | undefined;
                snapshot?: ({
                    snapshotId?: string | undefined;
                } & {
                    snapshotId?: string | undefined;
                } & { [K_3 in Exclude<keyof I["result"][number]["context"]["snapshot"], "snapshotId">]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["result"][number]["context"], keyof WorkspaceContext>]: never; }) | undefined;
            description?: string | undefined;
            status?: ({
                instance?: {
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } & {
                instance?: ({
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: ({
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } & {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: ({
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } & {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } & { [K_5 in Exclude<keyof I["result"][number]["status"]["instance"]["status"]["conditions"], keyof WorkspaceInstanceStatus_Conditions>]: never; }) | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: ({
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] & ({
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        } & {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        } & { [K_6 in Exclude<keyof I["result"][number]["status"]["instance"]["status"]["ports"][number], keyof Port>]: never; })[] & { [K_7 in Exclude<keyof I["result"][number]["status"]["instance"]["status"]["ports"], keyof {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_8 in Exclude<keyof I["result"][number]["status"]["instance"]["status"], keyof WorkspaceInstanceStatus>]: never; }) | undefined;
                } & { [K_9 in Exclude<keyof I["result"][number]["status"]["instance"], keyof WorkspaceInstance>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["result"][number]["status"], "instance">]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["result"][number], keyof Workspace>]: never; })[] & { [K_12 in Exclude<keyof I["result"], keyof {
            workspaceId?: string | undefined;
            ownerId?: string | undefined;
            projectId?: string | undefined;
            context?: {
                contextUrl?: string | undefined;
                git?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuild?: {
                    originalContext?: {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } | undefined;
                    prebuildId?: string | undefined;
                } | undefined;
                snapshot?: {
                    snapshotId?: string | undefined;
                } | undefined;
            } | undefined;
            description?: string | undefined;
            status?: {
                instance?: {
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I, keyof ListWorkspacesResponse>]: never; }>(object: I): ListWorkspacesResponse;
};
export declare const GetWorkspaceRequest: {
    encode(message: GetWorkspaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetWorkspaceRequest;
    fromJSON(object: any): GetWorkspaceRequest;
    toJSON(message: GetWorkspaceRequest): unknown;
    fromPartial<I extends {
        workspaceId?: string | undefined;
    } & {
        workspaceId?: string | undefined;
    } & { [K in Exclude<keyof I, "workspaceId">]: never; }>(object: I): GetWorkspaceRequest;
};
export declare const GetWorkspaceResponse: {
    encode(message: GetWorkspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetWorkspaceResponse;
    fromJSON(object: any): GetWorkspaceResponse;
    toJSON(message: GetWorkspaceResponse): unknown;
    fromPartial<I extends {
        result?: {
            workspaceId?: string | undefined;
            ownerId?: string | undefined;
            projectId?: string | undefined;
            context?: {
                contextUrl?: string | undefined;
                git?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuild?: {
                    originalContext?: {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } | undefined;
                    prebuildId?: string | undefined;
                } | undefined;
                snapshot?: {
                    snapshotId?: string | undefined;
                } | undefined;
            } | undefined;
            description?: string | undefined;
            status?: {
                instance?: {
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        result?: ({
            workspaceId?: string | undefined;
            ownerId?: string | undefined;
            projectId?: string | undefined;
            context?: {
                contextUrl?: string | undefined;
                git?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuild?: {
                    originalContext?: {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } | undefined;
                    prebuildId?: string | undefined;
                } | undefined;
                snapshot?: {
                    snapshotId?: string | undefined;
                } | undefined;
            } | undefined;
            description?: string | undefined;
            status?: {
                instance?: {
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            workspaceId?: string | undefined;
            ownerId?: string | undefined;
            projectId?: string | undefined;
            context?: ({
                contextUrl?: string | undefined;
                git?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuild?: {
                    originalContext?: {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } | undefined;
                    prebuildId?: string | undefined;
                } | undefined;
                snapshot?: {
                    snapshotId?: string | undefined;
                } | undefined;
            } & {
                contextUrl?: string | undefined;
                git?: ({
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } & {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } & { [K in Exclude<keyof I["result"]["context"]["git"], keyof WorkspaceContext_Git>]: never; }) | undefined;
                prebuild?: ({
                    originalContext?: {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } | undefined;
                    prebuildId?: string | undefined;
                } & {
                    originalContext?: ({
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } & {
                        normalizedContextUrl?: string | undefined;
                        commit?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["result"]["context"]["prebuild"]["originalContext"], keyof WorkspaceContext_Git>]: never; }) | undefined;
                    prebuildId?: string | undefined;
                } & { [K_2 in Exclude<keyof I["result"]["context"]["prebuild"], keyof WorkspaceContext_Prebuild>]: never; }) | undefined;
                snapshot?: ({
                    snapshotId?: string | undefined;
                } & {
                    snapshotId?: string | undefined;
                } & { [K_3 in Exclude<keyof I["result"]["context"]["snapshot"], "snapshotId">]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["result"]["context"], keyof WorkspaceContext>]: never; }) | undefined;
            description?: string | undefined;
            status?: ({
                instance?: {
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } | undefined;
            } & {
                instance?: ({
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    instanceId?: string | undefined;
                    workspaceId?: string | undefined;
                    createdAt?: Date | undefined;
                    status?: ({
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] | undefined;
                    } & {
                        statusVersion?: number | undefined;
                        phase?: WorkspaceInstanceStatus_Phase | undefined;
                        conditions?: ({
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } & {
                            failed?: string | undefined;
                            timeout?: string | undefined;
                            firstUserActivity?: Date | undefined;
                            stoppedByRequest?: boolean | undefined;
                        } & { [K_5 in Exclude<keyof I["result"]["status"]["instance"]["status"]["conditions"], keyof WorkspaceInstanceStatus_Conditions>]: never; }) | undefined;
                        message?: string | undefined;
                        url?: string | undefined;
                        admission?: AdmissionLevel | undefined;
                        ports?: ({
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[] & ({
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        } & {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        } & { [K_6 in Exclude<keyof I["result"]["status"]["instance"]["status"]["ports"][number], keyof Port>]: never; })[] & { [K_7 in Exclude<keyof I["result"]["status"]["instance"]["status"]["ports"], keyof {
                            port?: number | undefined;
                            policy?: PortPolicy | undefined;
                            url?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_8 in Exclude<keyof I["result"]["status"]["instance"]["status"], keyof WorkspaceInstanceStatus>]: never; }) | undefined;
                } & { [K_9 in Exclude<keyof I["result"]["status"]["instance"], keyof WorkspaceInstance>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["result"]["status"], "instance">]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["result"], keyof Workspace>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, "result">]: never; }>(object: I): GetWorkspaceResponse;
};
export declare const StreamWorkspaceStatusRequest: {
    encode(message: StreamWorkspaceStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamWorkspaceStatusRequest;
    fromJSON(object: any): StreamWorkspaceStatusRequest;
    toJSON(message: StreamWorkspaceStatusRequest): unknown;
    fromPartial<I extends {
        workspaceId?: string | undefined;
    } & {
        workspaceId?: string | undefined;
    } & { [K in Exclude<keyof I, "workspaceId">]: never; }>(object: I): StreamWorkspaceStatusRequest;
};
export declare const StreamWorkspaceStatusResponse: {
    encode(message: StreamWorkspaceStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StreamWorkspaceStatusResponse;
    fromJSON(object: any): StreamWorkspaceStatusResponse;
    toJSON(message: StreamWorkspaceStatusResponse): unknown;
    fromPartial<I extends {
        result?: {
            instance?: {
                instanceId?: string | undefined;
                workspaceId?: string | undefined;
                createdAt?: Date | undefined;
                status?: {
                    statusVersion?: number | undefined;
                    phase?: WorkspaceInstanceStatus_Phase | undefined;
                    conditions?: {
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } | undefined;
                    message?: string | undefined;
                    url?: string | undefined;
                    admission?: AdmissionLevel | undefined;
                    ports?: {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        result?: ({
            instance?: {
                instanceId?: string | undefined;
                workspaceId?: string | undefined;
                createdAt?: Date | undefined;
                status?: {
                    statusVersion?: number | undefined;
                    phase?: WorkspaceInstanceStatus_Phase | undefined;
                    conditions?: {
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } | undefined;
                    message?: string | undefined;
                    url?: string | undefined;
                    admission?: AdmissionLevel | undefined;
                    ports?: {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } & {
            instance?: ({
                instanceId?: string | undefined;
                workspaceId?: string | undefined;
                createdAt?: Date | undefined;
                status?: {
                    statusVersion?: number | undefined;
                    phase?: WorkspaceInstanceStatus_Phase | undefined;
                    conditions?: {
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } | undefined;
                    message?: string | undefined;
                    url?: string | undefined;
                    admission?: AdmissionLevel | undefined;
                    ports?: {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                instanceId?: string | undefined;
                workspaceId?: string | undefined;
                createdAt?: Date | undefined;
                status?: ({
                    statusVersion?: number | undefined;
                    phase?: WorkspaceInstanceStatus_Phase | undefined;
                    conditions?: {
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } | undefined;
                    message?: string | undefined;
                    url?: string | undefined;
                    admission?: AdmissionLevel | undefined;
                    ports?: {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[] | undefined;
                } & {
                    statusVersion?: number | undefined;
                    phase?: WorkspaceInstanceStatus_Phase | undefined;
                    conditions?: ({
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } & {
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } & { [K in Exclude<keyof I["result"]["instance"]["status"]["conditions"], keyof WorkspaceInstanceStatus_Conditions>]: never; }) | undefined;
                    message?: string | undefined;
                    url?: string | undefined;
                    admission?: AdmissionLevel | undefined;
                    ports?: ({
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[] & ({
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    } & {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["result"]["instance"]["status"]["ports"][number], keyof Port>]: never; })[] & { [K_2 in Exclude<keyof I["result"]["instance"]["status"]["ports"], keyof {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_3 in Exclude<keyof I["result"]["instance"]["status"], keyof WorkspaceInstanceStatus>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["result"]["instance"], keyof WorkspaceInstance>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["result"], "instance">]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, "result">]: never; }>(object: I): StreamWorkspaceStatusResponse;
};
export declare const GetOwnerTokenRequest: {
    encode(message: GetOwnerTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOwnerTokenRequest;
    fromJSON(object: any): GetOwnerTokenRequest;
    toJSON(message: GetOwnerTokenRequest): unknown;
    fromPartial<I extends {
        workspaceId?: string | undefined;
    } & {
        workspaceId?: string | undefined;
    } & { [K in Exclude<keyof I, "workspaceId">]: never; }>(object: I): GetOwnerTokenRequest;
};
export declare const GetOwnerTokenResponse: {
    encode(message: GetOwnerTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetOwnerTokenResponse;
    fromJSON(object: any): GetOwnerTokenResponse;
    toJSON(message: GetOwnerTokenResponse): unknown;
    fromPartial<I extends {
        token?: string | undefined;
    } & {
        token?: string | undefined;
    } & { [K in Exclude<keyof I, "token">]: never; }>(object: I): GetOwnerTokenResponse;
};
export declare const CreateAndStartWorkspaceRequest: {
    encode(message: CreateAndStartWorkspaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAndStartWorkspaceRequest;
    fromJSON(object: any): CreateAndStartWorkspaceRequest;
    toJSON(message: CreateAndStartWorkspaceRequest): unknown;
    fromPartial<I extends {
        idempotencyToken?: string | undefined;
        contextUrl?: string | undefined;
        prebuildId?: string | undefined;
        startSpec?: {} | undefined;
    } & {
        idempotencyToken?: string | undefined;
        contextUrl?: string | undefined;
        prebuildId?: string | undefined;
        startSpec?: ({} & {} & { [K in Exclude<keyof I["startSpec"], never>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CreateAndStartWorkspaceRequest>]: never; }>(object: I): CreateAndStartWorkspaceRequest;
};
export declare const CreateAndStartWorkspaceResponse: {
    encode(message: CreateAndStartWorkspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateAndStartWorkspaceResponse;
    fromJSON(object: any): CreateAndStartWorkspaceResponse;
    toJSON(message: CreateAndStartWorkspaceResponse): unknown;
    fromPartial<I extends {
        workspaceId?: string | undefined;
    } & {
        workspaceId?: string | undefined;
    } & { [K in Exclude<keyof I, "workspaceId">]: never; }>(object: I): CreateAndStartWorkspaceResponse;
};
export declare const StartWorkspaceRequest: {
    encode(message: StartWorkspaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartWorkspaceRequest;
    fromJSON(object: any): StartWorkspaceRequest;
    toJSON(message: StartWorkspaceRequest): unknown;
    fromPartial<I extends {
        idempotencyToken?: string | undefined;
        workspaceId?: string | undefined;
        spec?: {} | undefined;
    } & {
        idempotencyToken?: string | undefined;
        workspaceId?: string | undefined;
        spec?: ({} & {} & { [K in Exclude<keyof I["spec"], never>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof StartWorkspaceRequest>]: never; }>(object: I): StartWorkspaceRequest;
};
export declare const StartWorkspaceResponse: {
    encode(message: StartWorkspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartWorkspaceResponse;
    fromJSON(object: any): StartWorkspaceResponse;
    toJSON(message: StartWorkspaceResponse): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
        workspaceUrl?: string | undefined;
    } & {
        instanceId?: string | undefined;
        workspaceUrl?: string | undefined;
    } & { [K in Exclude<keyof I, keyof StartWorkspaceResponse>]: never; }>(object: I): StartWorkspaceResponse;
};
export declare const StopWorkspaceRequest: {
    encode(message: StopWorkspaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopWorkspaceRequest;
    fromJSON(object: any): StopWorkspaceRequest;
    toJSON(message: StopWorkspaceRequest): unknown;
    fromPartial<I extends {
        workspaceId?: string | undefined;
    } & {
        workspaceId?: string | undefined;
    } & { [K in Exclude<keyof I, "workspaceId">]: never; }>(object: I): StopWorkspaceRequest;
};
export declare const StopWorkspaceResponse: {
    encode(_: StopWorkspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StopWorkspaceResponse;
    fromJSON(_: any): StopWorkspaceResponse;
    toJSON(_: StopWorkspaceResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): StopWorkspaceResponse;
};
export declare const DeleteWorkspaceRequest: {
    encode(message: DeleteWorkspaceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteWorkspaceRequest;
    fromJSON(object: any): DeleteWorkspaceRequest;
    toJSON(message: DeleteWorkspaceRequest): unknown;
    fromPartial<I extends {
        workspaceId?: string | undefined;
    } & {
        workspaceId?: string | undefined;
    } & { [K in Exclude<keyof I, "workspaceId">]: never; }>(object: I): DeleteWorkspaceRequest;
};
export declare const DeleteWorkspaceResponse: {
    encode(_: DeleteWorkspaceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteWorkspaceResponse;
    fromJSON(_: any): DeleteWorkspaceResponse;
    toJSON(_: DeleteWorkspaceResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): DeleteWorkspaceResponse;
};
export declare const Workspace: {
    encode(message: Workspace, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Workspace;
    fromJSON(object: any): Workspace;
    toJSON(message: Workspace): unknown;
    fromPartial<I extends {
        workspaceId?: string | undefined;
        ownerId?: string | undefined;
        projectId?: string | undefined;
        context?: {
            contextUrl?: string | undefined;
            git?: {
                normalizedContextUrl?: string | undefined;
                commit?: string | undefined;
            } | undefined;
            prebuild?: {
                originalContext?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuildId?: string | undefined;
            } | undefined;
            snapshot?: {
                snapshotId?: string | undefined;
            } | undefined;
        } | undefined;
        description?: string | undefined;
        status?: {
            instance?: {
                instanceId?: string | undefined;
                workspaceId?: string | undefined;
                createdAt?: Date | undefined;
                status?: {
                    statusVersion?: number | undefined;
                    phase?: WorkspaceInstanceStatus_Phase | undefined;
                    conditions?: {
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } | undefined;
                    message?: string | undefined;
                    url?: string | undefined;
                    admission?: AdmissionLevel | undefined;
                    ports?: {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        workspaceId?: string | undefined;
        ownerId?: string | undefined;
        projectId?: string | undefined;
        context?: ({
            contextUrl?: string | undefined;
            git?: {
                normalizedContextUrl?: string | undefined;
                commit?: string | undefined;
            } | undefined;
            prebuild?: {
                originalContext?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuildId?: string | undefined;
            } | undefined;
            snapshot?: {
                snapshotId?: string | undefined;
            } | undefined;
        } & {
            contextUrl?: string | undefined;
            git?: ({
                normalizedContextUrl?: string | undefined;
                commit?: string | undefined;
            } & {
                normalizedContextUrl?: string | undefined;
                commit?: string | undefined;
            } & { [K in Exclude<keyof I["context"]["git"], keyof WorkspaceContext_Git>]: never; }) | undefined;
            prebuild?: ({
                originalContext?: {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } | undefined;
                prebuildId?: string | undefined;
            } & {
                originalContext?: ({
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } & {
                    normalizedContextUrl?: string | undefined;
                    commit?: string | undefined;
                } & { [K_1 in Exclude<keyof I["context"]["prebuild"]["originalContext"], keyof WorkspaceContext_Git>]: never; }) | undefined;
                prebuildId?: string | undefined;
            } & { [K_2 in Exclude<keyof I["context"]["prebuild"], keyof WorkspaceContext_Prebuild>]: never; }) | undefined;
            snapshot?: ({
                snapshotId?: string | undefined;
            } & {
                snapshotId?: string | undefined;
            } & { [K_3 in Exclude<keyof I["context"]["snapshot"], "snapshotId">]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["context"], keyof WorkspaceContext>]: never; }) | undefined;
        description?: string | undefined;
        status?: ({
            instance?: {
                instanceId?: string | undefined;
                workspaceId?: string | undefined;
                createdAt?: Date | undefined;
                status?: {
                    statusVersion?: number | undefined;
                    phase?: WorkspaceInstanceStatus_Phase | undefined;
                    conditions?: {
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } | undefined;
                    message?: string | undefined;
                    url?: string | undefined;
                    admission?: AdmissionLevel | undefined;
                    ports?: {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
        } & {
            instance?: ({
                instanceId?: string | undefined;
                workspaceId?: string | undefined;
                createdAt?: Date | undefined;
                status?: {
                    statusVersion?: number | undefined;
                    phase?: WorkspaceInstanceStatus_Phase | undefined;
                    conditions?: {
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } | undefined;
                    message?: string | undefined;
                    url?: string | undefined;
                    admission?: AdmissionLevel | undefined;
                    ports?: {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                instanceId?: string | undefined;
                workspaceId?: string | undefined;
                createdAt?: Date | undefined;
                status?: ({
                    statusVersion?: number | undefined;
                    phase?: WorkspaceInstanceStatus_Phase | undefined;
                    conditions?: {
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } | undefined;
                    message?: string | undefined;
                    url?: string | undefined;
                    admission?: AdmissionLevel | undefined;
                    ports?: {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[] | undefined;
                } & {
                    statusVersion?: number | undefined;
                    phase?: WorkspaceInstanceStatus_Phase | undefined;
                    conditions?: ({
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } & {
                        failed?: string | undefined;
                        timeout?: string | undefined;
                        firstUserActivity?: Date | undefined;
                        stoppedByRequest?: boolean | undefined;
                    } & { [K_5 in Exclude<keyof I["status"]["instance"]["status"]["conditions"], keyof WorkspaceInstanceStatus_Conditions>]: never; }) | undefined;
                    message?: string | undefined;
                    url?: string | undefined;
                    admission?: AdmissionLevel | undefined;
                    ports?: ({
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[] & ({
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    } & {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    } & { [K_6 in Exclude<keyof I["status"]["instance"]["status"]["ports"][number], keyof Port>]: never; })[] & { [K_7 in Exclude<keyof I["status"]["instance"]["status"]["ports"], keyof {
                        port?: number | undefined;
                        policy?: PortPolicy | undefined;
                        url?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_8 in Exclude<keyof I["status"]["instance"]["status"], keyof WorkspaceInstanceStatus>]: never; }) | undefined;
            } & { [K_9 in Exclude<keyof I["status"]["instance"], keyof WorkspaceInstance>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I["status"], "instance">]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, keyof Workspace>]: never; }>(object: I): Workspace;
};
export declare const WorkspaceStatus: {
    encode(message: WorkspaceStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkspaceStatus;
    fromJSON(object: any): WorkspaceStatus;
    toJSON(message: WorkspaceStatus): unknown;
    fromPartial<I extends {
        instance?: {
            instanceId?: string | undefined;
            workspaceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: {
                statusVersion?: number | undefined;
                phase?: WorkspaceInstanceStatus_Phase | undefined;
                conditions?: {
                    failed?: string | undefined;
                    timeout?: string | undefined;
                    firstUserActivity?: Date | undefined;
                    stoppedByRequest?: boolean | undefined;
                } | undefined;
                message?: string | undefined;
                url?: string | undefined;
                admission?: AdmissionLevel | undefined;
                ports?: {
                    port?: number | undefined;
                    policy?: PortPolicy | undefined;
                    url?: string | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        instance?: ({
            instanceId?: string | undefined;
            workspaceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: {
                statusVersion?: number | undefined;
                phase?: WorkspaceInstanceStatus_Phase | undefined;
                conditions?: {
                    failed?: string | undefined;
                    timeout?: string | undefined;
                    firstUserActivity?: Date | undefined;
                    stoppedByRequest?: boolean | undefined;
                } | undefined;
                message?: string | undefined;
                url?: string | undefined;
                admission?: AdmissionLevel | undefined;
                ports?: {
                    port?: number | undefined;
                    policy?: PortPolicy | undefined;
                    url?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            instanceId?: string | undefined;
            workspaceId?: string | undefined;
            createdAt?: Date | undefined;
            status?: ({
                statusVersion?: number | undefined;
                phase?: WorkspaceInstanceStatus_Phase | undefined;
                conditions?: {
                    failed?: string | undefined;
                    timeout?: string | undefined;
                    firstUserActivity?: Date | undefined;
                    stoppedByRequest?: boolean | undefined;
                } | undefined;
                message?: string | undefined;
                url?: string | undefined;
                admission?: AdmissionLevel | undefined;
                ports?: {
                    port?: number | undefined;
                    policy?: PortPolicy | undefined;
                    url?: string | undefined;
                }[] | undefined;
            } & {
                statusVersion?: number | undefined;
                phase?: WorkspaceInstanceStatus_Phase | undefined;
                conditions?: ({
                    failed?: string | undefined;
                    timeout?: string | undefined;
                    firstUserActivity?: Date | undefined;
                    stoppedByRequest?: boolean | undefined;
                } & {
                    failed?: string | undefined;
                    timeout?: string | undefined;
                    firstUserActivity?: Date | undefined;
                    stoppedByRequest?: boolean | undefined;
                } & { [K in Exclude<keyof I["instance"]["status"]["conditions"], keyof WorkspaceInstanceStatus_Conditions>]: never; }) | undefined;
                message?: string | undefined;
                url?: string | undefined;
                admission?: AdmissionLevel | undefined;
                ports?: ({
                    port?: number | undefined;
                    policy?: PortPolicy | undefined;
                    url?: string | undefined;
                }[] & ({
                    port?: number | undefined;
                    policy?: PortPolicy | undefined;
                    url?: string | undefined;
                } & {
                    port?: number | undefined;
                    policy?: PortPolicy | undefined;
                    url?: string | undefined;
                } & { [K_1 in Exclude<keyof I["instance"]["status"]["ports"][number], keyof Port>]: never; })[] & { [K_2 in Exclude<keyof I["instance"]["status"]["ports"], keyof {
                    port?: number | undefined;
                    policy?: PortPolicy | undefined;
                    url?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["instance"]["status"], keyof WorkspaceInstanceStatus>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["instance"], keyof WorkspaceInstance>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "instance">]: never; }>(object: I): WorkspaceStatus;
};
export declare const WorkspaceContext: {
    encode(message: WorkspaceContext, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkspaceContext;
    fromJSON(object: any): WorkspaceContext;
    toJSON(message: WorkspaceContext): unknown;
    fromPartial<I extends {
        contextUrl?: string | undefined;
        git?: {
            normalizedContextUrl?: string | undefined;
            commit?: string | undefined;
        } | undefined;
        prebuild?: {
            originalContext?: {
                normalizedContextUrl?: string | undefined;
                commit?: string | undefined;
            } | undefined;
            prebuildId?: string | undefined;
        } | undefined;
        snapshot?: {
            snapshotId?: string | undefined;
        } | undefined;
    } & {
        contextUrl?: string | undefined;
        git?: ({
            normalizedContextUrl?: string | undefined;
            commit?: string | undefined;
        } & {
            normalizedContextUrl?: string | undefined;
            commit?: string | undefined;
        } & { [K in Exclude<keyof I["git"], keyof WorkspaceContext_Git>]: never; }) | undefined;
        prebuild?: ({
            originalContext?: {
                normalizedContextUrl?: string | undefined;
                commit?: string | undefined;
            } | undefined;
            prebuildId?: string | undefined;
        } & {
            originalContext?: ({
                normalizedContextUrl?: string | undefined;
                commit?: string | undefined;
            } & {
                normalizedContextUrl?: string | undefined;
                commit?: string | undefined;
            } & { [K_1 in Exclude<keyof I["prebuild"]["originalContext"], keyof WorkspaceContext_Git>]: never; }) | undefined;
            prebuildId?: string | undefined;
        } & { [K_2 in Exclude<keyof I["prebuild"], keyof WorkspaceContext_Prebuild>]: never; }) | undefined;
        snapshot?: ({
            snapshotId?: string | undefined;
        } & {
            snapshotId?: string | undefined;
        } & { [K_3 in Exclude<keyof I["snapshot"], "snapshotId">]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof WorkspaceContext>]: never; }>(object: I): WorkspaceContext;
};
export declare const WorkspaceContext_Git: {
    encode(message: WorkspaceContext_Git, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkspaceContext_Git;
    fromJSON(object: any): WorkspaceContext_Git;
    toJSON(message: WorkspaceContext_Git): unknown;
    fromPartial<I extends {
        normalizedContextUrl?: string | undefined;
        commit?: string | undefined;
    } & {
        normalizedContextUrl?: string | undefined;
        commit?: string | undefined;
    } & { [K in Exclude<keyof I, keyof WorkspaceContext_Git>]: never; }>(object: I): WorkspaceContext_Git;
};
export declare const WorkspaceContext_Prebuild: {
    encode(message: WorkspaceContext_Prebuild, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkspaceContext_Prebuild;
    fromJSON(object: any): WorkspaceContext_Prebuild;
    toJSON(message: WorkspaceContext_Prebuild): unknown;
    fromPartial<I extends {
        originalContext?: {
            normalizedContextUrl?: string | undefined;
            commit?: string | undefined;
        } | undefined;
        prebuildId?: string | undefined;
    } & {
        originalContext?: ({
            normalizedContextUrl?: string | undefined;
            commit?: string | undefined;
        } & {
            normalizedContextUrl?: string | undefined;
            commit?: string | undefined;
        } & { [K in Exclude<keyof I["originalContext"], keyof WorkspaceContext_Git>]: never; }) | undefined;
        prebuildId?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof WorkspaceContext_Prebuild>]: never; }>(object: I): WorkspaceContext_Prebuild;
};
export declare const WorkspaceContext_Snapshot: {
    encode(message: WorkspaceContext_Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkspaceContext_Snapshot;
    fromJSON(object: any): WorkspaceContext_Snapshot;
    toJSON(message: WorkspaceContext_Snapshot): unknown;
    fromPartial<I extends {
        snapshotId?: string | undefined;
    } & {
        snapshotId?: string | undefined;
    } & { [K in Exclude<keyof I, "snapshotId">]: never; }>(object: I): WorkspaceContext_Snapshot;
};
export declare const WorkspaceInstance: {
    encode(message: WorkspaceInstance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkspaceInstance;
    fromJSON(object: any): WorkspaceInstance;
    toJSON(message: WorkspaceInstance): unknown;
    fromPartial<I extends {
        instanceId?: string | undefined;
        workspaceId?: string | undefined;
        createdAt?: Date | undefined;
        status?: {
            statusVersion?: number | undefined;
            phase?: WorkspaceInstanceStatus_Phase | undefined;
            conditions?: {
                failed?: string | undefined;
                timeout?: string | undefined;
                firstUserActivity?: Date | undefined;
                stoppedByRequest?: boolean | undefined;
            } | undefined;
            message?: string | undefined;
            url?: string | undefined;
            admission?: AdmissionLevel | undefined;
            ports?: {
                port?: number | undefined;
                policy?: PortPolicy | undefined;
                url?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        instanceId?: string | undefined;
        workspaceId?: string | undefined;
        createdAt?: Date | undefined;
        status?: ({
            statusVersion?: number | undefined;
            phase?: WorkspaceInstanceStatus_Phase | undefined;
            conditions?: {
                failed?: string | undefined;
                timeout?: string | undefined;
                firstUserActivity?: Date | undefined;
                stoppedByRequest?: boolean | undefined;
            } | undefined;
            message?: string | undefined;
            url?: string | undefined;
            admission?: AdmissionLevel | undefined;
            ports?: {
                port?: number | undefined;
                policy?: PortPolicy | undefined;
                url?: string | undefined;
            }[] | undefined;
        } & {
            statusVersion?: number | undefined;
            phase?: WorkspaceInstanceStatus_Phase | undefined;
            conditions?: ({
                failed?: string | undefined;
                timeout?: string | undefined;
                firstUserActivity?: Date | undefined;
                stoppedByRequest?: boolean | undefined;
            } & {
                failed?: string | undefined;
                timeout?: string | undefined;
                firstUserActivity?: Date | undefined;
                stoppedByRequest?: boolean | undefined;
            } & { [K in Exclude<keyof I["status"]["conditions"], keyof WorkspaceInstanceStatus_Conditions>]: never; }) | undefined;
            message?: string | undefined;
            url?: string | undefined;
            admission?: AdmissionLevel | undefined;
            ports?: ({
                port?: number | undefined;
                policy?: PortPolicy | undefined;
                url?: string | undefined;
            }[] & ({
                port?: number | undefined;
                policy?: PortPolicy | undefined;
                url?: string | undefined;
            } & {
                port?: number | undefined;
                policy?: PortPolicy | undefined;
                url?: string | undefined;
            } & { [K_1 in Exclude<keyof I["status"]["ports"][number], keyof Port>]: never; })[] & { [K_2 in Exclude<keyof I["status"]["ports"], keyof {
                port?: number | undefined;
                policy?: PortPolicy | undefined;
                url?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["status"], keyof WorkspaceInstanceStatus>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof WorkspaceInstance>]: never; }>(object: I): WorkspaceInstance;
};
export declare const WorkspaceInstanceStatus: {
    encode(message: WorkspaceInstanceStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkspaceInstanceStatus;
    fromJSON(object: any): WorkspaceInstanceStatus;
    toJSON(message: WorkspaceInstanceStatus): unknown;
    fromPartial<I extends {
        statusVersion?: number | undefined;
        phase?: WorkspaceInstanceStatus_Phase | undefined;
        conditions?: {
            failed?: string | undefined;
            timeout?: string | undefined;
            firstUserActivity?: Date | undefined;
            stoppedByRequest?: boolean | undefined;
        } | undefined;
        message?: string | undefined;
        url?: string | undefined;
        admission?: AdmissionLevel | undefined;
        ports?: {
            port?: number | undefined;
            policy?: PortPolicy | undefined;
            url?: string | undefined;
        }[] | undefined;
    } & {
        statusVersion?: number | undefined;
        phase?: WorkspaceInstanceStatus_Phase | undefined;
        conditions?: ({
            failed?: string | undefined;
            timeout?: string | undefined;
            firstUserActivity?: Date | undefined;
            stoppedByRequest?: boolean | undefined;
        } & {
            failed?: string | undefined;
            timeout?: string | undefined;
            firstUserActivity?: Date | undefined;
            stoppedByRequest?: boolean | undefined;
        } & { [K in Exclude<keyof I["conditions"], keyof WorkspaceInstanceStatus_Conditions>]: never; }) | undefined;
        message?: string | undefined;
        url?: string | undefined;
        admission?: AdmissionLevel | undefined;
        ports?: ({
            port?: number | undefined;
            policy?: PortPolicy | undefined;
            url?: string | undefined;
        }[] & ({
            port?: number | undefined;
            policy?: PortPolicy | undefined;
            url?: string | undefined;
        } & {
            port?: number | undefined;
            policy?: PortPolicy | undefined;
            url?: string | undefined;
        } & { [K_1 in Exclude<keyof I["ports"][number], keyof Port>]: never; })[] & { [K_2 in Exclude<keyof I["ports"], keyof {
            port?: number | undefined;
            policy?: PortPolicy | undefined;
            url?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof WorkspaceInstanceStatus>]: never; }>(object: I): WorkspaceInstanceStatus;
};
export declare const WorkspaceInstanceStatus_Conditions: {
    encode(message: WorkspaceInstanceStatus_Conditions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WorkspaceInstanceStatus_Conditions;
    fromJSON(object: any): WorkspaceInstanceStatus_Conditions;
    toJSON(message: WorkspaceInstanceStatus_Conditions): unknown;
    fromPartial<I extends {
        failed?: string | undefined;
        timeout?: string | undefined;
        firstUserActivity?: Date | undefined;
        stoppedByRequest?: boolean | undefined;
    } & {
        failed?: string | undefined;
        timeout?: string | undefined;
        firstUserActivity?: Date | undefined;
        stoppedByRequest?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof WorkspaceInstanceStatus_Conditions>]: never; }>(object: I): WorkspaceInstanceStatus_Conditions;
};
export declare const Port: {
    encode(message: Port, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Port;
    fromJSON(object: any): Port;
    toJSON(message: Port): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        policy?: PortPolicy | undefined;
        url?: string | undefined;
    } & {
        port?: number | undefined;
        policy?: PortPolicy | undefined;
        url?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Port>]: never; }>(object: I): Port;
};
export declare const StartWorkspaceSpec: {
    encode(_: StartWorkspaceSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartWorkspaceSpec;
    fromJSON(_: any): StartWorkspaceSpec;
    toJSON(_: StartWorkspaceSpec): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): StartWorkspaceSpec;
};
export declare const PortSpec: {
    encode(message: PortSpec, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PortSpec;
    fromJSON(object: any): PortSpec;
    toJSON(message: PortSpec): unknown;
    fromPartial<I extends {
        port?: number | undefined;
        policy?: PortPolicy | undefined;
    } & {
        port?: number | undefined;
        policy?: PortPolicy | undefined;
    } & { [K in Exclude<keyof I, keyof PortSpec>]: never; }>(object: I): PortSpec;
};
export declare const UpdatePortRequest: {
    encode(message: UpdatePortRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePortRequest;
    fromJSON(object: any): UpdatePortRequest;
    toJSON(message: UpdatePortRequest): unknown;
    fromPartial<I extends {
        workspaceId?: string | undefined;
        port?: {
            port?: number | undefined;
            policy?: PortPolicy | undefined;
        } | undefined;
    } & {
        workspaceId?: string | undefined;
        port?: ({
            port?: number | undefined;
            policy?: PortPolicy | undefined;
        } & {
            port?: number | undefined;
            policy?: PortPolicy | undefined;
        } & { [K in Exclude<keyof I["port"], keyof PortSpec>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof UpdatePortRequest>]: never; }>(object: I): UpdatePortRequest;
};
export declare const UpdatePortResponse: {
    encode(_: UpdatePortResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdatePortResponse;
    fromJSON(_: any): UpdatePortResponse;
    toJSON(_: UpdatePortResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): UpdatePortResponse;
};
export declare type WorkspacesServiceService = typeof WorkspacesServiceService;
export declare const WorkspacesServiceService: {
    /** ListWorkspaces enumerates all workspaces belonging to the authenticated user. */
    readonly listWorkspaces: {
        readonly path: "/gitpod.experimental.v1.WorkspacesService/ListWorkspaces";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListWorkspacesRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListWorkspacesRequest;
        readonly responseSerialize: (value: ListWorkspacesResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListWorkspacesResponse;
    };
    /** GetWorkspace returns a single workspace. */
    readonly getWorkspace: {
        readonly path: "/gitpod.experimental.v1.WorkspacesService/GetWorkspace";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetWorkspaceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetWorkspaceRequest;
        readonly responseSerialize: (value: GetWorkspaceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetWorkspaceResponse;
    };
    /** StreamWorkspaceStatus returns workspace status once it changed. */
    readonly streamWorkspaceStatus: {
        readonly path: "/gitpod.experimental.v1.WorkspacesService/StreamWorkspaceStatus";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: StreamWorkspaceStatusRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StreamWorkspaceStatusRequest;
        readonly responseSerialize: (value: StreamWorkspaceStatusResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StreamWorkspaceStatusResponse;
    };
    /** GetOwnerToken returns an owner token. */
    readonly getOwnerToken: {
        readonly path: "/gitpod.experimental.v1.WorkspacesService/GetOwnerToken";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetOwnerTokenRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetOwnerTokenRequest;
        readonly responseSerialize: (value: GetOwnerTokenResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetOwnerTokenResponse;
    };
    /** CreateAndStartWorkspace creates a new workspace and starts it. */
    readonly createAndStartWorkspace: {
        readonly path: "/gitpod.experimental.v1.WorkspacesService/CreateAndStartWorkspace";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateAndStartWorkspaceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateAndStartWorkspaceRequest;
        readonly responseSerialize: (value: CreateAndStartWorkspaceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateAndStartWorkspaceResponse;
    };
    /**
     * StopWorkspace stops a running workspace (instance).
     * Errors:
     *   NOT_FOUND:           the workspace_id is unkown
     *   FAILED_PRECONDITION: if there's no running instance
     */
    readonly stopWorkspace: {
        readonly path: "/gitpod.experimental.v1.WorkspacesService/StopWorkspace";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StopWorkspaceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StopWorkspaceRequest;
        readonly responseSerialize: (value: StopWorkspaceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => StopWorkspaceResponse;
    };
    /**
     * DeleteWorkspace deletes a workspace.
     * When the workspace is running, it will be stopped as well.
     * Deleted workspaces cannot be started again.
     */
    readonly deleteWorkspace: {
        readonly path: "/gitpod.experimental.v1.WorkspacesService/DeleteWorkspace";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteWorkspaceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteWorkspaceRequest;
        readonly responseSerialize: (value: DeleteWorkspaceResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteWorkspaceResponse;
    };
    readonly updatePort: {
        readonly path: "/gitpod.experimental.v1.WorkspacesService/UpdatePort";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdatePortRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdatePortRequest;
        readonly responseSerialize: (value: UpdatePortResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdatePortResponse;
    };
};
export interface WorkspacesServiceServer extends UntypedServiceImplementation {
    /** ListWorkspaces enumerates all workspaces belonging to the authenticated user. */
    listWorkspaces: handleUnaryCall<ListWorkspacesRequest, ListWorkspacesResponse>;
    /** GetWorkspace returns a single workspace. */
    getWorkspace: handleUnaryCall<GetWorkspaceRequest, GetWorkspaceResponse>;
    /** StreamWorkspaceStatus returns workspace status once it changed. */
    streamWorkspaceStatus: handleServerStreamingCall<StreamWorkspaceStatusRequest, StreamWorkspaceStatusResponse>;
    /** GetOwnerToken returns an owner token. */
    getOwnerToken: handleUnaryCall<GetOwnerTokenRequest, GetOwnerTokenResponse>;
    /** CreateAndStartWorkspace creates a new workspace and starts it. */
    createAndStartWorkspace: handleUnaryCall<CreateAndStartWorkspaceRequest, CreateAndStartWorkspaceResponse>;
    /**
     * StopWorkspace stops a running workspace (instance).
     * Errors:
     *   NOT_FOUND:           the workspace_id is unkown
     *   FAILED_PRECONDITION: if there's no running instance
     */
    stopWorkspace: handleUnaryCall<StopWorkspaceRequest, StopWorkspaceResponse>;
    /**
     * DeleteWorkspace deletes a workspace.
     * When the workspace is running, it will be stopped as well.
     * Deleted workspaces cannot be started again.
     */
    deleteWorkspace: handleUnaryCall<DeleteWorkspaceRequest, DeleteWorkspaceResponse>;
    updatePort: handleUnaryCall<UpdatePortRequest, UpdatePortResponse>;
}
export interface WorkspacesServiceClient extends Client {
    /** ListWorkspaces enumerates all workspaces belonging to the authenticated user. */
    listWorkspaces(request: ListWorkspacesRequest, callback: (error: ServiceError | null, response: ListWorkspacesResponse) => void): ClientUnaryCall;
    listWorkspaces(request: ListWorkspacesRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListWorkspacesResponse) => void): ClientUnaryCall;
    listWorkspaces(request: ListWorkspacesRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListWorkspacesResponse) => void): ClientUnaryCall;
    /** GetWorkspace returns a single workspace. */
    getWorkspace(request: GetWorkspaceRequest, callback: (error: ServiceError | null, response: GetWorkspaceResponse) => void): ClientUnaryCall;
    getWorkspace(request: GetWorkspaceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetWorkspaceResponse) => void): ClientUnaryCall;
    getWorkspace(request: GetWorkspaceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetWorkspaceResponse) => void): ClientUnaryCall;
    /** StreamWorkspaceStatus returns workspace status once it changed. */
    streamWorkspaceStatus(request: StreamWorkspaceStatusRequest, options?: Partial<CallOptions>): ClientReadableStream<StreamWorkspaceStatusResponse>;
    streamWorkspaceStatus(request: StreamWorkspaceStatusRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<StreamWorkspaceStatusResponse>;
    /** GetOwnerToken returns an owner token. */
    getOwnerToken(request: GetOwnerTokenRequest, callback: (error: ServiceError | null, response: GetOwnerTokenResponse) => void): ClientUnaryCall;
    getOwnerToken(request: GetOwnerTokenRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetOwnerTokenResponse) => void): ClientUnaryCall;
    getOwnerToken(request: GetOwnerTokenRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetOwnerTokenResponse) => void): ClientUnaryCall;
    /** CreateAndStartWorkspace creates a new workspace and starts it. */
    createAndStartWorkspace(request: CreateAndStartWorkspaceRequest, callback: (error: ServiceError | null, response: CreateAndStartWorkspaceResponse) => void): ClientUnaryCall;
    createAndStartWorkspace(request: CreateAndStartWorkspaceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateAndStartWorkspaceResponse) => void): ClientUnaryCall;
    createAndStartWorkspace(request: CreateAndStartWorkspaceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateAndStartWorkspaceResponse) => void): ClientUnaryCall;
    /**
     * StopWorkspace stops a running workspace (instance).
     * Errors:
     *   NOT_FOUND:           the workspace_id is unkown
     *   FAILED_PRECONDITION: if there's no running instance
     */
    stopWorkspace(request: StopWorkspaceRequest, callback: (error: ServiceError | null, response: StopWorkspaceResponse) => void): ClientUnaryCall;
    stopWorkspace(request: StopWorkspaceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: StopWorkspaceResponse) => void): ClientUnaryCall;
    stopWorkspace(request: StopWorkspaceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: StopWorkspaceResponse) => void): ClientUnaryCall;
    /**
     * DeleteWorkspace deletes a workspace.
     * When the workspace is running, it will be stopped as well.
     * Deleted workspaces cannot be started again.
     */
    deleteWorkspace(request: DeleteWorkspaceRequest, callback: (error: ServiceError | null, response: DeleteWorkspaceResponse) => void): ClientUnaryCall;
    deleteWorkspace(request: DeleteWorkspaceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteWorkspaceResponse) => void): ClientUnaryCall;
    deleteWorkspace(request: DeleteWorkspaceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteWorkspaceResponse) => void): ClientUnaryCall;
    updatePort(request: UpdatePortRequest, callback: (error: ServiceError | null, response: UpdatePortResponse) => void): ClientUnaryCall;
    updatePort(request: UpdatePortRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdatePortResponse) => void): ClientUnaryCall;
    updatePort(request: UpdatePortRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdatePortResponse) => void): ClientUnaryCall;
}
export declare const WorkspacesServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): WorkspacesServiceClient;
    service: typeof WorkspacesServiceService;
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
//# sourceMappingURL=workspaces.pb.d.ts.map