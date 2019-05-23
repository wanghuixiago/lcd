const main = require('../main/main');

describe('main()', () => {
    it("should throw an exception if input is not allowed", () => {
        expect(function () {
            main("910a ")
        }).toThrowError(TypeError);
    });

    it("should throw an exception if input is not allowed", () => {
        expect(function () {
            main(789)
        }).toThrowError("input type should be a string");
    });

    it('should return 910', () => {
        let actual = main("910");
        expect(actual).toBe(
            "._. ... ._.\n" +
            "|_| ..| |.|\n" +
            "..| ..| |_|\n");
    });

    it('should return 256', () => {
        let actual = main("256");
        expect(actual).toBe(
            "._. ._. ._.\n" +
            "._| |_. |_.\n" +
            "|_. ._| |_|\n");
    });


    it('should return 7', () => {
        let actual = main("7");
        expect(actual).toBe(
            "._.\n" +
            "..|\n" +
            "..|\n");
    });

    it('should return 72', () => {
        let actual = main("72");
        expect(actual).toBe(
            "._. ._.\n" +
            "..| ._|\n" +
            "..| |_.\n");
    });

});