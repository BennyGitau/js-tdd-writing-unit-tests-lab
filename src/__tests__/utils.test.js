import {isPalindrome} from '../utils'

describe("isPalindrome", ()=>{
    it('returns true if a word is palindrome', ()=>{
        expect(isPalindrome('racecar')).toBe(true);
    });

    it('returns false in a word is not palindrome', ()=>{
        expect(isPalindrome('car')).toBe(false);
    });

    it('returns false for in empty string', ()=>{
        expect(isPalindrome("")).toBe(false)
    });

    it("throws an error if word has non-alphabetic characters",()=>{
        expect(()=>{
            isPalindrome("1word")
        }).toThrow();
    });
    it("throws an error if word is not a string",()=>{
        expect(()=>{
            isPalindrome(23345)
        }).toThrow();
    });
    

});