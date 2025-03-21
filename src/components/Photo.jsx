const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
      >
        <img
          src="/assets/photo.jpg" 
          alt="Photo"
          className="object-contain w-full h-full" 
        />
      </motion.div>
    </div>
  );
};

export default Photo;
