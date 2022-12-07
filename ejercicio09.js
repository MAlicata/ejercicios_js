let control = 1; 

while(control <=500){
    // analizamos si es multiplo de 4
    if(control%4==0){
        console.log("es multiplo de 4");
    }
    // analizamos si es multiplo de 9 
    if (control%9==0) {
        console.log("es multiplo de 9");        
    }
    if(control%5==0){
        console.log("------------------");
    }
    control++;
}
