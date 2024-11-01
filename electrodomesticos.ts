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

    public setMarca(marca: string): void {
        this.marca = marca;
    }


    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }


    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public setInternet(internet: boolean): void {
        this.internet = internet;
    }

    //Metodos GENERALES: Prender, Apagar y Actualizar(con validaciones)
    public prender():void {
        console.log("Prender electrodomestico");        
    }

    public apagar():void {
        console.log("Apagar electrodemestico");        
    }

    public actualizar():void {
        console.log("Actualizar electrodomestico");
        
    }
}
