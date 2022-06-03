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
    console.log(numberOfApples); // There was not obvious in the task how to print it out
    console.log(numberOfOranges); // We have tried also process.stdout.write()

    //return (numberOfApples + \n +numberOfOranges);

}