import React from "react";
import DocItem from "@theme-original/DocItem";
import PageViewCounter from "@site/src/components/PageViewCounter";

export default function DocItemWrapper(props) {
  return (
    <>
      <PageViewCounter />
      <DocItem {...props} />
    </>
  );
}
