import { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser'

import styles from './formContact.module.scss'

export default function FormContact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [message, setMessage] = useState('')
    const [alertDanger, setAlertDanger] = useState(false)
    const [alertSuccess, setAlertSuccess] = useState(false)


    const sendEmail = (e: any) => {
        e.preventDefault();

        const templateParams = {
            from_name: name,
            message: message,
            telephone: telephone,
            email: email
        }

        emailjs.send(
            "service_l83d4qa",
            "template_kc4n62q",
            templateParams,
            "LZFoc1iKZcTVmXa3j"
        )
            .then((response) => {
                console.log('EMAIL ENVIADO', response.status, response.text)
                setName('')
                setEmail('')
                setTelephone('')
                setMessage('')
            }, (err) => {
                console.log("ERRO ", err)
            })



        if (name === '' || email === '' || message === '') {
            setAlertDanger(true)

            setTimeout(() => {
                setAlertDanger(false)
            }, 5000)
           
        } else {
            setAlertSuccess(true)

            setTimeout(() => {
                setAlertSuccess(false)
            },5000)
        }

    }

    return (
        <div className={styles.formContainerContact}>
            {alertDanger ? <Alert className={styles.variantAlert} variant='danger'>Favor, preencher todos os campos</Alert> : <></>}
            {alertSuccess ? <Alert className={styles.variantAlert} variant='success'>Contato Enviado Com Sucesso</Alert> : <></>}
            <form className={styles.formContact} onSubmit={sendEmail}>
                <input
                    className={styles.inputName}
                    type="text"
                    placeholder='Nome Completo'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <input
                    className={styles.inputEmail}
                    type="email"
                    placeholder='Email'
                    onChange={(e) => { setEmail(e.target.value) }}
                    value={email}
                />

                <input
                    className={styles.inputTel}
                    type="tel"
                    placeholder='Telefone'
                    onChange={(e) => { setTelephone(e.target.value) }}
                    value={telephone}
                />

                <textarea
                    className={styles.inputMessage}
                    placeholder='Digite sua mensagem'
                    onChange={(e) => { setMessage(e.target.value) }}
                    value={message}
                />

                <input className={styles.inputButton} type="submit" value="Enviar Mensagem" />


            </form>

            <div>

            </div>
        </div>
    )
}