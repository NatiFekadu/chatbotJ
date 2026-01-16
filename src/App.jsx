import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('#023F6C')

  useEffect(() => {
    document.body.style.backgroundColor = bgColor
    document.documentElement.style.backgroundColor = bgColor
  }, [bgColor])

  const handleColorChange = (e) => {
    setBgColor(e.target.value)
  }

  return (
    <>
      <div className="background-controls">
        <label htmlFor="colorPicker">Background Color:</label>
        <div className="control-group">
          <input
            type="color"
            id="colorPicker"
            value={bgColor}
            onChange={handleColorChange}
            className="color-input"
          />
          <input
            type="text"
            value={bgColor}
            onChange={handleColorChange}
            className="hex-input"
            placeholder="#000000"
          />
        </div>
      </div>

      <h1>Chatbot Test</h1>
      <div className="card">
        <p className="instruction-text">
          Welcome to the Chatbot Test application.
        </p>
        <div className="instructions-container">
          <h3 className="instructions-title">Instructions</h3>
          <ul className="instructions-list">
            <li>Locate the chatbot on the right bottom of the page.</li>
            <li>Interact with the bot to test responses.</li>
            <li>Verify that all messages are displaying correctly.</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
