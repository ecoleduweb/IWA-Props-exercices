import TheModal2Point5 from '../components/TheModal2Point5'
import { useState } from 'react'

const TheExercice2Point5 = () => {
  const [messages, setMessages] = useState<string[]>([])
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const message = (e.target as HTMLInputElement).value;
      (e.target as HTMLInputElement).value = ''
      if (message.length > 100)
        return alert("Trop long")
      if (messages.length >= 5)
        return alert("Trop de messages dans la liste")
      setMessages([...messages, message])
    }
  }

  return (
    <>
      <h2>Deuxième défi défi et demi</h2>
      <p>Passes un tableau de messages dans la modale.</p>
      <p>Il y a deux défis ici soit : comment ajouter une valeur à un tableau dans un usestate</p>
      <p>Comment afficher un tableau de balises p</p>
      <p>Demande à chat gpt! :)</p>
      <p>Tu ne peux pas écrire plus que 5 messages. Au total, les messages doivent faire moins de 100 caractères</p>
      <label >Message pour la modale
        <input type="text" placeholder='Ton Message' onKeyDown={handleEnter} />
      </label>
      <TheModal2Point5 messages={messages} />
    </>
  )
}

export default TheExercice2Point5

