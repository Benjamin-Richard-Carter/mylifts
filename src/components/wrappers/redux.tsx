"use client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "~/redux/store";

export const ReduxWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};
