export interface QuickSearchProps {
  title: string;
  placeholder: string;
  buildUrl: (value: string) => string;
}
