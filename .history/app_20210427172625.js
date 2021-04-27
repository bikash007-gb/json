
const data = require('./example')
console.log('json')
console.log(data.company1Data)

const result=(object)=>{
    const st=JSON.stringify(object)
    key='person'
    const count=st.split(key).length-1
    return count
}
console.log(result(data.company1Data))
console.log(result(data.company2Data))