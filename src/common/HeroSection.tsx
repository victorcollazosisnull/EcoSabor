import "../common/HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <h1>
        Come sano y <span className="highlight">ahorra tiempo</span>
      </h1>

      <p className="subtitle">
        Platos sanos, rápidos y ajustados a tu estilo de vida.
        Programa tus comidas y recíbelas en minutos.
      </p>

      <button className="hero-btn">Empieza ahora</button>
    </section>
  );
}
