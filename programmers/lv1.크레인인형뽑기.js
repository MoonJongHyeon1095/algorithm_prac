let board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
let moves = [1, 5, 3, 5, 1, 2, 1, 4];

const transform = (행렬) =>
  행렬.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

function solution(board, moves) {
  const arr = transform(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  let count = 0;
  const result = [];
  for (const move of moves) {
    const popped = arr[move - 1].pop();
    console.log(popped);
    if (!popped) continue;
    if (popped === result[result.length - 1]) {
      result.pop();
      count += 2;
      continue;
    }
    result.push(popped);
  }

  console.log(result);
  console.log(Array.isArray(result));
  return count;
}

console.log(solution(board, moves));
