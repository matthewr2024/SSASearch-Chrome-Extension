chrome.storage.sync.get(
  {
    newtab: "search",
  },
  function (items) {
    document.querySelector("iframe").src = `https://matthewr2024.github.io/SSASearch/${items.newtab}.html`;
  }
);
