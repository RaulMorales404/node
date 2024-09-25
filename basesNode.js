


const table = 2783;
const { createTable } = require("./helpers/multiplicar");

createTable(table).then((response)=>{
  console.log("Create:",response)
}).catch((responseError)=>{
console.log("Erro:",responseError)
})
