import { ReactNode } from "react";

interface HomeSectionHeader {
  children: ReactNode;
  className?: string;
}

const CommonHeader: React.FC<HomeSectionHeader> = ({ children, className }) => {
  return (
    <h2
      className={`text-black font-semibold font-primary text-lg md:text-2xl leading-6 ${className}`}
    >
      {children}
    </h2>
  );
};

export default CommonHeader;
