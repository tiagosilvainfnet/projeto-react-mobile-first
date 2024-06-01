import { detectVariant } from "../../utils/conversor";

describe("conversor test", () =>{
    it("conversor for material", () => {
        const result = detectVariant(true, 'tiago');

        expect(result).toBe('tiago');
    });
    it("conversor for not material contained", () => {
        const result = detectVariant(false, 'contained');

        expect(result).toBe('solid');
    });
    it("conversor for not material outlined", () => {
        const result = detectVariant(false, 'outlined');

        expect(result).toBe('outline');
    });
    it("conversor for not material text", () => {
        const result = detectVariant(false, 'text');

        expect(result).toBe('ghost');
    });
    it("conversor for not material default", () => {
        const result = detectVariant(false, 'blabla');

        expect(result).toBe('solid');
    });
});