import { Question, Quiz } from "../models/question";

export const RXJS_QUIZ_QUESTIONS: Quiz[] = [
    {
        id: 1,
        technology: "RxJS",
        difficulty: "Easy",
        question: "Which RxJS class represents a stream of values over time?",
        options: ["Observable", "Promise", "Subject", "EventEmitter"],
        answer: 0
    },
    {
        id: 2,
        technology: "RxJS",
        difficulty: "Easy",
        question: "Which method is used to start listening to an Observable?",
        options: ["listen()", "subscribe()", "observe()", "watch()"],
        answer: 1
    },
    {
        id: 3,
        technology: "RxJS",
        difficulty: "Easy",
        question: "Which operator transforms each emitted value?",
        options: ["filter", "map", "reduce", "take"],
        answer: 1
    },
    {
        id: 4,
        technology: "RxJS",
        difficulty: "Easy",
        question: "Which operator filters emitted values based on a condition?",
        options: ["map", "filter", "tap", "scan"],
        answer: 1
    },
    {
        id: 5,
        technology: "RxJS",
        difficulty: "Easy",
        question: "Which operator is commonly used for debugging without modifying emitted values?",
        options: ["tap", "map", "mergeMap", "switchMap"],
        answer: 0
    },
    {
        id: 6,
        technology: "RxJS",
        difficulty: "Easy",
        question: "Which RxJS creation function emits a single value and completes?",
        options: ["interval", "timer", "of", "fromEvent"],
        answer: 2
    },
    {
        id: 7,
        technology: "RxJS",
        difficulty: "Easy",
        question: "Which RxJS creation function converts an array into an Observable?",
        options: ["from", "of", "interval", "timer"],
        answer: 0
    },
    {
        id: 8,
        technology: "RxJS",
        difficulty: "Easy",
        question: "Which operator limits the number of emitted values?",
        options: ["skip", "take", "filter", "tap"],
        answer: 1
    },
    {
        id: 9,
        technology: "RxJS",
        difficulty: "Easy",
        question: "Which creation function emits sequential numbers at a fixed interval?",
        options: ["timer", "interval", "range", "of"],
        answer: 1
    },
    {
        id: 10,
        technology: "RxJS",
        difficulty: "Easy",
        question: "Which callback in subscribe() handles emitted values?",
        options: ["next", "complete", "error", "finally"],
        answer: 0
    },

    {
        id: 11,
        technology: "RxJS",
        difficulty: "Medium",
        question: "Which Subject stores the latest emitted value for new subscribers?",
        options: ["Subject", "BehaviorSubject", "ReplaySubject", "AsyncSubject"],
        answer: 1
    },
    {
        id: 12,
        technology: "RxJS",
        difficulty: "Medium",
        question: "Which operator combines the latest values from multiple Observables?",
        options: ["merge", "combineLatest", "concat", "zip"],
        answer: 1
    },
    {
        id: 13,
        technology: "RxJS",
        difficulty: "Medium",
        question: "Which operator emits values from Observables one after another?",
        options: ["merge", "concat", "race", "combineLatest"],
        answer: 1
    },
    {
        id: 14,
        technology: "RxJS",
        difficulty: "Medium",
        question: "Which operator skips the first specified number of emissions?",
        options: ["take", "skip", "filter", "tap"],
        answer: 1
    },
    {
        id: 15,
        technology: "RxJS",
        difficulty: "Medium",
        question: "Which operator accumulates emitted values over time?",
        options: ["reduce", "scan", "map", "filter"],
        answer: 1
    },
    {
        id: 16,
        technology: "RxJS",
        difficulty: "Medium",
        question: "Which operator delays emissions by a specified duration?",
        options: ["delay", "debounceTime", "timer", "timeout"],
        answer: 0
    },
    {
        id: 17,
        technology: "RxJS",
        difficulty: "Medium",
        question: "Which operator ignores emissions occurring too quickly?",
        options: ["debounceTime", "delay", "take", "skip"],
        answer: 0
    },
    {
        id: 18,
        technology: "RxJS",
        difficulty: "Medium",
        question: "Which operator performs side effects without changing emitted values?",
        options: ["map", "tap", "filter", "scan"],
        answer: 1
    },
    {
        id: 19,
        technology: "RxJS",
        difficulty: "Medium",
        question: "Which operator catches Observable errors and returns another Observable?",
        options: ["retry", "catchError", "throwError", "finalize"],
        answer: 1
    },
    {
        id: 20,
        technology: "RxJS",
        difficulty: "Medium",
        question: "Which operator retries a failed Observable a specified number of times?",
        options: ["repeat", "retry", "catchError", "takeUntil"],
        answer: 1
    },
    {
        id: 21,
        technology: "RxJS",
        difficulty: "Hard",
        question: "Which operator cancels the previous inner Observable when a new value is emitted?",
        options: ["mergeMap", "concatMap", "switchMap", "exhaustMap"],
        answer: 2
    },
    {
        id: 22,
        technology: "RxJS",
        difficulty: "Hard",
        question: "Which operator ignores new emissions until the current inner Observable completes?",
        options: ["switchMap", "mergeMap", "concatMap", "exhaustMap"],
        answer: 3
    },
    {
        id: 23,
        technology: "RxJS",
        difficulty: "Hard",
        question: "Which operator subscribes to all inner Observables simultaneously?",
        options: ["concatMap", "switchMap", "mergeMap", "exhaustMap"],
        answer: 2
    },
    {
        id: 24,
        technology: "RxJS",
        difficulty: "Hard",
        question: "Which operator processes inner Observables sequentially?",
        options: ["switchMap", "concatMap", "mergeMap", "race"],
        answer: 1
    },
    {
        id: 25,
        technology: "RxJS",
        difficulty: "Hard",
        question: "Which Subject replays a specified number of previous values to new subscribers?",
        options: ["BehaviorSubject", "ReplaySubject", "AsyncSubject", "Subject"],
        answer: 1
    },
    {
        id: 26,
        technology: "RxJS",
        difficulty: "Hard",
        question: "Which Subject emits only the final value when the source completes?",
        options: ["ReplaySubject", "BehaviorSubject", "AsyncSubject", "Subject"],
        answer: 2
    },
    {
        id: 27,
        technology: "RxJS",
        difficulty: "Hard",
        question: "Which operator automatically unsubscribes when another Observable emits?",
        options: ["take", "takeUntil", "skipUntil", "finalize"],
        answer: 1
    },
    {
        id: 28,
        technology: "RxJS",
        difficulty: "Hard",
        question: "Which operator waits for all source Observables to complete before emitting their last values?",
        options: ["combineLatest", "merge", "forkJoin", "zip"],
        answer: 2
    },
    {
        id: 29,
        technology: "RxJS",
        difficulty: "Hard",
        question: "Which operator emits paired values from multiple Observables in sequence?",
        options: ["combineLatest", "zip", "merge", "concat"],
        answer: 1
    },
    {
        id: 30,
        technology: "RxJS",
        difficulty: "Hard",
        question: "Which operator runs cleanup logic when an Observable completes or errors?",
        options: ["tap", "finalize", "catchError", "retry"],
        answer: 1
    }

]