const _ = {
clamp : (number , lower , upper ) => {
 let  m  = Math.max(number,lower)
 let n = Math.min(m ,upper)
 return n ; 
}, 
inRange : (number , StartValue , endValue ) => {
    let  n = StartValue ; 
    let  m = endValue ;
    if (endValue === undefined){
        m = n  ; 
        n = 0 ; 
    }
    if( n > m ) {
        m = StartValue;
        n = endValue ; 
    }
   if( number < n || number >= m ) {
       console.log(m)
       return false ; 
   } else {
       console.log(m)
       return true ; 
   }
},
words : (string) => {
    const array = string.split(" ")
    return array ; 
}, 
pad : (string , length) => {   
   let n = string.length
   if(length <= n){
       return string 
   }else {
       let totalPadding = length - n 
       if (totalPadding%2 == 0 ){
        for( let i = 0 ; i <(totalPadding/2) ; i++) {
            string = " "+string
            string = string+" "
         }
         return string ;
       }else{
        for( let i = 0 ; i <Math.floor(totalPadding/2) ; i++) {
            string = " "+string
         } 
         for( let i = 0 ; i < Math.ceil((totalPadding/2))  ; i++) {
            string = string+" "
         }
         return string ; 
       }  }
},
has : (obj , Key ) =>  (obj[Key] === undefined) ? false : true  ,
invert : (obj) => {
    let value = Object.values(obj)
    let key = Object.keys(obj)
    let inverterobj = {}
    for(let i = 0 ; i < key.length ; i++){
        inverterobj[value[i]] = key[i] 
    }
    return inverterobj ; 
}, 
findKey : (obj,func) => {
    let keys = Object.keys(obj)
    let value = Object.values(obj)
    let funValues = value.map((element)=> func(element))
    let index = funValues.indexOf(true)
    if (index === -1) {
        return undefined 
    } else {
        return keys[index]
    }
},
drop : (array , number) => {
    if(number === undefined){     
        return array.slice(1);
    }else{  let droptedArray = array.slice(number)
        return droptedArray ; }
},
dropWhile : ( array , func) => {
    valueArray = array.map(element => func(element,array.indexOf(element),array))
    let n = valueArray.indexOf(false)
    return _.drop(array,n)
},

chunk : (array , size ) => { 
    let arr = []
    let l = array.length
    if (size === undefined ) {
    
        arr = array.map((e)=> {
            if (array.indexOf(e) === l-1) {
                return array.slice(array.indexOf(e))
            } else{
                return  array.slice((array.indexOf(e)),(-l+array.indexOf(e)+1))
            }
         
        })

        return arr 
    }   
    
    let m = l%size 
     for (let i = 0 ; i<l ; i++ ){
         
         if ( i%size == 0 ){
            if(l-(i+size)> 0){
                 arr.push(array.slice(i,-l+i+size))
            } else {
                if (l-(i+size) === 0) {
                    arr.push(array.slice(i))
                } else {
                    arr.push(array.slice(l-m))
                }
                
            }
     } } return arr
    }
}

    

console.log(_.chunk(['a', 'b', 'c', 'd','e',"f","g","r","z","f"], 3))


// Do not write or modify code below this line.
module.exports = _;