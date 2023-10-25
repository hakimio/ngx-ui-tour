import {deepMerge} from './deep-merge';

class FooBar {
}

describe('deepMerge', () => {

    it('should merge multiple objects', () => {
        const obj1 = {a: 1, b: {c: 3}} as object,
            obj2 = {a: 2, b: {d: 4}, e: 5} as object,
            obj3 = {a: 6, f: {g: 7}, h: 8} as object,
            expectedResult = {a: 6, b: {c: 3, d: 4}, e: 5, f: {g: 7}, h: 8};

        const result = deepMerge(obj1, obj2, obj3);

        expect(result).toMatchObject(expectedResult);
    });

    it('should copy class instance by reference', () => {
        const fooBar = new FooBar(),
            obj1 = {a: 1, b: fooBar, d: {e: 'a', f: 'b'}} as object,
            obj2 = {a: 2, d: {g: 'c'}} as object,
            expectedResult = {a: 2, b: fooBar, d: {e: 'a', f: 'b', g: 'c'}};

        const result = deepMerge(obj1, obj2);

        expect(result).toMatchObject(expectedResult);
        expect((result as { b: FooBar }).b).toBe(fooBar);
    });

    it('should copy array instance by reference', () => {
        const someArray = [1, 2, 3],
            obj1 = {a: 1, b: someArray, d: {e: 'a', f: 'b'}} as object,
            obj2 = {a: 2, d: {g: 'c'}} as object,
            expectedResult = {a: 2, b: someArray, d: {e: 'a', f: 'b', g: 'c'}};

        const result = deepMerge(obj1, obj2);

        expect(result).toMatchObject(expectedResult);
        expect((result as { b: number[] }).b).toBe(someArray);
    });

    it('should work when one of the parameters is undefined', () => {
        const fooBar = new FooBar(),
            obj1 = {a: 1, b: fooBar, d: {e: 'a', f: 'b'}} as object,
            obj2 = {a: 2, d: {g: 'c'}} as object,
            expectedResult = {a: 2, b: fooBar, d: {e: 'a', f: 'b', g: 'c'}};

        const result = deepMerge(undefined, obj1, obj2);

        expect(result).toMatchObject(expectedResult);
    });

    it('should overwrite arrays', () => {
        const array1 = ['a'],
            array2 = ['b'],
            obj1 = {a: array1},
            obj2 = {a: array2},
            expectedResult = {a: array2};

        const result = deepMerge(obj1, obj2);

        expect(result).toMatchObject(expectedResult);
        expect((result as { a: string[] }).a).toBe(array2);
    });

    it('should overwrite objects with non-objects', () => {
        const obj1 = {a: {}} as object,
            obj2 = {a: null} as object,
            expectedResult = {a: null} as object;

        const result = deepMerge(obj1, obj2);

        expect(result).toMatchObject(expectedResult);
        expect((result as { a?: object }).a).toBeNull();
    });

    it('should overwrite non-objects with empty objects', () => {
        const obj1 = {a: 'b'},
            obj2 = {a: {}},
            expectedResult = {a: {}};

        const result = deepMerge(obj1, obj2);

        expect(result).toMatchObject(expectedResult);
    });

    it('should merge empty objects into other objects', () => {
        const obj1 = {a: {b: 'c'}},
            obj2 = {a: {}},
            expectedResult = {a: {b: 'c'}};

        const result = deepMerge(obj1, obj2);

        expect(result).toMatchObject(expectedResult);
    });

});
