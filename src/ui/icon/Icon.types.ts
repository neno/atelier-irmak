export enum IconType {
  Phone = "Phone",
  Email = "Email"
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
