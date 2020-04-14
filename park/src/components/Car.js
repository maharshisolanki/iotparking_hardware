import React from 'react'
function Car( props ) {
    const { status, id }= props.data
    return (
        <div className={`box box-${status}`} >
                {status === 0? <img src="/car-0.svg" width="100%" /> : null} 
                {status === 1? id : null} 
                {status === 2? "IN SERVICE" : null} 
        </div>
    )
}

export default Car
