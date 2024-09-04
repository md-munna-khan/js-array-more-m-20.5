const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// console.log(colors);
// colors.reverse()
// console.log(colors);


//way-2
// const rev_colors= []
// for( const color of colors){
//     console.log(color);
//     rev_colors.unshift(color);
// }
// console.log(rev_colors);

// way-3
for(let i = colors.length -1; i >=0; i--){
    const color = colors [i];
    console.log(color);
}