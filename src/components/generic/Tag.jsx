/**
Returns a span element with the provided children and CSS class name. The element has padding, border radius and is an inline-block.
@param {string} className - The CSS class name to apply to the span element.
@param {any} children - The content to render inside the span element.
@returns {HTMLElement} - The span element with the provided children and CSS class name. */
const Tag = ({ className, children }) => {
  return (
    <span
      style={{
        padding: "0.3rem 1.5rem",
        borderRadius: "0.375rem",
        display: "inline-block"
      }}
      className={className}>
      {children}
    </span>
  );
};

export default Tag;
