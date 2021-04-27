
const data = require('./example')
console.log('json')
console.log(data.company1Data)

const result=({people})=>{
    console.log(people)
}
result(data.company1Data)