import React, { useEffect, useState } from "react";
import { useLocation } from "@docusaurus/router";

import { HOST } from "@site/config";

function PageViewCounter() {
  const [count, setCount] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // 增加页面浏览次数
    fetch(`${HOST}/incrementPageViews?path=${location.pathname}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => setCount(data.count))
      .catch((error) => console.error("更新页面浏览次数错误", error));
  }, [location.pathname]);

  if (count === null) {
    return null; // 或显示加载指示器
  }

  return <div className="pageViewCounter">页面浏览次数：{count}</div>;
}

export default PageViewCounter;
