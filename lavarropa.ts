import { Electrodomestico } from "./electrodomesticos";

export class Lavarropa extends Electrodomestico {
    private capacidad: number;
    private consumoElectrico: string;
    private tipoCarga: string;


    constructor(capacidad: number, consumoElectrico: string, tipoCarga: string,marca:string,modelo:string,codigo:number,color:string) {
        super(marca,modelo,codigo,color);
        this.capacidad = capacidad;
        this.consumoElectrico = consumoElectrico;
        this.tipoCarga = tipoCarga;
    }

    // Getters
    public getCapacidad(): number {
        return this.capacidad;
    }

    public getConsumoElectrico(): string {
        return this.consumoElectrico;
    }

    public getTipoCarga(): string {
        return this.tipoCarga;
    }

    // Setters
    public setCapacidad(capacidad: number): void {
        this.capacidad = capacidad;
    }

    public setConsumoElectrico(consumoElectrico: string): void {
        this.consumoElectrico = consumoElectrico;
    }

    public setTipoCarga(tipoCarga: string): void {
        this.tipoCarga = tipoCarga;
    }

    // Centrifugar
    public centrifugar(): void {
        console.log("Centrifugando...");
    }

    // Enjuagar
    public enjuagar(): void {
        console.log("Enjuagando...");
    }

    // Prelavado
    public prelavado(): void {
        console.log("Realizando prelavado...");
    }

    // Lavado
    public lavado(): void {
        console.log("Lavando...");
    }

    // Métodos de clase padre (heredados)
    public prender(): void {
        super.prender();
        console.log("Lavarropa encendido.");
    }

    public apagar(): void {
        super.apagar();
        console.log("Lavarropa apagado.");
    }

    public actualizar(): void {
        super.actualizar();
        console.log("Actualizando lavarropa");
        
    }

}