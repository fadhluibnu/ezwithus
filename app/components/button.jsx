const Button = ({background, color, content})  => {
    return (
        <form action="/">
            <button className={`${background} px-7 py-3 font-semibold font-base rounded-full font-['Poppins'] ${color} w-full`}>
                {content}
            </button>
        </form>
    )
}

export default Button