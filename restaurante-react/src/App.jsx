import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home.jsx';

function App() {
  const dishes = [
    {
      id:1,
      name:'Poke Mon',
      description:'Magikarp salteado con quinoa y verduras',
      price:8,
      image:'https://www.hola.com/imagenes/cocina/noticiaslibros/2016110489426/tendencia-gastronomica-poke-bowl-hawai/0-400-713/poke_bowl_-t.jpg'
    },
    {
      id:2,
      name:'Poke Soyasi',
      description:'Cuenco completo de carne kebab con salsa misteriosa',
      price:12,
      image:'https://uploads-ssl.webflow.com/5e755ce334e76c98ebaf26d1/5e7e60299d75514afec00dd1_Doner%20Carne.jpeg'
    },
    {
      id:3,
      name:'Poke notecallas',
      description:'Carne de elefante sazonado con especias venezolanas y coronado con salsa alfonsina',
      price:15,
      image:'https://latinpoke.com/wp-content/uploads/2018/05/POKE-MEXICANO-1.1.jpg'   
    }
  ]
  
  return (
    <div className="App">
      <Header />
      <Home comida={dishes}/>
    </div>
  );
}

export default App;
