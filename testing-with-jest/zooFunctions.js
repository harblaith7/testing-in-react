const axios = require("axios")

const zooFunctions = {
    sumOfTigersAndLions : (numOfTigers, numOfLions) => {
        return numOfLions + numOfTigers
    },

    didCaroleBaskinFeedHerHusbandToTigers: () => {
        return true
    },

    returnListOfFoodItem: () => {
        return [
           "Chicken breast",
           "Turkey legs", 
           "Ground beef",
           "Chicken wings"
        ]
    } ,

    placeCatsInCage: () => {
        const catNames = ["Josh", "Mike", "Furgus", "Angi", "Ryleigh", "Shelby"]
        let cage = []
        let randomNum = Math.floor(Math.random() * 4) + 1

        for(let i = 0; i < randomNum; i++){
            cage.push(catNames.pop())
        }

        return cage
    },

    fetchData: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        return response
    }
   

}


module.exports = zooFunctions
