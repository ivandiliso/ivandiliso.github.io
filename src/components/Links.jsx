// links = [{ label, href }]
// Each link shows the favicon of the site it points to.
function favicon(href) {
  const domain = new URL(href).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
}

export default function Links({ links }) {
  return (
    <div className="links">
      {links.map((l) => (
        <a key={l.href + l.label} href={l.href} target="_blank" rel="noreferrer">
          <img src={favicon(l.href)} alt="" onError={(e) => (e.target.style.display = "none")} />
          {l.label}
        </a>
      ))}
    </div>
  );
}
