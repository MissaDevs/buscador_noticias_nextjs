import Link from 'next/link';

const Layout = ({children, titulo}) => {
  return (
    <>
      <header>
        <title>Buscador Noticias React</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        <link href="https://fonts.googleapis.com/css?family=Raleway:700,900" rel="stylesheet"></link>
      </header>

      <nav className="nav-wrapper light-blue darken-3">
        <a className="brand-logo center">{titulo}</a>
      </nav>

      {children}
    </>
  )
};

export default Layout;
