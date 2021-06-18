import React from "react";
// import { useSelector } from "react-redux";

// import { EditArticleScreen } from "./EditArticleScreen";
import { NothingSelected } from "./NothingSelected";
// import { CrudSelectorSidebar } from "./CrudSelectorSidebar";
// import { Sidebar } from "./Sidebar";
// import { EditAlbumScreen } from "./EditAlbumScreen";


export const EditScreen = () => {

    // const { active } = useSelector( state => state.crud );
    // const { showSidebar, showCrudSelector, activeCrud } = useSelector( state => state.ui );


    return (
        <div>
            <NothingSelected  />

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
