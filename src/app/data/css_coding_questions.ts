import { Question } from "../models/question";

export const CSS_CODING_QUESTIONS: Question[] = [
    {
        id: 1,
        title: "Build a Responsive Dashboard Layout",
        technology: "CSS",
        difficulty: "Medium",
        companies: ["Infosys", "Accenture", "TCS"],
        problem: "Create a responsive dashboard using CSS Grid.",
        explanation: "Use grid-template-areas, auto-fit and minmax.",
        code: `
        .dashboard{
                display:grid;
                grid-template-columns:250px 1fr;
                gap:20px;
            }
`,
        output: "Responsive dashboard layout.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },
    {
        id: 2,
        title: "Create a Responsive Navigation Menu",
        technology: "CSS",
        difficulty: "Medium",
        companies: ["IBM", "Capgemini", "Wipro"],
        problem: "Convert a horizontal menu into a mobile hamburger layout using media queries.",
        explanation: "Use Flexbox and media queries.",
        code: `
            nav{
                display:flex;
                justify-content:space-between;
            }

            @media(max-width:768px){
                nav{
                    flex-direction:column;
                   }
            }
`,
        output: "Responsive navigation.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },
    {
        id: 3,
        title: "Build a Modal Popup",
        technology: "CSS",
        difficulty: "Medium",
        companies: ["Cognizant", "Infosys", "Deloitte"],
        problem: "Design a centered modal popup with overlay.",
        explanation: "Use fixed positioning, z-index and Flexbox.",
        code: `
            .overlay{
                position:fixed;
                inset:0;
                display:flex;
                justify-content:center;
                align-items:center;
                background:rgba(0,0,0,.5);
            }
`,
        output: "Centered modal popup.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },
    {
        id: 4,
        title: "Create an Animated Sidebar",
        technology: "CSS",
        difficulty: "Hard",
        companies: ["Amazon", "Microsoft", "Oracle"],
        problem: "Create a sidebar that slides in from the left using CSS transitions.",
        explanation: "Use transform and transition.",
        code: `
            .sidebar{
                transform:translateX(-100%);
                transition:.4s;
            }

            .sidebar.open{
                transform:translateX(0);
            }
`,
        output: "Animated sliding sidebar.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    },
    {
        id: 5,
        title: "Implement Dark Mode using CSS Variables",
        technology: "CSS",
        difficulty: "Hard",
        companies: ["Adobe", "Amazon", "Zoho"],
        problem: "Implement a light and dark theme using CSS custom properties.",
        explanation: "Use :root variables and override them for dark mode.",
        code: `
            :root{
                --bg:#fff;
                --text:#222;
            }

            .dark{
                --bg:#222;
                --text:#fff;
            }

            body{
                background:var(--bg);
                color:var(--text);
            }
`,
        output: "Supports light and dark themes.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)"
    }
]