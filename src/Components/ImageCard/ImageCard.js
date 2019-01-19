import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);

        this.state = { span: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        this.setState({ span: Math.ceil(height/10 + 1) });
    };


    render () {
        return (
              <div style={ {gridRowEnd: `span ${this.state.span}`} }>
                  <img ref={ this.imageRef } alt={this.props.image.description} src={this.props.image.urls.regular}/>
              </div>
          )  ;
    }

}

export default ImageCard;
