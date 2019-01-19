import * as React from "react";

import SearchBar from "../SearchBar/SearchBar";
import ImageList from '../ImageList/ImageList';
import {configureCall} from "../utils/configureCall";


export default class App extends React.Component {
    state = {
        images : [],
        isFetching: false
    };

    onSubmitHandler  = async term => {
        this.setState({isFetching: true});
        const response = await configureCall(term);
        this.handleImages(response);
    };

    handleImages = (res) => {
        this.setState({
            images: res.data.results,
            isFetching: false
        });
    };

    render() {
        return (
            <div>
              <div className={ 'ui segment' } style={ {'margin': '16px'} }>
                  <SearchBar onSubmit={this.onSubmitHandler}/>
              </div>
                  <ImageList images={this.state.images}/>
            </div>
            );
    }
}
