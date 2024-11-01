import { Electrodomestico } from "./electrodomesticos";

export class Refrigerador extends Electrodomestico{
    //atributos
    private freezer : boolean;
    private capacidad : number; //capacidad en litros
    private encendido : boolean;

    //constructor
    constructor(marca : string, modelo : string, codigo : number, color : string, capacidad : number){
        super(marca, modelo, codigo, color)
        this.freezer = false;
        this.capacidad = capacidad;
        this.encendido = false;
    }

    //metodos
    public enfriar(): void{
        if(this.encendido === true){
            this.freezer = false;
            console.log("Su refrigerador " + this.getModelo()+ " esta enfriando.")
        } else {
            console.log("Su refrigerador se encuentra apagado.")
        }
    }

    public congelar(): void{
        if(this.encendido === true){
            this.freezer = true;
            console.log("Su refrigerador " + this.getModelo()+ " esta congelando.")
        } else{
            console.log("Su refrigerador se encuentra apagado.")
        }
    }

    public prender(): void{
        this.encendido = true;
        console.log("Refrigerador encendido.");
    }

    public apagar(): void{
        this.encendido = false;
        console.log("Refrigerador apagado.")
    }

    //getters
    public getFreezer(): boolean{
        return this.freezer;
    }
    public getCapacidad(): number{
        return this.capacidad;
    }
    public getEncendido(): boolean{
        return this.encendido;
    }

    //setters
    public setFreezer(freezer : boolean): void{
        if(freezer != undefined){
            this.freezer = freezer;
        }
    }
    public setCapacidad(capacidad : number){
        if(capacidad > 0){
            this.capacidad = capacidad;
        }
    }
    public setEncendido(encendido : boolean): void{
        if(encendido != undefined){
            this.encendido = encendido;
        }
    }
}