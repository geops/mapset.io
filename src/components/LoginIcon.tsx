function LoginIcon({ color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="17"
      viewBox="0 0 17 17"
    >
      <g transform="translate(-1073.416 -336.954)">
        <g transform="translate(1073.416 336.954)">
          <rect width="17" height="17" fill="none" />
        </g>
        <line
          x2="7.083"
          transform="translate(1076.25 345.454)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M1084.581,345.285l2.6,2.6-2.6,2.6"
          transform="translate(-3.257 -2.43)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
        <path
          d="M1081.416,342.789v-2.121a.709.709,0,0,1,.708-.708h7.084a.709.709,0,0,1,.708.708V352a.708.708,0,0,1-.708.708h-7.084a.708.708,0,0,1-.708-.708v-2.125"
          transform="translate(-2.333 -0.876)"
          fill="none"
          stroke={color}
          strokeMiterlimit="10"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}
export default LoginIcon;
