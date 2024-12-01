"use client";

import { Provider } from "react-redux";
import store from "@/redux/features/store";

export default function ClientProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Provider store={store}>{children}</Provider>;
}
