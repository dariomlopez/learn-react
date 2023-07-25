import { useState } from 'react';
import '../assets/css/Form.css';

const Form = () => {
  const [title, setTitle] = useState(''); // Estado para el título con hook useState
  const [content, setContent] = useState(''); // Estado para el contenido con hook useState
  const [tags, setTags] = useState(''); // Estado para las etiquetas con hook useState

  // Función que escribe el título en consola y actualiza el estado
  const handleTitle = (e) => {
    // Actualiza el estado de title con el valor del input
    setTitle(e.target.value); // e.target.value es el valor del input
    console.log("title:", e.target.value);
  }
  const handleTextarea = (e) => {
    // Actualiza el estado del content con el valor del input
    setContent(e.target.value); // e.target.value es el valor del textarea
    console.log("content:", e.target.value);
  }
  const handleTags = (e) => {
    // Actualiza el estado de tags con el valor del input
    setTags(e.target.value); // e.target.value es el valor del input
    console.log("tags:", e.target.value);
  }
  const resetearCampos = () => {
    setTitle('');
    setContent('');
    setTags('');
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    document.getElementById("tags").value = "";
  }
  // Campos requeridos:
  // const required = [
  //   "title", "content", "authorId", "sectionId"
  // ]
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página

    // Envía los datos al servidor
    const url = "http://localhost:3000/posts";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({title, subtitle, content, img, authorId, sectionId})
    })
    .then(res => res.json())
    .then(data => console.log(data));

    resetearCampos();
    alert("Datos enviados");
  }

  return(
  <>
  <div id="form" className='pb-3'>
  <h2 className='py-3'>Crear Post</h2>
  <div id='form-container'>
    <form>
      {/* Título */}
      <div className='mb-3'>
      <label className='form-label'>Titulo *</label>
      <input className='form-control' id="title" type="text" placeholder="Titulo" onChange={handleTitle} />
      </div>
      {/* Subtítulo */}
      <div className='mb-3'>
      <label className='form-label'>Subtítulo</label>
      <input className='form-control' id="subtitle" type="text" placeholder="Subtítulo" onChange={handleTitle} />
      </div>
      {/* Contenido del post */}
      <div className='mb-3'>
        <label className='form-label'>Contenido *</label>
        <textarea id="content" className='form-control' placeholder="Contenido" 
        style={{height: "150px", width: "100%"}}
        defaultValue="Escribe el contenido..." onChange={handleTextarea}></textarea>
      </div>
      {/* Autor del post - no se puede editar */}
      <div className='mb-3'>
        <label className='form-label'>Author</label>
        <input id="author" className='form-control' type="text" placeholder="Pepe" readOnly/>
      </div>
      {/* Subida de imagen para el post */}
      <div className="mb-3">
      <label for="img" class="form-label">Selecciona una foto</label>
      <input className="form-control" type="file" id="img"/>
      </div>
      {/* Select para a sección */}
      <div className='mb-3'>
      <label htmlFor="section" className='form-label'>Elige la sección: *</label>
      <select name="section" id="section" class="form-select">
        {/* TODO: Bucle con datos del servidor */}
        <option value="1">Últimos posts</option>
        <option value="2">Sección 2</option>
        <option value="3">Sección 3</option>
      </select>
      </div>

      <button id="enviar-btn" onClick={handleSubmit}className='btn btn-secondary' disabled>Enviar</button>
    </form>
  </div>
  </div>
  </>)
}

export default Form;