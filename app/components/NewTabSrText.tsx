import clsx from 'clsx';

interface NewTabSrTextProps {
  useText?: boolean;
  icon?: boolean;
}

export const NewTabSrText = ({ useText = true, icon = false }: NewTabSrTextProps) => {
  return (
    <span className={clsx({ "new-tab-sr-text": icon })}>
      {useText && <span className="sr-only"> (Opens in a new tab)</span>}
    </span>
  );
};
