import { Quiz } from "../models/question";


export const QUIZ_DATA: Quiz[] = [

    {
        id: 1,

        technology: 'Angular',

        difficulty: 'Easy',

        question: 'What is Dependency Injection in Angular?',

        options: [
            'It creates components',
            'It injects dependencies into classes',
            'It loads modules',
            'It creates services'
        ],

        answer: 1

    },

    {
        id: 2,
        technology: 'Angular',
        difficulty: 'Easy',
        question: 'Which lifecycle hook is called once after component initialization?',
        options: [
            'ngOnInit',
            'ngDoCheck',
            'ngAfterViewChecked',
            'ngAfterContentChecked'
        ],
        answer: 0
    },
    {
        id: 3,
        technology: 'Angular',
        difficulty: 'Easy',
        question: 'Which lifecycle hook is called after Angular initializes all data-bound properties?',
        options: ["ngOnDestroy", "ngOnInit", "ngAfterViewInit", "constructor"],
        answer: 1
    },
    {
        id: 4,
        technology: 'Angular',
        difficulty: 'Medium',
        question: "Which directive is used for conditional rendering?",
        options: ["*ngFor", "*ngIf", "ngSwitch", "ngStyle"],
        answer: 1
    },
    {
        id: 5,
        technology: 'Angular',
        difficulty: 'Easy',
        question: "Which directive is used to loop through a list?",
        options: ["*ngIf", "*ngFor", "ngClass", "ngStyle"],
        answer: 1
    },
    {
        id: 6,
        technology: 'Angular',
        difficulty: 'Easy',
        question: 'Which lifecycle hook is called once after component initialization?',
        options: [
            'ngOnInit',
            'ngDoCheck',
            'ngAfterViewChecked',
            'ngAfterContentChecked'
        ],
        answer: 0
    },
    {
        id: 7,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which module is required for Reactive Forms?",
        options: ["FormsModule", "ReactiveFormsModule", "RouterModule", "CommonModule"],
        answer: 1
    },
    {
        id: 8,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which directive provides two-way data binding?",
        options: ["ngClass", "ngIf", "ngModel", "ngFor"],
        answer: 2
    },
    {
        id: 9,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which syntax is used for property binding?",
        options: ["()", "[]", "{{}}", "[()]"],
        answer: 1
    },
    {
        id: 10,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which syntax is used for event binding?",
        options: ["()", "[]", "{{}}", "[()]"],
        answer: 0
    },
    {
        id: 11,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which syntax is used for interpolation?",
        options: ["()", "{{}}", "[]", "[()]"],
        answer: 1
    },
    {
        id: 12,
        technology: "Angular",
        difficulty: "Medium",
        question: "Which decorator is used to inject a service into Angular's DI system?",
        options: ["@Directive", "@Component", "@Injectable", "@Pipe"],
        answer: 2
    },
    {
        id: 13,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which decorator receives data from a parent component?",
        options: ["@Output", "@Input", "@ViewChild", "@Inject"],
        answer: 1
    },
    {
        id: 14,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which decorator is used to send events from child to parent?",
        options: ["@Input", "@Output", "@Injectable", "@HostListener"],
        answer: 1
    },
    {
        id: 15,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which Angular module is used for routing?",
        options: ["FormsModule", "RouterModule", "BrowserModule", "CommonModule"],
        answer: 1
    },
    {
        id: 16,
        technology: "Angular",
        difficulty: "Medium",
        question: "Which lifecycle hook is called before a component is destroyed?",
        options: ["ngAfterViewInit", "ngOnDestroy", "ngOnChanges", "ngDoCheck"],
        answer: 1
    },
    {
        id: 17,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which Angular CLI command creates a new component?",
        options: ["ng component", "ng create component", "ng g c", "ng new component"],
        answer: 2
    },
    {
        id: 18,
        technology: "Angular",
        difficulty: "Medium",
        question: "Which pipe automatically subscribes to an Observable?",
        options: ["DatePipe", "CurrencyPipe", "AsyncPipe", "JsonPipe"],
        answer: 2
    },
    {
        id: 19,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which pipe converts an object into JSON format?",
        options: ["AsyncPipe", "JsonPipe", "DatePipe", "SlicePipe"],
        answer: 1
    },
    {
        id: 20,
        technology: "Angular",
        difficulty: "Easy",
        question: "Which module is imported by default in the root Angular module?",
        options: ["CommonModule", "BrowserModule", "FormsModule", "RouterModule"],
        answer: 1
    },
    {
        id: 21,
        technology: "Angular",
        difficulty: "Medium",
        question: "Which lifecycle hook is triggered whenever an @Input property changes?",
        options: ["ngOnInit", "ngOnDestroy", "ngOnChanges", "ngAfterViewInit"],
        answer: 2
    },
    {
        id: 22,
        technology: "Angular",
        difficulty: "Medium",
        question: "Which directive is used to dynamically add or remove CSS classes?",
        options: ["ngStyle", "ngClass", "ngIf", "ngSwitch"],
        answer: 1
    },
    {
        id: 23,
        technology: "Angular",
        difficulty: "Hard",
        question: "Which Change Detection strategy checks a component only when its @Input reference changes or it is explicitly marked for check?",
        options: ["Default", "OnPush", "Manual", "Detached"],
        answer: 1
    },
    {
        id: 24,
        technology: "Angular",
        difficulty: "Hard",
        question: "Which RxJS operator cancels the previous HTTP request when a new value is emitted?",
        options: ["mergeMap", "concatMap", "switchMap", "exhaustMap"],
        answer: 2
    },
    {
        id: 25,
        technology: "Angular",
        difficulty: "Hard",
        question: "Which Angular Router guard is used to prevent navigation away from a route with unsaved changes?",
        options: ["CanActivate", "CanLoad", "CanDeactivate", "Resolve"],
        answer: 2
    },
    {
        id: 26,
        technology: "Angular",
        difficulty: "Hard",
        question: "Which lifecycle hook is called after Angular initializes the component's view and child views?",
        options: ["ngAfterContentInit", "ngAfterViewInit", "ngDoCheck", "ngOnChanges"],
        answer: 1
    },
    {
        id: 27,
        technology: "Angular",
        difficulty: "Hard",
        question: "Which decorator is used to query a child component or DOM element from the component's template?",
        options: ["@Input", "@Output", "@ViewChild", "@Inject"],
        answer: 2
    },
    {
        id: 28,
        technology: "Angular",
        difficulty: "Hard",
        question: "Which Angular feature allows modules or components to be loaded only when they are needed?",
        options: ["Ahead-of-Time Compilation", "Lazy Loading", "Tree Shaking", "Server-Side Rendering"],
        answer: 1
    },
    {
        id: 29,
        technology: "Angular",
        difficulty: "Hard",
        question: "Which RxJS Subject stores the latest emitted value and immediately emits it to new subscribers?",
        options: ["Subject", "ReplaySubject", "BehaviorSubject", "AsyncSubject"],
        answer: 2
    },
    {
        id: 30,
        technology: "Angular",
        difficulty: "Hard",
        question: "Which Angular decorator is used to listen to events on the host element?",
        options: ["@HostListener", "@HostBinding", "@ViewChild", "@Injectable"],
        answer: 0
    },
    {
        id: 31,
        technology: "Angular",
        difficulty: "Hard",
        question: "Which Angular Router feature is used to preload lazy-loaded modules in the background?",
        options: ["CanLoad", "PreloadAllModules", "CanActivate", "Resolve"],
        answer: 1
    },
    {
        id: 32,
        technology: "Angular",
        difficulty: "Hard",
        question: "Which Angular compiler converts templates and TypeScript into optimized JavaScript during the build process?",
        options: ["JIT Compiler", "Ivy Compiler", "Webpack", "Babel"],
        answer: 1
    },
];