import React from 'react';

const Map = (props) => {
    return (
        <div>
            <iframe
                src={props.iframe}
                width="600"
                height="450"
                
            ></iframe>
        </div>
    );
};

export default Map;
