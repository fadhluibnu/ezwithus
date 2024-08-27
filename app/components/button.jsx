const Button = ({ background, color, content }) => {
  return (
    <form action='' method='get'>
      <button
        className={`${background} px-7 py-3 lg:px-10 lg:py-4 font-semibold font-base rounded-full font-['Poppins'] ${color} w-full group hover:bg-stone-950 hover:text-white hover:scale-105 hover:shadow-xl duration-300 focus:bg-stone-950 focus:text-white focus:ring-2 focus:ring-stone-950 focus:ring-offset-2`}
      >
        {content}
      </button>
    </form>
  );
};

export default Button;
