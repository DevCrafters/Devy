export function extend(prototype, name, value) {
  if (!prototype.hasOwnProperty(name)) {
    Object.defineProperty(prototype, name, {
      value
    });
  }
}
