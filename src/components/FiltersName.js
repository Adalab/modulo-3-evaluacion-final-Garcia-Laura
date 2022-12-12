import '../styles/layout/FiltersName.scss';
const FiltersName = (props) => {
    const handleSearch = (ev) => {
        props.setFilterName(ev.target.value);
        
      };
    return (


          <form  onSubmit={props.handleSubmit}>
            <div className='form'>
            <label > </label>
          <input
            className="search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Ej.: Rick"
        onInput={handleSearch}
            value={props.search}
            id = "search"
          />
          </div>
          </form>
    )

};
export default FiltersName;