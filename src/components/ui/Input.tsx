function Input({
  name,
  id,
  type = "text",
  children,
  ...props
}: React.HTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>) {
  let className =
    "rounded-[8px] border-[1px] border-[#D0D5DD] px-[14px] py-2 shadow text-[#667085] bg-white w-[282px]";

  if (type === "select") {
    return (
      <select id={id || name} name={name} {...props} className={className}>
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
