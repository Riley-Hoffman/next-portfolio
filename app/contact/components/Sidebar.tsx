import { NewTabSrText } from "../../components/NewTabSrText";
import { githubUrl, linkedInUrl } from "../../../lib/constants";

const links = [
  { name: "Github", url: githubUrl },
  { name: "LinkedIn", url: linkedInUrl },
];

export const Sidebar = () => (
  <aside className="ml-auto mt-9 bg-pink-100 py-[0.1px] text-center md:sticky md:top-24 md:w-11/12 md:overflow-hidden md:rounded-sm md:border-x md:border-b md:border-solid md:border-gray-400">
    <h3 className="mx-auto my-0 bg-zinc text-pink-100">Links</h3>
    {links.map(({ name, url }, index) => (
      <a
        key={name}
        className={`new-tab block ${
          index === 0 ? "pb-2 pt-3" : "pb-3 pt-2"
        } font-urbanist no-underline`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name} <NewTabSrText icon={true} />
      </a>
    ))}
  </aside>
);
