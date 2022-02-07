export interface ScreenData{
    valor: number;
    nombre: string;
    color: string;
}

export interface BinanceData{
    lastUpdateId: string;
    bids: Array<Array<string>>;
    asks: Array<Array<string>>;
}

export class AmbitoFinancieroQuoteData{
    fecha: string;
    valor: number;

    constructor(array: Array<any>){
        this.fecha = array[0];
        this.valor = array[1];
    }
}

export interface USDDataInterface{
    fecha: string;
    valor: number;
}

export interface BinanceDataInterface{
    valor: number;
}

export class BinanceQuoteData{
    valor: number;

    constructor(array: Array<any>){
        this.valor = Number(array[0]);
    }
}