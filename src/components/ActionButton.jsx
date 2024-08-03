import PropTypes from "prop-types";
function ActionButton({icon, text, url, classImg ,className}){
    return (
        <a href={url} target="_blank" className={`flex max-[1400px]:w-full  min-[1401px]:w-[160px] min-w-[200px] h-[62px] ${className} `}>
              <img src={icon} alt="Icon PDF" className={`w-[30px] mx-4 ${classImg}`}/>
              <span className='my-auto'>{text}</span>
        </a>
    )
}
ActionButton.propTypes = {
    icon : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    className : PropTypes.string.isRequired,
    classImg : PropTypes.string
}
export default ActionButton;