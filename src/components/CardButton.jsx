import PropTypes from "prop-types";
export default function CardButton({icon,altIcon,text,arrow=false, className="", fullIcon=false}){
    return (
        <div className={`w-full h-[100px] md:h-16 lg:w-1/4 text-lg text-white border border-[#1B1B1B] rounded-md p-4 flex items-center justify-center ${className} `}>
            <img src={icon} className="max-w-[75%] max-h-[75%] pr-[10px]" alt={altIcon} />
            {arrow ? <span>Hola</span> : ""}
            {fullIcon ? "" : <span className="">{text}</span>}
      </div>
    )
}

CardButton.propTypes = {
    icon: PropTypes.string.isRequired,
    altIcon: PropTypes.string.isRequired,
    text: PropTypes.string,
    arrow: PropTypes.bool,
    className: PropTypes.string,
    fullIcon: PropTypes.bool
};