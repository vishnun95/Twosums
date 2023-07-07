# Twosums
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.


**Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]**

Intuition
While thinking about the solution two approach came into my mind, Brute Force and Hashing/Map.

1. Brute Force: One of the simplest approaches is to consider every possible pair of numbers from the input array and check if their sum equals the target. This approach involves nested loops and has a time complexity of O(n^2). While it is a valid solution, it is not the most efficient for larger inputs.
2. Hashing/Map: The approach showcased in this code uses a Map object for efficient lookups. By iterating through the array and storing complements as keys in the Map, we can quickly check if a complement exists for each element.
   

Approach

This code follows a straightforward approach to solve the Two Sum problem using a Map object.
Initialize an empty Map called map, which will be used to store the numbers in the nums array as keys and their corresponding indices as values.
Iterate through the nums array using a for loop. In each iteration, perform the following steps:

Calculate the difference between the target value and the current element nums[i]. This difference represents the complement we need to find in the array.
Check if the map already has a key equal to the difference. If it does, it means we have found a pair that adds up to the target sum.
Return an array with the indices [i, map.get(diff)], where i is the current index and map.get(diff) gives the index of the complement in the array.
If the complement is not found in the map, store the current element nums[i] as the key in the map and its index i as the corresponding value.
If no pair is found that adds up to the target sum during the loop, return an empty array [] to indicate that no solution exists.

Complexity

Time complexity: O(n)
The code contains a single loop that iterates through the input array nums. Each iteration performs constant-time operations such as calculating the difference, checking the Map, and updating the Map. Therefore, the time complexity of the code is O(n), where n is the length of the nums array.

Space complexity: O(n)
The space complexity of the code depends on the storage used by the Map object. In the worst case scenario, where no pair is found that adds up to the target sum, the Map may store all the elements of the nums array, resulting in O(n) space usage. Additionally, there is some constant space used for variables i, map, and diff. Thus, the overall space complexity is O(n).

