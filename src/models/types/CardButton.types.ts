import { ReactNode } from "react";

export type CardButtonProps = {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  href: string;
};