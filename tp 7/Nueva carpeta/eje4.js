const empleado = {
    nombre: "Ana",
    edad: 28,
    puesto: "Desarrolladora",
    salario: 3000,
    mostrarInfo: function() {
        console.log(`Empleado: ${this.nombre}, Edad: ${this.edad}, Puesto: ${this.puesto}, Salario: ${this.salario}`);
    },
    aumentarSalario: function(porcentaje) {
        this.salario += this.salario * (porcentaje / 100);
        console.log(`El nuevo salario de ${this.nombre} es: ${this.salario}`);
    }
};

empleado.mostrarInfo();
empleado.aumentarSalario(10);
