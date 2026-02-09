import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type Variant = "blue" | "red" | "gray";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: Variant;
}

export default function IconButton({
  icon,
  variant = "gray",
  className,
  ...props
}: IconButtonProps) {
  const variants = {
    blue: "text-blue-600 hover:bg-blue-50",
    red: "text-red-600 hover:bg-red-50",
    gray: "text-gray-600 hover:bg-gray-100",
  };

  return (
    <button
      {...props}
      className={clsx(
        "p-2 rounded-md transition-colors",
        variants[variant],
        className
      )}
    >
      {icon}
    </button>
  );
}
