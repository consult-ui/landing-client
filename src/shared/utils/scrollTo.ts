export const scrollTo = (id: 'user-form' | 'questions') => {
  const elem = document.getElementById(id);
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
