import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="hiw">
      <h2>¿Cómo funciona?</h2>

      <div className="hiw-steps">
        <div className="hiw-card">
          <h3>Ingredientes listos</h3>
          <p>Recibe insumos frescos, medidos y empacados ecológicamente.</p>
        </div>

        <div className="hiw-card">
          <h3>Elige tu receta</h3>
          <p>Platos peruanos tradicionales con guías visuales paso a paso.</p>
        </div>

        <div className="hiw-card">
          <h3>Cocina sin complicaciones</h3>
          <p>Incluimos QR con tutoriales y contenido cultural adicional.</p>
        </div>

        <div className="hiw-card">
          <h3>Disfruta en minutos</h3>
          <p>Comidas deliciosas, rápidas y saludables sin perder tiempo.</p>
        </div>
      </div>
    </section>
  );
}
