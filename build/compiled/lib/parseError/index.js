"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getErrorKey(validationErrorItem) {
    if (validationErrorItem.origin == "FUNCTION") {
        return "_error";
    }
    else {
        return validationErrorItem.path;
    }
}
exports.getErrorKey = getErrorKey;
function basic(err, ctx) {
    ctx.status = 400;
    return Object.assign(err, { errors: { _error: err.message } });
}
exports.basic = basic;
function permission(err, ctx) {
    ctx.status = 401;
    return Object.assign(err, { errors: { _error: err.message } });
}
exports.permission = permission;
//# sourceMappingURL=index.js.map