import { Component } from 'react';
import search from '../../search.svg';
import s from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        searchQuery: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            alert('Please, enter search query');
            return;
        }

        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
    };

    handleSearchQuery = e => {
        this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
    };

    render() {
        return (
            <>
                <header className={s.Searchbar}>
                    <form className={s.SearchForm} onSubmit={this.handleSubmit}>
                        <button type="submit" className={s.SearchFormButton}>
                            {/* <span className={s.ButtonLabel}>Search</span> */}
                            <img src={search} alt="" />
                        </button>

                        <input
                            className={s.SearchFormInput}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            name="searchQuery"
                            onChange={this.handleSearchQuery}
                        />
                    </form>
                </header>
            </>
        );
    }
}

export default Searchbar;
