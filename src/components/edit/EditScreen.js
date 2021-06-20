import React from "react";
import { useSelector } from "react-redux";
import { EditCuento } from "./EditCuento";
import { EditDibujos } from "./EditDibujos";

import { NothingSelected } from "./NothingSelected";
import { Sidebar } from "./Sidebar";


export const EditScreen = () => {

    // const { active } = useSelector( state => state.crud );
    // const { showSidebar, showCrudSelector, activeCrud } = useSelector( state => state.ui );
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
        // <div
        //     className={ showSidebar ? "d-flex-between" : "edit__active d-flex-between" }
        //     style={{ overflowY: 'hidden' }}
        // >
        //     {
        //         showCrudSelector &&
        //             <CrudSelectorSidebar />
        //     }

        //     <Sidebar />

  
        //     <main className="edit__main">

        //         {
        //             ( activeCrud === 'articulo' ) &&
        //                 (
        //                     ( active )
        //                         ? <EditArticleScreen  />
        //                         : <NothingSelected  />
        //                 )
        //         }

        //         {
        //             ( activeCrud === 'album' ) &&
        //                 (
        //                     ( active )
        //                         ? <EditAlbumScreen  />
        //                         : <NothingSelected  />
        //                 )
        //         }

        //     </main>
        // </div>
    );
};
