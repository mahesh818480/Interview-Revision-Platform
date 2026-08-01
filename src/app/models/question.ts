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