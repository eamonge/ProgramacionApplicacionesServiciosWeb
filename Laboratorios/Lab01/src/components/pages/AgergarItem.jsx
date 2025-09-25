import React from 'react'

const AgergarItem = (props) => {
    return (props.trigger) ? (

        <div className='popupModal'>
            <div className="contentModal">
                <button className='btnClose' onClick={() => props.setTrigger(false)}>Close</button>
                AgergarItem
            </div>
        </div>
    ) : "";
}

export default AgergarItem