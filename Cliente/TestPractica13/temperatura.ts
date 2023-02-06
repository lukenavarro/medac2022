
export class Temperatura{

    convertir(temp:number,tipo:TipoConversion=TipoConversion.C){
        if(tipo == TipoConversion.C){
            return (temp-32)/1.8;
        }else{
            return temp*1.8+32;
        }
    }
}

export enum TipoConversion{
    C=0,
    F=1
}