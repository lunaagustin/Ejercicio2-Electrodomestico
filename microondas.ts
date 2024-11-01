import { Electrodomestico } from "./electrodomesticos";

// Clase Microondas
class Microondas extends Electrodomestico {
    private potencia: number;
    private grill: boolean;
    private encendido: boolean = false;

    // Constructor
    constructor(marca: string, modelo: string, codigo: number, color: string, potencia: number, grill: boolean) {
        super(marca, modelo, codigo, color);
        this.potencia = potencia;
        this.grill = grill;
    }

    // Métodos
    public prender(): void {
        this.encendido = true;
        console.log("Microondas encendido.");
    }

    public apagar(): void {
        this.encendido = false;
        console.log("Microondas apagado.");
    }

    public calentar(): void {
        if (this.encendido) {
            console.log("Calentando comida en el microondas.");
        } else {
            console.log("El microondas está apagado. Enciéndelo para calentar.");
        }
    }

    public descongelar(): void {
        if (this.encendido) {
            console.log("Descongelando comida en el microondas.");
        } else {
            console.log("El microondas está apagado. Enciéndelo para descongelar.");
        }
    }

    public conectarInternet(): void {
        if (this.getInternet()) {
            console.log("Microondas conectado a Internet.");
        } else {
            console.log("Este modelo de microondas no tiene capacidad de conexión a Internet.");
        }
    }

    public desconectarInternet(): void {
        if (this.getInternet()) {
            console.log("Microondas desconectado de Internet.");
        } else {
            console.log("Este modelo de microondas no tiene capacidad de conexión a Internet.");
        }
    }

    public encenderGrill(): void {
        if (this.grill) {
            console.log("Grill encendido.");
        } else {
            console.log("Este microondas no tiene función de grill.");
        }
    }

    public cocinarConGrill(): void {
        if (this.encendido) {
            if (this.grill) {
                console.log("Cocinando con grill...");
            } else {
                console.log("Este microondas no tiene función de grill.");
            }
        } else {
            console.log("El microondas está apagado. Enciéndelo para cocinar con grill.");
        }
    }

    // Getters y Setters
    public getPotencia(): number {
        return this.potencia;
    }

    public setPotencia(potencia: number): void {
        if (potencia <= 0 || potencia > 1800) {
            console.log("La potencia debe ser un valor entre 1 y 1800 W.");
        } else {
            this.potencia = potencia;
        }
    }

    public getGrill(): boolean {
        return this.grill;
    }

    public setGrill(grill: boolean): void {
        this.grill = grill;
    }

}
