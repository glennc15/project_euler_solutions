var problem2 = function(number) {
    
    var fibPrevious = 1;
    var fibCurrent = 2;
    var fibNext = 0;
    var evenSum = 2;

    while (fibCurrent <= number) {
        fibNext = fibCurrent + fibPrevious;
        fibPrevious = fibCurrent;
        fibCurrent = fibNext;
        if (fibCurrent <= number && fibCurrent%2 === 0) {

            evenSum += fibCurrent;
        }
    }
    return evenSum;
}