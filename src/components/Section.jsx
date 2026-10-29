// A titled block. Sections cycle through the three palette colours.
export default function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
