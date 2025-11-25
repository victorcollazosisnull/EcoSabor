import { Link } from "react-router-dom";
import banner1 from '../assets/images/banner1.jpg';
import banner2 from '../assets/images/banner2.jpg';
import banner3 from '../assets/images/banner3.jpg';

function MainBanner() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">

        {/* SLIDE 1 */}
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="banner1" />
          <div className="carousel-caption">
            <h5>Eco Sabor</h5>
            <p>Kits de cocina listos, frescos y ecológicos.</p>

            <Link to="/kits" className="btn btn-success mt-3">
              Ver nuestros Kits
            </Link>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="banner2" />
          <div className="carousel-caption">
            <h5>Experiencia Peruana</h5>
            <p>Platos tradicionales listos para cocinar.</p>

            <Link to="/sobre" className="btn btn-primary mt-3">
              Conoce más
            </Link>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="banner3" />
          <div className="carousel-caption">
            <h5>Solución práctica</h5>
            <p>Ahorra tiempo sin sacrificar sabor.</p>

            <Link to="/beneficios" className="btn btn-warning mt-3">
              Ver Beneficios
            </Link>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default MainBanner;
