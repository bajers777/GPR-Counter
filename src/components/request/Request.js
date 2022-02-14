import React from 'react';

const Request = props => {
    const cloudinaryUploadWidget = window.cloudinary.createUploadWidget({
        cloudName: 'dnscqff0j',
        uploadPreset: 'ml_default'
    }, (error, result) => {
        if (!error && result && result.event === "success") {
            console.log('Done! Here is the image info: ', result.info);
        }
    }
    );

    return (
        <>


        </>
    );
};

export default Request;
