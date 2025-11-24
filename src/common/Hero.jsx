export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Come sano y <span className="highlight">ahorra tiempo</span>
        </h1>

        <p className="subtitle">
          Planes flexibles con comida saludable medida por calorías y tu
          objetivo nutricional. Programa tus comidas y recíbelas en 45 – 60 min.
        </p>

        <p className="price">Desde S/ 15.50 x día</p>

        <button className="hero-btn">Empieza ahora</button>
      </div>

      <img src="/left-plate.png" className="hero-img left" />
      <img src="/right-plate.png" className="hero-img right" />
    </section>
  );
}
