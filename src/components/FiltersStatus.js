import  "../styles/layout/FiltersStatus.scss";
const FiltersStatus = (props) =>{
    const handleStatus = (ev) => {
        props.setFilterStatus(ev.target.value)
    }
    return (
        <form className="form" onSubmit={props.handleSubmit}>
        <select
            className="search"
            name="filterStatus"
            id="filterStatus"
            onChange={handleStatus}
            value={props.status}
          >
            <option value="">Escoge un estado</option>
            <option value="dead">Dead</option>
            <option value="alive"> Alive </option>
            
          </select>
        </form>
    )
 };
 export default FiltersStatus