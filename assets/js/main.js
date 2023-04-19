

// max elementin tapdiq
// function numbers(arr) {
//     var max = arr[0];
//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max= arr[i];
//         }

//     }
//     return max;

// }
// var h = [3, 34, 74, 95, 2]
// console.log("max element:" + numbers(h))







// cut yerde duran ededlerin cemini tapdiq
// function numbers(arr) {
//     var cut =0;
//     for (let i = 0; i < arr.length; i=i+2) {
//       cut+=arr[i];

//     }
//     return cut;

// }
// var h = [3, 34, 74, 95, 2]
// console.log("cut:" + numbers(h))









// tek yarde duranin min+cut yerde duranin max
// function numbers(arr) {
//     var max = arr[0],  min = arr[1];

//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] > max && arr[i] % 2 == 0) {
//             max=arr[i];
             
//         }
//      else   if ( i%2==1 && arr[i] < min) {
//              min=arr[i];
//         }
        
// }
//  console.log(min+max)
// }

    

//     numbers ([3, 34, 74, 95, 2])





//  2nin quvvetidirmi
// function quvvet(num){
//     var newnum=num, count=0;
    
//         while(num%2===0){
//             num=num/2;
//             count++;
//         }
//         if(num===1){
//             console.log(newnum+ "2nin"+ count+ "quvvetidir")
//         }
//       else{
//         conole.log(newnum + "2quvveti deyil")
//       }
// }
// quvvet(16)







  

    
