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

    // console
    l = new LinkedList();
    l.append(1);
    l.append(2);
    l.append(3);
    l.append(10);
    l.append(20);
    l.append(30);
    l.length()

/////////

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        this.tail = init;

        this.현재노드 = undefined;
        this.데이터수 = 0;
    }

    length(){
        return this.데이터수;
    }

    append(data){
        let 새로운노드 = new Node(data);
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드;
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드;
        this.데이터수 += 1;
    }

    toString(){
        // return 'hello world';
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

/////////

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        let init = new Node('init');
        this.head = init;
        this.tail = init;

        this.데이터수 = 0;
    }

    get fullData() {
        // return 'hello world'
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        let s = ''
        for (let i = 0; i < this.데이터수; i++) {
            s += `${순회용현재노드.data}, `;   
            // .data} 뒤에 콤마랑 스페이스 있음
            순회용현재노드 = 순회용현재노드.next;
        }
        return JSON.parse(`[${s.slice(0, -2)}]`)
        // , ' ' 콤마랑 스페이스가 있기 때문에 -2를 slice 의 두번째값으로 넣어준다. 
    }
    
    length(){
        return this.데이터수;
    }
    
    append(data){
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
            // .data} 뒤에 콤마만 있고 스페이스 없음
            순회용현재노드 = 순회용현재노드.next;
        }
        return s.slice(0, -1);
    }

    insert(index, data){
        let 순회용현재노드 = this.head;
        순회용현재노드 = 순회용현재노드.next;

        for (let i = 0; i < index - 1; i++) {
            순회용현재노드 = 순회용현재노드.next;
        }

        let 새로운노드 = new Node(data);
        
        새로운노드.next = 순회용현재노드.next;
        순회용현재노드.next = 새로운노드;

        this.데이터수 += 1;
    }
}
        // ** 참고 !!! ** 
        // Vertex pre = head
        // for (k = 0; k < i-1; k++)
        // pre = pre.next
        // Vertex aft = pre.next
        // Vertex vtx = new Vertex(v)
        // vtx.next = aft
        // pre.next = vtx


// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length();
console.log(l.fullData);

// ------------------------------------------------------------------

// 3. 정렬

// 3.1 선택정렬
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];

let 길이 = 입력값.length;

// 주의해야 할 사항 : pop을 하면 length가 줄어듭니다!!
// for (let i = 0; i < 입력값.length; i++) {
//     console.log(입력값.pop())
//     console.log(i)
// }

// 참고사항 
// const id = document.getElementById('hello'); 
// for문 안에 getElementById를 쓰면 안 됨. 계속해서 DOM 트리를 헤매기 때문에

for (let i = 0; i < 길이; i++) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값);
    입력값.splice(입력값.indexOf(최솟값), 1)
    // (...입력값) 안에 최솟값을 찾아 정렬된 배열 안에 찾은 최솟값을 넣어주고, 입력값에서 최솟값 인덱스(자리)를 찾아 그 index 한개의 값을 삭제한다.  <= 이게 for문 조건이 충족될 때까지 반복함 (= 입력값의 값이 없을 때까지)
}
console.log(정렬된배열);

// * [참고] for문 대신 while문 으로 표현할 경우 
// while(!!입력값.toString()) {
//     let 최솟값 = Math.min(...입력값);
//     정렬된배열.push(최솟값);
//     입력값.splice(입력값.indexOf(최솟값), 1)
// }
// console.log(정렬된배열);


// -------------------------

// 3.2 삽입정렬(자기가 들어갈 위치를 찾아감!, O(n**2))
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [];

let 전 = [22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [199];

let 전 = [33, 12, 32, 64, 72, 222, 233];
let 후 = [22, 199];

let 전 = [12, 32, 64, 72, 222, 233];
let 후 = [22, 33, 199];

let 전 = [32, 64, 72, 222, 233];
let 후 = [12, 22, 33, 199];
// => let 전은 순회하지 않지만, let 후는 순회함.

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이들어갈인덱스(정렬된배열, 삽입값){
    for (const i in 정렬된배열) {
        if (삽입값 < 정렬된배열[i]) {
            return i
        }
    }
    return 정렬된배열.length;
}

for (let i = 0; i < 배열의길이; i++) {
    let 삽입값 = 입력값.shift()
    let 인덱스 = 삽입값이들어갈인덱스(정렬된배열, 삽입값);
    정렬된배열.splice(인덱스, 0, 삽입값);
    console.log(`인덱스 : ${인덱스}\n삽입값 : ${삽입값}\n 정렬된배열 : ${정렬된배열}\n`)
}

// -------------------------

// 3.3 병합정렬
// (Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 동일 할 수 있음)

// let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
// let 정렬된배열 = [];

// 분할(이해를 돕기 위해 8개로 조정)
[5, 10, 66, 77], [54, 32, 11, 15]
[5, 10], [66, 77], [54, 32], [11, 15]
[5], [10], [66], [77], [54], [32], [11], [15]

//정복(0번째끼리 비교!)
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10, 66, 77], [11, 15, 32, 54]
[5, 10, 11, 15, 32, 54, 66, 77]

// step 1
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length;
    if (입력배열의길이 <= 1){
        // if문 (내용) : 입력배열의 길이가 1보다 작거나 같다는 것은 더이상 나눌 수 없을 때까지 나눴다는 뜻
        return 입력배열
    }
    let 중간값 = parseInt(입력배열의길이 / 2);
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
    // 중간값은 4
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))
    return `그룹하나 : ${그룹하나} \n 그룹둘 : ${그룹둘}\n\n`
}

console.log(병합정렬(입력값));

// step 2
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

    
function 병합정렬(입력배열) {
    // 분할 과정
    let 입력배열의길이 = 입력배열.length;
    let 결과값 = [];

    if (입력배열의길이 <= 1) {
        return 입력배열
        // if 조건 : 재귀를 정지시키려고 넣어줌
    }

    let 중간값 = parseInt(입력배열의길이 / 2);
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값));
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))


    // 정복 과정
    while (그룹하나.length != 0 && 그룹둘.length != 0) {
        if (그룹하나[0] < 그룹둘[0]) {
            결과값.push(그룹하나.shift());
        } else {
            결과값.push(그룹둘.shift());
        }
    }

    while(그룹하나.length != 0){
        결과값.push(그룹하나.shift());
    }

    while(그룹둘.length != 0){
        결과값.push(그룹둘.shift());
    }

    return 결과값
}

console.log(병합정렬(입력값));

// -------------------------

// 3.4 퀵정렬(best - O(nlog2n), worst - O(n**2))
// 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
// 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.
let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

//피봇값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

//피봇값 : 54
//(66과 77은 값이 한 개이기 때문에 더이상 재귀로 호출되지 않음.)
[32, 10, 5, 11, 15], [54] + [66] + [77]

//피봇값 : 32
[10, 5, 11, 15], [32] + [54] + [66] + [77]

//피봇값 : 10 
[5] + [10], [11, 15] + [32] + [54] + [66] + [77]

//피봇값 : 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]


let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];
function 퀵정렬(입력배열){
    let 입력배열의길이 = 입력배열.length;

    if (입력배열의길이 <= 1) {
        return 입력배열
    }

    const 피벗값 = [입력배열.shift()]; //기준점
    // shift : 입력배열에서 첫번째 값을 피벗값으로 빼준다는 뜻
    const 그룹하나 = [];
    const 그룹둘 = [];

    for (let i in 입력배열) {
        if (입력배열[i] < 피벗값) {
            그룹하나.push(입력배열[i]);
        } else {
            그룹둘.push(입력배열[i]);
        }
    }

    console.log(`그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n피벗값 : ${피벗값}\n`);

    return 퀵정렬(그룹하나).concat(피벗값, 퀵정렬(그룹둘));
    // concat : 그룹하나와 그룹둘을 연결해주는 메서드

    // ** 아래 코드 참고
    // x = [10, 20, 30]
    // y = [100, 200, 300]
    // x.concat(...y)
    // (6) [10, 20, 30, 100, 200, 300]

    // x = [10, 20, 30]
    // y = [100, 200, 300]
    // x.concat(1000, ...y)
    // (6) [10, 20, 30, 1000, 100, 200, 300]
}

console.log(퀵정렬(입력값));

// --------------------------------------------------------------

// 4. 페이지 교체 알고리즘
// 페이징 기법으로 메모리를 관리하는 운영체제에서, 페이지 부재가 발생 하여 새로운 페이지를 할당하기 위해 현재 할당된 페이지 중 어느 것과 교체할지를 결정하는 방법이다. 이 알고리즘이 사용되는 시기는 페이지 부재가 발생해 새로운 페이지를 적재 해야하나 페이지를 적재할 공간이 없어 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용
// 18년도 코테의 hit 문제 살펴보면서 다시 언급

// 자주 hit 되는 것은 DB가 아니라 메모리에 적재함으로써 성능개선을 함(ex. 즐겨찾기 개념 -> 효율적으로 메모리를 불러올 수 있음)
// 캐시가 다 차지된 경우, 오랫동안 캐시에 있었던 애들은 새로운 애들이 왔을 때 비켜주고, hit 된 적이 있는 애들은 맨 뒤로 보내준다. 여기서 맨 뒤로 보내주는 이유는? 금방 또 사용할 것이기 때문에
// hit는 이미 존재하는 경우, miss는 존재한 적이 없었던 경우

// ** LRU 알고리즘 **
// ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
// ["Jeju"] 1회차

// ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
// ["Jeju", "Pangyo"] 2회차

// ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
// ["Jeju", "Pangyo", "Seoul"] 3회차

// ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
// ["Pangyo", "Seoul", "NewYork"] 4회차

// ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
// ["Seoul", "NewYork", "LA"] 5회차

// ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
// ["NewYork", "LA", "Seoul"] 6회차

// ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]
// ["NewYork", "Seoul", "LA"] 7회차

// hit - 1
// miss - 5

//LRU
["바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리"]
[바나나] 5
[바나나, 체리] 5
[바나나, 체리, 한라봉] 5
[체리, 한라봉, 자몽] 5
[한라봉, 자몽, 수박] 5
[한라봉, 자몽, 수박] 1 - hit
[자몽, 수박, 체리] 5


// FIFO 알고리즘(캐시:3)
["바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리"]
[바나나] 5
[바나나, 체리] 5
[바나나, 체리, 한라봉] 5
[체리, 한라봉, 자몽] 5
[한라봉, 자몽, 수박] 5 
[한라봉, 자몽, 수박] 1 - hit
[자몽, 수박, 체리]  5

// hit - 1
// miss - 5
// LRU 알고리즘이에요.




// 5. 트리와 그래프
// 6. 트리의 순회



// ------------------------------------------------------------------


// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// 2. 19년도
// 3. 20년도
// 4. 21년도