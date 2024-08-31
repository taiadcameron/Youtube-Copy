import { cva } from "cva";
import { icons } from "lucide-react";

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["hover:bg-secondary-hover", "bg-secondary"],
      ghost: ["hover:bg-grey-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
});

export function Button() {
  return <button />;
}
