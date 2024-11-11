import { NewTabSrText } from "../../components/NewTabSrText";
import { githubUrl, linkedInUrl } from "../../../lib/constants";

export const Sidebar = () => (
  <aside className="ml-auto mt-9 h-full overflow-hidden rounded-sm bg-pink-100 py-[0.1px] text-center md:sticky md:top-24 md:w-[30%]">
    <h3 className="mx-auto mt-0 bg-zinc text-pink-100">Links</h3>
    <p>
      <a
        className="new-tab font-urbanist no-underline"
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github <NewTabSrText icon={true} />
      </a>
    </p>
    <p>
      <a
        className="new-tab font-urbanist no-underline"
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn <NewTabSrText icon={true} />
      </a>
    </p>
  </aside>
);
