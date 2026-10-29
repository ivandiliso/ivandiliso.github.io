import { Home, Heart } from "lucide-react";
import Page from "../components/Page.jsx";
import Section from "../components/Section.jsx";
import { myCats, fostered } from "../data/cats.js";

function Grid({ cats }) {
  return (
    <div className="cats">
      {cats.map((c) => (
        <div key={c.name}>
          <img src={c.image} alt={c.name} loading="lazy" />
          <h3>{c.name}</h3>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function Cats() {
  return (
    <Page title="cats">
      <Section title="mine">
        <p className="muted"><Home className="icon" />The residents.</p>
        <Grid cats={myCats} />
      </Section>
      <Section title="fostered">
        <p className="muted"><Heart className="icon" />Guests who passed through and found a home.</p>
        <Grid cats={fostered} />
      </Section>
    </Page>
  );
}
