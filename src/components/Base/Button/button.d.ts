interface ButtonProps {
  variant?: "secondary" | "default" | "primary" | "plain";
  size?: "default" | "large" | "small" | "none";
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}
