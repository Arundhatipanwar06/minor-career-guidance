
let a=["2","3","5","1"];
console.log(a.includes("5"));
let month=["jan","feb","march","aug","june","july"];
// console.log(month.push("dec"));
console.log(month);
// console.log(month.splice(month.length,0,"dec"));
console.log(month);
let ind=month.indexOf("june");
console.log(ind);
console.log(month.splice(ind,1));
console.log(month);
let printarr=a.map((cur)=>{
    return cur*2;

})
console.log(printarr);
let data=a.map(()=>{

})
let greaterelement=a.filter((cur)=>{
    return cur>2;
})
console.log(greaterelement);
let removeele=a.filter((cur)=>{
    return cur!=2;
})
console.log(removeele);
let productprice=[
    {name:"sonali",p:1200},
    {name:"sona",p:200},
    {name:"sonal",p:400},
    {name:"saloni",p:600},
    {name:"shona",p:5400}
]
let printprice=productprice.filter((cur)=>{
    return cur.p>500;
})
console.log(printprice);
let arr=[2,3,4,2,5,6];
// let arrdata=arr.filter((cur,ind,a)=>{
//     // console.log("index",ind);
//     return a.indexOf(cur)==ind;
// })
// console.log(arrdata);
// arr.sort((a,b)=>{
//     if(a>b) return 1;
//     if(a<b) return -1;
// })
// let square=arr.map((cur)=>{
//     return cur*cur;
// })
//console.log(arr);
let square=arr.map((cur)=>(cur%2==0?cur*cur:undefined)).filter((cur)=>cur!=undefined);

console.log(square);
let nm=["ayaan","asish","aditya","arnav"];
let addmr=nm.map((cur)=>`Mr.${cur}`);
console.log(addmr);

let  numarr=[1,2,3,4,5,6];
let obbNum=numarr.filter((cur)=>{
    return cur%2!=0;
})

console.log(obbNum);


function  primeNum(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }
        
    }
    if(count==2){
        return true;
    }
    else{
        return false;
    }
}
let n=11;
console.log(primeNum(n));


let sentence = "JavaScript is easy to learn";
let newarr=sentence.split(' ');
console.log(newarr);
let maxsentence;
maxsentence = newarr[0];
for(let i=0;i<newarr.length;i++){
     
        if(newarr[i].length>maxsentence.length){
                maxsentence=newarr[j];
        }
     

}
console.log(maxsentence);












