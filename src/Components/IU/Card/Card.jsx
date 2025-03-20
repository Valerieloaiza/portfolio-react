export const Card = ({ children, color, titulo, styles = "" }) => {
  return (
    <div className={`bg-pink-700 p-6 rounded-2xl shadow-xl border border-pink-300 ${styles}`}>
      <h2 className={`text-2xl font-bold mb-4 text-white ${color}`}>
        {titulo}
      </h2>
      <ul className="list-disc pl-6 text-white">
        {children}
      </ul>
    </div>
  );
};
