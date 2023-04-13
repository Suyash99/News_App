const axios = require('axios')
require('dotenv')
const env = process.env.Api_Key
const Api_Key = env.Api_Key || ""
var BASE_URL = "https://newsapi.org/v2/"
/**
 * 
 * @param {object} parameterObj 
 * @returns 
 */
async function searchEveryThing(parameterObj = null) {
    try {
        var url = BASE_URL + "everything?"
        var search = "latest"
        var pageSize = 24
        if (parameterObj) {
            let paramKeys = Object.keys(parameterObj)

            paramKeys.forEach((element, index) => {
                if (index === 0)
                    url += `${element}=${parameterObj[element]}&`
                else
                    url += `&${element}=${parameterObj[element]}`
            })

            console.log(`Url- ${url}`)
        } else {
            url += `&q=${search}&pageSize=${pageSize}`
        }

        const Res = await axios.get(url, {
            headers: {
                "X-Api-Key": Api_Key
            }
        })

        return Res
    } catch (error) {
        console.log(`Some error in fnx searchEveryThing ${error.message}`)

        return `ERROR- ${error.message}`
    }
}