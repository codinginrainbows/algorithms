/*
    given an integer convert it to its Roman numeral equivalent

    example: numbers = [1, 49, 23]

    looking at the converseions, 1 is represented ad 'I' (capital i), 49 is 40 + 9, so 'XLIX', and 23 is 'XXIII'. The return array is ['I', 'XLIX', 'XXIII'].
*/

function romanizer(numbers) {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' },
    ];

    const toRoman = (number) => {
        let result = '';
        
        for (const pair of romanNumerals) {
            while (number >= pair.value) {
                result += pair.numeral;
                number -= pair.value;
            }
        }
        
        return result;
    };

    const romanNumeralsArray = [];
    
    for (const number of numbers) {
        romanNumeralsArray.push(toRoman(number));
    }

    return romanNumeralsArray;
}

/*
    given the setup of a match between 2 players, evaluate the matchs outocome

    there are 2 players and there is a number squence of size N. Players alternate turn for N rounds. Each round, a players removes the fist number from the swquence and adds its value to their score. After that, if the 'remove' number is even, the remaining sequence is reversed.
    Determine the difference in scores between the two players after the game.

    more precisely, suppose the firstScore and secondScore are the final scores of the first and second player respectively. The Goal is to calculate the value of firstScore - secondScore.

    Example:

    The number of elements is n = 5 and numSeq = [3,6,2,3,5]

    1. first round: the first player picks 3, firstScore = 3. The remaining sequence: [6,2,3,5],
    2. second round: the second player picks 6, secondScore = 6. Since 6 is even, the remaining sequence is reversed: [5,3,2],
    3. third round: the first player picks 5, firstScore = 3+5=8. The remaining sequence: [3,2],
    4. forth round: the second player picks 3, secondScore = 6+3=9. The remaining sequence: [2],
    5. fifth round: the first player picks 2, firstScore = 8+2=10. The remaining sequence: [].

    total difference between players cores is the firstScore - secondScore = 10 - 9 = 1
*/

function getScoreDifference(numSeq) {
    let firstScore = 0;
    let secondScore = 0;
    let isPlayerOneTurn = true;

    while (numSeq.length > 0) {
        const currentNumber = numSeq.shift();
        
        if (isPlayerOneTurn) {
            firstScore += currentNumber;
        } else {
            secondScore += currentNumber;
        }

        if (currentNumber % 2 === 0) {
            numSeq.reverse();
        }

        isPlayerOneTurn = !isPlayerOneTurn;
    }

    return firstScore - secondScore;
}