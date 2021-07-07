import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

export const SingleDibujo = ({infoImg, setShowImage}) => {

    if( !infoImg ) {
        return(
            <></>
        )
    }
    
    const {imgName, imgUrl} = infoImg;

    return (

        <div className="dibujos__single-dibujo flex-center absolute desktop-d-none">
            <OutsideClickHandler
                onOutsideClick={() => {
                    setShowImage( p => ({ ...p, state: false, infoImg: null}) )
                }}
            >
                <div>
                    <img className="dibujos__single-dibujo-img" src={imgUrl} alt={imgName} />
                </div>
            </OutsideClickHandler>
         </div>

        
    )
}
