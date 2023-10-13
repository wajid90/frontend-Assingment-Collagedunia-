import { useState } from "react";
import Login from "./Login";

const Modal=({showModal,setShowModal}) =>{
    return (
        <>
            {showModal ? (
                <>
                    <div className="fixed inset-0 overflow-y top-7">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-[80%]  p-4 mx-auto bg-white rounded-md shadow-lg">
                            <Login setShowModal={setShowModal}/>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}

export default Modal;