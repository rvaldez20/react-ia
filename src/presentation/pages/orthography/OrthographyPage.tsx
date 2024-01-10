import { GptMessage, MyMessage, TypingLoader } from '../../components'

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          
          {/* Welcome GPT */}
          <GptMessage text='Hola, puedes escribir tu texto en español, y te ayudo con las correcciones' />

          {/* User Messages  */}
          <MyMessage text='Hola Mundo' /> 

          {/* loader that show that GPT will write some */}
          <TypingLoader className="fade-in" />
  

        </div>
      </div>
    </div>
  )
}
