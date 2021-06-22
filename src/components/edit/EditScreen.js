import React from "react";
import { useSelector } from "react-redux";
import { EditCuento } from "./EditCuento";
import { EditDibujos } from "./EditDibujos";

import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";


export const EditScreen = () => {

    const { activeCrud } = useSelector( state => state.ui );

    return (
        <div className="edit">
            <Sidebar />

            {
                ( !activeCrud ) && <NothingSelected  />
            }

        
            {
                ( activeCrud === "cuentos" ) && <EditCuento />
            }

{
                ( activeCrud === "dibujos" ) && <EditDibujos />
            }
        </div>
    );
};
