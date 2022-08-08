import './Discontinued.css'
import User from './User'

const Discontinued = () => {
  return (
    <div className="discontinued-container">
        <div className="discontinued">
            <span className="title discontinued-title">Discontinued</span>
            <span>This client has been discontinued for the time being. Please do not purchase any clients that claim to be this one. This is your final warning.</span>
            <User />
        </div>
    </div>
  )
}

export default Discontinued