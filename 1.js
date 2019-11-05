
	let func = function(a,b){
    /* initial value c */
      let c = 10;
    // create function return
    return function(a,b){
    /* sum all values*/
    return a+b+c;
}

  // This is test task for position JS developer
}


 // method1
console.log(func.toString().replace(/\/{2,}.*$/gm, '')
    .replace(/\/\*.*?\*\//gsm, '').replace(/^\s*\n/gm, ""));

//method2
console.log(func.toString().replace(/\/{2,}.*$/gm, '')
    .replace(/\/\*.*?\*\//gsm, '').replace(/^\s\n/gm, ""));

let f = func();
console.log(f(1,2));