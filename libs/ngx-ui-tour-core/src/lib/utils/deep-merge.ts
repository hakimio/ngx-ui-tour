type PlainObject = Record<string | number | symbol, unknown>;

export function deepMerge<T>(...objects: T[]): T {
    return objects.reduce((acc: T, cur: T) => {

        cur ??= {} as T;
        const keys = Object.keys(cur) as (keyof T)[];

        for (const key of keys) {
            const accValue = acc[key] as PlainObject | unknown,
                curValue = cur[key] as PlainObject | unknown;

            if (isPlainObject(accValue) && isPlainObject(curValue)) {
                acc[key] = deepMerge(accValue, curValue) as T[keyof T];
            } else {
                acc[key] = curValue as T[keyof T];
            }
        }

        return acc;
    }, {} as T);
}

function isPlainObject(value: unknown | PlainObject): value is PlainObject {
    return value instanceof Object && value.constructor === Object;
}
