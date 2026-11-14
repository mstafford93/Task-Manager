import React from 'react'

const Navigation = ({ handleClick }) => {
    
    return (
        <div>
            <button className="missed-deadline" onClick={handleClick}>
                Missed Deadlines
            </button>
            <button className="less-than-3-days" onClick={handleClick}>
                Less than 3 days
            </button>
            <button className="more-than-3-days" onClick={handleClick}>
                More than 3 days
            </button>
        </div>
    )
}

export default Navigation
