import React, { useState } from 'react'
import { newProspects } from "../../Firebase/database"

const Form = () => {
    const id = ''

    const [firstName, setFirstName] = useState("")
    const [whatsapp, setWhatsapp] = useState("")
    const [refTrack, setRefTrack] = useState("")

    const handleNameChange = (e) => setFirstName(e.target.value)
    const handleWhatsappChange = (e) => setWhatsapp(e.target.value)
    const handleRefTrackChange = (e) => setRefTrack(e.target.value)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        newProspects(
            id,
            {
                name: firstName,
                whatsapp: whatsapp,
                reftrack: refTrack,
            })
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <p className='h3'>Preencha o formulario e encomende seu Beat Personalizado!</p>

            <div className="mb-3">
                <label htmlFor="firstName" className="form-label">Primeiro Nome</label>
                <input type="text" className="form-control" id="firstName" aria-describedby="firstName" onChange={handleNameChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="whatsapp" className="form-label">Whatsapp</label>
                <input type="tel" className="form-control" id="whatsapp" aria-describedby="whatsappHelp" onChange={handleWhatsappChange} />
                <div id="whatsappHelp" className="form-text" > Nos não iremos compartilhar com ninguem.</div>
            </div >

            <div className="mb-3">
                <label htmlFor="RefTrack" className="form-label">Track de Referencia</label>
                <input type="url" className="form-control" id="RefTrack" onChange={handleRefTrackChange} />
            </div>

            <button type="submit" className="btn btn-primary" >Enviar</button >
        </form >
    )
}

export default Form