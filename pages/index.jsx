import Layout from '../components/Layout'
import Formulario from '../components/Formulario'
import { useState, useEffect } from 'react'
import ListadoNoticias from '../components/ListadoNoticias'

export default function Home() {
  const [categoria, setCategoria] = useState('')
  const [noticia, setNoticia] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=ddc3964d89214b94bd6a32e2a18aeb86`
      const respuesta = await fetch(url)
      const noticias = await respuesta.json()  

      setNoticia(noticias.articles)
    }

    consultarAPI()
  }, [categoria]);
  
  
  return (
    <Layout titulo='Buscador de noticias'>
      <div className='container white'>
        <Formulario setCategoria={setCategoria}/>
        <ListadoNoticias noticia={noticia}/>
      </div>
    </Layout>
  )
}