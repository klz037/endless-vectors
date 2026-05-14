export default function Badge({ children }) {
  return (
    <span className="cyan-badge inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium mb-5">
      {children}
    </span>
  );
}