import "./ChatpageBedrijven.css";
import { Header } from "../CommonComponents/Header/Header";
export interface IChatpageBedrijvenProps {
  className?: string;
}

export const ChatpageBedrijven = ({
  className,
  ...props
}: IChatpageBedrijvenProps): JSX.Element => {
  return (
    <div className={"chatpage-bedrijven " + className}>
      <Header></Header>
      <div className="ContentBox">
        <div className="searchbar-box">
          <div className="search-bar">
            <div className="content">
              <div className="cont">
                <div className="placeholder-label">zoek </div>
              </div>
            </div>
          </div>
          <div className="chats">
            <div className="nav-item-dropdown-base">
              <div className="nav-item-base">
                <div className="content2">
                  <div className="chatnaam">Chatnaam </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-raam">
          <div className="header">
            <div className="rectangle-3106"></div>
            <div className="message-participants">
              <div className="chatnaam2">Chatnaam </div>
            </div>
            <svg
              className="kebab-horizontal"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_227_2243)">
                <path
                  d="M2.59998 9.90016C3.49468 9.90016 4.21998 9.17486 4.21998 8.28016C4.21998 7.38545 3.49468 6.66016 2.59998 6.66016C1.70528 6.66016 0.97998 7.38545 0.97998 8.28016C0.97998 9.17486 1.70528 9.90016 2.59998 9.90016Z"
                  fill="#666668"
                />
                <path
                  d="M9.61998 9.90016C10.5147 9.90016 11.24 9.17486 11.24 8.28016C11.24 7.38545 10.5147 6.66016 9.61998 6.66016C8.72528 6.66016 7.99998 7.38545 7.99998 8.28016C7.99998 9.17486 8.72528 9.90016 9.61998 9.90016Z"
                  fill="#666668"
                />
                <path
                  d="M18.26 8.28016C18.26 9.17486 17.5347 9.90016 16.64 9.90016C15.7453 9.90016 15.02 9.17486 15.02 8.28016C15.02 7.38545 15.7453 6.66016 16.64 6.66016C17.5347 6.66016 18.26 7.38545 18.26 8.28016Z"
                  fill="#666668"
                />
              </g>
              <defs>
                <clipPath id="clip0_227_2243">
                  <rect
                    width="17.28"
                    height="17.28"
                    fill="white"
                    transform="translate(0.97998 0.180176)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="chatbox"></div>
          <div className="footer">
            <div className="emoji-selector">
              <svg
                className="smiley"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_228_1170)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.69595 10.4036C2.69595 8.16946 3.58348 6.02678 5.16329 4.44698C6.74309 2.86717 8.88577 1.97964 11.12 1.97964C13.3541 1.97964 15.4968 2.86717 17.0766 4.44698C18.6565 6.02678 19.544 8.16946 19.544 10.4036C19.544 12.6378 18.6565 14.7805 17.0766 16.3603C15.4968 17.9401 13.3541 18.8276 11.12 18.8276C8.88577 18.8276 6.74309 17.9401 5.16329 16.3603C3.58348 14.7805 2.69595 12.6378 2.69595 10.4036ZM11.12 0.0356445C8.37019 0.0356445 5.73305 1.12798 3.78868 3.07237C1.84429 5.01674 0.751953 7.65388 0.751953 10.4036C0.751953 13.1534 1.84429 15.7906 3.78868 17.735C5.73305 19.6792 8.37019 20.7716 11.12 20.7716C13.8697 20.7716 16.5069 19.6792 18.4513 17.735C20.3956 15.7906 21.488 13.1534 21.488 10.4036C21.488 7.65388 20.3956 5.01674 18.4513 3.07237C16.5069 1.12798 13.8697 0.0356445 11.12 0.0356445ZM7.23195 10.4036C7.57568 10.4036 7.90532 10.2671 8.14837 10.0241C8.39141 9.78101 8.52795 9.45137 8.52795 9.10764C8.52795 8.76392 8.39141 8.43428 8.14837 8.19123C7.90532 7.94819 7.57568 7.81164 7.23195 7.81164C6.88823 7.81164 6.55859 7.94819 6.31554 8.19123C6.0725 8.43428 5.93595 8.76392 5.93595 9.10764C5.93595 9.45137 6.0725 9.78101 6.31554 10.0241C6.55859 10.2671 6.88823 10.4036 7.23195 10.4036ZM16.304 9.10764C16.304 9.45137 16.1674 9.78101 15.9244 10.0241C15.6814 10.2671 15.3517 10.4036 15.008 10.4036C14.6643 10.4036 14.3346 10.2671 14.0916 10.0241C13.8486 9.78101 13.712 9.45137 13.712 9.10764C13.712 8.76392 13.8486 8.43428 14.0916 8.19123C14.3346 7.94819 14.6643 7.81164 15.008 7.81164C15.3517 7.81164 15.6814 7.94819 15.9244 8.19123C16.1674 8.43428 16.304 8.76392 16.304 9.10764ZM7.64667 12.5239C7.85577 12.3775 8.11406 12.3192 8.36577 12.3617C8.61748 12.4041 8.84239 12.5438 8.99192 12.7507L9.00099 12.7624C9.13429 12.9152 9.28675 13.0502 9.45459 13.1641C9.79674 13.3948 10.3398 13.6436 11.12 13.6436C11.9001 13.6436 12.4419 13.3948 12.7853 13.1628C12.9532 13.0489 13.1056 12.9139 13.2389 12.7611L13.248 12.7507C13.3975 12.5407 13.6243 12.3987 13.8785 12.3559C14.1328 12.3131 14.3936 12.3731 14.6036 12.5226C14.8136 12.6721 14.9556 12.899 14.9984 13.1531C15.0411 13.4074 14.9813 13.6683 14.8317 13.8782L14.036 13.3196C14.8317 13.8769 14.8317 13.8782 14.8304 13.8782V13.8795L14.8291 13.8821L14.8265 13.886L14.82 13.8951L14.8019 13.9197C14.7291 14.0173 14.6493 14.1094 14.5634 14.1957C14.3552 14.4114 14.125 14.6046 13.8765 14.7725C13.0604 15.3147 12.0998 15.5988 11.12 15.5876C9.89394 15.5876 8.97896 15.1885 8.36466 14.7712C8.03961 14.5512 7.74615 14.2879 7.49245 13.9884C7.47392 13.9658 7.45577 13.9429 7.43802 13.9197L7.41987 13.8938L7.41339 13.886L7.4108 13.8821V13.8795H7.40951L8.20395 13.3196L7.40821 13.8769C7.26041 13.6659 7.20238 13.4051 7.24684 13.1513C7.29132 12.8977 7.43465 12.672 7.64538 12.5239H7.64667Z"
                    fill="#2B50EC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_228_1170">
                    <rect
                      width="20.736"
                      height="20.736"
                      fill="white"
                      transform="translate(0.751953 0.0356445)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="frame-2897">
              <div className="start-typing">
                <input
                  className="start-typing"
                  type="text"
                  placeholder="begin met typen"
                />
              </div>
            </div>
            <div className="bericht-buttions">
              <svg
                className="foto-button"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_228_1175)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.39614 3.1075C5.43796 3.66064 4.5981 4.39708 3.92452 5.27478C3.25095 6.15248 2.75685 7.15426 2.47042 8.22293C1.89197 10.3812 2.19458 12.6808 3.31166 14.616C4.42875 16.5512 6.26882 17.9633 8.42709 18.5417C10.5853 19.1201 12.885 18.8176 14.8201 17.7005C15.0425 17.582 15.3023 17.5545 15.5445 17.6239C15.7867 17.6932 15.9925 17.8539 16.1186 18.0722C16.2447 18.2903 16.2811 18.5488 16.2202 18.7934C16.1593 19.0378 16.0059 19.2492 15.7921 19.3827C13.8319 20.5138 11.5555 20.9726 9.31013 20.6889C7.0648 20.4051 4.97399 19.3945 3.3568 17.8113C1.73963 16.2281 0.684902 14.1591 0.353629 11.9203C0.0223562 9.68149 0.432728 7.39579 1.52211 5.41204C2.61149 3.4283 4.32004 1.85549 6.38698 0.933681C8.45392 0.0118672 10.7657 -0.208317 12.9695 0.306736C15.1733 0.821788 17.148 2.04379 18.5923 3.78621C20.0365 5.52864 20.871 7.69578 20.9684 9.95686C20.9736 9.9977 20.9761 10.0388 20.9761 10.08V10.2148C20.9771 10.2968 20.9771 10.3789 20.9761 10.461V12.024C20.9767 12.796 20.7264 13.5472 20.2631 14.1647C19.7999 14.7823 19.1487 15.2328 18.4073 15.4483C17.666 15.6639 16.8748 15.633 16.1527 15.3601C15.4306 15.0873 14.8164 14.5875 14.4028 13.9356C13.5803 14.8193 12.475 15.3883 11.2778 15.5443C10.0806 15.7002 8.86648 15.4334 7.84494 14.7899C6.82342 14.1463 6.05855 13.1664 5.68229 12.0192C5.30605 10.872 5.34203 9.62944 5.78402 8.50591C6.226 7.38238 7.04628 6.44837 8.10333 5.865C9.16038 5.28165 10.3879 5.08552 11.5741 5.3105C12.7603 5.53546 13.8308 6.1674 14.6009 7.09727C15.3708 8.02715 15.7923 9.19664 15.7921 10.404V12.024C15.7921 12.4536 15.9628 12.8657 16.2666 13.1695C16.5704 13.4733 16.9825 13.644 17.4121 13.644C17.8418 13.644 18.2539 13.4733 18.5577 13.1695C18.8615 12.8657 19.0321 12.4536 19.0321 12.024V10.2316C19.0023 8.76758 18.5914 7.33658 17.8398 6.0798C17.0883 4.82302 16.0222 3.78385 14.7465 3.06477C13.4709 2.34571 12.0298 1.97158 10.5655 1.97931C9.10116 1.98702 7.66414 2.37633 6.39614 3.1088V3.1075ZM13.8481 10.404C13.8481 9.54468 13.5068 8.72058 12.8992 8.11295C12.2916 7.50534 11.4674 7.16398 10.6081 7.16398C9.74884 7.16398 8.92473 7.50534 8.31711 8.11295C7.7095 8.72058 7.36814 9.54468 7.36814 10.404C7.36814 11.2633 7.7095 12.0874 8.31711 12.695C8.92473 13.3026 9.74884 13.644 10.6081 13.644C11.4674 13.644 12.2916 13.3026 12.8992 12.695C13.5068 12.0874 13.8481 11.2633 13.8481 10.404Z"
                    fill="#2B50EC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_228_1175">
                    <rect
                      width="20.736"
                      height="20.736"
                      fill="white"
                      transform="translate(0.23999 0.0356445)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                className="verzenden-button"
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_228_1177)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.77507 3.55108L3.7978 9.43179H10.1083C10.6451 9.43179 11.0803 9.86696 11.0803 10.4038C11.0803 10.9406 10.6451 11.3758 10.1083 11.3758H3.7978L2.77507 17.2565L18.7648 10.4038L2.77507 3.55108ZM1.99366 10.4038L0.794771 3.51015C0.69785 2.95286 0.878178 2.38325 1.27816 1.98327C1.78073 1.4807 2.53865 1.33473 3.19192 1.61471L20.5614 9.05875C21.0994 9.28935 21.4482 9.8184 21.4482 10.4038C21.4482 10.9892 21.0994 11.5182 20.5614 11.7488L3.19192 19.1928C2.53865 19.4729 1.78073 19.3268 1.27816 18.8244C0.878178 18.4243 0.697849 17.8547 0.794771 17.2974L1.99366 10.4038Z"
                    fill="#2B50EC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_228_1177">
                    <rect
                      width="20.736"
                      height="20.736"
                      fill="white"
                      transform="translate(0.711914 0.0356445)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};