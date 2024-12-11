import React from 'react';

const GolLoader = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-black">
            <div className="lds-ripple">
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default GolLoader;