/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
export const protobufPackage = "gitpod.experimental.v1";
function createBasePagination() {
    return { pageSize: 0, page: 0 };
}
export const Pagination = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int32(message.pageSize);
        }
        if (message.page !== 0) {
            writer.uint32(16).int32(message.page);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePagination();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pageSize = reader.int32();
                    break;
                case 2:
                    message.page = reader.int32();
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
            pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
            page: isSet(object.page) ? Number(object.page) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.page !== undefined && (obj.page = Math.round(message.page));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePagination();
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.page = (_b = object.page) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=pagination.pb.js.map