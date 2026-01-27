import { ReactNode } from "react";

export type CardButtonProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  onClick?: () => void;
};