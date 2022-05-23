export const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(alltabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentTab: allTabs[currentIndex],
    changeTab: setCurrentIndex,
  };
};
