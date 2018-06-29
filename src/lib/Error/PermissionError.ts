export default class PermissionError extends Error {
  constructor(m: string) {
    super(m)

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, PermissionError.prototype)
  }
}
