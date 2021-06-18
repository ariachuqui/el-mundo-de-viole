import { data } from "../data/data";

const { cuentos } = data[0];

export const getCuentoByURL = ( url ) => cuentos.find( c => c.url === url )
