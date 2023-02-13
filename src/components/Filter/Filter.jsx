import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filter.slice';
import { selectFilter } from 'redux/selectors';

import css from './Filter.module.css';

export function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const searchedContact = event.target.value.trim().toLowerCase();
    dispatch(changeFilter(searchedContact));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
}
