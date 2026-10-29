import { GraduationCap } from "lucide-react";
import Page from "../components/Page.jsx";
import Section from "../components/Section.jsx";
import Links from "../components/Links.jsx";

const profiles = [
  { label: "GitHub", href: "https://github.com/ivandiliso" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=zTCMLbkAAAAJ&hl=it" },
  { label: "ORCID", href: "https://orcid.org/0009-0007-2942-202X" },
  { label: "Scopus", href: "https://www.scopus.com/authid/detail.uri?authorId=58634104500" },
];

export default function Home() {
  return (
    <Page title="hi, i'm ivan">
      <p className="muted">
        <GraduationCap className="icon" />
        Ph.D. student · University of Bari Aldo Moro, Italy 🇮🇹
      </p>
      <Links links={profiles} />

      <Section title="research">
        <p>
          My research is on <strong>neurosymbolic learning</strong> for <strong>knowledge graphs</strong>, ontologies
          and description logics, applied to railway engineering. I study how to{" "}
          <strong>inject background knowledge</strong> into knowledge graph embedding models, and how to evaluate the
          semantics those models actually learn.
        </p>
        <p>
          Before that: computer vision for image classification and adversarial attacks, genetic optimization, and
          quantum computing, with a focus on hybrid models for contrastive learning and clustering.
        </p>
      </Section>
    </Page>
  );
}
