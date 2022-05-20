import { useState } from "react";
import { Formik, Form, Field } from "formik";
import './header.css'
import './content.css'
import './article.css'



const App = () => {
  const [photos, setPhotos] = useState([])
  const open = url => window.open(url)
  return (
    <div>
      <header>
        <Formik initialValues={{ search: '' }} onSubmit={async values => {
          const res = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.seach}`, {
            headers: {
              'Authorization': 'Client-ID e38gxL64HF_snCZHC0yvoDQLsvey9xjMtXdX7mBYJl4'
            }
          })
          const data = await res.json()
          setPhotos(data.results);
        }}>
          <Form>
            <Field name='search'></Field>
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map(photo =>
            <article key={photo.id} onClick={() => open(photo.links.html)}>
              <img src={photo.urls.regular} />
              <p>{[photo.description, photo.alt_description].join(' - ')}</p>
            </article>)}
        </div>
      </div>
    </div >
  );
}

export default App;
