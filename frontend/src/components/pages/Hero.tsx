import hero from '../../assets/hero.png'
const Hero = () => {
  return (
    <div>
      <img src={hero} className='w-full max-h-[600px] object-cover' alt='Hero Image'/>
    </div>
  )
}

export default Hero
