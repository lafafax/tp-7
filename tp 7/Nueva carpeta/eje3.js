const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    añoPublicacion: 1943,
    genero: "Ficción",
    disponible: true,
    mostrarInfo: function() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Año de Publicación: ${this.añoPublicacion}, Género: ${this.genero}, Disponible: ${this.disponible}`);
    },
    prestar: function() {
        if (this.disponible) {
            this.disponible = false;
            console.log(`El libro "${this.titulo}" ha sido prestado.`);
        } else {
            console.log(`El libro "${this.titulo}" no está disponible para préstamo.`);
        }
    },
    devolver: function() {
        this.disponible = true;
        console.log(`El libro "${this.titulo}" ha sido devuelto.`);
    }
};

libro.mostrarInfo();
libro.prestar();
libro.devolver();
