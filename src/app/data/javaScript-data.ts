import { Quiz } from "../models/question";
export const JAVASCRIPT_QUIZ_DATA: Quiz[] =
    [
        {
            id: 1,
            technology: "JavaScript",
            difficulty: "Easy",
            question: "Which keyword is used to declare a block-scoped variable?",
            options: ["var", "let", "const", "define"],
            answer: 1
        },
        {
            id: 2,
            technology: "JavaScript",
            difficulty: "Easy",
            question: "Which method is used to print output in the browser console?",
            options: ["console.log()", "print()", "echo()", "document.write()"],
            answer: 0
        },
        {
            id: 3,
            technology: "JavaScript",
            difficulty: "Easy",
            question: "Which operator is used for strict equality comparison?",
            options: ["==", "=", "===", "!="],
            answer: 2
        },
        {
            id: 4,
            technology: "JavaScript",
            difficulty: "Easy",
            question: "Which keyword declares a constant variable?",
            options: ["let", "var", "const", "static"],
            answer: 2
        },
        {
            id: 5,
            technology: "JavaScript",
            difficulty: "Easy",
            question: "Which method adds an element to the end of an array?",
            options: ["pop()", "push()", "shift()", "unshift()"],
            answer: 1
        },
        {
            id: 6,
            technology: "JavaScript",
            difficulty: "Easy",
            question: "Which method removes the last element from an array?",
            options: ["pop()", "push()", "shift()", "slice()"],
            answer: 0
        },
        {
            id: 7,
            technology: "JavaScript",
            difficulty: "Easy",
            question: "Which loop executes at least once?",
            options: ["for", "while", "do...while", "forEach"],
            answer: 2
        },
        {
            id: 8,
            technology: "JavaScript",
            difficulty: "Easy",
            question: "Which symbol is used for single-line comments?",
            options: ["/* */", "//", "<!-- -->", "#"],
            answer: 1
        },
        {
            id: 9,
            technology: "JavaScript",
            difficulty: "Easy",
            question: "Which built-in object represents a date and time?",
            options: ["Time", "Clock", "Date", "Calendar"],
            answer: 2
        },
        {
            id: 10,
            technology: "JavaScript",
            difficulty: "Easy",
            question: "Which function converts a JSON string into a JavaScript object?",
            options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
            answer: 1
        },
        {
            id: 11,
            technology: "JavaScript",
            difficulty: "Medium",
            question: "Which array method creates a new array by applying a function to each element?",
            options: ["filter()", "map()", "reduce()", "find()"],
            answer: 1
        },
        {
            id: 12,
            technology: "JavaScript",
            difficulty: "Medium",
            question: "Which keyword refers to the current object in JavaScript?",
            options: ["self", "that", "this", "current"],
            answer: 2
        },
        {
            id: 13,
            technology: "JavaScript",
            difficulty: "Medium",
            question: "Which array method returns the first element that matches a condition?",
            options: ["find()", "filter()", "map()", "every()"],
            answer: 0
        },
        {
            id: 14,
            technology: "JavaScript",
            difficulty: "Medium",
            question: "Which operator is used for optional chaining?",
            options: ["??", "?.", "::", "&&"],
            answer: 1
        },
        {
            id: 15,
            technology: "JavaScript",
            difficulty: "Medium",
            question: "Which method merges two or more arrays without modifying the originals?",
            options: ["push()", "splice()", "concat()", "join()"],
            answer: 2
        },
        {
            id: 16,
            technology: "JavaScript",
            difficulty: "Medium",
            question: "Which function schedules code to run after a specified delay?",
            options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
            answer: 0
        },
        {
            id: 17,
            technology: "JavaScript",
            difficulty: "Medium",
            question: "Which method is used to remove the last element from an array and return it?",
            options: ["shift()", "splice()", "pop()", "slice()"],
            answer: 2
        },
        {
            id: 18,
            technology: "JavaScript",
            difficulty: "Medium",
            question: "Which operator provides a default value only when the left side is null or undefined?",
            options: ["||", "??", "&&", "?."],
            answer: 1
        },
        {
            id: 19,
            technology: "JavaScript",
            difficulty: "Medium",
            question: "Which method executes a reducer function on an array?",
            options: ["reduce()", "map()", "filter()", "find()"],
            answer: 0
        },
        {
            id: 20,
            technology: "JavaScript",
            difficulty: "Medium",
            question: "Which keyword is used to handle exceptions?",
            options: ["catch", "throw", "try", "finally"],
            answer: 2
        },
        {
            id: 21,
            technology: "JavaScript",
            difficulty: "Hard",
            question: "Which method creates a new Promise that resolves when all promises resolve?",
            options: ["Promise.any()", "Promise.all()", "Promise.race()", "Promise.resolve()"],
            answer: 1
        },
        {
            id: 22,
            technology: "JavaScript",
            difficulty: "Hard",
            question: "Which keyword pauses execution inside an async function?",
            options: ["yield", "await", "pause", "sleep"],
            answer: 1
        },
        {
            id: 23,
            technology: "JavaScript",
            difficulty: "Hard",
            question: "Which event loop queue has higher priority?",
            options: ["Macrotask Queue", "Microtask Queue", "Callback Queue", "Render Queue"],
            answer: 1
        },
        {
            id: 24,
            technology: "JavaScript",
            difficulty: "Hard",
            question: "Which method is used to define a property with custom descriptors?",
            options: ["Object.assign()", "Object.create()", "Object.defineProperty()", "Object.freeze()"],
            answer: 2
        },
        {
            id: 25,
            technology: "JavaScript",
            difficulty: "Hard",
            question: "Which keyword creates a generator function?",
            options: ["generator", "yield", "function*", "async"],
            answer: 2
        },
        {
            id: 26,
            technology: "JavaScript",
            difficulty: "Hard",
            question: "Which object allows storing key-value pairs where keys can be any type?",
            options: ["Object", "Map", "Set", "WeakSet"],
            answer: 1
        },
        {
            id: 27,
            technology: "JavaScript",
            difficulty: "Hard",
            question: "Which object holds weak references to object keys?",
            options: ["Map", "WeakMap", "Set", "WeakSet"],
            answer: 1
        },
        {
            id: 28,
            technology: "JavaScript",
            difficulty: "Hard",
            question: "Which method prevents adding, removing, or modifying object properties?",
            options: ["Object.seal()", "Object.preventExtensions()", "Object.freeze()", "Object.lock()"],
            answer: 2
        },
        {
            id: 29,
            technology: "JavaScript",
            difficulty: "Hard",
            question: "Which statement is true about arrow functions?",
            options: [
                "They have their own 'this'",
                "They cannot return values",
                "They inherit 'this' from the surrounding scope",
                "They must always be asynchronous"
            ],
            answer: 2
        },
        {
            id: 30,
            technology: "JavaScript",
            difficulty: "Hard",
            question: "Which JavaScript feature allows code to intercept fundamental object operations?",
            options: ["Reflect", "Proxy", "Symbol", "Closure"],
            answer: 1
        }

    ]