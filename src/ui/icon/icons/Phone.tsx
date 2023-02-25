import { FC } from "react";
import { IIconSvg } from "../Icon.types";

export const Phone: FC<IIconSvg> = ({ width = 24, height = 24, className }) => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12.06 8.98c.02-.09.11-.14.2-.11h0c1.16.31 2.06 1.22 2.38 2.38.02.09-.03.17-.11.2-.09.02-.17-.03-.2-.11h0c-.28-1.05-1.1-1.87-2.15-2.15-.09-.02-.14-.11-.11-.2zm-.22 1.43c.61.16 1.08.64 1.24 1.24.02.09.11.14.2.11.09-.02.14-.11.11-.2h0c-.19-.72-.75-1.28-1.47-1.47-.09-.02-.17.03-.2.11-.02.09.03.17.11.2h0zm3.1 3.99c-.13 1.04-1.02 1.82-2.06 1.82-3.09 0-5.6-2.51-5.6-5.6 0-1.05.78-1.93 1.82-2.06.21-.03.41.09.5.29l.8 1.88c.06.15.05.32-.04.45l-.67 1.02s-.04.1-.01.15h0c.32.65.84 1.17 1.49 1.48.05.02.11.02.15-.01l1-.67c.13-.09.31-.11.46-.04l1.87.8c.2.08.31.29.29.5zm-.41-.2l-1.87-.8s-.11-.02-.15.01l-1 .67c-.14.09-.32.11-.47.03-.71-.35-1.29-.92-1.64-1.63h0c-.07-.15-.06-.33.03-.47l.67-1.02s.03-.1.01-.15l-.8-1.87c-.02-.06-.08-.1-.15-.1 0 0-.01 0-.02 0-.88.11-1.54.86-1.54 1.75 0 2.91 2.37 5.28 5.28 5.28.89 0 1.63-.66 1.75-1.54 0-.07-.03-.14-.1-.16z" stroke="currentColor" strokeWidth="0.25" fill="none"/>
    <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="0.5"/>
  </svg>
);