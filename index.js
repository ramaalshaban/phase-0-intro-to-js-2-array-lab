// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat() {
    return cats.push("Ralph");
}
function destructivelyPrependCat() {
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    return cats.pop("Garfield");
}
function destructivelyRemoveFirstCat() {
    return cats.shift("Milo");
}
function appendCat() {
  let copyCats = [...cats];
  copyCats.push("Broom");
  return copyCats;
}
function prependCat() {
    let copyCats = [...cats];
    copyCats.unshift("Arnold");
    return copyCats;
}
 function removeLastCat() {
        let copyCats = [...cats];
        copyCats.pop();
        return copyCats;
      }
function removeFirstCat() {
          let copyCats = [...cats];
          copyCats.shift();
          return copyCats;
      }