
const data = require('./example')
console.log('json')
console.log(data.company1Data)

const result=(object)=>{
    const st=JSON.stringify(object)
    console.log(st)
    console.log(st.includes('people'))
}
result(data.company1Data)