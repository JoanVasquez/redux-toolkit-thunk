import className from "classnames";
import { GoSync } from "react-icons/go";

interface ButtonProps {
  children: React.ReactNode;
  variant: string;
  outline?: boolean;
  rounded?: boolean;
  loading?: boolean;
}

function Button({
  children,
  variant,
  outline,
  rounded,
  loading,
  ...rest
}: ButtonProps & React.HTMLAttributes<HTMLButtonElement>) {
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border h-8",
    {
      "opacity-80": loading,
      "border-blue-500 bg-blue-500 text-white":
        variant === "primary" && "primary",
      "border-gray-900 bg-gray-900 text-white":
        variant === "secondary" && "secondary",
      "border-green-500 bg-green-500 text-white":
        variant === "success" && "success",
      "border-yellow-400 bg-yellow-400 text-white":
        variant === "warning" && "warning",
      "border-red-500 bg-red-500 text-white": variant === "danger" && "danger",
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && variant === "primary" && "primary",
      "text-gray-900": outline && variant === "secondary" && "secondary",
      "text-green-500": outline && variant === "success" && "success",
      "text-yellow-400": outline && variant === "warning" && "warning",
      "text-red-500": outline && variant === "danger" && "danger",
    }
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}

export default Button;
