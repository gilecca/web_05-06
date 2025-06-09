// Interface para definir a estrutura de cada objeto de receita
export interface IRecipe {
  id: string; 
  title: string;
  imageUrl: string;
  ingredients: string[];
  instructions: string[];
}

// Nosso "banco de dados" de receitas
export const recipes: IRecipe[] = [
  {
    id: 'muffin-salgado-para-cachorros',
    title: 'Muffin Salgado Para Cachorros',
    imageUrl: '/src/assets/receita1.png',
    ingredients: [
      '½ lata de milho cozido.',
      '2 ovos.',
      '1 colher de sopa de azeite de oliva.',
      '½ xícara de farinha de aveia integral.',
      '1 colher de chá de de fermento em pó.',
      'Cenoura ralada.',
      'Frango cozido a gosto ou patê para cachorro.',
      'Uma pitada de sal.'
    ],
    instructions: [
      'Bata o milho, os ovos e o azeite no liquidificador.',
      'Coloque a farinha de aveia aos poucos e bata.',
      'Adicione o frango/patê, cenoura, sal, fermento e mexa.',
      'Pré-aqueça o forno a 180°.',
      'Use forminhas de silicone ou uma forma untada.',
      'Asse por aproximadamente 30 minutos.',
      'Faça o teste do palito; se sair limpo, está pronto.',
      'Espere esfriar para servir.'
    ]
  }
];