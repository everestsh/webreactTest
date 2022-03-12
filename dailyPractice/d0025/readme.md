# test

### 003



```
/*


function solution(cntProducts, quantities, costs, meals) {

}

Codewriting

You've created a meal plan for the next few days, and prepared a list of products that you'll need as ingredients for each day's meal. There are many shops around you that sell the products you're looking for, but you only have time to visit one or two stores each day.

Given the following information, your task is to find the minimum cost you'll need to spend on each meal:

cntProducts - an integer representing the total number of products you'll be using in all of your meals;
quantities - a rectangular matrix of integers, where quantities[i][j] represents the amount of product j available in shop i;
costs - a rectangular matrix of integers, where costs[i][j] represents the cost of buying product j from shop i;
meals - a rectangular matrix of integers, where meals[m][j] represents the amount of product j required to make the mth meal.
Return an array of length meals.length representing the minimum cost of each meal (assuming you can only visit up to two shops each day).

NOTE:

You only like to use fresh ingredients, so you'll need to buy new products from the shops each day (you may not use leftovers from a previous day).
Each store re-stocks their merchandise every night, so the amounts in the quantities array are available each day.
It's guaranteed that it will always be possible to buy all the products needed for each meal by visiting only one or two shops.
Example

For cntProducts = 2,
quantities = [[1, 3], 
              [2, 1], 
              [1, 3]]
costs = [[2, 4],
         [5, 2],
         [4, 1]]
and

meals = [[1, 1],
         [2, 2],
         [3, 4]]
the output should be solution(cntProducts, quantities, costs, meals) = [3, 8, 19].

There are 3 shops and 2 products in total.

To cook the first meal you need to buy one product 0 and one product 1. The most optimal way is to buy them in the first and third shops respectively: buying one product 0 in the first shop costs 2 * 1 = 2 and buying one product 1 in the third shop costs 1 * 1 = 1. So you pay 2 + 1 = 3 units of money for this meal.
To cook the second meal you need to buy two of product 0 and two of product 1. The optimal way is to buy one product 0 in the first shop, and then buy one product 0 and two product 1s in the third shop. This way, you spend (1 * 2) + (1 * 4 + 2 * 1) = 8 units of money.
To cook the third meal you need to buy three of product 0 and four of product 1. The optimal way is to buy two product 0s and one product 1 in the second shop, and then buy one product 0 and three product 1s in the third shop. This way, you spend (2 * 5 + 1 * 2) + (1 * 4 + 3 * 1) = 19 units of money.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer cntProducts

An integer representing the number of different products in all shops.

Guaranteed constraints:
2 ≤ cntProducts ≤ 50.

[input] array.array.integer quantities

A matrix of integers representing the quantities for every product in every shop.

Guaranteed constraints:
2 ≤ quantities.length ≤ 50,
quantities[i].length = cntProducts,
0 ≤ quantities[i][j] ≤ 1000.

[input] array.array.integer costs

A matrix of integers representing the costs for every product in every shop.

Guaranteed constraints:
costs.length = quantities.length,
costs[i].length = cntProducts,
1 ≤ costs[i][j] ≤ 1000.

[input] array.array.integer meals

A matrix representing the list of required ingredients for each meal you need to process.

Guaranteed constraints:
1 ≤ meals.length ≤ 50,
meals[i].length = cntProducts,
0 ≤ meals[i][j] ≤ 2000.

[output] array.integer

Return an array of integers of length meals.length, where the ith element represents the minimum cost for buying the products to cook the ith meal, visiting only one or two shops.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

1234
function solution(cntProducts, quantities, costs, meals) {

}

TESTS
CUSTOM TESTS
MORE



#########################
Input:
cntProducts: 2
quantities:
[[1,3], 
 [2,1], 
 [1,3]]
costs:
[[2,4], 
 [5,2], 
 [4,1]]
meals:
[[1,1], 
 [2,2], 
 [3,4]]
Expected Output:
[3, 8, 19]

Input:
cntProducts: 2
quantities:
[[1000,1000], 
 [1000,0]]
costs:
[[1,1], 
 [1000,1000]]
meals: [[2000,1000]]
Expected Output:
[1002000]
Click the "Run Tests" button to see output and console logs.

Input:
cntProducts: 3
quantities:
[[2,4,1], 
 [5,2,0]]
costs:
[[4,4,1], 
 [1,2,3]]
meals:
[[3,2,1], 
 [7,3,0], 
 [4,2,1], 
 [3,6,0]]
Expected Output:
[8, 21, 9, 23]
Click the "Run Tests" button to see output and console logs.




*/

```


### 004
```
function solution(arr, queries) {

}

Input:
arr: [1, 2, 3, 4, 5]
queries:
[[1,2,4], 
 [2,4,3], 
 [1,1,1]]
Expected Output:
[1, 0, 0]





```
```
Codewriting

You are given an array of integers arr and an array of queries queries, where each query represents a triple of integers. Your task is to find the number of occurrences of each query as a subsequence in the given array arr.

In other words, for each query triple (x, y, z) your task is to find number of triples (i, j, k), such that 0 ≤ i < j < k < arr.length and also arr[i] = x, arr[j] = y, and arr[k] = z.

Example

For arr = [1, 2, 3, 4, 5] and queries = [[1, 2, 4], [2, 4, 3], [1, 1, 1]], the output should be solution(arr, queries) = [1, 0, 0].

The first query [1, 2, 4] occurs in arr as a subsequence only once: (i, j, k) = (0, 1, 3) (arr[0] = 1, arr[1] = 2, arr[3] = 4). So, the answer is 1 for the first query.
The second query [2, 4, 3] doesn't occur in arr as a subsequence: all elements of the query exist in arr, but in a different order.
The third query [1, 1, 1] doesn't occur in arr as a subsequence, because arr doesn't contain three 1s.
So the answer is [1, 0, 0].
For arr = [1, 2, 2, 1, 2, 1, 2] and queries = [[1, 1, 2], [1, 2, 1]], the output should be solution(arr, queries) = [4, 6].

The first query [1, 1, 2] occurs in arr as a subsequence four times:
(i, j, k) = (0, 3, 4): a[0] = 1, a[3] = 1, a[4] = 2;
(i, j, k) = (0, 3, 6): a[0] = 1, a[3] = 1, a[6] = 2;
(i, j, k) = (0, 5, 6): a[0] = 1, a[5] = 1, a[6] = 2;
(i, j, k) = (3, 5, 6): a[3] = 1, a[5] = 1, a[6] = 2.
The second query [1, 2, 1] occurs in arr six times:
(i, j, k) = (0, 1, 3): a[0] = 1, a[1] = 2, a[3] = 1;
(i, j, k) = (0, 1, 5): a[0] = 1, a[1] = 2, a[5] = 1;
(i, j, k) = (0, 2, 3): a[0] = 1, a[2] = 2, a[3] = 1;
(i, j, k) = (0, 2, 5): a[0] = 1, a[2] = 2, a[5] = 1;
(i, j, k) = (0, 4, 5): a[0] = 1, a[4] = 2, a[5] = 1;
(i, j, k) = (3, 4, 5): a[3] = 1, a[4] = 2, a[5] = 1.
So the answer is [4, 6].
For arr = [1, 1, 1, 1] and queries = [[1, 1, 1]], the output should be solution(arr, queries) = [4].

The only query [1, 1, 1] occurs in arr four times:

(i, j, k) = (0, 1, 2): a[0] = 1, a[1] = 1, a[2] = 1;
(i, j, k) = (0, 1, 3): a[0] = 1, a[1] = 1, a[3] = 1;
(i, j, k) = (0, 2, 3): a[0] = 1, a[2] = 1, a[3] = 1;
(i, j, k) = (1, 2, 3): a[1] = 1, a[2] = 1, a[3] = 1;
So the answer is [4].
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer arr

An array of integers.

Guaranteed constraints:
3 ≤ arr.length ≤ 104,
1 ≤ arr[i] ≤ 104.

[input] array.array.integer queries

An array of queries.

Guaranteed constraints:
1 ≤ queries.length ≤ 100,
queries[i].length = 3,
1 ≤ queries[i][j] ≤ 104.

[output] array.integer64

An array of integers, where the ith element is the answer for ith query.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


// Sprint 2 GCA Test 1
// function U5Sprint2GCATest1 (numbers, left, right){
//   const output = []
//   for(let i=0, factor = 0; i< numbers.length; i++){
//     // console.log(numbers[i])
//     factor = numbers[i] / (i+1);
//     surplus =  numbers[i]%(i+1)
//     // console.log(surplus)
//     // factor = 3
//     if(surplus)  {
//       output.push(false)
//       continue;
//     }
//     if(factor >= left && factor<=right) {
//       output.push(true);
//       continue;
//     }
//     output.push(false)
//     console.log("factor =", factor, typeof(factor));
//   }
//   return  output
// }
// let numbers, left, right
// // numbers = [8, 5, 6, 16, 5]
// numbers = [1, 2, 3, 4, 5]
// left = 1 
// right = 1
// console.log( U5Sprint2GCATest1 (numbers, left, right) )

// // Sprint 2 GCA Test 2
// function U5Sprint2GCATest2 (s){
//   let a = s , b =''
//   const length = s.length
//   console.log("len = ", length)
//   // console.log("a = ", a)
//   const output = []
//   let  btmp , arr
//   // console.log(a)
//   if(length < 2) return  "result --- "
//   for(let i=length; i>0; i--){
    
//     console.log("1 ", i, a, b)
//     // if(a.length===2 && a === a.split('').reverse().join('') ){
//     //   return  "result --- "
//     // }else{
//     //   return "result --- " + a
//     // }
//     if(a === a.split('').reverse().join('')) {
//       console.log("########  2", output)
//       aLen = a.length
//       if(a.length === 1) return  "result --- " + a
//       if(a.length === 2) {
//         i = i - 2
//         continue
//       }
//       if(i === 0 ) return output.join('')
//       i = output.length
//       b = output.join('')
//       a = b
//       b = ''
//       for(let j=0; i < output.length; j++){
//         output.pop()
//       }


//       // i = length - a.length
//       console.log("######## shenxia i = ", i, aLen)
//       // if(i === length) {
//       //   console.log("i= ", i, a)
//       //   return "ok"
//       // }
      
//       // console.log("in a = ", a) 
//       continue;
//     }else{
//       if(length < 2) return  "result --- ";
//       if(length === 2) { return  "result - n-- " + a ; }

//       arr = a.split('')
//       btmp = arr.pop()
//       output.unshift(btmp) 
//       console.log("output = ",output.join(''), "i =",i)
//       a = arr.join('')
//       b = output.join('')
//       // console.log("end a = ", a)
//     }
//   }
//   return "result --- " +output.join('')
// }
 
// let s
// // s = "abbaabbaabba"
// // s = "abbaabbaabbac"
// // s = "abbaabbaabbacb"  // ok cb
// s = "abbaabbaabbacbb"
// // s = "abbaabbaabbacbbce"
// // s = "a"
// // s = "aa"
// //  s = "ab"
// //  s = "aab"
// //  s = "abab"
// //  s = "abbab"
// console.log( U5Sprint2GCATest2(s) )


// step sTest 2 ############################################
// function solution(s) {
// }
// Input:
// s: "aaacodedoc"
// Expected Output:
// ""
// Input:
// s: "codesignal"
// Expected Output:
// "codesignal"
// Input:
// s: ""
// Expected Output:
// ""
// Input:
// s: "a"
// Expected Output:
// "a"
// Click the "Run Tests" button to see output and console logs.
// Input:
// s: "abbab"
// Expected Output:
// "b"
// Click the "Run Tests" button to see output and console logs.
// step sTest 2 ############################################


```

### 002

```
A word is defined as a sequence of consecutive characters which does not contain any spaces. The given text is a string consisting of words, each separated by exactly one space. It is guaranteed that text does not contain any leading or trailing spaces.

Note that the characters in letters are all lowercase, but since the shift key is working, it's possible to type the uppercase versions also.

Example

For text = "Hello, this is CodeSignal!" and letters = ['e', 'i', 'h', 'l', 'o', 's'], the output should be solution(text, letters) = 2.

"Hello," can be typed since the characters 'h', 'e', 'l' and 'o' are in letters. Note that the symbol ',' also belongs to the current word and can by typed.
"this" cannot be typed because the character 't' is not in letters.
"is" can be typed (both 'i' and 's' appear in letters).
"CodeSignal!" cannot be typed because the character 'c' is not in letters (as well as 'd', 'g', 'n', and 'a').
For text = "Hi, this is Chris!" and letters = ['r', 's', 't', 'c', 'h'], the output should be solution(text, letters) = 0.

Each word contains the character 'i' which does not appear in letters and thus cannot be typed on the keyboard.

For text = "3 + 2 = 5" and letters = [], the output should be solution(text, letters) = 5.

There are no working letters on the keyboard, but since each of these words consists of numbers and special characters, they can all be typed, and there are 5 of them.

Input/Output

[execution time limit] 4 seconds (js)

[input] string text

A string containing a set of words with punctuation, separated by spaces.

Guaranteed constraints:
1 ≤ text.length ≤ 1000.

[input] array.char letters

An array of characters containing lowercase English letters which can be typed using the broken keyboard. It is guaranteed that the given letters are unique.

Guaranteed constraints:
0 ≤ letters.length ≤ 25.

[output] integer

The number of words from text which can be typed using the broken keyboard.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

Saved
1234
function solution(text, letters) {

}

TESTS
CUSTOM TESTS
Test 1
Input:
text: "Hello, this is CodeSignal!"
letters:
["e", 
 "i", 
 "h", 
 "l", 
 "o", 
 "s"]
Expected Output:
2
Click the "Run Tests" button to see output and console logs.
Test 2
Input:
text: "Hi, this is Chris!"
letters:
["r", 
 "s", 
 "t", 
 "c", 
 "h"]
Expected Output:
0
Click the "Run Tests" button to see output and console logs.

Test 3
Input:
text: "I wish you a Merry Christmas!"
letters:
["i", 
 "w", 
 "s", 
 "h", 
 "y", 
 "o", 
 "u", 
 "a", 
 "m", 
 "e", 
 "r", 
 "c", 
 "t"]
Expected Output:
6

Test 4

Input:
text: "He loves donuts a lot, but not as much as fries!"
letters:
["h", 
 "e", 
 "l", 
 "o", 
 "v", 
 "s", 
 "t", 
 "a"]
Expected Output:
6
Click the "Run Tests" button to see output and console logs.
Test 5
Test 6
Test 7
Test 8
Test 9
Test 10
Test 11
Test 12
Test 13
Test 14
Test 15
Test 16
MORE

```


### 003

```
function solution(n, m, obstacles, teleports) {

}


Imagine that you're exploring a mysterious labyrinth in the shape of a rectangular matrix, which contains obstacles and teleports. Starting from the upper-left corner, you're goal is to reach the lower-right corner by only moving to the right.

You are given integers n and m representing the dimensions of the labyrinth. You are also given obstacles and teleports, which are lists of the cells that contain all the obstacles and teleports, respectively.

Here are details about the labyrinth:

An obstacle cannot be traversed - you must stop immediately if you reach a cell containing an obstacle.
A teleport is a pair of cells (start, end). If you reach the start cell, you immediately move to the end cell.
Note that this doesn't work backwards: you cannot teleport from the end cell to the start cell.
It is guaranteed that all teleports have unique start cells (i.e. each cell in the labyrinth has one teleport at most).
It is guaranteed that the end cell for a teleport cannot be a start cell for another teleport.
It is also guaranteed that both the start and end cells of a teleport do not contain obstacles.
Any cell that doesn't contain an obstacle or a teleport is considered a free cell, and you can travel through it normally.
You start at the upper-left corner cell with coordinates (0, 0), and the goal is to reach the exit located at the cell with coordinates (n - 1, m - 1). You move according to the following rules:

You will always move to the right: if you're currently on the cell with coordinates (row, col), you will try moving to the cell with coordinates (row, col + 1).
If you move to a cell that's the starting point of a teleport, proceed to the coordinates of the end cell.
If you try to move to a cell that either contains an obstacle or is outside the bounds of the labyrinth, stop moving and stay where you are.
Your task is to check whether you can reach the goal (exit of the labyrinth) by following the algorithm above, and to return the total number of cells you travelled through to reach the exit. Note that you should count all cells travelled, including the starting cell (0, 0), and both the start and end cells of all teleports. If it is not possible to reach the exit, return -1 if it's because of an obstacle or due to trying to go outside the bounds of the labyrinth, or -2 if it's because of teleportation (i.e., an infinite teleport loop).

It's guaranteed that the starting cell (0, 0) and the exit cell (n - 1, m - 1) do not contain an obstacle, or be the starting point of a teleport.

Example

For n = 3, m = 3, obstacles = [[2, 1]], and teleports = [[0, 1, 2, 0]], the output should be solution(n, m, obstacles, teleports) = -1.

Expand to see the example video.

You are unable to reach the exit because of an obstacle, so the answer is -1.

For n = 3, m = 4, obstacles = [[1, 1]], and teleports = [[0, 2, 0, 1], [0, 3, 2, 0]], the output should be solution(n, m, obstacles, teleports) = -2.

Expand to see the example video.

You are unable to reach the exit because of an infinite teleport loop, so the answer is -2.

For n = 3, m = 4, obstacles = [[2, 0], [1, 0]], and teleports = [[0, 1, 1, 1], [1, 2, 0, 2], [0, 3, 2, 1]], the output should be solution(n, m, obstacles, teleports) = 9.

Expand to see the example video.

By moving to the right and following teleports, you will eventually reach the exit cell (2, 3) while moving through 9 cells, so the answer is 9.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

An integer representing the number of rows in the labyrinth.

Guaranteed constraints:
2 ≤ n ≤ 100.

[input] integer m

An integer representing the number of columns in the labyrinth.

Guaranteed constraints:
2 ≤ m ≤ 100.

[input] array.array.integer obstacles

An array of obstacles. Each obstacle is represented as a 2-element array [row, col] - the coordinates of the obstacle.

Guaranteed constraints:
0 ≤ obstacles.length ≤ 1000,
obstacles[i].length = 2,
0 ≤ obstacles[i][0] < n,
0 ≤ obstacles[i][1] < m.

[input] array.array.integer teleports

An array of teleport locations. Each teleport is represented as a 4-element array [row1, col1, row2, col2], where (row1, col1) is the starting cell, and row2, col2 is the end cell.

Guaranteed constraints:
0 ≤ teleports.length ≤ 1000,
teleports[i].length = 4,
0 ≤ teleports[i][0] < n,
0 ≤ teleports[i][1] < m,
0 ≤ teleports[i][2] < n,
0 ≤ teleports[i][3] < m.

[output] integer

Based on the rules above, if you can reach the exit cell (n - 1, m - 1), return the total number of cells you travelled through from the starting cell (0, 0) by only moving to the right. This should include the starting cell (0, 0), and all start and end cells of teleports. Otherwise, return -1 if it is not possible to reach the exit because of an obstacle, or -2 if it is not possible to reach the exit because of an infinite teleport loop.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

Saved
1234
function solution(n, m, obstacles, teleports) {

}

TESTS
CUSTOM TESTS
MORE



```

### 004


```

function solution(lamps) {

}
Input:
lamps:
[[-2,3], 
 [2,3], 
 [2,1]]
Expected Output:1

Input:
lamps:
[[-2,1], 
 [2,1]]
Expected Output:-3



Input:
lamps: [[-1000000000,100000]]
Expected Output:-1000100000





There are some lamps placed on a coordinate line. Each of these lamps illuminates some space around it within a given radius. You are given the coordinates of the lamps on the line, and the effective radius of each of the lamps' light.

In other words, you are given a two-dimensional array lamps, where lamps[i] contains information about the ith lamp. lamps[i][0] is an integer representing the lamp's coordinate, and lamps[i][1] is a positive integer representing the effective radius of the ith lamp. That means that the ith lamp illuminates everything in a range from lamps[i][0] - lamps[i][1] to lamps[i][0] + lamps[i][1] inclusive.

Your task is to find the coordinate of the point that is illuminated by the highest number of lamps. In case of a tie, return the point among them with the minimal possible coordinate.

Example

For lamps = [[-2, 3], [2, 3], [2, 1]], the output should be solution(lamps) = 1.

Example 1

The first lamp illuminates everything in range [-2 - 3, -2 + 3] = [-5, 1].
The second lamp illuminates everything in range [2 - 3, 2 + 3] = [-1, 5].
The third lamp illuminates everything in range [2 - 1, 2 + 1] = [1, 3].
The only point that is illuminated by all of the lamps is 1, hence the answer is 1.

For lamps = [[-2, 1], [2, 1]], the output should be solution(lamps) = -3.

Example 2

The given lamps illuminate ranges [-3, -1] and [1, 3] respectively. Every point in these ranges are illuminated by only 1 lamp, but the one with the minimal coordinate among them is -3, so it is the answer.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer lamps

A two-dimensional array containing information about the lamps. Each lamp is described by a two-element array containing the coordinate and the effective radius of the lamp.

Guaranteed constraints:
1 ≤ lamps.length ≤ 105,
lamps[i].length = 2,
-109 ≤ lamps[i][0] ≤ 109,
1 ≤ lamps[i][1] ≤ 105.

[output] integer

The coordinate of the point with the smallest coordinate that is illuminated by the most number of lamps.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}

1234
function solution(lamps) {

}

TESTS
CUSTOM TESTS
MORE

```

### 004
