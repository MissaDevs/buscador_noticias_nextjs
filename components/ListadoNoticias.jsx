import Noticia from "./Noticia";

const ListadoNoticias = ({noticia}) => {
  return (
    <div className="row">
        {noticia.map(n => (
            <Noticia 
                key={n.url}
                n={n}
            />
        ))}
    </div>
  )
};

export default ListadoNoticias;
