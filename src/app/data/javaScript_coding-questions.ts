import { Question } from "../models/question";

export const JAVASCRIPT_CODING_DATA: Question[] = [
    {
        id: 1,
        title: 'Remove Duplicate Objects',
        technology: 'JavaScript',
        difficulty: 'Easy',
        companies: ['Capgemini', 'Wipro', 'Infosys'],
        problem: 'Remove duplicate objects based on id.',
        explanation: 'Use filter() with findIndex() to keep only unique ids.',
        code: `
    const result = users.filter((obj,index,self) =>
                  index === self.findIndex(item => item.id === obj.id));
    `,
        output: '[{id:1},{id:2},{id:3}]',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)'
    },
    {
        id: 2,
        title: 'Count Frequency of Elements in an Array Using JavaScript',
        technology: 'JavaScript',
        difficulty: 'Hard',
        companies: ['Cognizant', 'Accenture', 'IBM', 'Infosys', 'Capgemini'],
        problem: 'Given an array of fruit names, count how many times each fruit appears and return the result as an object.',
        explanation: 'Iterate through the array and use an object to keep track of each fruits count. Increment the count if the fruit already exists; otherwise, initialize it with 1.',
        code: ` 
       const data = ["apple", "banana", "apple", "orange", "apple"];

          const object = {};

          for (const item of data) {
            if (object[item]) {
              object[item]++;
            } else {
              object[item] = 1;
            }
          }

          console.log(object);`,
        output: `{
                    apple: 3,
                    banana: 1,
                    orange: 1
                  }`,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)'
    },
    {
        id: 3,
        title: 'Merge Two Objects',
        technology: 'JavaScript',
        difficulty: 'Medium',
        companies: ['Cognizant', 'Accenture', 'IBM', 'Yash Technologies', 'TCS'],
        problem: 'Given two objects, merge them into a single object using both Object.assign() and the spread (...) operator.',
        explanation: 'Object.assign() copies properties from the source object into the target object, updating existing keys. The spread operator creates a new object by combining properties, and if duplicate keys exist, the value from the object placed last takes precedence.',
        code: ` 
        const obj1 = { b: 2 ,a: 1,};
            const obj2 = { b: 5, c: 10 };
            console.log(Object.assign(obj1,obj2))
            
            // use Spred Operator

            const result = { ...obj2, ...obj1 };
            console.log(result);`,

        output: `{a: 1, b: 5, c: 10}`,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)'
    },
    {
        id: 4,
        title: 'Generate Fibonacci Series',
        technology: 'JavaScript',
        difficulty: 'Easy',
        companies: ['Wipro', 'Infosys', 'TCS'],
        problem: 'Generate the Fibonacci series up to a specified number of terms using a for loop.',
        explanation: 'Start with the first two numbers (0 and 1), then generate each next number by adding the previous two numbers.',
        code: ` 
          fibonacci: number[] = [];
          ngOnInit() {
            let first = 0;
            let second = 1;
            this.fibonacci = [first, second];
            for (let i = 1; i <= 10; i++) {
              let next = first + second;
              this.fibonacci.push(next);
              first = second;
              second = next;
            }
            console.log(this.fibonacci, 'fibonacci');
          }`,

        output: `Displays the Fibonacci sequence where each number is the sum of the previous two numbers."

      [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
      
    `,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)'
    },
    {
        id: 5,
        title: 'FizzBuzz Program',
        technology: 'JavaScript',
        difficulty: 'Easy',
        companies: ['Morningstar', 'Accenture', 'Capgemini'],
        problem: 'Print numbers from 1 to 100. Replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both 3 and 5 with "FizzBuzz".',
        explanation: 'Loop through numbers from 1 to 100 and check whether each number is divisible by 3, 5, or both using conditional statements.',
        code: ` 
        for (let i = 1; i <= 14; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
              console.log("FizzBuzz");
            } else if (i % 3 === 0) {
              console.log("Fizz");
            } else if (i % 5 === 0) {
              console.log("Buzz");
            } else {
              console.log(i);
            }
          }`,

        output: ` 1
              2
              Fizz
              4
              Buzz
              Fizz
              7
              8
              Fizz
              Buzz
              11
              Fizz
              13
              14
              FizzBuzz
    `,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)'
    },
    {
        id: 6,
        title: 'Check if Two Strings are Anagrams',
        technology: 'JavaScript',
        difficulty: 'Easy',
        companies: ['CBT Infotech', 'Cimpress Talent Connect', 'TCS'],
        problem: 'Given two strings, determine whether they are anagrams. Two strings are anagrams if they contain the same characters in a different order.',
        explanation: 'Split both strings into arrays, sort the characters, and compare each character. If all characters match, the strings are anagrams.',
        code: ` 
        const firstString = "listen";
        const secondString = "silent";

        const firstStr = firstString.split("").sort();
        const secondStr = secondString.split("").sort();

        if (firstStr.length === secondStr.length) {
          const result = firstStr.every((char, index) => char === secondStr[index]);
          console.log(result);
        }`,

        output: ` true  `,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)'
    },
    {
        id: 7,
        title: 'Find Vowels and Their Index Positions in a String',
        technology: 'JavaScript',
        difficulty: 'Easy',
        companies: ['Cognizant', 'Mphasis', 'Blueberry Labs'],
        problem: 'Find all vowels present in a given string and display their index positions.',
        explanation: 'Loop through the string characters and check whether each character exists in the vowels list. If it is a vowel, print its index and value.',
        code: ` 
        let name = "mahesh";
        let vowels = "aeiou";

        for (let i = 0; i < name.length; i++) {
          if (vowels.includes(name[i])) {
            console.log(i, "index", name[i]);
          }
        }`,

        output: ` 1 index a
              3 index e  `,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)'
    },
    {
        id: 8,
        title: 'Find the Highest and Second Highest Salary in an Array',
        technology: 'JavaScript',
        difficulty: 'Medium',
        companies: ['TCS', 'Accenture', 'Dhanush'],
        problem: 'Given an array of salaries, find the highest and second highest salary values without using built-in sorting methods.',
        explanation: 'Loop through the salary array and keep track of the largest and second-largest values by updating them whenever a higher salary is found.',
        code: ` 
       const salary = [10000, 40000, 12000, 5000, 50400];

          let firstHighest = 0;
          let secondHighest = 0;

          for (let slry of salary) {
            if (slry > firstHighest) {
              secondHighest = firstHighest;
              firstHighest = slry;
            } else if (slry > secondHighest) {
              secondHighest = slry;
            }
          }

          console.log(firstHighest, "---", secondHighest);`,

        output: `
    Prints the highest salary and the second highest salary from the given array.
     50400 --- 40000`,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)'
    },
    {
        id: 9,
        title: 'Check Palindrome String',
        technology: 'JavaScript',
        difficulty: 'Easy',
        companies: ['Infosys', 'cognizant', 'IBM'],
        problem: 'Check whether a given string is a palindrome or not using both the reverse method and a manual loop approach.',
        explanation: 'Reverse the string and compare it with the original string. If both strings are the same, the given string is a palindrome.',
        code: ` 
       const paliData = "madam";

        // Using Reverse Method
        const pali = paliData.split("").reverse().join("");

        if (paliData === pali) {
          console.log("This is a Palindrome...");
        }


        // Without Using Reverse Method**
        const paliData1 = "madam";
        let str = "";

        for (let i = paliData1.length - 1; i >= 0; i--) {
          str += paliData1[i];
        }

        if (paliData1 === str) {
          console.log("This is a Palindrome...*****");
        }`,

        output: `
    This is a Palindrome...
    This is a Palindrome...*****
    `,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)'
    },
    {
        id: 10,
        title: 'Reverse a String Without Using Built-in Methods',
        technology: 'JavaScript',
        difficulty: 'Easy',
        companies: ['Infosys', 'TCS', 'CGI'],
        problem: 'Reverse a given string without using the built-in reverse() method and display the reversed result.',
        explanation: 'Loop through the string from the last character to the first character and append each character to create the reversed string.',
        code: ` 
       const name = "Mahesh";
        let strReverse = "";

        for (let i = name.length - 1; i >= 0; i--) {
          strReverse += name[i];
        }

        console.log(strReverse);`,

        output: `
       hsehaM
    `,
        timeComplexity: 'O(1)',
        spaceComplexity: 'O(n)'
    },
]