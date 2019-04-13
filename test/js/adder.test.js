import { myAdd } from "../../src/js/adder.js"

test('My adder works just how i like it', () => {
    expect(myAdd(1, 1)).toBe('11');
});
