import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor='search'>Enter Search Text: </label>
                <input
                    className={'ui input'}
                    type='text'
                    id='search'
                    value={this.state.term}
                    onChange={(e) => this.setState({term: e.target.value})} />
                <button>Submit</button>
            </form>
        );
    }
}

export default SearchBar;
