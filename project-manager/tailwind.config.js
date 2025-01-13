/ @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-escuro': '#1E293B',
        'azul-claro': '#92BBFF',
        'azul-dessaturado': '#5C5A79',
        'vinho-transparente': '#23081C',
        'amarelo': '#F59E0B',
        'amarelo-transparente': '#FCF4B6',
        'roxo': '#160A60',
        'roxo-claro': '#4F46E5',
        'roxo-transparente': '#D3D0F8',
        'vinho': '#331436',
        'cinza-1': '#94A3B8',
        'cinza-2': '#E2E8F0',
        'verde': '#22C55E',
        'verde-transparente': '#C7F0D6',
        'vermelho': '#BD2323',
        'branco': '#FFFFFF',
        'azul-hover': '#268FE4',
        'preto-50': '#00000080',
      },
    },
  },
  plugins: [],
}