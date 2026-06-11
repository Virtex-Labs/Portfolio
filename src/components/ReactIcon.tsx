import React from "react";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  size?: number | string;
  color?: string;
}

export default function ReactIcon({ icon: Icon, size, color }: Props) {
  return <Icon size={size} color={color} />;
}
