import React, { useState, useEffect } from "react";
import './Home.css';
import ProductList from './ProductList';
import {getStorage, ref, getDownloadURL} from "firebase/storage";

const Home = () => {

    const [sliderImages, setSliderImages] = useState([]);
    
    useEffect(() => {
        const storage = getStorage();  // Firebase Storage erişimi
        const imageRefs = [
            'Slider/ecommerceslider1.png'   // Storage'daki dosya yolları
            
        ];

        // Resim URL'lerini dinamik olarak çekme
        Promise.all(
            imageRefs.map((imagePath) => {
                const imageRef = ref(storage, imagePath);
                return getDownloadURL(imageRef);
            })
        )
        .then((urls) => {
            setSliderImages(urls);  // Elde edilen URL'leri state'e kaydetme
        })
        .catch((error) => {
            console.error("Error fetching images: ", error);
        });
    }, []);
    
    return (
        <div className="home-page">
            <div className="slider">
                {sliderImages.length > 0 ? (
                    sliderImages.map((url, index) => (
                        <div className="slide" key={index}>
                            <img src={url} alt={`Slider ${index + 1}`} />
                        </div>
                    ))
                ) : (
                    <p>Loading images...</p>
                )}
            </div>
            <div className="top-products">
                <h2>Top Products</h2>
                <ProductList />
            </div>
        </div>
    );
};

export default Home;