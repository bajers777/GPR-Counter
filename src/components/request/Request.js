import React from 'react';

const Request = props => {
    const cloudinaryUploadWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dnscqff0j',
        uploadPreset: 'ml_default'
    }, (error, result) => {
        if (!error && result && result.event === "success") {

        }
    }
    );

    return (
        <>


        </>
    );
};

export default Request;
