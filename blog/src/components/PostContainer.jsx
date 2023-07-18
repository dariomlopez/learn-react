import Post from './Post';
import roma from '/roma.png';
import toledo from '/toledo.jpg';
import salamanca from '/salamanca.jpg';
import uganda from '/uganda-forever.jpg';

const PostContainer = (props) => {
  const {title} = props
  return (
  <>
  <div className='container py-3'>
    {title && <h2>{title}</h2>}
    <div className='row g-3 py-0'>
    {/* Idea: Crear un componente <Post id="1" seoTitle="lorem" descripcion="seo" variant=""> */}
    {/* 1. Leer el JSON y seleccionar un section */}

    {/* 2. Bucle en ese array */}

    {/* 3. Si no hay contenido "Aún no hay posts" */}
    </div>
  </div>
  </>
)}

export default PostContainer;