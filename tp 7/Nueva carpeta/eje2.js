const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    mostrarInfo: function() {
        console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    },
    actualizarPropiedades: function(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        console.log(`Información actualizada: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    }
};

coche.mostrarInfo();
coche.actualizarPropiedades("Honda", "Civic", 2021);
