import React from 'react';
import { useNavigate } from 'react-router-dom';
import useField from '../../hooks/field';

function Search() {
  const term = useField('text');
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    term.reset();
    navigate(`/results/${term.value}`);
  };
  return (
    <div className="search">
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            className="form-control search"
            placeholder="Search"
            value={term.value}
            type={term.type}
            onChange={term.onChange}
          />
          <span className="input-group-btn">
            <button className="btn btn-default" type="submit">
              <i className="icon icon-search" />
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default Search;
