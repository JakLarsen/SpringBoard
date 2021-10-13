const {timeWord} = require('./timeWord')

describe('#timeword', () => {
  test('it is a function', () => {
    expect(timeWord('00:00')).toEqual('midnight')
    expect(timeWord('12:00')).toEqual('noon')
    expect(timeWord('01:00')).toEqual('one AM')
    expect(timeWord('04:15')).toEqual('four fifteen AM')
    expect(timeWord('00:15')).toEqual('twelve fifteen AM')
    expect(timeWord('01:15')).toEqual('one fifteen AM')
    expect(timeWord('12:15')).toEqual('twelve fifteen PM')
    expect(timeWord('16:15')).toEqual('four fifteen PM')
    expect(typeof timeWord).toBe('function');
  });
});