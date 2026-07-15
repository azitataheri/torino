function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  ...props
}) {
  return (<button
    {...props}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-primary rounded-[6] text-white cursor-pointer px-4 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;