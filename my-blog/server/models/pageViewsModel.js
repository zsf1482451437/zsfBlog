const fs = require("fs").promises;
const path = require("path");

const DATA_FILE = path.join(__dirname, "../pageviews.json");

const readPageViews = async () => {
  try {
    const data = await fs.readFile(DATA_FILE, "utf8");
    const pageViews = JSON.parse(data);
    return pageViews;
  } catch (error) {
    console.error("读取页面浏览数据时出错:", error);
    throw new Error("读取页面浏览数据时出错");
  }
};

const writePageViews = async (key, value) => {
  try {
    const pageViews = await readPageViews();
    pageViews[key] = value; // 修改特定键的值
    await fs.writeFile(DATA_FILE, JSON.stringify(pageViews, null, 2));
  } catch (error) {
    console.error("写入页面浏览数据时出错:", error);
    throw new Error("写入页面浏览数据时出错");
  }
};

module.exports = {
  readPageViews,
  writePageViews,
};
