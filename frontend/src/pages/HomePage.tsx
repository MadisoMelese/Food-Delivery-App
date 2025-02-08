import langingImage from '../assets/mainbg.png'
import playStore from '../assets/playStore.png'
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <div className="grid md:cols-2 gap-5">
        <img src={langingImage} alt="Landing page Image "/>

        <div className="flex flex-col items-center justify-center gap-4 text-center">
        <span className="font-bold text-3xl tracking-tighter">Order takeaway even faster!</span>

        <span>
        Download the FoodEats App for faster ordering and personilised recommendations
        </span>

        <img src={playStore} alt="Play store Or App Store " className='cursor-pointer'/>
        </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage
