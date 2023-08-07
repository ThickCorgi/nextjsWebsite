import './styles.css'
import image from './assests/koolaidj1.jpeg'
import logo from './assests/linkedin.svg'
import { Counter } from './ClickCounter'
export default function App() {
    const name = "moon"
    const name = 'moon'
  return (
    <div>
      <h1>
        Hello World - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <p>Testing</p>
      <img src={image} alt="imgtest" width="250" height="250" />
      <img src={logo} alt="logotest" width="250" height="250" />
      <Counter />
    </div>
  )
}
