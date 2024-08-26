interface LabelProps {
  label: string;
}

export const Label: React.FC<LabelProps> = ({ label }) => {
  return (
    <label className="inline-block text-xl my-4 capitalize" htmlFor={label}>{label}:</label>
  );
};
