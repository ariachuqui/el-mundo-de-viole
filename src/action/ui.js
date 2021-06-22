import { types } from "../types/types";

//SYNC
export const toggleShowSidebar = () => ({
    type: types.uiShowSidebar
})

export const setActiveCrud = ( activeCrud = null ) => ({
    type: types.uiSetActiveCrud,
    payload: activeCrud
});


