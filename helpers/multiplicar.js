const fs = require("fs");

const createTable = async (table = 1,showList=false,limit=10) => {

  let salida = "";
  for (let index = 0; index <= limit; index++) {
    salida += `${table} x ${index} = ${table * index}\n`;
  }
  salida += `\n tabla del ${table}`;
  if(showList){
    console.log(salida)
  }

 
    fs.writeFileSync(`./salida/table-${table}.txt`, salida);
    return `Archivo creado conesxito`;
 
};




module.exports = {
  createTable,
};
