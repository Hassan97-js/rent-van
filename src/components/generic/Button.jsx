/**
Renders a button component with optional className, onClickHandler, and children props.
@param {string} className - Optional class name to apply to the button element.
@param {function} onClick- Optional function to handle the click event.
@param {ReactNode} children - Optional children to render inside the button element.
@param {object} otherProps - Optional additional props to spread onto the button element.
@returns {JSX.Element} - A button element with the specified props. */

const Button = ({ className = "", onClick = () => {}, children, ...otherProps }) => {
  return (
    <button {...otherProps} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
