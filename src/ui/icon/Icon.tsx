import { FC } from "react";
import { IIconProps, IconType } from "@/ui/icon/Icon.types";
import {Phone, Email} from "@/ui/icon/icons";

const icons = {
  [IconType.Phone]: Phone,
  [IconType.Email]: Email,
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
