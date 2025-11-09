import './Notfound.css'
import James from '../../assets/mo.png'
import Sherlock from '../../assets/sh.png'
import John from '../../assets/jw.png'

function Notfound() {
  const data =[
    {
      image:James,
      text:'Back. Go back. Some doors — some pages — are better left lost.'
    },
    {
      image:Sherlock,
      text:'404 Not Found… The main page is missing. Moriarty is behind this, of course. Stay alert, Watson — some games are not meant to be won.'
    },
    {
      image:John,
      text:'The… the main page… it’s gone? Are we really seeing this? Sherlock… what’s happening?'
    }
  ]

  const random = data[Math.floor(Math.random()*data.length)]
  return (
    <div className='not-container'>
      <div className="total-not">
        <div className="image">
            <img src={random.image} alt="" />
        </div>
        <div className="text">
            <p>{random.text}</p>
        </div>
      </div>
    </div>
  )
}

export default Notfound