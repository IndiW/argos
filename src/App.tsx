import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import NavBar from './components/navbar/Navbar'
import AboutPage from './pages/AboutPage'

type EyeChartLineProps = {
  prescriptionLabel: {
    top: string,
    bottom: string
  },
  distanceLabel: {
    top: string,
    bottom: string
  }
  label: string
  fontType: 'XSMALL' | "SMALL" | "MED" | "LARGE"
}
function EyeChartLine(props: EyeChartLineProps) {

  const fontSizes: Record<typeof props.fontType, string> = {
    XSMALL: "text-xl tracking-wider py-6 ",
    SMALL: "text-2xl tracking-wider py-4 -mr-[0.6em]",
    MED: "text-3xl tracking-wider py-2 -mr-[0.6em]",
    LARGE: "text-4xl tracking-wider -mr-[0.6em]"
  }

  const transition = { duration: 4, ease: [.25, .1, .25, 1] };
  const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  };

  return (
    <motion.div className='flex justify-between items-center text-center flex-row w-full' transition={transition} variants={variants}>
      <div>
        <p className='text-xs'>{props.prescriptionLabel.top}</p>
        <hr className='bg-gray-950 h-0.5 w-full' />
        <p className='text-xs'>{props.prescriptionLabel.bottom}</p>
      </div>
      <div>
        <h1 className={`${fontSizes[props.fontType]} font-bold -mr-[0.6em]`}>{props.label}</h1>
      </div>
      <div>
        <p className='text-xs'>{props.distanceLabel.top}</p>
        <hr className='bg-gray-950 h-0.5 w-full' />
        <p className='text-xs'>{props.distanceLabel.bottom}</p>
      </div>
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="flex items-center justify-center flex-col">
      <NavBar />
      {/* <div className='absolute top-4 flex justify-center items-center flex-col pt-0.5'>
        <h1 className='font-bold text-[14px]'>
        DR.SENURI
        </h1>
        <h2 className='font-light text-[10px]'>OPTOMETRIST</h2>
        </div> */}
      <motion.div initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.04 }} className='flex items-center justify-center text-center flex-col gap-4 w-full md:w-6/12 min-h-screen'>
        <EyeChartLine prescriptionLabel={{ top: '20', bottom: '40' }} distanceLabel={{ top: '40 FT.', bottom: '12.2m' }} label='EYE' fontType='LARGE' />
        <EyeChartLine prescriptionLabel={{ top: '20', bottom: '30' }} distanceLabel={{ top: '30 FT.', bottom: '9.14m' }} label='CARE' fontType='MED' />
        <EyeChartLine prescriptionLabel={{ top: '20', bottom: '25' }} distanceLabel={{ top: '25 FT.', bottom: '7.62m' }} label='FOR' fontType='SMALL' />
        <EyeChartLine prescriptionLabel={{ top: '20', bottom: '20' }} distanceLabel={{ top: '20 FT.', bottom: '6.10m' }} label='YOU' fontType='XSMALL' />
        <motion.div className='mt-10' transition={{ duration: 4, ease: [.25, .1, .25, 1] }} variants={{
          hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
          visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
        }}>
          <Button>Book an appointment</Button>
        </motion.div>
      </motion.div>
      <AboutPage />

    </div>
  )
}