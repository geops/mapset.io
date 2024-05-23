interface Props {
  color?: string;
}

function CheckIcon(props: Props) {
  const { color } = props;
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_10719_2106)">
        <path
          d="M9.24992 14.3892L12.7499 17.9864L19.7499 10.792M26.1666 14.3892C26.1666 21.0115 20.9432 26.3799 14.4999 26.3799C8.0566 26.3799 2.83325 21.0115 2.83325 14.3892C2.83325 7.76687 8.0566 2.39844 14.4999 2.39844C20.9432 2.39844 26.1666 7.76687 26.1666 14.3892Z"
          stroke={color || "#84CC16"}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10719_2106">
          <rect x="0.5" width="28" height="28.7778" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default CheckIcon;
