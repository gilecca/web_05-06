// src/pages/HomePage/index.tsx

// 1. Em vez de usar <a href="...">, usamos o componente <Link>
import { Link } from 'react-router-dom';
import { recipes } from '../../data/recipes';

export function HomePage() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bem-vindo ao Pet Fit!</h1>
      <p>Escolha uma receita para começar:</p>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        {/* 2. O 'to' do Link corresponde ao 'path' que você definiu no App.tsx */}
        {recipes.map(recipe => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            {recipe.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}