import Links from "./Links.jsx";

// One item with the coloured line on its left.
// meta = [{ icon: LucideIcon, text }]   color = "primary" | "secondary" | "tertiary"
export default function Entry({ title, meta, links, color, children }) {
  return (
    <div className={`entry ${color ? "c-" + color : ""}`}>
      <h3>{title}</h3>
      {meta && (
        <div className="entry__meta">
          {meta.filter((m) => m.text).map(({ icon: Icon, text }) => (
            <span key={text}>
              <Icon className="icon" />
              {text}
            </span>
          ))}
        </div>
      )}
      {children && <div className="entry__body">{children}</div>}
      {links && <Links links={links} />}
    </div>
  );
}
