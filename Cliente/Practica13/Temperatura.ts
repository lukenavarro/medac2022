export enum grados{
    C= 1,
    F= 2
}
export class Temperatura{
   
     static convertirGrados(numGrados:number, tipo:grados = grados.C):number{
        if(tipo == grados.C){
            return ((numGrados*9)/5)+32;
        }else{
            return ((numGrados-32)*5)/9;
        }
    }

}
