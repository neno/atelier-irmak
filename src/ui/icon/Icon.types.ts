export enum IconType {
  Phone = "Phone",
  Email = "Email",
  At = "At",
  Telephone = "Telephone",
}

export interface IIconSvg {
  width?: number;
  height?: number;
  className?: string;
}

export interface IIconProps extends IIconSvg {
  iconName: IconType;
  className?: string;
}
