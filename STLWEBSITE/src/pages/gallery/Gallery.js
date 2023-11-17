import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css';

import Front from './frontImages/FRONT.JPG';
import img1 from './frontImages/img1.JPG';
import img2 from './frontImages/img2.JPG';
import img3 from './frontImages/img3.JPG';
import img4 from './frontImages/img4.JPG';
import img5 from './frontImages/img5.JPG';
import img6 from './frontImages/img6.JPG';
import img7 from './frontImages/img7.JPG';
import img8 from './frontImages/img8.JPG';
import img9 from './frontImages/img9.JPG';
import img10 from './frontImages/img10.JPG';
import img11 from './frontImages/img11.JPG';
import img12 from './frontImages/img12.JPG';
import img13 from './frontImages/img13.JPG';
import img14 from './frontImages/img14.JPG';
import img15 from './frontImages/img15.JPG';
import img16 from './frontImages/img16.JPG';
import img17 from './frontImages/img17.JPG';
import img18 from './frontImages/img18.JPG';
import img19 from './frontImages/img19.JPG';


const Gallery = () => {

    const images = [
        {
            original: Front
        },
        {
            original: img1
        },
        {
            original: img2
        },
        {
            original: img3
        },
        {
            original: img4
        },
        {
            original: img5
        },
        {
            original: img6
        },
        {
            original: img7
        },
        {
            original: img8
        },
        {
            original: img9
        },
        {
            original: img10
        },
        {
            original: img11
        },
        {
            original: img12
        },
        {
            original: img13
        },
        {
            original: img14
        },
        {
            original: img15
        },
        {
            original: img16
        },
        {
            original: img17
        },
        {
            original: img18
        },
        {
            original: img19
        },
    ]
    
    
    
        return (
           
                <div className='Gallery'>
                  
    
                 
                    <ImageGallery  items={images}
                    showIndex={true}
                    showPlayButton={false}
                    showThumbnails={false}
                    showFullscreenButton={false}/>
                    
                 
                 
                </div>
            
        );
    }
    
    export default Gallery;  