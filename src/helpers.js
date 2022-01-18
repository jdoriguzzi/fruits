/* return a random item from an array of items */

function choice(items) {
  let i = Math.floor(Math.random() * items.length);
  return items[i];
}


/* return copy of array with given item removed */

function remove(items, item) {
    let filtered = items.filter(function(value, index, arr){ return value !== item });
    return filtered;
}

export {choice, remove}

