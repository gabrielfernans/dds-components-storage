export type SidenavItemType = 'page' | 'group';

export interface ISidenavItem {
  type: SidenavItemType;
  title: string;
  expanded: boolean;
  icon?: string;
  route?: string;
  active?: boolean;
  disabled?: boolean;
  children?: ISidenavItem[] | [];
}
