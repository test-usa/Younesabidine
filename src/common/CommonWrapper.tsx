import React, { ReactNode } from "react";
import clsx from "clsx";
interface CommonWrapperProps {
  children: ReactNode;
  className?: string;
}

const CommonWrapper: React.FC<CommonWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "max-w-[1440px] w-full mx-auto px-4 md:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CommonWrapper;
