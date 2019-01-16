declare function keyMirror<T extends string>(array: T[]): { [P in T]: P };
declare function keyMirror<T extends {}>(obj: T): { [P in keyof T]: P };
export default keyMirror;
