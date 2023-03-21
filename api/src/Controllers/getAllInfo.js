require('dotenv').config();
const { getApiInfo } = require('./getApiInfo')
const {  getDbInfo } = require('./getDbInfo')

const getAll = async () => {
    const apiInfo = await getApiInfo()
    const bdInfo = await getDbInfo()
    console.log(apiInfo)
    const allInfo = bdInfo.concat(apiInfo)
    return allInfo
}
module.exports={
    getAll
}