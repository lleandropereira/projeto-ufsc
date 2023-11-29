import "./Message.css";

const Message = ({msg, type}) => {
    return (
        //esta div possui uma classe dinâmica, cujo nome será alterado dependendo do tipo da menssagem
        <div className={`message ${type}`}>
            <p>{msg}</p>
        </div>
    );
};

export default Message;