import '../style/Modal.scss'

interface PropsInterface { messages: string[] }

const TheModal = ({ messages }: PropsInterface) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h3>Ton message</h3>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  )
}

export default TheModal