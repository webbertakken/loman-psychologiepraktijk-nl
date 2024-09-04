import { IconContext } from 'react-icons';
import loadable from '@loadable/component';

interface Props extends IconContext {
  icon: string;
}

export function DynamicIcon({ icon, ...iconContext }: Props) {
  const library = icon?.match(/[A-Z][a-z]+/g)[0].toLowerCase();
  const fallback = <div>•</div>;

  if (!library || !icon) return fallback;

  const Icon = loadable(
    () => import(/* webpackPrefetch: true */ `react-icons/${library}/index.js`),
    {
      resolveComponent: (el: JSX.Element) => el[icon as keyof JSX.Element],
    },
  );

  return (
    <IconContext.Provider value={iconContext}>
      <Icon />
    </IconContext.Provider>
  );
}
