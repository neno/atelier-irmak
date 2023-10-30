import { FC } from "react";
import { IIconProps, IconType } from "@/ui/icon/Icon.types";
import {Phone, Email, At, Telephone} from "@/ui/icon/icons";

const icons = {
  [IconType.Phone]: Phone,
  [IconType.Email]: Email,
  [IconType.At]: At,
  [IconType.Telephone]: Telephone,
};

export const Icon: FC<IIconProps> = ({
  iconName,
  width,
  height,
  className,
}) => {
  const Ico = icons[iconName];
  return <Ico className={className} width={width} height={height} />;
};

export type { IIconProps };
