const FlowCard = val => {
  return (
    <div className='flex gap-4 p-5 rounded-lg bg-white my-5'>
      <div>
        <h2 className='font-["ClashDisplay-semibold"] text-xl'>{val.title}</h2>
        <p className='text-seccondary text-xs md:text-sm'>{val.desc}</p>
      </div>
    </div>
  );
};

export default FlowCard;
