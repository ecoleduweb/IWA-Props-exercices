import '../style/Jedi.scss'
import '../style/Modal.scss'
import Jedi from '../assets/jedi.svg'
import LaserHole from '../assets/LaserHole.svg'

interface LaserPosition { x: number, y: number }
const TheModal = ({ laserHoles }: { laserHoles: LaserPosition[] }) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <div className='jedi'>
          <img src={Jedi} />
          {laserHoles.map((pos, index) => (
            <img
            key={index}
            className='shot'
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            src={LaserHole}
          />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TheModal