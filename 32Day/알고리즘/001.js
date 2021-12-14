// 플랫폼에 익숙해져야 합니다. 프로그래머스, 구름EDU 
// - 사용 가능 라이브러리는 미리 확인!
// 언어 선택(속도 : c++, 풀이 : python)
// 코드 스네펫(트리, 검색, 순열, 조합, 최단경로(예를 들어 다익스트라)), Cheat sheet와 A4용지는 미리 준비
// 유용한 라이브러리는 미리 정리
// 예외처리 기억해두세요!

// 5 ~ 6시간
// 6 ~ 7문제

// 2시간씩 2문제
// 30분씩 4문제


// (문제1)★★
// https://codingdojang.com/scode/393?answer_mode=hide
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?
// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// ** 빈 배열을 만드는 방법
Array(10);
let x = Array(10);
x[2] = undefined;
x[3] = null;
x
// [비어있음 x 2, undefined, null, 비어 있음 x 6]
x.length = 20;
x
// [비어있음 x 2, undefined, null, 비어 있음 x 16]

// ** 배열 fill(값) 으로 채우기
Array(10).fill(0); 
//(10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
Array(10).fill(10); 
//(10) [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
Array(100).fill(1).map((value, index)=>value+index);
// (100) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

// ** 참고 : 아래 2개는 다른 풀이법
// 1.  Array(100).fill().map((_, i) => i + 1)
// 2.  [...Array(100)].map((_, i) => i + 1)

// ** 배열 **
'.'.repeat(10);
// '..........'
'.'.repeat(10).split('.');
// ** 점(.)을 기준으로 덩어리가 나눠짐
// (11) ['', '', '', '', '', '', '', '', '', '', '']
'.'.repeat(9).split('.');
// (10) ['', '', '', '', '', '', '', '', '', '']
Array.from('abc');
// (3) ['a', 'b', 'c']
Array.from('ab'.repeat(10));
// (20) ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a', 'b']
Array.from('a'.repeat(10));
// (10) ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']


// ** (문제1 - 풀이) **
// 1. 1부터 100까지 배열을 만듬.
Array(100).fill(1).map((value, index)=>value+index);
// 2. 1부터 100까지 만든 배열을 문자열로 변환
Array(100).fill(1).map((value, index)=>value+index) + ''
// 3. 문자열 배열에서 '8' 이라는 배열을 잘라냄으로써 몇 덩어리가 나왔는지 확인
(Array(100).fill(1).map((value, index)=>value+index) + '').split('8');
// 4. 8을 기준으로 나눠진 덩어리에서 1을 빼야 '8'이 나온 갯수를 확인할 수 있음(ex.'8'이 2번 있을 경우 3덩어리로 나눠지기 때문에 - '1','8','2','8','3' => '1', /' '/,'2',/' '/,'3') 
(Array(100).fill(1).map((value, index)=>value+index) + '').split('8').length - 1;


// ----------------------------------------------------------

// (몸풀기 문제2)
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)
// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// (몸풀기 문제2 - 풀이_1) 
let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();
// for (let i = 0; i < s.length-1; i++) {
//     console.log(s[i+1], s[i])
//     console.log(s[i+1] - s[i])
// } ★ length에 -1 을 해줘야 함!!! 안해줄 경우, 마지막 값'20'은 undefind에서 빼줘서 결과가 NaN으로 나옴.

for (let i = 1; i < s.length; i++) {
    // console.log(s[i], s[i-1])
    // console.log(s[i] - s[i-1])
    arr.push(s[i] - s[i-1])
}
// * arr 
// (6) [2, 1, 4, 5, 4, 3]
// * arr.indexOf(5)  
// indexOf(5) = 5라는 숫자가 있는 인덱스 값을 찾아라  =>  3
// * arr.indexOf(Math.min.apply(null, arr));
// Math.min.apply(null, arr) = 최솟값을 찾아라 

// Math.min(...arr)
let result = arr.indexOf(Math.min(...arr));
console.log(s[result], s[result+1]);
// 3  4

// (몸풀기 문제2 - 풀이_2)
let s = [1, 3, 4, 8, 13, 17, 20];
// let ss = [3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
// const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
// zip([1, 3, 4], [10, 20, 30]);
// zip(s.slice(0, s.length - 1), s.slice(1))

// 같은 풀이 = zip(s.slice(), s.slice(1)).slice(0, -1)
// ** slice(0, -1) => 맨 뒤에 undefined - 20 해서 나오는 값을 지우려고 넣은 것

let pairs = zip(s.slice(0, s.length-1), s.slice(1))

// -1 순서 유지
// 1 순서 바꿈
// 오름차순 정렬 : 
//     뒤의 값이 더 크면 순서 유지
//     뒤의 값이 작으면 순서 바꿈 

function compare(a, b) {
    if(a[1] - a[0] > b[1] - b[0]) {
        return -1;
    }
    if(a[1] - a[0] < b[1] - b[0]) {
        return 1;
    }
    return 0;
}   // => 두 수의 차(빼기)를 가지고 정렬을 함

pairs.sort(compare);
// (6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0: (2) [8, 13]
// 1: (2) [4, 8]
// 2: (2) [13, 17]
// 3: (2) [17, 20]
// 4: (2) [1, 3]
// 5: (2) [3, 4]
// length: 6
pairs.sort(compare)[0]
// (2) [8, 13]


// (몸풀기 문제2 - 풀이_3)
let s = [1,3,4,8,13,17,20];

const zip = (a,b)=>a.map((value,index)=>[value,b[index]]);
let pairs = zip(s.slice(0, s.length-1), s.slice(1))

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// MAX_SAFE_INTEGER 을 주로 사용함
// let init = Number.MAX_SAFE_INTEGER;
let init = pairs[0][1] - pairs[0][0]
// result는 최종 결과값
let result = [];

for (let i of pairs) {
    // console.log(i);
    if (init > i[1] - i[0]) {
        init = i[1] - i[0]
        result = i;
    }
}

console.log(result)


// 몸풀기 끝 //

// ------------------------------------------------------------------

// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

// ------------------------------------------------------------------
// 1. 스택과 큐
class Stack {
    constructor() {
        // constructor : 데이터 세팅 / 자료를 넣는 곳
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
        // this는 let s 에서 s를 향하게 함
    }

    pop(index=this.arr.length-1) {
        // index가 입력이 안 되었을 때
        // index가 입력이 되었을 때
        if (index === this.arr.length-1) {
            return this.arr.pop();
        }  

        let result = this.arr.splice(index, 1);
        // => 마지막값이 index와 같을 때 마지막 값을 pop 해준다는 뜻이고 마지막 값이 index와 같지 않을 경우 index에서 1개의 값을 splice 해준다

        // let result = this.arr[index]
        // this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index + 1)]
        return result
    }

    empty() {
        if(arr.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    top(){
        return this.arr[this.arr.length-1]
    }

    bottom(){
        return this.arr[0]
    }
}

let s = new Stack()
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

s.pop();
console.log(s);

s.pop(2);
console.log(s);


// 2. 연결리스트(linked list)   =>  암기하면 좋음!!!
// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

const list = {
    head: {
        value: 90,
        next: {
            value: 2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: null
                }
            }
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        this.tail = init;
        // => 처음 생성할 때 초기화해주는 코드

        this.현재노드 = undefined;
        this.데이터수 = 0;
    }

    length() {
        return this.데이터수;
    }

    append(data) {
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.데이터수 += 1;
    }

    toString() {
        // return 'hello world'
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = '';
        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data},`
            순회용현재노드 = 순회용현재노드.next;
        }
        return s.slice(0, -1);
    }

    get fullData(){
        // return 'hello world'
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = ''
        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data}, `;
            순회용현재노드 = 순회용현재노드.next;
        }
        return JSON.parse(`[${s.slice(0, -2)}]`)
    }
}

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length()

l.head.data  // 'init'
l.head.next.data   // 1
l.head.next.next.data   // 2
l.head.next.next.next.data   // 3
l.head.next.next.next.next.data   // 10


// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회



// ------------------------------------------------------------------


// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// 2. 19년도
// 3. 20년도
// 4. 21년도