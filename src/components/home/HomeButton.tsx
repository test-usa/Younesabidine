import { ReactNode } from "react";

interface HomeButton {
  children: ReactNode;
  className?: string;
}

const HomeButton: React.FC<HomeButton> = ({ children, className }) => {
  return (
    <button
      className={`bg-home text-[#030303] text-sm px-3 py-2 w-fit   cursor-pointer rounded-md  hover:bg-[#fcb32b] transition-colors ${className}`}
    >
      {children}
    </button>
  );
};

export default HomeButton;
