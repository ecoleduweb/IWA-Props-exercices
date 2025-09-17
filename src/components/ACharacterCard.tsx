import { ForceWeilder } from '../types/Character'
import '../style/CharacterCard.scss'
import ALightSaber from './ALightSaber'

interface PropsInterface {
  character: ForceWeilder
}
const ACharacterCard = ({ character }: PropsInterface) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="name">L'INFO DE TON CHARACTER</h2>
        <p><span className="info-title">Lightsaber:</span>
          <ALightSaber color={character.lightsaberColor} />
        </p>
        <p><span className="info-title">Rank:</span> {character.rank}</p>
        <p><span className="info-title">Force Level:</span> {character.forceLevel}</p>
      </div>
    </div>
  )
}

export default ACharacterCard