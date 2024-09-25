interface NewTabSrTextProps {
    icon?: boolean;
  }
  
  export const NewTabSrText: React.FC<NewTabSrTextProps> = ({ icon = false }) => {
    return (
      <>
        <span className="sr-only">(opens in a new tab)</span>
        {icon && <span className="icon" aria-hidden="true"></span>}
      </>
    );
  };
  