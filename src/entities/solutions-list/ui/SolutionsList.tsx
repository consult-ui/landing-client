import { SolutionItem } from "@/shared/ui/solution-item";
import { SOLUTION_LIST } from "../const";

export const SolutionsList: React.FC = () => {
  return <ul>{SOLUTION_LIST.map((solution, index) => (<SolutionItem key={index} {...solution} />))}</ul>;
};