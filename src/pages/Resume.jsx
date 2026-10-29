import { MapPin, Calendar, BookOpen, Users, Trophy, Wrench, GraduationCap } from "lucide-react";
import Page from "../components/Page.jsx";
import Section from "../components/Section.jsx";
import Entry from "../components/Entry.jsx";
import * as cv from "../data/resume.js";

function Jobs({ items }) {
  return items.map((j) => (
    <Entry
      key={j.title + j.date}
      title={j.title}
      meta={[
        { icon: MapPin, text: j.place },
        { icon: Calendar, text: j.date },
      ]}
    >
      {j.subtitle && <p className="muted">{j.subtitle}</p>}
      <ul>
        {j.points.map((pt) => <li key={pt}>{pt}</li>)}
      </ul>
      {j.text && <p style={{ margin: "0.5rem 0 0" }}>{j.text}</p>}
    </Entry>
  ));
}

// "Label: a · b · c" lines, each led by an icon.
function Lines({ data, icon: Icon }) {
  return (
    <Entry>
      {Object.entries(data).map(([label, items]) => (
        <div key={label}>
          <Icon className="icon" style={{ color: "var(--c)" }} />
          <b>{label}:</b> {items.join(" · ")}
        </div>
      ))}
    </Entry>
  );
}

function Plain({ items, icon: Icon }) {
  return (
    <Entry>
      {items.map((i) => (
        <div key={i}>
          <Icon className="icon" style={{ color: "var(--c)" }} />
          {i}
        </div>
      ))}
    </Entry>
  );
}

export default function Resume() {
  return (
    <Page title="resume">
      <Section title="education"><Jobs items={cv.education} /></Section>
      <Section title="research"><Jobs items={cv.research} /></Section>
      <Section title="industry"><Jobs items={cv.industry} /></Section>
      <Section title="reviewing"><Lines data={cv.reviewing} icon={BookOpen} /></Section>
      <Section title="committees"><Plain items={cv.committees} icon={Users} /></Section>
      <Section title="awards"><Plain items={cv.awards} icon={Trophy} /></Section>
      <Section title="skills"><Lines data={cv.skills} icon={Wrench} /></Section>
      <Section title="training"><Plain items={cv.training} icon={GraduationCap} /></Section>
    </Page>
  );
}
