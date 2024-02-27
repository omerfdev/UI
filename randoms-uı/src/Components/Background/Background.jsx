import './Background.css'
import togg from '../../assets/togg.mp4'
import LansmanOn from '../../assets/LansmanOn.png'
import LansmanYan from '../../assets/LansmanYan.png'
import LansmanArka from '../../assets/LansmanArka.png'

const Background=({playStatus,heroCount})=>   {
  
  if(playStatus){
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={togg} type='video/mp4'/>
      </video>
    )
  }
  else if(heroCount==0){return <img src={LansmanOn} className='background fade-in' alt=""></img>}
  else if(heroCount==1){return <img src={LansmanYan} className='background fade-in' alt=""></img>}
  else if(heroCount==2){return <img src={LansmanArka} className='background fade-in' alt=""></img>}
}

export default Background
