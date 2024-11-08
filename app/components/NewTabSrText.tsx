interface NewTabSrTextProps {
  icon?: boolean;
}

export const NewTabSrText = ({ icon = false }: NewTabSrTextProps) => (
  <>
    <span className="sr-only"> (opens in a new tab)</span>
    {icon && <span className="icon" aria-hidden={true}></span>}
  </>
);
