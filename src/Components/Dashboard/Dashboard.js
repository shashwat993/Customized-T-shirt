import React, { useState, useEffect } from 'react';
import Display from '../Design/Display';
import Settings from '../Design/settings';
import { imgDB } from '../../Config/firebaseconfig';
import { v4 as uuidv4 } from 'uuid';
import { uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref } from 'firebase/storage';

const Dashboard = () => {
    const [tshirtcolor, setTshirtColor] = useState('black');
    const [upperText, setUpperText] = useState('Upper Text');
    const [lowerText, setLowerText] = useState('Lower Text');
    const [imgUrl, setImgUrl] = useState('http://via.placeholder.com/400x300');
    const [fontSize, setFontSize]=useState('30px');
    const [textColor, setTextColor]=useState('white');
    const [tshirtSize, setTshirtSize]=useState('M');
    
    const handleChangeUpperText = (e) => {
        setUpperText(e.target.value);
    };

    const handleChangeLowerText = (e) => {
        setLowerText(e.target.value);
    };

    const imgUploadChange = (e) => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            const imgRef = ref(imgDB, `image/${uuidv4()}`);

            uploadBytes(imgRef, image).then(() => {
                getDownloadURL(imgRef).then((downloadURL) => {
                    setImgUrl(downloadURL); // Update the URL in state
                });
            });
        }
    };

    useEffect(() => {
        // Automatically upload the image and get the URL when imgUploadChange is called
    }, []);

    const handleClickimg = (e) => {
        setTshirtColor(e.target.id);
    };

    const handleChangeTextSize=(e)=>{
        setFontSize(e.target.value+'px')
    }
    const handleChangeTextColor=(e)=>{
        setTextColor(e.target.value);
       
    }
    const handleChangeTshirtSize=(e)=>{
        setTshirtSize(e.target.value)
        
    }


    const handleSubmitHandle = async () => {
        const data = {
            tshirtColor: tshirtcolor,
            tshirtSize: tshirtSize,
            upperText: upperText,
            lowerText: lowerText,
            memeImageUrl: imgUrl,
            textFontSize: fontSize,
            textColor: textColor,
        };
    
        try {
            const response = await fetch("https://customtshirt-3125e-default-rtdb.firebaseio.com/tshirt.json", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                console.log("Data sent to Firebase successfully!");
            } else {
                console.error("Failed to send data to Firebase.");
            }
        } catch (error) {
            console.error("Error sending data to Firebase:", error);
        }
    }    




    return (
        <React.Fragment>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8 p-5" >
                        <Display
                            tcolor={tshirtcolor}
                            upperText={upperText}
                            lowerText={lowerText}
                            imageUrl={imgUrl}
                            fontSize={fontSize}
                            textColor={textColor}
                        />
                    </div>
                    <div className="col-lg-4">
                        <Settings
                            color={handleClickimg}
                            uppertext={handleChangeUpperText}
                            lowerText={handleChangeLowerText}
                            uploadImage={imgUploadChange}
                            changeTextSize={handleChangeTextSize}
                            changeTextColor={handleChangeTextColor}
                            changeTshirtSize={handleChangeTshirtSize}
                            submitHandle={handleSubmitHandle}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;
