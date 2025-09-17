import '../style/Modal.scss'
import ACharacterCard from '../components/ACharacterCard'
import { ForceWeilder } from '../types/Character'

interface PropsInterface {
  character: ForceWeilder,
  onNext: () => void,
  onPrevious: () => void
}
const TheModal = ({ character, onNext, onPrevious }: PropsInterface) => {
  const handleNext = () => {
    // Ici, tu dois appeler la fonction onNext
    onNext()
  }

  const handlePrevious = () => {
    // Ici, tu dois appeler la fonction onPrevious
    onPrevious()
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <ACharacterCard character={character} />
        <div className="flex-between">
          <button onClick={handlePrevious}>Précédent</button>
          <button onClick={handleNext}>Suivant</button>
        </div>
      </div>
    </div>
  )
}

export default TheModal