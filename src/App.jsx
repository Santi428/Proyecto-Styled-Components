import './App.css'
import { Header } from './Components/Header/Header'
import { Container } from './Components/styles/containerStyled'
import { Footer } from './Components/Footer/Footer'
import { Card } from './Components/Card/Card'

function App() {
  
  const cards = [
    {
      titulo: "Explora destinos únicos",
      contenido: "Descubre lugares exóticos y aventuras inolvidables alrededor del mundo.",
      image: 'illustration-your-users.svg'
    },
    {
      titulo: "Vive una experiencia gastronómica",
      contenido: "Prueba platillos tradicionales e innovadores en los mejores restaurantes.",
      image: 'illustration-flowing-conversation.svg'
    },
    {
      titulo: "Hospedaje de lujo",
      contenido: "Encuentra los mejores alojamientos y disfruta de una experiencia inolvidable.",
      image: 'illustration-grow-together.svg'
    },
    {
      titulo: "Aventura extrema",
      contenido: "Desde parapente hasta buceo, explora actividades llenas de adrenalina.",
      image: 'illustration-flowing-conversation.svg'
    }
  ];
  

  return (
    <>
      <Header />
      <Container>
        {cards.map((i, index) => <Card key={index} id={index} title={i.titulo} body={i.contenido} image={i.image}/>)}
      </Container>
      <Footer />
    </>
  )
}

export default App
