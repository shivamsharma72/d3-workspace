//  import { ascending } from 'd3' ; 

 // open Chrome devloper tools to see this /
        // const array = ["A","B",{}] ;
        // console.log(array[0]);
        // array.push("C") ;
        // console.log(typeof array); 
        //array is a type of object is java script
        //             const range = (n)=>{
        //                 let array = [] ;
        //             for(let i = 1 ; i <= n ; i++ ){
        //                 array.push ({person: { firstname:i , lastname:prompt(`Enter lastname for :`) } }) ;
        //             }
        //                 return array ;
        //             };

        //  //console.log(range(5));
        //  let myrange =range(5); 

        const range = (n)=>{
            let array = [] ;
        for(let i = 1 ; i <= n ; i++ ){
            array.push(i) ;
        }
            return array ;
        };

//console.log(range(5));
let myrange =range(10); 



//          myrange.forEach(d =>{
//            console.log(d);
//          });
// myrange =[3,7,1,21,88,11 ,9,19,20] ;
//         //  let even = myrange.filter(d =>d%2===0 )

//          console.log(myrange.sort()) ;
//          console.log("-----");
//          console.log("b-a");
//          myrange.sort((a,b)=>a-b) ;
//          console.log(myrange);

//          console.log("tertinary");
//          myrange.sort((a,b)=>a<b?1:-1) ;
//          console.log(myrange) ;

// MAP 
// console.log(myrange.map((d)=>(d*10)+1));

// console.log(myrange.map( (d) => ({number:d , string: `${d}`})  ));

// reduce
//console.log(myrange) ;

//console.log(myrange.reduce((accumulator,d)=>accumulator+(d))) ;
//console.log(myrange) ;


// const obj = entries.reduce((acc,d)=>{
//     if (d.key && d.Value) {
//         acc[d.key] = d.Value;
//     }


//     if (d.tatti !== undefined && d.Potty !== undefined) {
//         acc[d.tatti] = d.Potty;
//         console.log()
//     }

//     return acc ;
//     }
// ,{});

// console.log(Object.keys(obj)) ;
const entries = [
    { key: 'A', Value: 'F' },
    { key: 'B', Value: 'B' },
    { key: 'C', Value: 'F' }
];


// console.log(
//     entries.sort((a,b) => ascending(a.key, b.key) ) 
//    );

console.log(entries.sort((a, b) => a.Value < b.Value ? -1 : a.Value > b.Value ? 1 : 0));

console.log(entries.sort((a,b)=>d3.ascending(a.key,b.key))) ;

