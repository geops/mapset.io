function Input({
  name,
  id,
  type = "text",
  children,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  React.SelectHTMLAttributes<HTMLSelectElement>) {
  let className =
    "rounded-[8px] border-[1px] border-gray-300 px-[14px] py-2 shadow  bg-white w-full text-blue-900 font-medium leading-6";

  if (type === "select") {
    return (
      <select
        id={id || name}
        name={name}
        {...props}
        className={className + " " + props.className}
      >
        {children}
      </select>
    );
  }
  if (type === "textarea") {
    return (
      <textarea id={id || name} name={name} {...props} className={className} />
    );
  }

  if (type === "checkbox") {
    className = "";
  }

  return (
    <input
      id={id || name}
      name={name}
      type={type}
      {...props}
      className={className}
    />
  );
}

export default Input;
