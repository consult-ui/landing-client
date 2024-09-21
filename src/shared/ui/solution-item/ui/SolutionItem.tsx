export interface ISolution {
  isActive: boolean;
  title: string;
  description: string;
  image: string;
}

export const SolutionItem: React.FC<ISolution> = ({
  title,
  description,
  image,
  isActive,
}) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};
