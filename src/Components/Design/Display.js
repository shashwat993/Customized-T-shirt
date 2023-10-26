import React from 'react'
import './Display.css'

const Display=(props)=>{

    
    return (
        <div className='card card-content p-4'>
            <div className='text-center img-tshirt'>
                <img
                className='img-fluid'
                src={`https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/${props.tcolor}.png`}
                alt='black-tshirt'
                />
            </div>
            
            <div className='meme-text text-center col-sm-6'>
                <div className='upper-text'>
                 <p style={{fontSize:props.fontSize,color:props.textColor}}>{props.upperText}</p>
                </div>
                <img
                className='bordr'
                src={props.imageUrl}
                alt='meme-img'
                style={{width:'400px'}}
                />     
                <div className='lower-text'>
                  <p style={{fontSize:props.fontSize, color:props.textColor}} >{props.lowerText}</p>
                </div>

            </div>

        </div>
    )
}
export default Display;