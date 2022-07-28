export interface Pais {
    name          : string;
    alpha3Code    : string;
    independent   : boolean;
}

export interface Usuario {
    id?           : string;
    nombre        : string;
    correo        : string;
    password      : string;
    password2     : string;
    envioDeOfertas: boolean;
    region        : string;
    pais          : Pais;
    ciudad        : string;
}
