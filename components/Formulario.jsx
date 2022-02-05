import styles from "../styles/Formulario.module.css"
import useSelect from "../hooks/useSelect";
import { useRouter } from "next/router";

const Formulario = ({setCategoria}) => {

  const opciones = [
      {value: 'general', label:'General'},
      {value: 'business', label:'Negocios'},
      {value: 'entertainment', label:'Entretenimiento'},
      {value: 'health', label:'Salud'},
      {value: 'science', label:'Ciencia'},
      {value: 'sports', label:'Deportes'},
      {value: 'technology', label:'Tecnologia'},
  ]

  const [ categoria, SelectNoticias ] = useSelect('general', opciones)

  const handleSubmit = (e) => {
      e.preventDefault()

      setCategoria(categoria)
  }

  return (
    <div className={`${styles.buscador} row`}>
        <div className="col s12 m8 offset-m2">
            <form 
                onSubmit={handleSubmit}
            >
                <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

                <SelectNoticias/>

                <div className="input-field col s12">
                    <input 
                        type="submit" 
                        className={`${styles.btn_block} btn-large amber darken-2`} value="Buscar"
                    />
                </div>
            </form>
        </div>
    </div>
  )
};

export default Formulario;
