function fingers(num){
    if(num>5){
        num2= num%8;
        //console.log(num2);
        
       if(num2 == 1 ){
              console.log(1);
              
       }
       if(num2 == 0 || num==2 ){
              console.log(2);
              
       }
       if(num2 === 7 || num==3 ){
              console.log(3);
              
       }
       if(num2 == 6 || num==4 ){
              console.log(4);
              
       }
       if(num2 == 5  ){
              console.log(5);
              
       }
    
    }else{
        console.log(num);
        
    }
}

















fingers(64)

// finger=[
    //     fist,    second,third,   fouth, fifth
     //       1       2      3       4      5
     //       9=4    8=3     7=2     6=1     
     //             10=0     11=1    12=2     13=3    
     //       17=2  16=1     15=0    14=4
     //             18=3     19=4    20=0     21=1
     //       25=2  24=3     23=4    22=0     
    // ];

//7=3  7+4=11+4=15+4=19+4=23+4=27
//8=2  
//9=1  












//6=4 ==>6+6=12+2=14+6=20+2=22+6=28