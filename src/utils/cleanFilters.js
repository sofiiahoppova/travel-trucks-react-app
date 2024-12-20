export const cleanFilters = (filters) => {
  const cleanedFilters = {};

  Object.keys(filters).forEach((key) => {
    const value = filters[key];
    // Додаємо тільки значущі значення
    if (
      value !== false &&
      value !== null &&
      value !== undefined &&
      value !== ""
    ) {
      cleanedFilters[key] = value;
    }
  });

  return cleanedFilters;
};
