// concept of TTFE

(function myFunction(){
    console.log("hello")
})()

// closure

// const functOne = (x)=> {
//     let y = 2;
//     const functTwo = ()=>{
//         let sum = x+y;
//         console.log(`the sum value is ${sum}`)
//     }
//     functTwo()
// }
// functOne(3)


// const functOne = (x)=> {
//     let y = 2;
//     const functTwo = ()=>{
//         let sum = x+y;
//         console.log(`the sum value is ${sum}`)
//     }
//     return functTwo
// }
// let detail = functOne(3)
// console.log(detail)
// detail()


console.log("call method")

const manxOne ={
    name : 'sujan',
    age : '22',
    detail : function (){
        console.log(`His name is ${this.name} and his age is ${this.age}`)
    }
};
 manxOne.detail()

 const manxaeTwo = {
     name : 'Praman',
     age : '23',
 };
 manxOne.detail.call(manxaeTwo)

