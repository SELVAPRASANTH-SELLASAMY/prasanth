import loaderStyle from './loader.module.css';
function Loader(){
    return(
        <div className={loaderStyle.loader}>
            <svg viewBox='0 0 100 100'>
                <circle cx={50} cy={50} r={40}></circle>
            </svg>
        </div>
    );
}
export default Loader;