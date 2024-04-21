### LinkList
 Have ways of making linklist 
 ### Notes from tutorials
 when we need objects:
 1. if you don't need order in the data
 2. fast access/ insert or removal
insertion, removal , access - o(1);
serach - o(n) // it's like checking if a specific value exist in the object
Object.keys, Object.values, object.entries, - o(n)
Object.hasOwnProperty - o(n) //just cheching if that value exists, same as access any value from the object
when we need arrays
1. if the data is ordered
2. fast access or insert or removal from the last element
push(), pop() - o(1),
shift(), unshift(), concat(), splice(), slice()- o(n)
sort() - o(n log n)
forEach/map/filter/reduce - o(n)