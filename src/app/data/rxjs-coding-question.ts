import { Question } from "../models/question";

export const RXJS_CODING_QUESTIONS: Question[] = [
    {
        id: 1,
        title: "Search Employees using debounceTime",
        technology: "RxJS",
        difficulty: "Medium",
        companies: ["Infosys", "TCS", "Accenture", "Cognizant"],
        problem: "Implement a search box that waits for 500ms before making an API call.",
        explanation: "Use Subject, debounceTime, distinctUntilChanged and switchMap to reduce unnecessary API requests.",
        code: `
            searchSubject = new Subject<string>();

            ngOnInit() {
                this.searchSubject.pipe(
                    debounceTime(500),
                    distinctUntilChanged(),
                    switchMap(text => this.employeeService.search(text))
                ).subscribe(data => {
                    this.employees = data;
                });
            }

            search(event: any) {
                this.searchSubject.next(event.target.value);
            }
`,
        output: "API is called only after the user stops typing.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    {
        id: 2,
        title: "Cancel Previous HTTP Requests",
        technology: "RxJS",
        difficulty: "Medium",
        companies: ["Amazon", "Adobe", "Microsoft"],
        problem: "Cancel the previous API request when a new search keyword is entered.",
        explanation: "Use switchMap to cancel the previous Observable.",
        code: `
            this.searchSubject.pipe(
                switchMap(text => this.http.get('/api/users?q=' + text))
                ).subscribe(res => {
                console.log(res);
            });
`,
        output: "Previous API requests are automatically cancelled.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },

    {
        id: 3,
        title: "Auto Unsubscribe using takeUntil",
        technology: "RxJS",
        difficulty: "Medium",
        companies: ["Infosys", "IBM", "Oracle"],
        problem: "Prevent memory leaks by unsubscribing when the component is destroyed.",
        explanation: "Use takeUntil with Subject.",
        code: `
            destroy$ = new Subject<void>();

                ngOnInit() {
                    interval(1000)
                        .pipe(takeUntil(this.destroy$))
                        .subscribe(console.log);
                }

                ngOnDestroy() {
                    this.destroy$.next();
                    this.destroy$.complete();
                }
`,
        output: "Subscription automatically stops.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },

    {
        id: 4,
        title: "Share Data using BehaviorSubject",
        technology: "RxJS",
        difficulty: "Medium",
        companies: ["Capgemini", "Infosys", "Wipro"],
        problem: "Share logged-in user data between components.",
        explanation: "Use BehaviorSubject in a shared service.",
        code: `
            private user = new BehaviorSubject<any>(null);

            user$ = this.user.asObservable();

            setUser(data:any){
              this.user.next(data);
            }
`,
        output: "All subscribed components receive updated user data.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },

    {
        id: 5,
        title: "Combine Multiple API Calls",
        technology: "RxJS",
        difficulty: "Hard",
        companies: ["Amazon", "Microsoft", "Oracle"],
        problem: "Load Users and Roles together before displaying the page.",
        explanation: "Use forkJoin to execute APIs in parallel.",
        code: `
            forkJoin({
                users: this.http.get('/users'),
                roles: this.http.get('/roles')
                }).subscribe(res => {
                    console.log(res.users);
                    console.log(res.roles);
                });
`,
        output: "Both API responses are received together.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(n)"
    },

    {
        id: 6,
        title: "Retry Failed API Request",
        technology: "RxJS",
        difficulty: "Medium",
        companies: ["Infosys", "Cognizant", "IBM"],
        problem: "Retry an API request three times before showing an error.",
        explanation: "Use retry and catchError.",
        code: `
            this.http.get('/employees')
              .pipe(
                retry(3),
                catchError(err => {
                    return of([]);
                })
            ).subscribe(data => {
                this.list = data;
            });
`,
        output: "Retries failed requests automatically.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },

    {
        id: 7,
        title: "Display Loading Spinner",
        technology: "RxJS",
        difficulty: "Medium",
        companies: ["Accenture", "TCS", "Capgemini"],
        problem: "Show a loader while the API is executing.",
        explanation: "Use finalize operator.",
        code: `
            loading = true;

            this.http.get('/users').pipe(
                finalize(() => this.loading = false)).subscribe(data => {
                this.users = data;
            });
`,
        output: "Loader automatically hides after request completion.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },

    {
        id: 8,
        title: "Merge Two Button Click Streams",
        technology: "RxJS",
        difficulty: "Hard",
        companies: ["Adobe", "Amazon", "Google"],
        problem: "Merge click events from two buttons into one Observable.",
        explanation: "Use merge operator.",
        code: `
        const save$ = fromEvent(saveBtn,'click');
        const cancel$ = fromEvent(cancelBtn,'click');

        merge(save$, cancel$).subscribe(event => {
            console.log(event);
        });
`,
        output: "Single stream receives both button click events.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },

    {
        id: 9,
        title: "Execute APIs Sequentially",
        technology: "RxJS",
        difficulty: "Hard",
        companies: ["Microsoft", "Oracle", "Amazon"],
        problem: "Call Login API first and then Profile API.",
        explanation: "Use concatMap.",
        code: `
            this.login().pipe(
                concatMap(() => this.getProfile())
            ).subscribe(profile => {
                console.log(profile);
            });
`,
        output: "Second API executes only after the first completes.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    },

    {
        id: 10,
        title: "Implement Live Search",
        technology: "RxJS",
        difficulty: "Hard",
        companies: ["Google", "Amazon", "Microsoft"],
        problem: "Implement Google-like live search with minimum API calls.",
        explanation: "Combine debounceTime, distinctUntilChanged and switchMap.",
        code: `
            fromEvent(searchBox,'keyup').pipe(
                map((e:any) => e.target.value),
                debounceTime(500),
                distinctUntilChanged(),
                switchMap(text => this.http.get('/search?q=' + text))
            ).subscribe(console.log);
`,
        output: "Efficient live search implementation.",
        timeComplexity: "O(n)",
        spaceComplexity: "O(1)"
    }
]