function arrayOperation(){
        // 0 1 2 3 4 5 6
    array=[0,3,1,2,6,3,3];
    if(array.length>3){
        sum1=0;
        sum2=0;
        for(let i=1;i<array.length; i++){
            sum1=0;
            sum2=0;
            for(let j=0;j<i; j++){
                sum1= sum1+array[j];
            } 
            for(let k=i+1;k<array.length;k++){
                sum2= sum2+array[k];
            }
        }
        console.log(sum1);
        console.log(sum2);
        if(sum1 == sum2){
            console.log('equals');
            
        }else{
            console.log('not equals');
            
        }
    }
}
arrayOperation()
