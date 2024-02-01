import { ArrowDownIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

function ScrollDown() {
  const { theme, resolvedTheme } = useTheme();
  const isDarkMode = theme === "dark" || resolvedTheme === "dark";
  const strokeColor = isDarkMode ? "#fff" : "#000";
  return (
    <div className="flex justify-center gap-2 items-center pt-8">
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 247 390"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 1.5,
        }}
      >
        <path
          d="M123.359,79.775l0,72.843"
          style={{
            fill: "none",
            stroke: strokeColor,
            strokeWidth: "20px",
          }}
        ></path>
        <path
          d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          style={{
            fill: "none",
            stroke: strokeColor,
            strokeWidth: "20px",
          }}
        ></path>
      </svg>
      <span>Scroll Down</span>
      <span>
        <ArrowDownIcon className="animate-bounce transition" />
      </span>
    </div>
  );
}

export default ScrollDown;
