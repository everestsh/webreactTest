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


```