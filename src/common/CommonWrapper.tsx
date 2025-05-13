import React, { ReactNode } from "react";
interface CommonWrapperProps {
  children: ReactNode;
  className?: string;
}
const CommonWrapper: React.FC<CommonWrapperProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`max-w-[1440px] mx-auto my-auto w-full ${className}`}>
      {children}
    </div>
  );
};

export default CommonWrapper;
