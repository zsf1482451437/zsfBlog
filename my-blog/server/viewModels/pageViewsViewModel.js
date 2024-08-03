const { readPageViews, writePageViews } = require("../models/pageViewsModel");

const incrementPageViews = async (path) => {
  const pageViews = await readPageViews();
  pageViews[path] = (pageViews[path] || 0) + 1;
  await writePageViews(path, pageViews[path]);
  return pageViews[path];
};

module.exports = {
  incrementPageViews,
};
