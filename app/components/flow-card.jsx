const FlowCard = val => {
  return (
    <div className='flex gap-4 p-5 rounded-2xl bg-white'>
      <svg
        width='46'
        height='47'
        viewBox='0 0 46 47'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17.1925 42.9227H28.6925C38.2759 42.9227 42.1092 39.0894 42.1092 29.5061V18.0061C42.1092 8.42275 38.2759 4.58942 28.6925 4.58942H17.1925C7.60921 4.58942 3.77588 8.42275 3.77588 18.0061V29.5061C3.77588 39.0894 7.60921 42.9227 17.1925 42.9227Z'
          stroke='#2C57F4'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3.77588 25.0978L15.2759 25.0594C16.7134 25.0594 18.3234 26.1519 18.86 27.4936L21.045 33.0136C21.5434 34.2594 22.3292 34.2594 22.8275 33.0136L27.2167 21.8778C27.6384 20.8044 28.4242 20.7661 28.9609 21.7819L30.9542 25.5578C31.5484 26.6886 33.0817 27.6086 34.3467 27.6086H42.1284'
          stroke='#2C57F4'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <div>
        <h2 className='font-["ClashDisplay-semibold"] text-xl'>{val.title}</h2>
        <p className='text-seccondary text-xs md:text-sm'>{val.desc}</p>
      </div>
    </div>
  );
};

export default FlowCard;
