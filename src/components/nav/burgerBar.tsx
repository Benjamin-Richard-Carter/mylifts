import { useState } from "react";
import { Pill } from "../ui/Pill";

type Props = {
  placeholder: JSX.Element;
  items: {
    icon: JSX.Element;
    label: string;
    onClick: React.MouseEventHandler;
  }[];
};

export const BurgerBar = ({ items, placeholder }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <div className="flex flex-row gap-2">
        {items.map((item) => (
          <Pill
            key={item.label}
            layoutMode="square"
            background="secondary"
            text="primary"
            onClick={item.onClick}
          >
            {item.icon}
          </Pill>
        ))}
      </div>
    );
  }

  return (
    <Pill
      layoutMode="shrink"
      background="secondary"
      text="primary"
      onClick={() => setIsOpen(true)}
    >
      {placeholder}
    </Pill>
  );
};
