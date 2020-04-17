const {sumOfTigersAndLions, didCaroleBaskinFeedHerHusbandToTigers, returnListOfFoodItem} = require("./zooFunctions")

test("adding 15 tigers and 45 lions", () => {
    expect(sumOfTigersAndLions(15,45)).toBe(60)
})


test("testing if carole baskin feed her husband to the tigers", () => {
    expect(didCaroleBaskinFeedHerHusbandToTigers()).toBeTruthy
})

test("List contains Ground beef", () => {
    expect(returnListOfFoodItem()).toContain("Ground beef")
})