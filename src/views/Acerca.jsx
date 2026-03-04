
const Acerca = () => {
    return (
    
    <div className="aboutpage">
      <h1 className="title-login">Projecto Whatsapp Copia</h1>
      <h3>Acerca del projecto y tecnologias</h3>
      <p>Es un projecto creado para imitar Whatsapp web orientado al uso de react y sus herramientas, separado en login, register,
         y acerca como rutas no protegidas, con home mostrando todo el Chat y Aside estando protegido
         por react context y RouteProtected.  Aparte de esto se usa Css y Html para la estructura de las paginas.</p>
         <h3> Decisiones y vistas sobre el projecto</h3>
         <p>En terminos decisiones de desarrollo opte por familiaridad y utilidad en cuanto a complejidad y visual del projecto refiere.<br></br> 
          El proyecto no tomo mucho tiempo debido a que aun no tenemos base de datos verdadera a la que conectar. ni verificar todo de forma server-sided
          ,igualmente fueron tomadas medidas para mostrar inputs erroneas en register y esta pensado con planes de integracion a api o sql.
         </p>
    </div>
  )
}

export { Acerca }