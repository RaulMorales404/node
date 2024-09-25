const colors = require('colors');
const argsv = require('yargs')
                        .option('b',{
                            alias:"base",
                            type:"number",
                            demandOption:true,
                            describe:"Crear un archivo de con la tabla"
                        })
                        .option('lim',{
                            alias:"limite",
                            type:'number',
                            demandOption:true,
                            describe:"Limite hasta donde llegara la base"
                        })
                        .check((argv) => { 
                            if(isNaN(argv.b)){  
                                throw new Error(colors.red('La base tiene que ser un número',colors.blue(":"),colors.yellow("5"))) 
                            }
                            return true;
                        }).option('l',{
                            alias:'listar',
                            type:"boolean",
                            default:false,
                            describe:"Muestra la tabla creada en consola"
                        })
                        .argv;
                        console.log(argsv.lim)
module.exports = argsv;


