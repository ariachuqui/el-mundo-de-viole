import { types } from "../types/types";

const initialState = { 
    pagination: {
        page: 0,
        search: ''
    },
    showSidebar: true,
    activeCrud: null,
    imgEditCuento: null,
    alerError: false, 
    loading: false

}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.uiShowSidebar:
            return {
                ...state,
                showSidebar: state.showSidebar ? false : true
            }

        case types.uiSetActiveCrud:
            return {
                    ...state,
                    activeCrud: action.payload
            };

        case types.uiSetImgEditCuento :
            return {
                ...state,
                imgEditCuento: action.payload
            }

        case types.uiSetLoading:
            return {
                ...state,
                loading: action.payload
            }

        case types.uiPagination: 
            return {
                ...state,
                pagination: {
                    page: action.payload.page,
                    search: action.payload.search
                }
            } 

        case types.uiAlertError:
            return {
                ...state,
                alerError: action.payload
            }

        default:
            return state;
    }
}