import "./Kits.css";

export default function Kits() {
  return (
    <section className="page-container">
      <h2>Nuestros Kits</h2>
      <p>Kits de cocina frescos, ecológicos y listos para preparar.</p>

      <div className="kits-grid">

        <div className="kit-card">
          <h3>Kit “Experiencia Peruana”</h3>
          <p>Ingredientes frescos, receta visual y QR interactivo.</p>
        </div>

        <div className="kit-card">
          <h3>Kit Sostenible</h3>
          <p>Incluye utensilios hechos con filamento 3D reciclado.</p>
        </div>

        <div className="kit-card">
          <h3>Kit Familiar</h3>
          <p>Porciones para 4 personas, ideal para compartir.</p>
        </div>

      </div>
    </section>
  );
}
