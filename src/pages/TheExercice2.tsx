import TheModal2 from '../components/TheModal2'
import { ChangeEvent, useState } from 'react'

const TheExercice2 = () => {
    const [isJediMessage, setIsJediMessage] = useState("Sorry, you are not a Jedi")
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
      setIsJediMessage(event.target.checked ? "May the force be with you, young Jedi!" : "Sorry, you are not a Jedi")
    }
  return (
    <>
      <h2>Deuxième défi défi</h2>
      <p>Au lieu de passer un boolean qui décide du type de message, passe simplement une string.</p>
      <p>Ton code sera plus simple à lire et plus facilement réutilisable.</p>
      <p>True : May the Force be with you, young Jedi!</p>
      <p>False : Sorry,you are not a jedi</p>
      <label >Es-tu un jedi??
        <input type="checkbox" name="jedi" onChange={handleCheckboxChange} />
      </label>
      <TheModal2 isJediMessage={isJediMessage} />
    </>
  )
}

export default TheExercice2
