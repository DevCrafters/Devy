export {};
declare global {
  interface Array<T> {
    groupBy<U>(keyGetter: (value: T) => U): Map<U, T[]>;
  }
}
(proto => {
  if (typeof Array.prototype.groupBy !== 'function') {
    Array.prototype.groupBy = function<T, U>(
      this: T[],
      keyGetter: (value: T) => U
    ): Map<U, T[]> {
      const result = new Map<U, T[]>();

      for (const value of this) {
        const key = keyGetter(value);
        if (!result.has(key)) {
          result.set(key, []);
        }
        result.get(key).push(value);
      }

      return result;
    };
  }
})(Array.prototype);
