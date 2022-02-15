// 체육복

// https://programmers.co.kr/learn/courses/30/lessons/42862

// 도난당한 학생에게 여분의 체육복을 가지고 있는 학생이 빌려준다고 판단
// -> 여분의 체육복을 가지고 있는 학생도 도난당할수 있음
// -> lost와 reserve에 같은 번호가 있는 학생은 제외
// -> lost와 reserve가 순서대로 주어지지 않음
// -> lost와 reserve를 오름차순으로 정렬하여 실행

function solution(n, lost, reserve) {

    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            if (lost[i] === reserve[j]) {
                reserve.splice(j, 1);
                lost[i] = 'x';
                continue;
            }
        }
    }

    lost = lost.filter((lostone) => {
        return lostone !== 'x'
    })
    
    let answer = n - lost.length;

    for (let i = 0; i < lost.length; i++) {
        for (let j = 0; j < reserve.length; j++) {
            let pre = lost[i] - 1;
            let next = lost[i] + 1;
            let cur = lost[i];
            if (pre === reserve[j] | next === reserve[j] | cur === reserve[j]) {
                reserve.splice(j, 1);
                answer += 1;
                continue;
            }
        }
    }
    
    return answer;
}