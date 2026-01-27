export interface HelpPanelProps {
  open: boolean;
  image: string;
  title?: string;
  onClose: () => void;
}