import React, { useState }from "react";

const FeedBackForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Отправлено: ', {name, message});
        alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
        onCLose();
    }

    return(
        <div className="feedback-form-overlay" style={overlayStyle}>
            <div className="feedback-form" style={formStyle}>
                <h2 className="text-center mb-4 text-dark">Форма обратной связи</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-dark">
                            Имя
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            className="form-control border-0 rounded-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-outline-dark me-2 rounded-2"
                        >Отправить</button>
                        <button type="button" className="btn btn-outline-dark rounded-2"
                        onClick={onClose}>Закрыть</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FeedBackForm;