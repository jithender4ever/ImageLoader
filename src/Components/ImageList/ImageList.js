import React from 'react';
import ImageCard from "../ImageCard/ImageCard";
import './ImageList.css';

class ImageList extends React.Component {

    render() {
        return (
            <div className='imageList'>
                {this.props.images.map((image) => <ImageCard key={ image.id } image={ image } />)}
            </div>
        );
    }
}

export default ImageList;
