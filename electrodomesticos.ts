//Implementar clase abstracta o interface
export class Electrodomestico{
    private marca:string;
    private modelo: string;
    private codigo:number;
    private color: string;
    private internet: boolean;

    constructor(marca:string,modelo:string,codigo:number,color:string){
        this.marca= marca;
        this.modelo= modelo;
        this.codigo= codigo;
        this.color= color;
        this.internet = true;
    }

    //Metodos GET
    public getMarca():string{
        return this.marca;
    }

    public getModelo():string{
        return this.modelo;
    }

    public getCodigo():number{
        return this.codigo;
    }

    public getColor():string{
        return this.color;
    }

    public getInternet():boolean{
        return this.internet;
    }

    //Metodos SET(con validaciones)

    //Metodos GENERALES: Prender, Apagar y Actualizar(con validaciones)
}
