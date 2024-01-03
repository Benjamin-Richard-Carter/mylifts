"use client";

type Props = {
  children?: React.ReactNode;
};

export const NavBar = ({ children }: Props) => {
  return (
    <div className="sticky top-0 w-full">
      <div className="flex max-w-full bg-surface-1 pt-safe">{children}</div>
    </div>
  );
};
