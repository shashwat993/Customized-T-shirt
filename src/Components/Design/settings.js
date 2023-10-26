import React from 'react'
const imgBase='https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/'
const Settings=(props)=>{


    return (
        <div className='card bg-light conatiner p-5'>
            <h4>Change T-shirt Color</h4>
            <div className='tshirt-color'>
                <img src={`${imgBase}black.png`} onClick={props.color} alt='black-tshirt' id='black' />
                <img src={`${imgBase}white.png`} onClick={props.color} alt='white-tshirt' id='white' />
                <img src={`${imgBase}grey.png`} onClick={props.color} alt='grey-tshirt' id='grey' />
                <img src={`${imgBase}blue.png`} onClick={props.color} alt='blue-tshirt' id='blue' />
                <img src={`${imgBase}red.png`} onClick={props.color} alt='red-tshirt' id='red' />
               
            </div>
            <br/>
            <h4>Write Text</h4>
            <input type='text'  className='form-control form-control-sm mb-2 ' placeholder='Upper Text' onChange={props.uppertext} />
            <input type='text'  className='form-control form-control-sm  ' placeholder='Lower Text' onChange={props.lowerText} />
            <br/>
            <h3>Select Size</h3>
            <select className='form-control form-control-sm mb-1' onChange={props.changeTshirtSize}>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
            </select>
            <br/>

            <h4>Upload Image</h4>
            <div className='form-group'>     
            <input type='file' className='form-control-file mb-1' onChange={props.uploadImage} />
            </div>
            <hr/>
            <h4>Text Size</h4>
            <input type='range' min='10' max='55' onChange={props.changeTextSize} />
            <hr/>
            <h4> Text Color</h4>

           <select className='form-control form-control-sm mb-1' onChange={props.changeTextColor}>
            <option>Black</option>
            <option>White</option>
            <option>Grey</option>
            <option>Blue</option>
            <option>Red</option>
           </select>

           <br/>
           <button className='btn btn-primary btn-sm mb-2' onClick={props.submitHandle}>Save</button>


        </div>
    )
}
export default Settings;