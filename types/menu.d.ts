/**
 * Type definitions for menu.json structure
 */

export interface MenuItem {
  title: string;
  path: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export type Menu = MenuSection[];
