const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ul = document.createElement('ul');

for (const ingredient of ingredients) {
  const item = document.createElement('li');

  item.append(ingredient);
  ul.append(item);
};
document.body.append(ul);




// ingredients.forEach(ingredient => {
//   const item = document.createElement('li');

//   item.append(ingredient);
//   ul.append(item);
// });
// document.body.append(ul);