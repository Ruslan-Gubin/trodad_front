const CategoryCheckSvg = ({ active }: { active: boolean }) => {
  return (
    <>
      {active ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="17"
            height="17"
            rx="2.5"
            fill="#EE575C"
            stroke="#EE575C"
          />
          <path
            d="M2.5 10L7.12799 13.7865C7.59186 14.1661 8.28311 14.0551 8.60489 13.5495L15 3.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          data-v-dd34cbd9=""
          width={"18"}
          height={"18"}
          viewBox="0 0 22 22"
        >
          <rect
            data-v-dd34cbd9=""
            width="21"
            height="21"
            x=".5"
            y=".5"
            fill="#FFF"
            stroke="rgb(160, 160, 160)"
            rx="3"
          ></rect>
          <path
            data-v-dd34cbd9=""
            stroke="rgb(255, 255, 255)"
            fill="none"
            strokeLinecap="round"
            strokeWidth="3"
            d="M4 10l5 5 7-9"
          ></path>
        </svg>
      )}
    </>
  );
};

export { CategoryCheckSvg };
