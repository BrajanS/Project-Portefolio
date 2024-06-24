import React from 'react'

export default function Formation(props) {
    return (
        <div className='flex flex-col'>
            <h2 className="text-[white] text-[20px] rounded-[5px] font-[700] bg-[#0d0d85] text-center">Formation</h2>
            <div>
                {/* {props.titre.map(item, index => (<ul key={index}>{Object.keys(item).map((key)=> (
                    <li key={key}>
                        <p>{key}:</p> {item[key]}
                    </li>
                ))}</ul>))} */}
            </div>
        </div>
    )
}
