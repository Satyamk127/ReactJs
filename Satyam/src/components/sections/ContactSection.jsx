import InfoCard from '../ui/InfoCard'
import SectionHeading from '../ui/SectionHeading'

function ContactSection({
  form,
  formState,
  chatInput,
  chatLog,
  voiceState,
  audioOn,
  socialLinks,
  onFormChange,
  onSubmit,
  onChatChange,
  onChatSubmit,
  onVoiceTrigger,
  onAudioToggle,
}) {
  return (
    <section id="contact" className="panel">
      <SectionHeading
        tag="Futuristic Contact"
        title="Contact form, AI helper, voice nav, and direct reach"
        text="Message flow, sentiment check, chatbot, voice commands, aur direct contact buttons already implemented."
      />

      <div className="grid two-col">
        <form className="glass-card contact-form" onSubmit={onSubmit}>
          <h3>Send a message</h3>
          <label>
            <span>Name</span>
            <input
              value={form.name}
              onChange={(event) => onFormChange('name', event.target.value)}
              placeholder="Your name"
            />
          </label>
          <label>
            <span>Email</span>
            <input
              value={form.email}
              onChange={(event) => onFormChange('email', event.target.value)}
              placeholder="satyamkumarkeshari@gmail.com"
            />
          </label>
          <label>
            <span>Message</span>
            <textarea
              rows="5"
              value={form.message}
              onChange={(event) => onFormChange('message', event.target.value)}
              placeholder="Tell me about your idea..."
            />
          </label>
          <div className="form-footer">
            <button type="submit" className="primary-btn">Send Message</button>
            <div>
              <p>{formState.status}</p>
              <strong>Sentiment: {formState.sentiment}</strong>
            </div>
          </div>
        </form>

        <div className="glass-card assistant-card">
          <h3>Portfolio AI assistant</h3>
          <div className="chat-box">
            {chatLog.map((item, index) => (
              <div key={`${item.q}-${index}`} className="chat-pair">
                <p><strong>You:</strong> {item.q}</p>
                <p><strong>AI:</strong> {item.a}</p>
              </div>
            ))}
          </div>
          <form className="chat-form" onSubmit={onChatSubmit}>
            <input
              value={chatInput}
              onChange={(event) => onChatChange(event.target.value)}
              placeholder="Ask about projects, skills, contact, resume..."
            />
            <button type="submit" className="ghost-btn">Ask</button>
          </form>

          <div className="voice-panel">
            <button type="button" className="ghost-btn" onClick={onVoiceTrigger}>
              Voice Navigation
            </button>
            <button type="button" className="ghost-btn" onClick={onAudioToggle}>
              Ambient Mode: {audioOn ? 'On' : 'Off'}
            </button>
          </div>
          <p className="card-note">{voiceState}</p>
        </div>
      </div>

      <div className="grid three-col">
        {socialLinks.map((item) => (
          <InfoCard key={item.label} title={item.label} value={item.value} />
        ))}
      </div>
    </section>
  )
}

export default ContactSection
