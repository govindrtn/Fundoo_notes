let arr = [2,3,443,43,53,5533,545,3,6,54533]

let isEven = []
let isOdd = []

for(let i = 0 ; i< arr.length ;i++){
    if(arr[i] %2 == 0){
        isEven.push(arr[i])
    }
    else{
        isOdd.push(arr[i])
    }
}
// console.log(isEven);
// console.log(isOdd);





for(i = 0 ; i< arr.length ;i++){
    for (j = i; j < arr.length ; j++){
        if(arr[i]< arr[j]){
            let temp
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp 
        }
    }
}
// console.log(arr);



// console.log(array);

const largnum = (arr)=>{

    let max = arr[0] 

    for(let i = 0; i< arr.length; i++ ){
        if(arr[i] > max){
            max = arr[i]
        }   
    }
return max
}
// console.log(largnum(arr));


// sort string 

// const arr = ["a", "c", "b", "h"]

// console.log(arr);
// // console.log(arr);

// let len = arr.length

// for (i = 0;i<len;i++){
//     for(j=i;j<len;j++){
//         if(arr[i]<arr[j]){
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         }
//     }
// }

// for(let i = 0 ; i< len ; i++){
//     for(let j = i ; j<len ; j++){
//         if(arr[i]< arr[j]){
//             let temp 
//             temp = arr[i]
//             arr[i] = arr[j]
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr);


let num = 6

let n1 = 0 , n2 = 1, nextterm;

for(i = 1; i<=num; i++){
    // console.log(n1);
    nextterm = n1+n2
    n1 = n2
    n2 = nextterm
}



let user = {
    name: "govind",
    lname: "maithil",
    age: 24,
    phone: 53243353442,
    email: "govindmaithil@gmail.com"
}

user.email = "sachinchoiksey"


let {name , age , email } = user

// console.log(user);


let a = 107 , b = 200
// console.log(`before ${a} swap ${b}`);
// b = [a ,a = b][0]

a = a ^ b 
b = a ^ b
a = a ^ b

// console.log(`after ${a} swap ${b}`);


let str2 = "987654321"
let str = str2.split(" ").join("")
// let newStr = ""

// for(let i = str.length -1 ; i>=0 ; i--){
    // newStr = newStr + str[i]
// }

// console.log(newStr);

// let newStr = ""

// for(i= str.length-1; i>=0 ;i--){
//     newStr+=str[i]
// }
// console.log(newStr);

let newStr = ""

for (let i = str.length - 1 ; i >= 0 ; i--){
    newStr = newStr + str[i]
}
// console.log(newStr);

// function greet(name , callback){
//     console.log("hello " + name )
//     callback()
// }
// function callback(){
//     console.log("i am callBack function");
// }
// greet("govind", callback)

function greet(name , callback){
    console.log("good morning ma'am" , name);
    callback()
}

function callme(){
    console.log("i am call back function....");
}

greet("govind" , callme)