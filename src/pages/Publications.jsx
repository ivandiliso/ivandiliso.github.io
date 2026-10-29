import { Landmark, Calendar, Users, Trophy } from "lucide-react";
import Page from "../components/Page.jsx";
import Section from "../components/Section.jsx";
import Entry from "../components/Entry.jsx";
import { peerReviewed, preprints } from "../data/publications.js";

function List({ items }) {
  return items.map((p) => (
    <Entry
      key={p.title}
      title={p.title}
      meta={[
        { icon: Landmark, text: p.venue },
        { icon: Calendar, text: String(p.year) },
      ]}
      links={p.links}
    >
      <Users className="icon" />
      {p.authors}
      {p.awards && (
        <div className="badges">
          {p.awards.map((a) => (
            <span key={a} className="badge">
              <Trophy className="icon" />
              {a}
            </span>
          ))}
        </div>
      )}
    </Entry>
  ));
}

export default function Publications() {
  return (
    <Page title="publications">
      <Section title="peer reviewed">
        <List items={peerReviewed} />
      </Section>
      <Section title="preprints">
        <List items={preprints} />
      </Section>
    </Page>
  );
}
