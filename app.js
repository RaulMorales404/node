
const {createTable} = require('./helpers/multiplicar'); 
const  argsv = require('./config/yargs');


createTable(argsv.base,argsv.l,argsv.lim).then((response)=>{
    console.log("Create:",response)
  }).catch((responseError)=>{
  console.log("Erro:",responseError)
  })


 