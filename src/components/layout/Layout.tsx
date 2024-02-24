import React from "react";
import Dashboard from "../dashboard/Dashboard";

interface LayoutProps {
    children : React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
        <Dashboard/>
        <div className="children">{props.children}</div>
    </React.Fragment>
  );
};

export default Layout