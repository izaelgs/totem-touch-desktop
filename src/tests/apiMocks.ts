import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 1000 });

export const setupApiMocks = () => {
  mock.onGet('/products/appetizers').reply(200, [
    {
      id: 1,
      name: 'CLÁSSICO',
      description: 'Com pedaços de queijo e bacon completo.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/e0e2/a3a4/9864f0e71923e8eeefaaa92e4214a78a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLWBQxX4IZTxiIUa1A5C0KzfXMcYVqTy~0eefC9MgsfNkKUZvOPWiqW9T9zz2dqAvv4nRxxJeqomTkXLQHJA~nERGg4gnmll3gCAi4xz9p6xA4WWhKnpJvrAScwLpFMMo45GnZSQD04yiyJk5qGPIqOL5GCePeyxecvaMKDPOe0siiMXkyrReOtfD1eNnwn1lEZvAkzU1xj5gLKfE38KLMxrRoeniRCwXj2i2ZYNmDDRJmy5LNVOUQcbji3NE88p8ankxva2a8Nz-NtzXMKUC4XWd1JoP~zJUarHA9YXcBpCK2UNppTNED~nhIYnqVrtGJZtaTexwRVirJ4xZ8BwOA__',
      price: 30,
      removableItems: [{ id: 1, name: 'cheddar' }, { id: 2, name: 'bacon' }, { id: 3, name: 'cheddar' }, { id: 4, name: 'bacon' }],
      addableItems: [
        { id: 1, name: 'Mais Cheddar', price: 3 },
        { id: 2, name: 'Salada', price: 3 },
        { id: 3, name: 'Maionese', price: 2.5 },
        { id: 4, name: 'Tomate', price: 2.5 },
        { id: 5, name: 'Bacon', price: 1.8 },
        { id: 6, name: 'Rúcula', price: 3 },
        { id: 7, name: 'Fritas', price: 2.9 },
        { id: 8, name: 'Picles', price: 1.99 }
      ]
    },
    {
      id: 2,
      name: 'BACON COMPLETO',
      description: 'Com pedaços de carne de boi e carne de pato.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/e0e2/a3a4/9864f0e71923e8eeefaaa92e4214a78a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLWBQxX4IZTxiIUa1A5C0KzfXMcYVqTy~0eefC9MgsfNkKUZvOPWiqW9T9zz2dqAvv4nRxxJeqomTkXLQHJA~nERGg4gnmll3gCAi4xz9p6xA4WWhKnpJvrAScwLpFMMo45GnZSQD04yiyJk5qGPIqOL5GCePeyxecvaMKDPOe0siiMXkyrReOtfD1eNnwn1lEZvAkzU1xj5gLKfE38KLMxrRoeniRCwXj2i2ZYNmDDRJmy5LNVOUQcbji3NE88p8ankxva2a8Nz-NtzXMKUC4XWd1JoP~zJUarHA9YXcBpCK2UNppTNED~nhIYnqVrtGJZtaTexwRVirJ4xZ8BwOA__',
      price: 28,
      removableItems: [{ id: 3, name: 'carne de boi' }, { id: 4, name: 'carne de pato' }, { id: 5, name: 'carne de boi' }, { id: 6, name: 'carne de pato' }],
      addableItems: [
        { id: 1, name: 'Mais Cheddar', price: 3 },
        { id: 2, name: 'Salada', price: 3 },
        { id: 3, name: 'Maionese', price: 2.5 },
        { id: 4, name: 'Tomate', price: 2.5 },
        { id: 5, name: 'Bacon', price: 1.8 },
        { id: 6, name: 'Rúcula', price: 3 },
        { id: 7, name: 'Fritas', price: 2.9 },
        { id: 8, name: 'Picles', price: 1.99 }
      ]
    },
    {
      id: 3,
      name: 'CLÁSSICO',
      description: 'Com pedaços de queijo e bacon completo.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/e0e2/a3a4/9864f0e71923e8eeefaaa92e4214a78a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLWBQxX4IZTxiIUa1A5C0KzfXMcYVqTy~0eefC9MgsfNkKUZvOPWiqW9T9zz2dqAvv4nRxxJeqomTkXLQHJA~nERGg4gnmll3gCAi4xz9p6xA4WWhKnpJvrAScwLpFMMo45GnZSQD04yiyJk5qGPIqOL5GCePeyxecvaMKDPOe0siiMXkyrReOtfD1eNnwn1lEZvAkzU1xj5gLKfE38KLMxrRoeniRCwXj2i2ZYNmDDRJmy5LNVOUQcbji3NE88p8ankxva2a8Nz-NtzXMKUC4XWd1JoP~zJUarHA9YXcBpCK2UNppTNED~nhIYnqVrtGJZtaTexwRVirJ4xZ8BwOA__',
      price: 30,
      removableItems: [{ id: 1, name: 'cheddar' }, { id: 2, name: 'bacon' }, { id: 3, name: 'cheddar' }, { id: 4, name: 'bacon' }],
      addableItems: [
        { id: 1, name: 'Mais Cheddar', price: 3 },
        { id: 2, name: 'Salada', price: 3 },
        { id: 3, name: 'Maionese', price: 2.5 },
        { id: 4, name: 'Tomate', price: 2.5 },
        { id: 5, name: 'Bacon', price: 1.8 },
        { id: 6, name: 'Rúcula', price: 3 },
        { id: 7, name: 'Fritas', price: 2.9 },
        { id: 8, name: 'Picles', price: 1.99 }
      ]
    },
    {
      id: 4,
      name: 'BACON COMPLETO',
      description: 'Com pedaços de carne de boi e carne de pato.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/e0e2/a3a4/9864f0e71923e8eeefaaa92e4214a78a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLWBQxX4IZTxiIUa1A5C0KzfXMcYVqTy~0eefC9MgsfNkKUZvOPWiqW9T9zz2dqAvv4nRxxJeqomTkXLQHJA~nERGg4gnmll3gCAi4xz9p6xA4WWhKnpJvrAScwLpFMMo45GnZSQD04yiyJk5qGPIqOL5GCePeyxecvaMKDPOe0siiMXkyrReOtfD1eNnwn1lEZvAkzU1xj5gLKfE38KLMxrRoeniRCwXj2i2ZYNmDDRJmy5LNVOUQcbji3NE88p8ankxva2a8Nz-NtzXMKUC4XWd1JoP~zJUarHA9YXcBpCK2UNppTNED~nhIYnqVrtGJZtaTexwRVirJ4xZ8BwOA__',
      price: 28,
      removableItems: [{ id: 3, name: 'carne de boi' }, { id: 4, name: 'carne de pato' }, { id: 5, name: 'carne de boi' }, { id: 6, name: 'carne de pato' }],
      addableItems: [
        { id: 1, name: 'Mais Cheddar', price: 3 },
        { id: 2, name: 'Salada', price: 3 },
        { id: 3, name: 'Maionese', price: 2.5 },
        { id: 4, name: 'Tomate', price: 2.5 },
        { id: 5, name: 'Bacon', price: 1.8 },
        { id: 6, name: 'Rúcula', price: 3 },
        { id: 7, name: 'Fritas', price: 2.9 },
        { id: 8, name: 'Picles', price: 1.99 }
      ]
    },
    {
      id: 5,
      name: 'CLÁSSICO',
      description: 'Com pedaços de queijo e bacon completo.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/e0e2/a3a4/9864f0e71923e8eeefaaa92e4214a78a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLWBQxX4IZTxiIUa1A5C0KzfXMcYVqTy~0eefC9MgsfNkKUZvOPWiqW9T9zz2dqAvv4nRxxJeqomTkXLQHJA~nERGg4gnmll3gCAi4xz9p6xA4WWhKnpJvrAScwLpFMMo45GnZSQD04yiyJk5qGPIqOL5GCePeyxecvaMKDPOe0siiMXkyrReOtfD1eNnwn1lEZvAkzU1xj5gLKfE38KLMxrRoeniRCwXj2i2ZYNmDDRJmy5LNVOUQcbji3NE88p8ankxva2a8Nz-NtzXMKUC4XWd1JoP~zJUarHA9YXcBpCK2UNppTNED~nhIYnqVrtGJZtaTexwRVirJ4xZ8BwOA__',
      price: 30,
      removableItems: [{ id: 1, name: 'cheddar' }, { id: 2, name: 'bacon' }, { id: 3, name: 'cheddar' }, { id: 4, name: 'bacon' }],
      addableItems: [
        { id: 1, name: 'Mais Cheddar', price: 3 },
        { id: 2, name: 'Salada', price: 3 },
        { id: 3, name: 'Maionese', price: 2.5 },
        { id: 4, name: 'Tomate', price: 2.5 },
        { id: 5, name: 'Bacon', price: 1.8 },
        { id: 6, name: 'Rúcula', price: 3 },
        { id: 7, name: 'Fritas', price: 2.9 },
        { id: 8, name: 'Picles', price: 1.99 }
      ]
    },
    {
      id: 6,
      name: 'BACON COMPLETO',
      description: 'Com pedaços de carne de boi e carne de pato.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/e0e2/a3a4/9864f0e71923e8eeefaaa92e4214a78a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLWBQxX4IZTxiIUa1A5C0KzfXMcYVqTy~0eefC9MgsfNkKUZvOPWiqW9T9zz2dqAvv4nRxxJeqomTkXLQHJA~nERGg4gnmll3gCAi4xz9p6xA4WWhKnpJvrAScwLpFMMo45GnZSQD04yiyJk5qGPIqOL5GCePeyxecvaMKDPOe0siiMXkyrReOtfD1eNnwn1lEZvAkzU1xj5gLKfE38KLMxrRoeniRCwXj2i2ZYNmDDRJmy5LNVOUQcbji3NE88p8ankxva2a8Nz-NtzXMKUC4XWd1JoP~zJUarHA9YXcBpCK2UNppTNED~nhIYnqVrtGJZtaTexwRVirJ4xZ8BwOA__',
      price: 28,
      removableItems: [{ id: 3, name: 'carne de boi' }, { id: 4, name: 'carne de pato' }, { id: 5, name: 'carne de boi' }, { id: 6, name: 'carne de pato' }],
      addableItems: [
        { id: 1, name: 'Mais Cheddar', price: 3 },
        { id: 2, name: 'Salada', price: 3 },
        { id: 3, name: 'Maionese', price: 2.5 },
        { id: 4, name: 'Tomate', price: 2.5 },
        { id: 5, name: 'Bacon', price: 1.8 },
        { id: 6, name: 'Rúcula', price: 3 },
        { id: 7, name: 'Fritas', price: 2.9 },
        { id: 8, name: 'Picles', price: 1.99 }
      ]
    },
    {
      id: 7,
      name: 'CLÁSSICO',
      description: 'Com pedaços de queijo e bacon completo.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/e0e2/a3a4/9864f0e71923e8eeefaaa92e4214a78a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLWBQxX4IZTxiIUa1A5C0KzfXMcYVqTy~0eefC9MgsfNkKUZvOPWiqW9T9zz2dqAvv4nRxxJeqomTkXLQHJA~nERGg4gnmll3gCAi4xz9p6xA4WWhKnpJvrAScwLpFMMo45GnZSQD04yiyJk5qGPIqOL5GCePeyxecvaMKDPOe0siiMXkyrReOtfD1eNnwn1lEZvAkzU1xj5gLKfE38KLMxrRoeniRCwXj2i2ZYNmDDRJmy5LNVOUQcbji3NE88p8ankxva2a8Nz-NtzXMKUC4XWd1JoP~zJUarHA9YXcBpCK2UNppTNED~nhIYnqVrtGJZtaTexwRVirJ4xZ8BwOA__',
      price: 30,
      removableItems: [{ id: 1, name: 'cheddar' }, { id: 2, name: 'bacon' }, { id: 3, name: 'cheddar' }, { id: 4, name: 'bacon' }],
      addableItems: [
        { id: 1, name: 'Mais Cheddar', price: 3 },
        { id: 2, name: 'Salada', price: 3 },
        { id: 3, name: 'Maionese', price: 2.5 },
        { id: 4, name: 'Tomate', price: 2.5 },
        { id: 5, name: 'Bacon', price: 1.8 },
        { id: 6, name: 'Rúcula', price: 3 },
        { id: 7, name: 'Fritas', price: 2.9 },
        { id: 8, name: 'Picles', price: 1.99 }
      ]
    },
    {
      id: 8,
      name: 'BACON COMPLETO',
      description: 'Com pedaços de carne de boi e carne de pato.',
      imageUrl: 'https://s3-alpha-sig.figma.com/img/e0e2/a3a4/9864f0e71923e8eeefaaa92e4214a78a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CLWBQxX4IZTxiIUa1A5C0KzfXMcYVqTy~0eefC9MgsfNkKUZvOPWiqW9T9zz2dqAvv4nRxxJeqomTkXLQHJA~nERGg4gnmll3gCAi4xz9p6xA4WWhKnpJvrAScwLpFMMo45GnZSQD04yiyJk5qGPIqOL5GCePeyxecvaMKDPOe0siiMXkyrReOtfD1eNnwn1lEZvAkzU1xj5gLKfE38KLMxrRoeniRCwXj2i2ZYNmDDRJmy5LNVOUQcbji3NE88p8ankxva2a8Nz-NtzXMKUC4XWd1JoP~zJUarHA9YXcBpCK2UNppTNED~nhIYnqVrtGJZtaTexwRVirJ4xZ8BwOA__',
      price: 28,
      removableItems: [{ id: 3, name: 'carne de boi' }, { id: 4, name: 'carne de pato' }, { id: 5, name: 'carne de boi' }, { id: 6, name: 'carne de pato' }],
      addableItems: [
        { id: 1, name: 'Mais Cheddar', price: 3 },
        { id: 2, name: 'Salada', price: 3 },
        { id: 3, name: 'Maionese', price: 2.5 },
        { id: 4, name: 'Tomate', price: 2.5 },
        { id: 5, name: 'Bacon', price: 1.8 },
        { id: 6, name: 'Rúcula', price: 3 },
        { id: 7, name: 'Fritas', price: 2.9 },
        { id: 8, name: 'Picles', price: 1.99 }
      ]
    },
  ]);
};
