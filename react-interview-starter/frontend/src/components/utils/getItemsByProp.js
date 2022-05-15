export const getItemsByProp = (arr, id, prop) => {
  if (id === undefined || prop === undefined || arr === undefined) return null;

  return arr.filter(item => item[prop] === id);
};

// function to lower the loading of the app
