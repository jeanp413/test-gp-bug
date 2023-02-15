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
/**
 * Configuration of an OpenID client.
 *
 * For the metadata describing the configuration of OIDC providers, cf.
 * https://openid.net/specs/openid-connect-discovery-1_0.html
 */
export interface OIDCClientConfig {
    /**
     * ID is the unique identifier for the OIDC Config.
     * Read only.
     */
    id: string;
    organizationId: string;
    oidcConfig: OIDCConfig | undefined;
    oauth2Config: OAuth2Config | undefined;
    /** Optional. */
    oauthOnly: boolean;
    /**
     * List of the JWS signing algorithms (alg values) supported by the OP for the
     * ID Token to encode the Claims in a JWT. The algorithm RS256 MUST be
     * included.
     * Optional.
     */
    idTokenSigningAlgValuesSupported: string[];
    /**
     * Time when the config was created.
     * Read-only.
     */
    creationTime: Date | undefined;
    /**
     * Describes the status of this configuration item.
     * Read-only.
     */
    status: OIDCClientConfigStatus | undefined;
}
/** The OIDC specific part of the client configuration. */
export interface OIDCConfig {
    /**
     * URL using the https scheme with no query or fragment component that the
     * OIDC provider asserts as its Issuer Identifier.
     * Required.
     */
    issuer: string;
    /**
     * A KeySet that can validate the id_token (JSON web token)
     * Either one is required.
     */
    jwks: string;
    jwksUrl: string;
    /**
     * Provider specific parameters to control the behavior of the consent screen.
     * Optional.
     */
    hints: ConsentScreenHints | undefined;
    /**
     * Optional overrides for key mapping to be applied when extracting claims from id_tokens.
     * Should only be set, if an override is required.
     * Optional.
     */
    overrideClaimMapping: ClaimMappingOverride | undefined;
}
/** Provider specific parameters to control the behavior of the consent screen. */
export interface ConsentScreenHints {
    /**
     * Control options for the consent screen.
     * Optional.
     */
    prompt: string;
    /**
     * A hint to pre-select the tenant from an AD.
     * Optional.
     */
    domainHint: string;
    /** Optional. */
    loginHint: string;
}
/** Optional overrides for key mapping to be applied when extracting claims from id_tokens. */
export interface ClaimMappingOverride {
    /** Optional. */
    claimEmailKey: string;
    /** Optional. */
    claimGroupsKey: string;
    /** Optional. */
    claimUsernameKey: string;
}
/** The OAuth2 specific part of the client configuration. */
export interface OAuth2Config {
    /** Required. */
    clientId: string;
    /**
     * Required for creation/updates.
     * Empty on read.
     */
    clientSecret: string;
    /** Required. */
    authorizationEndpoint: string;
    /** Required. */
    tokenEndpoint: string;
    /** Required. */
    scopes: string[];
    /**
     * Source for additional claims for the token.
     * Additional keys may be used to control the extraction of a profile.
     * Required.
     */
    userinfoEndpoint: string;
    /**
     * Keys of the userinfo result to extract a profile from.
     * Optional.
     */
    userinfoKeys: UserInfoKeys | undefined;
}
/** Description of keys of a userinfo result. */
export interface UserInfoKeys {
    /** Optional. */
    userinfoIdKey: string;
    /** Optional. */
    userinfoNameKey: string;
}
/** The status of an OIDC client configuration. */
export interface OIDCClientConfigStatus {
}
export interface CreateClientConfigRequest {
    config: OIDCClientConfig | undefined;
    /** Optional. */
    useDiscovery: boolean;
}
export interface CreateClientConfigResponse {
    config: OIDCClientConfig | undefined;
}
export interface GetClientConfigRequest {
    id: string;
    organizationId: string;
}
export interface GetClientConfigResponse {
    config: OIDCClientConfig | undefined;
}
export interface ListClientConfigsRequest {
    organizationId: string;
    /** Page information */
    pagination: Pagination | undefined;
}
export interface ListClientConfigsResponse {
    clientConfigs: OIDCClientConfig[];
    totalResults: number;
}
export interface UpdateClientConfigRequest {
    config: OIDCClientConfig | undefined;
}
export interface UpdateClientConfigResponse {
}
export interface DeleteClientConfigRequest {
    id: string;
    organizationId: string;
}
export interface DeleteClientConfigResponse {
}
export declare const OIDCClientConfig: {
    encode(message: OIDCClientConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OIDCClientConfig;
    fromJSON(object: any): OIDCClientConfig;
    toJSON(message: OIDCClientConfig): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        organizationId?: string | undefined;
        oidcConfig?: {
            issuer?: string | undefined;
            jwks?: string | undefined;
            jwksUrl?: string | undefined;
            hints?: {
                prompt?: string | undefined;
                domainHint?: string | undefined;
                loginHint?: string | undefined;
            } | undefined;
            overrideClaimMapping?: {
                claimEmailKey?: string | undefined;
                claimGroupsKey?: string | undefined;
                claimUsernameKey?: string | undefined;
            } | undefined;
        } | undefined;
        oauth2Config?: {
            clientId?: string | undefined;
            clientSecret?: string | undefined;
            authorizationEndpoint?: string | undefined;
            tokenEndpoint?: string | undefined;
            scopes?: string[] | undefined;
            userinfoEndpoint?: string | undefined;
            userinfoKeys?: {
                userinfoIdKey?: string | undefined;
                userinfoNameKey?: string | undefined;
            } | undefined;
        } | undefined;
        oauthOnly?: boolean | undefined;
        idTokenSigningAlgValuesSupported?: string[] | undefined;
        creationTime?: Date | undefined;
        status?: {} | undefined;
    } & {
        id?: string | undefined;
        organizationId?: string | undefined;
        oidcConfig?: ({
            issuer?: string | undefined;
            jwks?: string | undefined;
            jwksUrl?: string | undefined;
            hints?: {
                prompt?: string | undefined;
                domainHint?: string | undefined;
                loginHint?: string | undefined;
            } | undefined;
            overrideClaimMapping?: {
                claimEmailKey?: string | undefined;
                claimGroupsKey?: string | undefined;
                claimUsernameKey?: string | undefined;
            } | undefined;
        } & {
            issuer?: string | undefined;
            jwks?: string | undefined;
            jwksUrl?: string | undefined;
            hints?: ({
                prompt?: string | undefined;
                domainHint?: string | undefined;
                loginHint?: string | undefined;
            } & {
                prompt?: string | undefined;
                domainHint?: string | undefined;
                loginHint?: string | undefined;
            } & { [K in Exclude<keyof I["oidcConfig"]["hints"], keyof ConsentScreenHints>]: never; }) | undefined;
            overrideClaimMapping?: ({
                claimEmailKey?: string | undefined;
                claimGroupsKey?: string | undefined;
                claimUsernameKey?: string | undefined;
            } & {
                claimEmailKey?: string | undefined;
                claimGroupsKey?: string | undefined;
                claimUsernameKey?: string | undefined;
            } & { [K_1 in Exclude<keyof I["oidcConfig"]["overrideClaimMapping"], keyof ClaimMappingOverride>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["oidcConfig"], keyof OIDCConfig>]: never; }) | undefined;
        oauth2Config?: ({
            clientId?: string | undefined;
            clientSecret?: string | undefined;
            authorizationEndpoint?: string | undefined;
            tokenEndpoint?: string | undefined;
            scopes?: string[] | undefined;
            userinfoEndpoint?: string | undefined;
            userinfoKeys?: {
                userinfoIdKey?: string | undefined;
                userinfoNameKey?: string | undefined;
            } | undefined;
        } & {
            clientId?: string | undefined;
            clientSecret?: string | undefined;
            authorizationEndpoint?: string | undefined;
            tokenEndpoint?: string | undefined;
            scopes?: (string[] & string[] & { [K_3 in Exclude<keyof I["oauth2Config"]["scopes"], keyof string[]>]: never; }) | undefined;
            userinfoEndpoint?: string | undefined;
            userinfoKeys?: ({
                userinfoIdKey?: string | undefined;
                userinfoNameKey?: string | undefined;
            } & {
                userinfoIdKey?: string | undefined;
                userinfoNameKey?: string | undefined;
            } & { [K_4 in Exclude<keyof I["oauth2Config"]["userinfoKeys"], keyof UserInfoKeys>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["oauth2Config"], keyof OAuth2Config>]: never; }) | undefined;
        oauthOnly?: boolean | undefined;
        idTokenSigningAlgValuesSupported?: (string[] & string[] & { [K_6 in Exclude<keyof I["idTokenSigningAlgValuesSupported"], keyof string[]>]: never; }) | undefined;
        creationTime?: Date | undefined;
        status?: ({} & {} & { [K_7 in Exclude<keyof I["status"], never>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof OIDCClientConfig>]: never; }>(object: I): OIDCClientConfig;
};
export declare const OIDCConfig: {
    encode(message: OIDCConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OIDCConfig;
    fromJSON(object: any): OIDCConfig;
    toJSON(message: OIDCConfig): unknown;
    fromPartial<I extends {
        issuer?: string | undefined;
        jwks?: string | undefined;
        jwksUrl?: string | undefined;
        hints?: {
            prompt?: string | undefined;
            domainHint?: string | undefined;
            loginHint?: string | undefined;
        } | undefined;
        overrideClaimMapping?: {
            claimEmailKey?: string | undefined;
            claimGroupsKey?: string | undefined;
            claimUsernameKey?: string | undefined;
        } | undefined;
    } & {
        issuer?: string | undefined;
        jwks?: string | undefined;
        jwksUrl?: string | undefined;
        hints?: ({
            prompt?: string | undefined;
            domainHint?: string | undefined;
            loginHint?: string | undefined;
        } & {
            prompt?: string | undefined;
            domainHint?: string | undefined;
            loginHint?: string | undefined;
        } & { [K in Exclude<keyof I["hints"], keyof ConsentScreenHints>]: never; }) | undefined;
        overrideClaimMapping?: ({
            claimEmailKey?: string | undefined;
            claimGroupsKey?: string | undefined;
            claimUsernameKey?: string | undefined;
        } & {
            claimEmailKey?: string | undefined;
            claimGroupsKey?: string | undefined;
            claimUsernameKey?: string | undefined;
        } & { [K_1 in Exclude<keyof I["overrideClaimMapping"], keyof ClaimMappingOverride>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof OIDCConfig>]: never; }>(object: I): OIDCConfig;
};
export declare const ConsentScreenHints: {
    encode(message: ConsentScreenHints, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConsentScreenHints;
    fromJSON(object: any): ConsentScreenHints;
    toJSON(message: ConsentScreenHints): unknown;
    fromPartial<I extends {
        prompt?: string | undefined;
        domainHint?: string | undefined;
        loginHint?: string | undefined;
    } & {
        prompt?: string | undefined;
        domainHint?: string | undefined;
        loginHint?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ConsentScreenHints>]: never; }>(object: I): ConsentScreenHints;
};
export declare const ClaimMappingOverride: {
    encode(message: ClaimMappingOverride, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClaimMappingOverride;
    fromJSON(object: any): ClaimMappingOverride;
    toJSON(message: ClaimMappingOverride): unknown;
    fromPartial<I extends {
        claimEmailKey?: string | undefined;
        claimGroupsKey?: string | undefined;
        claimUsernameKey?: string | undefined;
    } & {
        claimEmailKey?: string | undefined;
        claimGroupsKey?: string | undefined;
        claimUsernameKey?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ClaimMappingOverride>]: never; }>(object: I): ClaimMappingOverride;
};
export declare const OAuth2Config: {
    encode(message: OAuth2Config, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OAuth2Config;
    fromJSON(object: any): OAuth2Config;
    toJSON(message: OAuth2Config): unknown;
    fromPartial<I extends {
        clientId?: string | undefined;
        clientSecret?: string | undefined;
        authorizationEndpoint?: string | undefined;
        tokenEndpoint?: string | undefined;
        scopes?: string[] | undefined;
        userinfoEndpoint?: string | undefined;
        userinfoKeys?: {
            userinfoIdKey?: string | undefined;
            userinfoNameKey?: string | undefined;
        } | undefined;
    } & {
        clientId?: string | undefined;
        clientSecret?: string | undefined;
        authorizationEndpoint?: string | undefined;
        tokenEndpoint?: string | undefined;
        scopes?: (string[] & string[] & { [K in Exclude<keyof I["scopes"], keyof string[]>]: never; }) | undefined;
        userinfoEndpoint?: string | undefined;
        userinfoKeys?: ({
            userinfoIdKey?: string | undefined;
            userinfoNameKey?: string | undefined;
        } & {
            userinfoIdKey?: string | undefined;
            userinfoNameKey?: string | undefined;
        } & { [K_1 in Exclude<keyof I["userinfoKeys"], keyof UserInfoKeys>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof OAuth2Config>]: never; }>(object: I): OAuth2Config;
};
export declare const UserInfoKeys: {
    encode(message: UserInfoKeys, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UserInfoKeys;
    fromJSON(object: any): UserInfoKeys;
    toJSON(message: UserInfoKeys): unknown;
    fromPartial<I extends {
        userinfoIdKey?: string | undefined;
        userinfoNameKey?: string | undefined;
    } & {
        userinfoIdKey?: string | undefined;
        userinfoNameKey?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UserInfoKeys>]: never; }>(object: I): UserInfoKeys;
};
export declare const OIDCClientConfigStatus: {
    encode(_: OIDCClientConfigStatus, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): OIDCClientConfigStatus;
    fromJSON(_: any): OIDCClientConfigStatus;
    toJSON(_: OIDCClientConfigStatus): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): OIDCClientConfigStatus;
};
export declare const CreateClientConfigRequest: {
    encode(message: CreateClientConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClientConfigRequest;
    fromJSON(object: any): CreateClientConfigRequest;
    toJSON(message: CreateClientConfigRequest): unknown;
    fromPartial<I extends {
        config?: {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        } | undefined;
        useDiscovery?: boolean | undefined;
    } & {
        config?: ({
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        } & {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: ({
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } & {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: ({
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } & {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } & { [K in Exclude<keyof I["config"]["oidcConfig"]["hints"], keyof ConsentScreenHints>]: never; }) | undefined;
                overrideClaimMapping?: ({
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } & {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } & { [K_1 in Exclude<keyof I["config"]["oidcConfig"]["overrideClaimMapping"], keyof ClaimMappingOverride>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["config"]["oidcConfig"], keyof OIDCConfig>]: never; }) | undefined;
            oauth2Config?: ({
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } & {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: (string[] & string[] & { [K_3 in Exclude<keyof I["config"]["oauth2Config"]["scopes"], keyof string[]>]: never; }) | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: ({
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } & {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } & { [K_4 in Exclude<keyof I["config"]["oauth2Config"]["userinfoKeys"], keyof UserInfoKeys>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["config"]["oauth2Config"], keyof OAuth2Config>]: never; }) | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: (string[] & string[] & { [K_6 in Exclude<keyof I["config"]["idTokenSigningAlgValuesSupported"], keyof string[]>]: never; }) | undefined;
            creationTime?: Date | undefined;
            status?: ({} & {} & { [K_7 in Exclude<keyof I["config"]["status"], never>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["config"], keyof OIDCClientConfig>]: never; }) | undefined;
        useDiscovery?: boolean | undefined;
    } & { [K_9 in Exclude<keyof I, keyof CreateClientConfigRequest>]: never; }>(object: I): CreateClientConfigRequest;
};
export declare const CreateClientConfigResponse: {
    encode(message: CreateClientConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateClientConfigResponse;
    fromJSON(object: any): CreateClientConfigResponse;
    toJSON(message: CreateClientConfigResponse): unknown;
    fromPartial<I extends {
        config?: {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        } | undefined;
    } & {
        config?: ({
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        } & {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: ({
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } & {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: ({
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } & {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } & { [K in Exclude<keyof I["config"]["oidcConfig"]["hints"], keyof ConsentScreenHints>]: never; }) | undefined;
                overrideClaimMapping?: ({
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } & {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } & { [K_1 in Exclude<keyof I["config"]["oidcConfig"]["overrideClaimMapping"], keyof ClaimMappingOverride>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["config"]["oidcConfig"], keyof OIDCConfig>]: never; }) | undefined;
            oauth2Config?: ({
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } & {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: (string[] & string[] & { [K_3 in Exclude<keyof I["config"]["oauth2Config"]["scopes"], keyof string[]>]: never; }) | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: ({
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } & {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } & { [K_4 in Exclude<keyof I["config"]["oauth2Config"]["userinfoKeys"], keyof UserInfoKeys>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["config"]["oauth2Config"], keyof OAuth2Config>]: never; }) | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: (string[] & string[] & { [K_6 in Exclude<keyof I["config"]["idTokenSigningAlgValuesSupported"], keyof string[]>]: never; }) | undefined;
            creationTime?: Date | undefined;
            status?: ({} & {} & { [K_7 in Exclude<keyof I["config"]["status"], never>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["config"], keyof OIDCClientConfig>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, "config">]: never; }>(object: I): CreateClientConfigResponse;
};
export declare const GetClientConfigRequest: {
    encode(message: GetClientConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetClientConfigRequest;
    fromJSON(object: any): GetClientConfigRequest;
    toJSON(message: GetClientConfigRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        organizationId?: string | undefined;
    } & {
        id?: string | undefined;
        organizationId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GetClientConfigRequest>]: never; }>(object: I): GetClientConfigRequest;
};
export declare const GetClientConfigResponse: {
    encode(message: GetClientConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetClientConfigResponse;
    fromJSON(object: any): GetClientConfigResponse;
    toJSON(message: GetClientConfigResponse): unknown;
    fromPartial<I extends {
        config?: {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        } | undefined;
    } & {
        config?: ({
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        } & {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: ({
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } & {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: ({
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } & {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } & { [K in Exclude<keyof I["config"]["oidcConfig"]["hints"], keyof ConsentScreenHints>]: never; }) | undefined;
                overrideClaimMapping?: ({
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } & {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } & { [K_1 in Exclude<keyof I["config"]["oidcConfig"]["overrideClaimMapping"], keyof ClaimMappingOverride>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["config"]["oidcConfig"], keyof OIDCConfig>]: never; }) | undefined;
            oauth2Config?: ({
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } & {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: (string[] & string[] & { [K_3 in Exclude<keyof I["config"]["oauth2Config"]["scopes"], keyof string[]>]: never; }) | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: ({
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } & {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } & { [K_4 in Exclude<keyof I["config"]["oauth2Config"]["userinfoKeys"], keyof UserInfoKeys>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["config"]["oauth2Config"], keyof OAuth2Config>]: never; }) | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: (string[] & string[] & { [K_6 in Exclude<keyof I["config"]["idTokenSigningAlgValuesSupported"], keyof string[]>]: never; }) | undefined;
            creationTime?: Date | undefined;
            status?: ({} & {} & { [K_7 in Exclude<keyof I["config"]["status"], never>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["config"], keyof OIDCClientConfig>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, "config">]: never; }>(object: I): GetClientConfigResponse;
};
export declare const ListClientConfigsRequest: {
    encode(message: ListClientConfigsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClientConfigsRequest;
    fromJSON(object: any): ListClientConfigsRequest;
    toJSON(message: ListClientConfigsRequest): unknown;
    fromPartial<I extends {
        organizationId?: string | undefined;
        pagination?: {
            pageSize?: number | undefined;
            page?: number | undefined;
        } | undefined;
    } & {
        organizationId?: string | undefined;
        pagination?: ({
            pageSize?: number | undefined;
            page?: number | undefined;
        } & {
            pageSize?: number | undefined;
            page?: number | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof Pagination>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof ListClientConfigsRequest>]: never; }>(object: I): ListClientConfigsRequest;
};
export declare const ListClientConfigsResponse: {
    encode(message: ListClientConfigsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ListClientConfigsResponse;
    fromJSON(object: any): ListClientConfigsResponse;
    toJSON(message: ListClientConfigsResponse): unknown;
    fromPartial<I extends {
        clientConfigs?: {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        }[] | undefined;
        totalResults?: number | undefined;
    } & {
        clientConfigs?: ({
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        }[] & ({
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        } & {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: ({
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } & {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: ({
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } & {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } & { [K in Exclude<keyof I["clientConfigs"][number]["oidcConfig"]["hints"], keyof ConsentScreenHints>]: never; }) | undefined;
                overrideClaimMapping?: ({
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } & {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } & { [K_1 in Exclude<keyof I["clientConfigs"][number]["oidcConfig"]["overrideClaimMapping"], keyof ClaimMappingOverride>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["clientConfigs"][number]["oidcConfig"], keyof OIDCConfig>]: never; }) | undefined;
            oauth2Config?: ({
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } & {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: (string[] & string[] & { [K_3 in Exclude<keyof I["clientConfigs"][number]["oauth2Config"]["scopes"], keyof string[]>]: never; }) | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: ({
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } & {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } & { [K_4 in Exclude<keyof I["clientConfigs"][number]["oauth2Config"]["userinfoKeys"], keyof UserInfoKeys>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["clientConfigs"][number]["oauth2Config"], keyof OAuth2Config>]: never; }) | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: (string[] & string[] & { [K_6 in Exclude<keyof I["clientConfigs"][number]["idTokenSigningAlgValuesSupported"], keyof string[]>]: never; }) | undefined;
            creationTime?: Date | undefined;
            status?: ({} & {} & { [K_7 in Exclude<keyof I["clientConfigs"][number]["status"], never>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["clientConfigs"][number], keyof OIDCClientConfig>]: never; })[] & { [K_9 in Exclude<keyof I["clientConfigs"], keyof {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        }[]>]: never; }) | undefined;
        totalResults?: number | undefined;
    } & { [K_10 in Exclude<keyof I, keyof ListClientConfigsResponse>]: never; }>(object: I): ListClientConfigsResponse;
};
export declare const UpdateClientConfigRequest: {
    encode(message: UpdateClientConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClientConfigRequest;
    fromJSON(object: any): UpdateClientConfigRequest;
    toJSON(message: UpdateClientConfigRequest): unknown;
    fromPartial<I extends {
        config?: {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        } | undefined;
    } & {
        config?: ({
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauth2Config?: {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: string[] | undefined;
            creationTime?: Date | undefined;
            status?: {} | undefined;
        } & {
            id?: string | undefined;
            organizationId?: string | undefined;
            oidcConfig?: ({
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } | undefined;
                overrideClaimMapping?: {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } | undefined;
            } & {
                issuer?: string | undefined;
                jwks?: string | undefined;
                jwksUrl?: string | undefined;
                hints?: ({
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } & {
                    prompt?: string | undefined;
                    domainHint?: string | undefined;
                    loginHint?: string | undefined;
                } & { [K in Exclude<keyof I["config"]["oidcConfig"]["hints"], keyof ConsentScreenHints>]: never; }) | undefined;
                overrideClaimMapping?: ({
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } & {
                    claimEmailKey?: string | undefined;
                    claimGroupsKey?: string | undefined;
                    claimUsernameKey?: string | undefined;
                } & { [K_1 in Exclude<keyof I["config"]["oidcConfig"]["overrideClaimMapping"], keyof ClaimMappingOverride>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["config"]["oidcConfig"], keyof OIDCConfig>]: never; }) | undefined;
            oauth2Config?: ({
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: string[] | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } | undefined;
            } & {
                clientId?: string | undefined;
                clientSecret?: string | undefined;
                authorizationEndpoint?: string | undefined;
                tokenEndpoint?: string | undefined;
                scopes?: (string[] & string[] & { [K_3 in Exclude<keyof I["config"]["oauth2Config"]["scopes"], keyof string[]>]: never; }) | undefined;
                userinfoEndpoint?: string | undefined;
                userinfoKeys?: ({
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } & {
                    userinfoIdKey?: string | undefined;
                    userinfoNameKey?: string | undefined;
                } & { [K_4 in Exclude<keyof I["config"]["oauth2Config"]["userinfoKeys"], keyof UserInfoKeys>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["config"]["oauth2Config"], keyof OAuth2Config>]: never; }) | undefined;
            oauthOnly?: boolean | undefined;
            idTokenSigningAlgValuesSupported?: (string[] & string[] & { [K_6 in Exclude<keyof I["config"]["idTokenSigningAlgValuesSupported"], keyof string[]>]: never; }) | undefined;
            creationTime?: Date | undefined;
            status?: ({} & {} & { [K_7 in Exclude<keyof I["config"]["status"], never>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["config"], keyof OIDCClientConfig>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, "config">]: never; }>(object: I): UpdateClientConfigRequest;
};
export declare const UpdateClientConfigResponse: {
    encode(_: UpdateClientConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateClientConfigResponse;
    fromJSON(_: any): UpdateClientConfigResponse;
    toJSON(_: UpdateClientConfigResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): UpdateClientConfigResponse;
};
export declare const DeleteClientConfigRequest: {
    encode(message: DeleteClientConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClientConfigRequest;
    fromJSON(object: any): DeleteClientConfigRequest;
    toJSON(message: DeleteClientConfigRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        organizationId?: string | undefined;
    } & {
        id?: string | undefined;
        organizationId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeleteClientConfigRequest>]: never; }>(object: I): DeleteClientConfigRequest;
};
export declare const DeleteClientConfigResponse: {
    encode(_: DeleteClientConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeleteClientConfigResponse;
    fromJSON(_: any): DeleteClientConfigResponse;
    toJSON(_: DeleteClientConfigResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): DeleteClientConfigResponse;
};
export declare type OIDCServiceService = typeof OIDCServiceService;
export declare const OIDCServiceService: {
    /** Creates a new OIDC client configuration. */
    readonly createClientConfig: {
        readonly path: "/gitpod.experimental.v1.OIDCService/CreateClientConfig";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateClientConfigRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateClientConfigRequest;
        readonly responseSerialize: (value: CreateClientConfigResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => CreateClientConfigResponse;
    };
    /** Retrieves an OIDC client configuration by ID. */
    readonly getClientConfig: {
        readonly path: "/gitpod.experimental.v1.OIDCService/GetClientConfig";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetClientConfigRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetClientConfigRequest;
        readonly responseSerialize: (value: GetClientConfigResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => GetClientConfigResponse;
    };
    /** Lists OIDC client configurations. */
    readonly listClientConfigs: {
        readonly path: "/gitpod.experimental.v1.OIDCService/ListClientConfigs";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ListClientConfigsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListClientConfigsRequest;
        readonly responseSerialize: (value: ListClientConfigsResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => ListClientConfigsResponse;
    };
    /** Updates modifiable properties of an existing OIDC client configuration. */
    readonly updateClientConfig: {
        readonly path: "/gitpod.experimental.v1.OIDCService/UpdateClientConfig";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateClientConfigRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateClientConfigRequest;
        readonly responseSerialize: (value: UpdateClientConfigResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UpdateClientConfigResponse;
    };
    /** Removes a OIDC client configuration by ID. */
    readonly deleteClientConfig: {
        readonly path: "/gitpod.experimental.v1.OIDCService/DeleteClientConfig";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteClientConfigRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteClientConfigRequest;
        readonly responseSerialize: (value: DeleteClientConfigResponse) => Buffer;
        readonly responseDeserialize: (value: Buffer) => DeleteClientConfigResponse;
    };
};
export interface OIDCServiceServer extends UntypedServiceImplementation {
    /** Creates a new OIDC client configuration. */
    createClientConfig: handleUnaryCall<CreateClientConfigRequest, CreateClientConfigResponse>;
    /** Retrieves an OIDC client configuration by ID. */
    getClientConfig: handleUnaryCall<GetClientConfigRequest, GetClientConfigResponse>;
    /** Lists OIDC client configurations. */
    listClientConfigs: handleUnaryCall<ListClientConfigsRequest, ListClientConfigsResponse>;
    /** Updates modifiable properties of an existing OIDC client configuration. */
    updateClientConfig: handleUnaryCall<UpdateClientConfigRequest, UpdateClientConfigResponse>;
    /** Removes a OIDC client configuration by ID. */
    deleteClientConfig: handleUnaryCall<DeleteClientConfigRequest, DeleteClientConfigResponse>;
}
export interface OIDCServiceClient extends Client {
    /** Creates a new OIDC client configuration. */
    createClientConfig(request: CreateClientConfigRequest, callback: (error: ServiceError | null, response: CreateClientConfigResponse) => void): ClientUnaryCall;
    createClientConfig(request: CreateClientConfigRequest, metadata: Metadata, callback: (error: ServiceError | null, response: CreateClientConfigResponse) => void): ClientUnaryCall;
    createClientConfig(request: CreateClientConfigRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: CreateClientConfigResponse) => void): ClientUnaryCall;
    /** Retrieves an OIDC client configuration by ID. */
    getClientConfig(request: GetClientConfigRequest, callback: (error: ServiceError | null, response: GetClientConfigResponse) => void): ClientUnaryCall;
    getClientConfig(request: GetClientConfigRequest, metadata: Metadata, callback: (error: ServiceError | null, response: GetClientConfigResponse) => void): ClientUnaryCall;
    getClientConfig(request: GetClientConfigRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: GetClientConfigResponse) => void): ClientUnaryCall;
    /** Lists OIDC client configurations. */
    listClientConfigs(request: ListClientConfigsRequest, callback: (error: ServiceError | null, response: ListClientConfigsResponse) => void): ClientUnaryCall;
    listClientConfigs(request: ListClientConfigsRequest, metadata: Metadata, callback: (error: ServiceError | null, response: ListClientConfigsResponse) => void): ClientUnaryCall;
    listClientConfigs(request: ListClientConfigsRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: ListClientConfigsResponse) => void): ClientUnaryCall;
    /** Updates modifiable properties of an existing OIDC client configuration. */
    updateClientConfig(request: UpdateClientConfigRequest, callback: (error: ServiceError | null, response: UpdateClientConfigResponse) => void): ClientUnaryCall;
    updateClientConfig(request: UpdateClientConfigRequest, metadata: Metadata, callback: (error: ServiceError | null, response: UpdateClientConfigResponse) => void): ClientUnaryCall;
    updateClientConfig(request: UpdateClientConfigRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UpdateClientConfigResponse) => void): ClientUnaryCall;
    /** Removes a OIDC client configuration by ID. */
    deleteClientConfig(request: DeleteClientConfigRequest, callback: (error: ServiceError | null, response: DeleteClientConfigResponse) => void): ClientUnaryCall;
    deleteClientConfig(request: DeleteClientConfigRequest, metadata: Metadata, callback: (error: ServiceError | null, response: DeleteClientConfigResponse) => void): ClientUnaryCall;
    deleteClientConfig(request: DeleteClientConfigRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: DeleteClientConfigResponse) => void): ClientUnaryCall;
}
export declare const OIDCServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions> | undefined): OIDCServiceClient;
    service: typeof OIDCServiceService;
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
//# sourceMappingURL=oidc.pb.d.ts.map