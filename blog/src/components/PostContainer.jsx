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
    <Post title="Viaje a Roma" subtitle="Pizzas al mejor precio" img={roma}/>
    <Post title="Viaje a Toledo" subtitle="Toletum y buen acero" img={toledo}/>
    <Post title="Viaje a Salamanca" subtitle="Hay ranas" img={salamanca}/>
    <Post title="Viaje a Uganda" subtitle="Hay gente y no nieva (por ahora)" img={uganda}/>
    </div>
  </div>
  </>
)}

export default PostContainer;