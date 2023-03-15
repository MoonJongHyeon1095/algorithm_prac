const wallpaper = [
  "..........",
  ".....#....",
  "......##..",
  "...##.....",
  "....#.....",
];

function solution(wallpaper) {
  const arr1 = wallpaper
    .map((v) =>
      //최초 인덱스
      v.split("").indexOf("#")
    )
    .filter((el) => el !== -1);
  const arr2 = wallpaper
    .map((v) =>
      //최초 인덱스
      v.split("").lastIndexOf("#")
    )
  console.log(arr1);
  const luy = Math.min(...arr1);
  const rdy = Math.max(...arr2) + 1;

  const arr3 = wallpaper.map((v) => v.includes("#"));
  console.log(arr3);
  const lux = arr3.indexOf(true);
  const rdx = arr3.lastIndexOf(true) + 1;
  //    const xLength = lux - rdx
  //    const yLength = wallpaper.length - arr.length

  return [lux, luy, rdx, rdy];
}
console.log(solution(wallpaper));

/**
 * good example
 */
function solution(wallpaper) {
  let left = [];
  let top = [];
  let right = [];
  let bottom = [];
  wallpaper.forEach((v, i) => {
    [...v].forEach((val, ind) => {
      if (val === "#") {
        left.push(i);
        top.push(ind);
        right.push(i + 1);
        bottom.push(ind + 1);
      }
    });
  });
  return [
    Math.min(...left),
    Math.min(...top),
    Math.max(...right),
    Math.max(...bottom),
  ];
}
