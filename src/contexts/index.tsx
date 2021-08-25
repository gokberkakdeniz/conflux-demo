import React, { PropsWithChildren } from "react";
import AuthContextProvider from "./auth/auth.provider";
import CounterContextProvider from "./counter/counter.provider";

const ContextProvider = ({
  children,
}: PropsWithChildren<Record<never, never>>): JSX.Element => (
  <CounterContextProvider>
    <AuthContextProvider>{children}</AuthContextProvider>
  </CounterContextProvider>
);

export default ContextProvider;
