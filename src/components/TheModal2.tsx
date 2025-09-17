import '../style/Modal.scss'

interface PropsInterface { isJediMessage: string }

const TheModal = ({ isJediMessage }: PropsInterface) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h3>{isJediMessage}</h3>
      </div>
    </div>
  )
}

export default TheModal