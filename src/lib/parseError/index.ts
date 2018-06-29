export function getErrorKey(validationErrorItem) {
  if (validationErrorItem.origin == "FUNCTION") {
    return "_error";
  } else {
    return validationErrorItem.path;
  }
}

export function basic(err, ctx) {
  ctx.status = 400;
  return Object.assign(err, { errors: { _error: err.message } });
}
export function permission(err, ctx) {
  ctx.status = 401;
  return Object.assign(err, { errors: { _error: err.message } });
}
