import { Switch as AntSwitch } from "antd";
import type { SwitchProps } from "antd";

export const Switch = (props: SwitchProps) => (
  <span className="[&_.ant-switch.ant-switch-checked]:bg-primary!">
    <AntSwitch {...props} />
  </span>
);
