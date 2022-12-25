import { useState } from "react"

const Form = () => {

    /// Estados del formulario /// 
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    /// Estado para los errores ///
    const [error, setError] = useState(true)


    const handleSubmit = (event) => {
        event.preventDefault()

        

        setError(false)
            setName('')
            setPassword('')
            event.target.reset()
    }

    const checkSpan = () =>{

        if (name === '' || password === '') {
            setError(true)
            return
        }
        setError(false)
    }


    return (
        <>

            <h1 className="text-center">Desafío Estado de los componentes y eventos</h1>
            <form className="mb-3 d-flex flex-column" onSubmit={handleSubmit}>

                <div className="mt-3">
                    <h4>Nombre</h4>
                    <input className="form-control" type="text" placeholder="Ingrese su nombre" onChange={(e) => checkSpan(setName(e.target.value))} />
                </div>

                <div className="my-3">
                    <h4>Contraseña</h4>
                    <input className="form-control" type="text" placeholder="Ingrese su contraseña" onChange={(e) => checkSpan(setPassword(e.target.value))} />
                </div>

                {password == '252525' ? <button className="btn btn-dark" type="submit" >Ingresar</button> : null}
                {error ? <span className="bg-secondary rounded p-2 text-white my-3">{`Por favor complete ingrese todos los datos :)`}</span> : null}
                

            </form>




        </>
    )
}

export default Form