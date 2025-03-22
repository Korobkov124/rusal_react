import React from "react";
import edaImage from "../images/eda.jpg";
import yaImage from "../images/ya.jpg";
import  kapetcImage from "../images/kapetc.jpeg"

function Home() {
    return (
        <div>
            <h1>Добро пожаловать в Pet Shop!</h1>
            <p>Здесь вы найдете всё лучшее для ваших питомцов</p>
            <div id="imgs_div">
                <img className="img_block" src={ edaImage } alt="error image"/>
                <img className="img_block" src={ yaImage } alt="error image" />
                <img className="img_block" src={ kapetcImage } alt="error image" />
            </div>
        </div>
    );
}

export default Home;