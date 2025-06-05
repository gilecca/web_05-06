import { SHeader } from "./styles";

export function Header() {
  return (
    <SHeader>
      <img src="/src/assets/logo.png" alt="Pet Fit Logo" />
      <h1>Pet Fit</h1>
      <div>
        <input type="text" placeholder="Busca" />
        <button>🔍</button>
      </div>
      <button>login</button>
      <input type="checkbox" id="menu" />
        <nav>
            <label htmlFor="menu">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <div>
                <button> Gato</button>
                <button> Cachorro</button>
                <form action="" method="post">
            <input type="text" name="search" placeholder="Busca" />
            </form>
            </div>
        </nav>
    </SHeader>
  );
}