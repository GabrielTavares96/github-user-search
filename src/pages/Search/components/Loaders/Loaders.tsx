import React from "react"
import ImageLoader from './ImageLoader';
import InfoLoader from './InfoLoader';
import './styles.css';

const Loaders = () => (
    <div className="loader">
        <ImageLoader />
        <div className="loader-info">
        <InfoLoader />
        </div>
    </div>
)

export default Loaders;