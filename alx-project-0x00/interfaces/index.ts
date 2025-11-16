export interface PillProps {
  title: string
}

export interface ButtonProps {
  title: string;       // Button text
  size?: "small" | "medium" | "large"; // Optional size
  shape?: "rounded-sm" | "rounded-md" | "rounded-full"; // Optional shape
  className?: string;  // Optional additional Tailwind styles
}
