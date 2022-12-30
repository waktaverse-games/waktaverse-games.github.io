import { Global } from "@emotion/react";

export default function Fonts() {
  return (
    <Global
      styles={`@font-face {
    font-family: "NeoDunggeunmo";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  `}
    />
  );
}
