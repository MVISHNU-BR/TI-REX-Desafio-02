import { Link } from "react-router";
import { LinkButtonControl } from "../types/LinkButtonControl";

export default function LinkButton({
  location,
  className,
  value = "",
}: LinkButtonControl) {
  return (
    <Link
      to={location}
      className={`
        w-[105px] h-[36px] rounded-[30px] border border-gray-300 
      flex items-center justify-center gap-[8px] text-branco 
      text-sm md:w-[162px] md:h-[48px] md:gap-[12px] md:text-base 
      hover:border-azul-hover transition duration-300  ${className}`}
    >
      {value}
    </Link>
  );
}
