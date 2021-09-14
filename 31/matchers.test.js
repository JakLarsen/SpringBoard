




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

    test('any', function(){
        const randNum =  Math.random() * 6
        expect(randNum).toEqual(expect.any(Number))
        expect('oLLO').toEqual(expect.any(String))
    })
    test('not', function(){
        const numLives = 9
        expect(numLives).toEqual(9)
        expect(numLives).not.toEqual(0)
    })

})
