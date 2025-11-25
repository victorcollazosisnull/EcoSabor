import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <section className="why">
      <h2>¿Por qué elegirnos?</h2>

      <div className="why-items">
        <div className="why-card">
          <h3>Ingredientes Frescos</h3>
          <p>Todo medido y listo para usar.</p>
        </div>

        <div className="why-card">
          <h3>Empaques Ecológicos</h3>
          <p>Material biodegradable y amigable con el planeta.</p>
        </div>

        <div className="why-card">
          <h3>Accesorios Reciclados</h3>
          <p>Utensilios creados con filamento 3D recuperado.</p>
        </div>

        <div className="why-card">
          <h3>Contenido Interactivo</h3>
          <p>Recetas visuales, videos y cultura peruana vía QR.</p>
        </div>
      </div>
    </section>
  );
}