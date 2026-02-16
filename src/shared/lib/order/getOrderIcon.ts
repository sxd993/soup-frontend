import { createElement, type ComponentType } from "react";
import { OrderLocationIcon } from "@/shared/ui";

export const getOrderIcon = (
  _category: string,
): ComponentType<{ isActive?: boolean }> => {
  const Icon = () => createElement(OrderLocationIcon);
  return Icon;
};
