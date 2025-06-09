// src/App.tsx

// 1. Importamos as ferramentas do react-router-dom e as páginas
import { Routes, Route, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { GlobalStyle } from './styles/GlobalStyle';

// Este é o seu Layout Padrão
function AppLayout() {
  return (
    <>
      <Header />
      <main>
        {/* O <Outlet/> renderiza a página da rota atual aqui dentro */}
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 2. <Routes> é o container que gerencia todas as rotas */}
      <Routes>
        {/* 3. A rota "/" usa o AppLayout e define as sub-rotas */}
        <Route path="/" element={<AppLayout />}>
          {/* Se a URL for exatamente "/", mostra a HomePage */}
          <Route index element={<HomePage />} />
          
          {/* Se a URL for "/recipe/qualquer-coisa", mostra a RecipePage */}
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          
          {/* Se a URL for qualquer outra coisa, mostra a NotFoundPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;