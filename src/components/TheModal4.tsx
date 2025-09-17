import '../style/Modal.scss'
import ACharacterCard from '../components/ACharacterCard'
import { ForceWeilder } from '../types/Character'

interface PropsInterface { character: ForceWeilder, isSith: boolean }
const TheModal = ({ character, isSith }: PropsInterface) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <ACharacterCard character={character} />
        <p> {isSith ? 'c\'est ': 'Ce n\'est pas'} un sith</p>
      </div>
    </div>
  )
}

export default TheModal