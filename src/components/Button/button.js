import React from "react";
import "./button.css";
import PropTypes from "prop-types";
// function Button({text}) {
//     const btnTitle = Array.from(text);
//     return (
//         <a className="btn btn-solid btn-white" href="" target="_self">
//         <span className="btnTitle">{btnTitle}</span>
//     </a>
//     )
// };
function Button(props) {
    const {children, href, onClick} = props;
    return (
        <a className="button-background-move hover:cursor-pointer z-50 font-gt" href={href} onClick={onClick}>
            <span className="">{children}</span>
        </a>
    )
}
Button.propTypes = {
    children: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
};
export default Button;