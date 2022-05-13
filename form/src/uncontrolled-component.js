const App = () => {
    const submit = (e) => {
        e.preventDefault()
        const data = Array.from(new FormData(e.target));
        console.log(Object.fromEntries(data));
    }

    return (
        <form onSubmit={submit}>
            <div>
                <span>martin</span>
                <input name='campo'></input>
            </div>
            <input name='campo2'></input>
            <input type='file' name='archivo'></input>

            <input type='submit' calue='enviar' ></input>
        </form>

    )
}

export default App


// import { useRef } from "react"

// const App = () => {

//   const input = useRef()
//   const file = useRef()


//   const submit = () => {
//     console.log(input.current.value);
//     console.log(file.current.files[0]);

//   }



//   return (
//     <div>
//       <div>
//         <span>martin</span>
//         <input type='text' name='campo' ref={input}></input>
//         <input type='file' ref={file}></input>

//       </div>
//       <input type='submit' value='Enviar' onClick={submit}></input>
//     </div>
//   )
// }

// export default App