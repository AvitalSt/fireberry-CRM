import { ReactNode } from "react";

export type CardButtonProps = {
  title: string;
  subtitle?: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
};
