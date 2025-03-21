// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import photo from '../assets/photo.jpg'

const Photo = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <motion.svg
        className="absolute"
        width="100%"
        height="100%"
        viewBox="0 0 500 500"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="240"
          stroke="#00ff99"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.svg>

      <div className="flex-shrink-0 w-[400px] h-[400px] relative">
        <img
          src={photo}
          alt="Photo"
          className="object-cover w-full h-full rounded-full"
          style={{ objectPosition: 'top' }}
        />
      </div>
    </div>
  )
}

export default Photo
