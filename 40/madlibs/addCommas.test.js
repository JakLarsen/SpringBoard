const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('it works for positive values', ()=>{
    expect(addCommas(1000)).toEqual('1,000')
    expect(addCommas(12000)).toEqual('12,000')
    expect(addCommas(123000)).toEqual('123,000')
    expect(addCommas(1234000)).toEqual('1,234,000')
  });

  test('it works for negative numbers', ()=>{
    expect(addCommas(-1000)).toEqual('-1,000')
    expect(addCommas(-12000)).toEqual('-12,000')
    expect(addCommas(-123000)).toEqual('-123,000')
    expect(addCommas(-1234000)).toEqual('-1,234,000')
  })

  test('it works for decimals', ()=>{
    expect(addCommas(-1000.5)).toEqual('-1,000.5')
    expect(addCommas(-12000.125)).toEqual('-12,000.125')
    expect(addCommas(-123000.0)).toEqual('-123,000')
    expect(addCommas(-1234000.60)).toEqual('-1,234,000.6')
  })
});
