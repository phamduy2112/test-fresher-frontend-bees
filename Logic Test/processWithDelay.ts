async function processWithDelay(numbers:number[],delayTime:number):Promise<void>{
    try {
        if(!Array.isArray(numbers) || numbers.some(num=>typeof num!=='number')) {
            throw new Error("Invalid input: Expected an array of numbers.");

        }     
        const total=numbers.length;
        for(let i=0;i<total;i++){
            await new Promise(resolve=>setTimeout(resolve,delayTime))
            console.log(`Process number: ${numbers[i]}`)
            const process=((i+1) / total) * 100
            console.log(`Progress: ${process.toFixed(2)}%`)
        }   
        console.log("All numbers done")
     
    } catch (error) {
        console.log(error)
    }
}
processWithDelay([1, 2, 3, 4, 5],1000);