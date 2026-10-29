import { Sparkles } from "lucide-react";
import Page from "../components/Page.jsx";
import Entry from "../components/Entry.jsx";
import { projects } from "../data/projects.js";

const colors = ["primary", "secondary", "tertiary"];

export default function Projects() {
  return (
    <Page title="projects">
      {projects.map((p, i) => (
        <Entry
          key={p.name}
          title={p.name}
          color={colors[i % 3]}
          meta={[{ icon: Sparkles, text: p.description }]}
          links={[{ label: "GitHub", href: p.github }]}
        >
          <ul>
            {p.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </Entry>
      ))}
    </Page>
  );
}
