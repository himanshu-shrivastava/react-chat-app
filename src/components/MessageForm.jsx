import { useState } from 'react'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'
import { sendMessage, isTyping } from 'react-chat-engine'

const MessageForm = (props) => {
    const [inputText, setInputText] = useState('')

    const { chatId, creds } = props

    const handleChange = (event) => {
        setInputText(event.target.value)

        isTyping(props, chatId)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const text = inputText.trim()

        if (text.length > 0) {
            sendMessage(creds, chatId, { text })
        }

        setInputText('')
    }

    const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' })
    }

    return (
        <form className="message-form" onSubmit={ handleSubmit }>
            <input
                className="message-input"
                placeholder="Send a message..."
                value={ inputText }
                onChange={ handleChange }
                onSubmit={ handleSubmit }
            />
            <label htmlFor="upload-button">
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input
                type="file"
                multiple={ false }
                id="upload-button"
                style={ { display: 'none' } }
                onChange={ handleUpload.bind(this) }
            />
            <button type="submit" className="send-button">
                <SendOutlined className="send-icon" />
            </button>
        </form>
    )
}

export default MessageForm
