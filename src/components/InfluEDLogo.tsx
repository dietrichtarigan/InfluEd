import React from "react";

const InfluEDLogo = ({ size = 48, className = "" }: { size?: number; className?: string }) => (
  <img
    src="/logo-influed.svg"
    alt="InfluED Logo"
    width={size}
    height={size * 1.3}
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  />
);

export default InfluEDLogo; 