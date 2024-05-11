import style from "./index.module.css";

const SearchInput = ({ value, placeholder, onChange }) => {
  return (
    <form className={style.form}>
      <button type='submit'>
        <svg width='17' height='16' fill='none' xmlns='http://www.w3.org/2000/svg' role='img' aria-labelledby='search'>
          <path
            d='M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9'
            stroke='currentColor'
            strokeWidth='1.333'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </button>
      <input className={style.input} placeholder={placeholder} onChange={onChange} required value={value} type='text' />
    </form>
  );
};

export default SearchInput;
