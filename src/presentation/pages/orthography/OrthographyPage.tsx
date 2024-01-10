import { useState } from 'react'
import { GptMessage, MyMessage, TextMessageBox, TypingLoader } from '../../components'

interface Message {
  text: string;
  isGpt: boolean;
}

export const OrthographyPage = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  console.log(messages)

  const handlePost = async( text: string ) => {
    setIsLoading(true)
    setMessages( (prev) => [...prev, { text: text, isGpt: false }] );

    //TODO: use-case

    setIsLoading(false)

    // TODO: Añadir el message de isGPT en true
  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          
          {/* Welcome GPT */}
          <GptMessage text='Hola, puedes escribir tu texto en español, y te ayudo con las correcciones' />

          {
            messages.map( (message, index) => (
              message.isGpt
                ? (
                    <GptMessage key={ index } text='Esto es de OpenIA' />
                  )
                : (
                    <MyMessage key={ index } text={message.text} />
                  )
            ))
          }

          {
            isLoading && (
              <div className='col-start-1 col-end-12 fade-in'>
                {/* loader that show that GPT will write some */}
                <TypingLoader />
              </div>
            )
          }  
          

        </div> {/* grid grid */}
      </div> {/* chat-messages */}


      <TextMessageBox 
        onSendMessage={ handlePost }
        placeholder='Escribe aquí lo que deseas'
        disableCorrections
      />

    </div>
  )
}
