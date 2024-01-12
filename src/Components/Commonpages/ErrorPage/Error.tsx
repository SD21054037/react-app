import "./error.css";

export interface IFour04SectionProps {
  className?: string;
}

export const Four04Section = ({
  className,
  ...props
}: IFour04SectionProps): JSX.Element => {
  return (
    <div className={"_404-section " + className}>
      <div className="container">
        <div className="content">
          <div className="heading-and-supporting-text">
            <div className="heading-and-subheading">
              <div className="subheading">404 error </div>
              <div className="heading">Pagina niet gevonden </div>
            </div>
            <div className="supporting-text">
              Sorry, de pagina waar u naar zocht kon niet gevonden worden.{" "}
            </div>
          </div>
          <div className="actions">
            <div className="button">
              <div className="button-base">
                <svg
                  className="arrow-left"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8334 10.0001H4.16669M4.16669 10.0001L10 15.8334M4.16669 10.0001L10 4.16675"
                    stroke="#344054"
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="text">Ga terug </div>
              </div>
            </div>
          </div>
        </div>
        <div
          // className="image"
          // style={{
          //   background: "url(./public/Error.png) center",
          //   backgroundSize: "cover",
          // }}
          className="image"
style={{
  background: `url(./public/Images/Error.png) center center no-repeat`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
}}

        >
          <svg
            className="hand-drawn-line"
            width="884"
            height="331"
            viewBox="0 0 884 331"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_68_8609)">
              <path
                d="M16 196.476C19.5468 186.102 26.5418 178.346 34.331 169.849C68.2441 132.852 109.092 100.75 155.096 75.6871C251.68 23.0695 367.551 -3.67021 477.228 32.8537C539.924 53.7325 608.711 100.118 618.246 162.679C623.661 198.206 604.298 229.04 576.709 253.888C547.144 280.518 508.9 301.764 467.685 311.06C435.812 318.249 380.348 319.515 376.853 279.974C374.914 258.043 387.466 237.393 402.255 220.694C433.066 185.908 477.785 164.903 525.218 152.618C607.668 131.265 695.702 139.585 767.088 182.741C794.214 199.137 848.993 247.755 868 278.076"
                stroke="white"
                strokeOpacity="0.1"
                strokeWidth="32"
                strokeLinecap="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_68_8609"
                x="-24.0043"
                y="-24.0071"
                width="932.006"
                height="379.007"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="12" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_68_8609"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_68_8609"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Four04Section;
