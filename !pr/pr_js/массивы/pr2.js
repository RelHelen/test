function vuvod() {
    let f;
    for (let i = 0; i < arguments.length; i++) {
        for (let j = i + 1; j < arguments.length; j++) {
            if(arguments[i]>arguments[j]){ 
                f = arguments[i];
                arguments[i] = arguments[j]
                arguments[j] = f;
            }           
        }  
        console.log( ` ${arguments[i]}`);     
    }

    // for (let i = 0; i < arguments.length; i++) {
    //     console.log( ` ${arguments[i]}`);
    // }    
  }  
  vuvod(6,0,5,2,3,-1);  
