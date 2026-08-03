export interface Question {
  id: number;
  title: string;
  technology: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  companies: string[];
  problem: string;
  explanation: string;
  code: string;
  output: string;
  timeComplexity: string;
  spaceComplexity: string;
}
export interface Company {
  id: number;
  name: string;
  questions: number;
  image: string;
  technologies: string[];
}
export interface Quiz {
  id:number;
  technology:string;
  difficulty:string;
  question:string;
  options:string[];
  answer:number;
}