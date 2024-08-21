const getById = (id) => {
  const sectionId = document.getElementById(id);

  sectionId && sectionId.scrollIntoView({ behavior: "smooth", block: "start" });
};

export { getById };
