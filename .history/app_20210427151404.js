
const data = require('./example')
console.log('json')
console.log(data.company1Data)

const result=(object)=>{
    object.forEach((e)=>console.log(e))
}
result(data.company1Data)