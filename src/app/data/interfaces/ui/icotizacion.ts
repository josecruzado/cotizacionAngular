import { Cliente } from "./icliente";

export interface Cotizacion {
    id:                 number;
    cliente:            Cliente;
    listaEquipos:       any[];
    listaMateriales:    any[];
    listaManoObra:      any[];
    fecha:              number;
    subTotal:           number;
    totalIgv:           number;
    precioEquipos:      number;
    precioMateriales:   number;
    precioOtros:        number;
    precioManoObra:     number;
    utilidadEquipos:    number;
    utilidadMateriales: number;
}