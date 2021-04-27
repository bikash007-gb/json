const data = require('./example')
const result=(object)=>{
    const st=JSON.stringify(object)
    key='person'
    console.log(st.split(key))
    const count=st.split(key).length-1
    return count
}
console.log(result(data.company1Data))
console.log(result(data.company2Data))