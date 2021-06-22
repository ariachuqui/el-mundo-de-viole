import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

export const SingleDibujo = ({infoImg, setShowImage}) => {

    console.log(infoImg)

    if( !infoImg ) {
        return(
            <></>
        )
    }
    
    const {id, name, img} = infoImg;

    return (

        <div className="dibujos__single-dibujo flex-center absolute desktop-d-none">
            <OutsideClickHandler
                onOutsideClick={() => {
                    setShowImage( p => ({ ...p, state: false, infoImg: null}) )
                }}
            >
                <div>
                    <img className="dibujos__single-dibujo-img" src={img} alt={img} />
                </div>
            </OutsideClickHandler>
         </div>

        
    )
}
