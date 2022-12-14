import FiltersName from "./FiltersName";
import FiltersStatus from "./FiltersStatus";

const Filters = (props) => {
    return(
        <>
        <FiltersName handleSubmit = {props.handleSubmit} search={props.search} setFilterName={props.setFilterName}/>
        <FiltersStatus handleSubmit= {props.handleSubmit} 
        status={props.status}
         setFilterStatus={props.setFilterStatus}></FiltersStatus>
        </>
        )

}
export default Filters;