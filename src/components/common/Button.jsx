function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  bg = "primary",
  ...props
}) {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
  ${
    bg === "primary"
      ? "bg-primary text-white"
      : "bg-white text-primary border-2 border-primary"
  }
  rounded-[6]
  cursor-pointer
  px-4
  disabled:opacity-50
  disabled:cursor-not-allowed
  ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
