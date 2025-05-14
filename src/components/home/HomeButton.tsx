import { ReactNode } from "react";

interface HomeButton {
  children: ReactNode;
  className?: string;
}

const HomeButton: React.FC<HomeButton> = ({ children, className }) => {
  return (
    <button
      className={`bg-home text-[#030303] text-sm px-6 py-4 w-fit   cursor-pointer rounded-md  ${className}`}
    >
      {children}
    </button>
  );
};

export default HomeButton;
