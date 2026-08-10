import {
  Cog,
  Zap,
  SlidersHorizontal,
  Radio,
  CircuitBoard,
  Monitor,
  type LucideProps,
} from "lucide-react";

const icons = {
  Cog,
  Zap,
  SlidersHorizontal,
  Radio,
  CircuitBoard,
  Monitor,
};

export type ServiceIconName = keyof typeof icons;

export default function ServiceIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = icons[name as ServiceIconName] ?? Cog;
  return <Icon {...props} />;
}
