import { types } from "../types/types";

//SYNC
export const uiPagination = ( search = '', page = 1 ) => ({
    type: types.uiPagination,
    payload: {
        search,
        page
    }
})

export const toggleShowSidebar = () => ({
    type: types.uiShowSidebar
})

export const setActiveCrud = ( activeCrud = null ) => ({
    type: types.uiSetActiveCrud,
    payload: activeCrud
});

export const setImgEditCuento = ( img = {} ) => ({
    type: types.uiSetImgEditCuento,
    payload: img
});

export const setLoading = ( payload ) => ({
    type: types.uiSetLoading,
    payload
});

export const handleAlertError = ( payload ) => ({
    type: types.uiAlertError,
    payload
})

