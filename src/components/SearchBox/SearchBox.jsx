import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import style from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={style.searchContainer}>
      <input
        className={style.searchBox}
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Search contacts"
      />
    </div>
  );
};

export default SearchBox;
