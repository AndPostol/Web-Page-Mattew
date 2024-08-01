import PropTypes from "prop-types";
function ActionButton({icon, text, className}){
    return (
        <a href="" className={`flex w-full lg:w-[160px] min-w-[200px] h-[62px] ${className} `}>
              <img src={icon} alt="Icon PDF" className='w-[30px] mx-4'/>
              <span className='my-auto'>{text}</span>
        </a>
    )
}
ActionButton.propTypes = {
    icon : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    className : PropTypes.string.isRequired,
}
export default ActionButton;