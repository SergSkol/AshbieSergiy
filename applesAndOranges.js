function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let numberOfApples = 0;
    let numberOfOranges = 0;
    let sum =0;
    
    for(let i=0; i<apples.length; i++){
        sum = apples[i] + a;
        if(sum >= s && sum <= t){ numberOfApples++;}
    }
    for(let i=0; i<oranges.length; i++){
        sum = oranges[i] + b;
        if(sum >= s && sum <= t){ numberOfOranges++;}
    }
    console.log(numberOfApples);
    console.log(numberOfOranges);

    //return (numberOfApples + \n +numberOfOranges);

}