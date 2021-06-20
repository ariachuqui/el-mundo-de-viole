import React from 'react'

export const EditNav = () => {
    return (
        <nav className="edit__nav">
            <div className="article-edit__appbar flex-center container relative">
                <input
                    id="inputFile"
                    type="file"
                    style={{ display: "none" }}
                    // onChange={handleFileChange}
                />
    
    
                <div 
                    className="edit__nav-foto"
                    // onClick={handlePictureUpload}
                >
                    <i className="fas fa-camera"></i>
                    <p className="font-100">Foto</p>
                </div>


                <button 
                    className="edit__nav-btn color-white margin-left-10"  
                    // onClick={handleSave}
                >
                    Save
                </button>

                {/* TODO: que solo aparezca cuando ya existe */}
                <button
                    className="edit__nav-btn edit__nav-btn-delete margin-left-10"
                    // onClick={handleDelete}
                >
                    Delete
                </button>
    
                {/* <i 
                    className="fa-ellipsis-h fas" 
                    // onClick={handleOptions}
                ></i> */}
            </div>
        </nav>
    )
}
