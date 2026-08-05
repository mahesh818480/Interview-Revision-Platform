import { Question } from "../models/question";

export const HTML_CODING_QUESTIONS: Question[] =
    [
        {
            id: 1,
            title: "Build a Registration Form",
            technology: "HTML",
            difficulty: "Easy",
            companies: ["Infosys", "TCS", "Accenture"],
            problem: "Create a registration form with Full Name, Email, Password, Confirm Password, Gender, Country, Hobbies and Submit button.",
            explanation: "Use semantic HTML5 form elements with built-in validation.",
            code: `
                <form>
                    <fieldset>
                        <legend>Registration Form</legend>

                        <label for="name">Full Name</label>
                        <input type="text" id="name" placeholder="Enter Name" required>

                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter Email" required>

                        <label for="password">Password</label>
                        <input type="password" id="password" minlength="8" required>

                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" required>

                        <p>Gender</p>
                        <input type="radio" name="gender"> Male
                        <input type="radio" name="gender"> Female

                        <p>Hobbies</p>
                        <input type="checkbox"> Reading
                        <input type="checkbox"> Sports

                        <br><br>

                        <label>Country</label>
                        <select>
                        <option>India</option>
                        <option>USA</option>
                        <option>UK</option>
                        </select>

                        <br><br>

                        <button type="submit">Register</button>

                    </fieldset>
                </form>
`,
            output: "Displays a registration form.",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)"
        },

        {
            id: 2,
            title: "Build a Login Form",
            technology: "HTML",
            difficulty: "Easy",
            companies: ["Infosys", "Wipro", "Capgemini"],
            problem: "Create a login page containing Email, Password, Remember Me, Forgot Password and Login button.",
            explanation: "Use semantic form controls.",
            code: `
                <form>

                    <h2>Login</h2>

                    <label>Email</label>
                    <input type="email" required>

                    <label>Password</label>
                    <input type="password" required>

                    <br><br>

                    <input type="checkbox">
                    Remember Me

                    <br><br>

                    <a href="#">Forgot Password?</a>

                    <br><br>

                    <button>Login</button>

                </form>
`,
            output: "Displays a login page.",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)"
        },

        {
            id: 3,
            title: "Create Employee Table",
            technology: "HTML",
            difficulty: "Easy",
            companies: ["TCS", "HCL", "Tech Mahindra"],
            problem: "Create an employee table with Id, Name, Department and Salary.",
            explanation: "Use caption, thead, tbody and semantic table elements.",
            code: `
            <table border="1">

                <caption>Employee Details</caption>

                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Salary</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>101</td>
                    <td>Mahesh</td>
                    <td>Angular</td>
                    <td>800000</td>
                    </tr>

                    <tr>
                    <td>102</td>
                    <td>Ravi</td>
                    <td>React</td>
                    <td>700000</td>
                    </tr>
                </tbody>

            </table>
`,
            output: "Displays employee details in tabular format.",
            timeComplexity: "O(n)",
            spaceComplexity: "O(1)"
        },

        {
            id: 4,
            title: "Create a Semantic Blog Page",
            technology: "HTML",
            difficulty: "Medium",
            companies: ["IBM", "Cognizant", "Accenture"],
            problem: "Build a blog page using semantic HTML5 elements.",
            explanation: "Use header, nav, main, article, aside and footer.",
            code: `
                <header>

                <h1>Tech Blog</h1>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">Blogs</a>
                    <a href="#">Contact</a>
                </nav>

                </header>

                <main>

                <article>

                    <h2>Angular Signals</h2>

                    <p>This is the latest Angular feature...</p>

                </article>

                <aside>

                    Related Posts

                </aside>

                </main>

                <footer>

                Copyright © 2026

                </footer>
`,
            output: "Displays semantic blog structure.",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)"
        },

        {
            id: 5,
            title: "Create Product Details Page",
            technology: "HTML",
            difficulty: "Medium",
            companies: ["Amazon", "Flipkart", "Meesho"],
            problem: "Create a product details page with image, title, description, specifications and Buy Now button.",
            explanation: "Use semantic HTML tags.",
            code: `
                <section>

                <img
                    src="laptop.jpg"
                    alt="Laptop"
                    width="250"
                >

                <h2>HP Laptop</h2>

                <p>Intel i7 Processor</p>

                <ul>

                    <li>16GB RAM</li>

                    <li>512GB SSD</li>

                    <li>Windows 11</li>

                </ul>

                <button>

                    Buy Now

                </button>

                </section>
`,
            output: "Displays product information.",
            timeComplexity: "O(1)",
            spaceComplexity: "O(1)"
        }
    ]