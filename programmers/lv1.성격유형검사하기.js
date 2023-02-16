const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];

console.log(solution(survey, choices));

function solution(survey, choices) {
  const surveyOrder = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  const surveyScore = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  survey.forEach((v, idx) => {
    const 성격 = v.split("");

    // switch(true){
    //     case choices[idx] < 4:
    //     surveyScore[성격[0]] += (4 - choices[idx])

    //     case choices[idx] > 4:
    //     surveyScore[성격[1]] += (choices[idx] - 4)
    // }
    if (choices[idx] < 4) {
      surveyScore[성격[0]] += 4 - choices[idx];
    }
    if (choices[idx] > 4) {
      surveyScore[성격[1]] += choices[idx] - 4;
    }
  });

  console.log(surveyScore);

  const answer = surveyOrder
    .map((v) => {
      //key value값 넣기
      if (surveyScore[v[0]] < surveyScore[v[1]]) {
        return v[1];
      }
      return v[0];
    })
    .join("");

  return answer;
}
