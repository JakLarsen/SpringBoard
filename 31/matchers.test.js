




describe ('test matchers', function(){
    test('compare toBe and toEqual', function(){
        const nums = [3,4,5]
        const copy = [...nums];
        nums2 = nums
        expect(copy).toEqual(nums)
        // expect(copy).toBe(nums)
        expect(nums2).toBe(nums)
    })
    test('toContain matcher', function(){
        const colors = ['red', 'orange']

        expect(colors).toContain('red')
        expect('hello').toContain('hel')
    })
    test('numeric matchers', function(){
        expect(7).toBeGreaterThan(2)
    })
})
