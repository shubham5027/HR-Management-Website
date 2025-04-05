
import React from "react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface GradientButtonProps extends ButtonProps {
  gradientDirection?: "tl" | "tr" | "bl" | "br";
  classNames?: {
    button?: string;
    hover?: string;
  };
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ gradientDirection = "tr", classNames, children, className, ...props }, ref) => {
    const gradientMap = {
      tl: "bg-gradient-to-tl",
      tr: "bg-gradient-to-tr",
      bl: "bg-gradient-to-bl",
      br: "bg-gradient-to-br",
    };

    const gradientClass = gradientMap[gradientDirection];

    return (
      <Button
        ref={ref}
        className={cn(
          `relative z-0 overflow-hidden ${gradientClass} from-hireos-purple to-hireos-teal text-white border-0`,
          "transition-all duration-300 ease-out hover:shadow-lg hover:shadow-hireos-purple/20",
          classNames?.button,
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export { GradientButton };
