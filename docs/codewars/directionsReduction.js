function dirReduc(plan) {
  var opposite = {
    NORTH: "SOUTH",
    EAST: "WEST",
    SOUTH: "NORTH",
    WEST: "EAST",
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

/*
dirs = [North]
dirs = []
dirs = [South]
dirs = [South, East]
dirs = [South]
dirs = []
dirs = [West]
*/

Test.assertSimilar(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),
  ["WEST"]
);
Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), [
  "NORTH",
  "WEST",
  "SOUTH",
  "EAST",
]);
Test.assertSimilar(
  dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),
  []
);

// my solution

function dirReduc(arr) {
  // for each element, call isNeedlessDirection passing the previous and current element
  // if true, remove both from array and repeat
  //  otherwise, continue
  const directions = arr;
  for (let i = 0; i < directions.length; i++) {
    if (
      i + 1 < directions.length &&
      isNeedlessDirection(directions[i], directions[i + 1])
    ) {
      directions.splice(i, 2);
      return dirReduc(directions);
    }
  }
  return arr;
}

function isNeedlessDirection(current, next) {
  if (
    (current === "NORTH" && next === "SOUTH") ||
    (current === "SOUTH" && next === "NORTH") ||
    (current === "EAST" && next === "WEST") ||
    (current === "WEST" && next === "EAST")
  ) {
    return true;
  } else {
    return false;
  }
}
