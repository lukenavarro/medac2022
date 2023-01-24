class Supermercado{

    constructor(articulos){
        this.articulos=articulos.filter((value)=> true);
    }

    editar(articulo){
        let articuloFound = articulos.find((value)=> value.id=articulo.id);

        if(!articuloFound){
            throw "No Existe el articulo";
        }

        articuloFound.nombre=articulo.nombre;
        articuloFound.precioBase=articulo.precioBase;
        articuloFound.rebajado=articulo.rebajado;
    }

    listar(){
        this.articulos.forEach(articulo =>{
            console.log(articulo.getNombreCompleto())
        });
    }
}