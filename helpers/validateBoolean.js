

const  isBoolean = (valor) =>{
    if (typeof valor === 'boolean') {
        // Si ya es de tipo booleano, retornamos el valor
        return valor;
    } else if (typeof valor === 'string' && valor.toLowerCase() === 'true') {
        // Si es una cadena que dice "true", retornamos true
        return true;
    } else if (typeof valor === 'string' && valor.toLowerCase() === 'false') {
        // Si es una cadena que dice "false", retornamos false
        return false;
    } else {
        // Si no es ni booleano ni "true"/"false", retornamos null o un error
        return null; // o puedes lanzar un error si prefieres
    }
}
module.exports={
    isBoolean,
}