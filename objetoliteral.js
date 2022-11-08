const cliente = {
    nombre : "Franco",
    apllellido : "Celiz",
    edad : 23,
    casado : false,
    hijos : 0,
    fechaNacimiento : '1999-04-12',
    hobbies : ['futbol', 'play', 'musica'],
    nombreCompleto : function(){
        return `${this.nombre} ${this.apllellido}`
    }
}
module.exports = cliente;