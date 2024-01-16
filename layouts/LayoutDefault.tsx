import "./style.css";

import React, { useMemo } from "react";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link";
import { getDeploymentConfig } from "../util/deploymentConfigStore";

interface LayoutProperties {
  children: React.ReactNode;
}

export default function LayoutDefault(props: LayoutProperties) {
  return (
      <div
        style={{
          display: "flex",
          maxWidth: 900,
          margin: "auto",
        }}
      >
        <Sidebar/>
        <Content>{props.children}</Content>
      </div>
  );
}

function Sidebar() {
  return (
    <div
      id="sidebar"
      style={{
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        lineHeight: "1.8em",
        borderRight: "2px solid #eee",
      }}
    >
      <Logo /> 
      {
        getDeploymentConfig().pages.map(page => <Link href={`/${page.id}`} >{page.id}</Link>)
      }
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-container">
      <div
        id="page-content"
        style={{
          padding: 20,
          paddingBottom: 50,
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10,
      }}
    >
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
