import create from "./http-services";

export interface Onderzoeken {
    id: number;
    naam: string;
    soort: string;
    beschrijving: string;
    typebeperking:string;
    uitvoerder:string;
    adres?:string
    postcode?:string
    link?:string
    beloning:string
    uitnodiging?:string
}






export default create("/onderzoeken");