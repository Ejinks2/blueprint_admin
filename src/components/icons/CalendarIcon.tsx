import * as React from "react";

// By: ion
// See: https://v0.app/icon/ion/calendar-outline
// Example: <IconIonCalendarOutline width="24px" height="24px" style={{color: "#000000"}} />

export const CalendarIcon = ({
  height = "1em",
  strokeWidth = "32",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    height={height}
    focusable={focusable}
    {...props}
  >
    <rect
      width="416"
      height="384"
      x="48"
      y="80"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      rx="48"
    />
    <circle cx="296" cy="232" r="24" fill="currentColor" />
    <circle cx="376" cy="232" r="24" fill="currentColor" />
    <circle cx="296" cy="312" r="24" fill="currentColor" />
    <circle cx="376" cy="312" r="24" fill="currentColor" />
    <circle cx="136" cy="312" r="24" fill="currentColor" />
    <circle cx="216" cy="312" r="24" fill="currentColor" />
    <circle cx="136" cy="392" r="24" fill="currentColor" />
    <circle cx="216" cy="392" r="24" fill="currentColor" />
    <circle cx="296" cy="392" r="24" fill="currentColor" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M128 48v32m256-32v32"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M464 160H48"
    />
  </svg>
);
