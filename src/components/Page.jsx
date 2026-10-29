export default function Page({ title, children }) {
  return (
    <main className="page">
      {title && <h1>{title}</h1>}
      {children}
    </main>
  );
}
