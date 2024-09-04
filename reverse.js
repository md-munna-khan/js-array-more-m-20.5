const numbers =[1,2,3,4,5,6,7,8];
// console.log(numbers);

//way1
// numbers.reverse();
// console.log(numbers)
//way-2
// const reversed = numbers.reverse()
// console.log(reversed);
// way 3
// const rev_numbers =[];
// for(const num of numbers){
//     console.log(num);
//     rev_numbers.unshift(num);
// }
// console.log (rev_numbers);

//rever side way 4 
for (let i= numbers.length -1; i >=0; i--){
    const num = numbers [i];
    console.log(num);
}