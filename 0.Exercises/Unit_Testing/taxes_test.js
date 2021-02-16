describe ('calculateTaxes tests', function(){
    it('should calculate lower-bracket taxes', function(){
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(20000)).toEqual(3000);
    });
    it('should claculate higher-bracket taxes', function(){
        expect(calculateTaxes(40000)).toEqual(10000);
        expect(calculateTaxes(80000)).toEqual(20000);
    });
    it('should reject invalid incomes', function(){
        expect(() => calculateTaxes('asdasdas')).toThrowError();
        expect(() => calculateTaxes([])).toThrowError();
        expect(() => calculateTaxes(true)).toThrowError();
    });
});

describe('removeDuplicates Tests', function(){
    it('should remove duplicates from an array', function(){
        expect(removeDups([1,2,3,4,4,5])).toBeInstanceOf(Array);
        expect(removeDups([1,1,2,2,3,4])).toEqual([1,2,3,4]);
        expect(removeDups([1,2,3])).toEqual([1,2,3]);
    });
    
    it('should remove duplicates from a string', function(){
        expect(removeDups('hello')).toBeInstanceOf(String);
        expect(removeDups('hello')).toEqual('helo');
    });
});

describe('remove Tests', function(){
    it('should remove the value from the array', function(){
        expect(remove([1,2,3,4,5,6], 6)).not.toContain(6);
    });
});


