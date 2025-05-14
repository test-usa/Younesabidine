import { ReactNode } from "react";

interface HomeHeader {
  children: ReactNode;
  className?: string;
}

const HomeHeader: React.FC<HomeHeader> = ({ children, className }) => {
  return (
    <h1
      className={`text-white  font-primary text-2xl md:text-[48px]  ${className}`}
    >
      {children}
    </h1>
  );
};

export default HomeHeader;
