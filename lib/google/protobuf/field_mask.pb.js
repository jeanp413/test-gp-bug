/**
 * Copyright (c) 2023 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */
/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
export const protobufPackage = "google.protobuf";
function createBaseFieldMask() {
    return { paths: [] };
}
export const FieldMask = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.paths) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFieldMask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paths.push(reader.string());
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
            paths: typeof (object) === "string"
                ? object.split(",").filter(Boolean)
                : Array.isArray(object === null || object === void 0 ? void 0 : object.paths)
                    ? object.paths.map(String)
                    : [],
        };
    },
    toJSON(message) {
        return message.paths.join(",");
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFieldMask();
        message.paths = ((_a = object.paths) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
    wrap(paths) {
        const result = createBaseFieldMask();
        result.paths = paths;
        return result;
    },
    unwrap(message) {
        return message.paths;
    },
};
//# sourceMappingURL=field_mask.pb.js.map