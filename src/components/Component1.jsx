import React, { useEffect } from 'react'

let renderCount = 1

const Component1 = () => {
    useEffect(() => {
        renderCount++
    })
    return (
        <div>
            <h1>ComponentA : render {renderCount}</h1>
        </div>
    )
}

export default Component1
