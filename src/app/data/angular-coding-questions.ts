import { Question } from "../models/question";

export const ANGULAR_CODING_QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'Implement Search Filter',
    technology: 'Angular',
    difficulty: 'Easy',
    companies: ['Infosys', 'TCS', 'Accenture'],
    problem: 'Create a search input that filters a list of employees in real time using Angular.',
    explanation: 'Use ngModel or Reactive Forms and filter the array using the input value.',
    code: `
          employees = [
            { id: 1, name: 'Mahesh' },
            { id: 2, name: 'Ravi' },
            { id: 3, name: 'Arjun' }
           ];

            searchText = '';

            get filteredEmployees() {
              return this.employees.filter(emp =>
                  emp.name.toLowerCase().includes(this.searchText.toLowerCase())
              );
            }`,
    output: 'Displays only matching employees.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  },

  {
    id: 2,
    title: 'Dynamic Table with Pagination',
    technology: 'Angular',
    difficulty: 'Medium',
    companies: ['Infosys', 'TCS', 'Tech Mahindra', 'Wipro'],
    problem: 'Display employee data with client-side pagination.',
    explanation: 'Use slice() based on current page and page size.',
    code: `
        <table border=1>
            <th>Name</th>
            <th>ID</th>
            <th>City</th>
            <th>Policy Name</th>
            <th>Policy Number</th>
            <th>Premium Amount</th>
            <tr *ngFor="let user of pagenateData">
              <td>{{user.name}}</td>
              <td>{{user.age}}</td>
              <td>{{user.city}}</td>
              <td>{{user.policyName}}</td>
              <td>{{user.policyNumber}}</td>
              <td>{{user.premiumAmount}}</td>
            </tr>
          </table>
          <button (click)="previousPage()" [disabled] ="currentPage === 1">previous</button>
          <span *ngFor="let a of pages">{{a}}</span>
          <button (click)="next()" [disabled]="currentPage === totalPage">NEXT</button>

         currentPage = 1;
         pageSize = 5;

         ngOnInit(){
            get pagenateData() {
              const startPage = (this.currentPage - 1) * this.pageSize;
              return this.userData.slice(startPage, startPage + this.pageSize);
            }
            get pages() {
              return Array.from({ length: this.totalPage }, (_, i) => i + 1);
            }
            next() {
              console.log(this.currentPage, '=', this.totalPage);
              if (this.currentPage < this.totalPage) {
                this.currentPage++;
              }
            }
            previousPage() {
              if (this.currentPage > 1) {
                this.currentPage--;
              }
              console.log(this.currentPage, '==TriggerPrevious', this.pagenateData);
            }
            get totalPage() {
              return Math.ceil(this.userData.length / this.pageSize);
            }

         }
}`,
    output: 'Shows only 5 records per page.',
    timeComplexity: 'O(k)',
    spaceComplexity: 'O(k)'
  },
  {
    id: 3,
    title: 'Dynamic Reactive Form',
    technology: 'Angular',
    difficulty: 'Hard',
    companies: ['Cognizant', 'MotherSon', 'Dhanush', 'Virtusa'],
    problem: 'Create a dynamic form where users can add multiple skills.',
    explanation: 'Use FormArray to dynamically add and remove controls.',
    code: `
    skills = this.fb.array([]);

    addSkill(){
      this.skills.push(this.fb.control(''));
    }

    removeSkill(index: number){
      this.skills.removeAt(index);
    }
                `,
    output: 'Users can dynamically add or remove skill fields.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 4,
    title: 'Group Objects by a Property',
    technology: 'Angular',
    difficulty: 'Hard',
    companies: ['Cognizant', 'Accenture', 'Infosys', 'IBM', 'Stag Innovations', 'Accenture', 'Wipro', 'Deloitte'],
    problem: 'groups objects by the name property and converts the array into an object.',
    explanation: 'This code groups array objects by the name property and transforms the array into an object where each key is a name and the value is an array of matching objects.',
    code: `
        data = [
        { id: 1, name: 'Mahesh' },
        { id: 2, name: 'Arjun' },
        { id: 2, name: 'Arjun' },
        { id: 1, name: 'Mahesh' },
      ];
      ngOnInit() {
        const arrayObject = this.data.reduce((acc, item) => {
          if (!acc[item.name]) {
            acc[item.name] = [];
          }
          acc[item.name].push({
            id: item.id,
          });
          return acc;
        }, {});

        // Using ForEach*** Altranative
        let result = {};
        this.data.forEach((val) => {
          if (!result[val.name]) {
            result[val.name] = [];
          }
          result[val.name].push(val);
        });
        console.log(result);
      }
    `,
    output: `{
            Mahesh: [
                { id: 1 },
                { id: 1 }
            ],
            Arjun: [
                { id: 2 },
                { id: 2 }
            ]
            }`,
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 5,
    title: 'Filter Array Data Using Search Input',
    technology: 'Angular',
    difficulty: 'Easy',
    companies: ['Cognizant', 'Syngenta group', 'Aivar Innovations'],
    problem: 'Create a search feature that filters a list of users based on the text entered in an input field and displays only the matching results.',
    explanation: 'As the user types, the searchFilter() method filters the original array using the filter() method and includes(). The filtered data is then displayed dynamically using *ngFor.',
    code: ` 
       search: String = '';
       dammyArray = []; 

         ngOnInit() {
            this.dammyArray = this.userData;
          }
          searchFilter() {
            this.dammyArray = this.userData.filter((va) =>
              va.name.toLocaleLowerCase().includes(this.search)
            );
            console.log(this.dammyArray, '===>>', this.userData);
          }

          // Html File...
            <input type="text" [(ngModel)]="search" (keyup)="searchFilter()">
            <div *ngFor="let a of dammyArray">
              <p>{{a.name}}</p>
            </div>`,

    output: `Only the users whose names contain the search text are displayed.
      Search: "jo"

      Displayed Results:
      John
      Johnson
      
    `,
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(n)'
  },

  {
    id: 6,
    title: 'Remove Duplicate Values from an Array',
    technology: 'Angular',
    difficulty: 'Easy',
    companies: ['Cognizant', 'Dhanush', 'Motherson', 'Vassar Labs'],
    problem: 'Given an array containing duplicate numbers, remove the duplicate values and return only unique elements.',
    explanation: 'Loop through the array and use includes() to check whether the value already exists. If it is not present, add it to the new array.',
    code: ` 
        duplicates = [10, 30, 20, 10, 40, 30, 60];
        arr = [];

        ngOnInit(){
          for (let data of this.duplicates) {
            if (!this.arr.includes(data)) {
              this.arr.push(data);
              }
            }
        console.log(this.arr)
        }`,

    output: `
       [10, 30, 20, 40, 60]
    `,
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(n)'
  },
]