import React from 'react';

class Search extends React.Component {
  state = {
    search: 'matrix',
    type: 'all',
  };

  /* 2 варианта реализации - через Enter и через кнопку Search/ Я профукал - нужно было написать this.props.Имя-функции */
  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
  };
 /* Иная реализация изменения радиобаттона и в функции мы делаем иную проверку, назначая значение по умолчанию */
  handleFilter = (event) => {
    this.setState({ type: event.target.dataset.type });
  };

  render() {
    return (
      <>
        <div className='row'>
          <div className='input-field'>
            <input
              placeholder='search'
              type='search'
              className='validate'
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
            <button
              className='btn search-btn purple lighten-2 '
              onClick={() =>
                this.props.searchMovies(this.state.search, this.state.type)
              }
            >
              Search
            </button>
          </div>
        </div>
        <div className='input-radio'>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              onChange={this.handleFilter}
              data-type='all'
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              onChange={this.handleFilter}
              data-type='movie'
              checked={this.state.type === 'movie'}
            />
            <span>Movies Only</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              onChange={this.handleFilter}
              data-type='series'
              checked={this.state.type === 'series'}
            />
            <span>Series Only</span>
          </label>
        </div>
      </>
    );
  }
}

export { Search };
