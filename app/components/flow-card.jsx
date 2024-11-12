const FlowCard = val => {
  return (
    <div className='flex gap-4 p-5 rounded-2xl bg-white'>
      {val.icon}
      <div>
        <h2 className='font-["ClashDisplay-semibold"] text-xl md:text-lg lg:text-xl'>
          {val.title}
        </h2>
        <p className='text-seccondary text-sm md:text-xs lg:text-sm'>
          {val.desc}
        </p>
      </div>
    </div>
  );
};

export default FlowCard;
