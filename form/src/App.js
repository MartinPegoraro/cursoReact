import { useState } from "react"

const App = () => {
  const [value, setValue] = useState({ normal: '', texto: '', select: '', check: false, club: 'boca' })
  const handleChange = ({ target }) => {
    setValue((state) => ({
      ...state,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    }))

  }
  console.log(value);

  return (
    <div>
      {value.length < 5 ? <span>Longitud de string muy corta</span> : null}
      <input type='text' name='normal' value={value.normal} onChange={handleChange}></input>
      <textarea name='texto' onChange={handleChange} value={value.texto}></textarea>

      <select value={value.select} name='select' onChange={handleChange}>
        <option value=''> ---Seleccionar---</option>
        <option value='Boca'>Boca</option>
        <option value='Riber'>Riber</option>
        <option value='Racing'>Racing</option>
        <option value='Independiente'>Independiente</option>
      </select>

      <input
        type='checkbox'
        name='check'
        onChange={handleChange}
        checked={value.check}
      ></input>

      <div >
        <label>Equipo</label>
        <input onChange={handleChange} type='radio' value='boca' name='club' checked={value.club === 'boca'} />Boca
        <input onChange={handleChange} type='radio' value='riber' name='club' checked={value.club === 'riber'} />Riber
        <input onChange={handleChange} type='radio' value='racing' name='club' checked={value.club === 'racing'} />Racing
      </div>
    </div>
  )
}

export default App