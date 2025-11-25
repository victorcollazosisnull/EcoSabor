import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function MainNav() {
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUsername(parsed.username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUsername(null);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
      <div className="container">

        {/* Logo / Nombre */}
        <Link className="navbar-brand fw-bold" to="/">
          Eco Sabor
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          {/* MENÚ PRINCIPAL */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/kits">Nuestros Kits</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/sobre">Sobre Nosotros</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/como">Cómo Funciona</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/beneficios">Beneficios</Link>
            </li>

          </ul>

          {/* LOGIN (solo si hay usuario) */}
          {username && (
            <div className="d-flex align-items-center ms-auto">
              <span className="me-3">
                Hola, <strong>{username}</strong>
              </span>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}

        </div>
      </div>
    </nav>
  );
}

export default MainNav;
