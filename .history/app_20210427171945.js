
const data = require('./example')
console.log('json')
console.log(data.company1Data)

const result=(object)=>{
    const st=JSON.stringify(object)
    console.log(st)
    console.log(st.includes('people'))
    c='person'
    x=st.split(c)
    console.log(x)
    const count=st.split(c).length
    return count
}
console.log(result(data.company1Data))