function cartesianProduct(arr1, arr2) {
    const result = []
     for (let i = 0; i < arr1.length; i++) {
      for(j = 0; j < arr2.length; j++){
          result.push([arr1[i], arr2[j]])
      }
         
     }
    return result
}
const arr1 = [1, 2]
const arr2 = [4, 5, 6]
console.log(cartesianProduct(arr1, arr2));
//[ [ 1, 4 ], [ 1, 5 ], [ 1, 6 ], [ 2, 4 ], [ 2, 5 ], [ 2, 6 ] ]
//Bog-O(n^2)
