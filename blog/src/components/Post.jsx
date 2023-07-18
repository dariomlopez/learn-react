import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Post = (props) => {
  const {title, subtitle, img} = props
  return(
  <>
  <div className='col'>
    <Card 
    // style={{ width: '15rem' }}
    >
    {/* TODO: colocar un condicional (ternario) para que si no tengo img, coloque una por defecto */}
    <Card.Img variant="top" src={img} />
    <Card.Body>
      {title && <Card.Title>{title}</Card.Title>}
      {subtitle && <Card.Text>
      {subtitle}
      </Card.Text>}
      <Button variant="primary">Click</Button>
    </Card.Body>
    </Card>
  </div>
  </>
)}

export default Post;