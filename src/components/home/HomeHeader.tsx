import { ReactNode } from "react";

interface HomeHeader {
  children: ReactNode;
  className?: string;
}

const CommonHeader: React.FC<HomeHeader> = ({ children, className }) => {
  return (
    <h2
      className={`text-white  font-primary text-2xl md:text-[48px] leading-6 ${className}`}
    >
      {children}
    </h2>
  );
};

export default CommonHeader;
