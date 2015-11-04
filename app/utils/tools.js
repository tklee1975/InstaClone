

/**
 * Deep merge objects
 * @param {...Object} objects Any listed object
 */
export function MergeObjects(...objects) {
  let result = {};
  for (const current of objects) {
    for (const key in current) {
      if (current.hasOwnProperty(key)) {
        if (typeof current[key] === "object" && typeof result[key] === "object") {
          result[key] = MergeObjects(result[key], current[key]);
        }
        else {
          result[key] = current[key];
        }
      }
    }
  }
  return result;
};