import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// 1. CORREÇÃO: 'IRecipe' agora é importado com a palavra-chave 'type'
import { recipes, type IRecipe } from '../../data/recipes';

import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RecipePage: React.FC = () => {
  // 2. CORREÇÃO: Hooks 'useState' movidos para o topo do componente.
  // Eles são chamados em toda renderização, antes de qualquer lógica condicional.
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const { recipeId } = useParams<{ recipeId: string }>();
  const recipe: IRecipe | undefined = recipes.find(r => r.id === recipeId);

  // A lógica de retorno antecipado agora fica DEPOIS dos hooks
  if (!recipe) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Receita não encontrada!</h1>
        <p>A receita com o ID "{recipeId}" não existe.</p>
        <Link to="/">Voltar para a página inicial</Link>
      </div>
    );
  }

  // O restante do componente continua igual
  return (
    <S.MainContent>
      <section>
        <S.SaveRecipeButton>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M6 2a1 1 0 0 0-1 1v19.586l7-7 7 7V3a1 1 0 0 0-1-1H6z" />
          </svg>
          <span>salvar receita</span>
        </S.SaveRecipeButton>

        <div>
          <h2>{recipe.title}</h2>
          <S.RecipeImage src={recipe.imageUrl} alt={`Imagem de ${recipe.title}`} />
        </div>

        <S.RecipeDetails>
          <h3>Ingredientes</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3>Modo de preparo</h3>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </S.RecipeDetails>

        <S.RatingSection>
          <h3>Avaliação</h3>
          <S.StarsContainer>
            {[...Array(5)].map((_, index) => {
              const ratingValue = index + 1;
              return (
                <label key={ratingValue}>
                  <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                  <FontAwesomeIcon className="star" icon={faStar} color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(0)} />
                </label>
              );
            })}
          </S.StarsContainer>
        </S.RatingSection>
      </section>
    </S.MainContent>
  );
}

export default RecipePage;