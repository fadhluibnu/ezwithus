const CheckIcon = () => {
    return (
        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9986 3.0722C15.0005 3.19243 14.9774 3.31174 14.9307 3.42255C14.884 3.53336 14.8148 3.63326 14.7274 3.71589L7.72185 10.5715L6.40573 11.8588C6.31972 11.9448 6.21731 12.0125 6.10457 12.058C5.99184 12.1036 5.8711 12.1259 5.74955 12.1238C5.62756 12.1263 5.50633 12.1042 5.39313 12.0586C5.27994 12.0131 5.17712 11.9451 5.09086 11.8588L3.77474 10.5715L0.271329 7.14305C0.183974 7.06042 0.114754 6.96053 0.0680624 6.84972C0.0213712 6.73891 -0.0017708 6.6196 0.000105629 6.49937C0.000105629 6.24689 0.0900969 6.03191 0.271329 5.85568L1.58745 4.56831C1.6735 4.482 1.77608 4.41394 1.88904 4.3682C2.002 4.32245 2.12303 4.29996 2.24489 4.30208C2.50361 4.30208 2.72234 4.39082 2.90357 4.56831L5.74955 7.36178L12.0964 1.14114C12.2714 0.966155 12.5089 0.871165 12.7551 0.876164C13.0126 0.876164 13.2326 0.963656 13.4125 1.14114L14.7287 2.42851C14.9062 2.596 15.0036 2.82972 14.9999 3.07345L14.9986 3.0722Z" fill="#00B090" />
        </svg>
    )
}

const XIcon = () => {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12.75L12.5 2.25M2 2.25L12.5 12.75" stroke="#E73B3B" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const ListOfBenefit = ({icon, text, color}) => {
    return (
        <div className="flex items-center gap-2">
            {icon}
            <p className={`font-medium text-md capitalize ${color}`}>{text}</p>
        </div>
    )
}

// const PRICE_CARD_PARAMS = {
//     background: null,

// }

const PriceCard = (
    {
        title,
        desc,
        price,
        background = 'bg-white',
        iconColor,
        titleColor = 'text-stone-950',
        priceColor = 'text-blue',
        descColor,
        colorListBenefit,
        features
    }
) => {
    return (
        <div className={`w-100 flex flex-col gap-8 py-8 px-7 ${background} rounded-3xl`}>
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.5292 27.6V16.2917C31.5292 15.2375 30.6667 14.375 29.6126 14.375H24.0542" className={`${iconColor}`} stroke="#2C57F4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.9292 11.5L23.4792 14.375L26.9292 17.25" className={`${iconColor}`} stroke="#2C57F4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.4708 19.55V27.6" className={`${iconColor}`} stroke="#2C57F4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.7584 18.975C16.8226 18.975 18.4959 17.3017 18.4959 15.2375C18.4959 13.1734 16.8226 11.5 14.7584 11.5C12.6942 11.5 11.0209 13.1734 11.0209 15.2375C11.0209 17.3017 12.6942 18.975 14.7584 18.975Z" className={`${iconColor}`} stroke="#2C57F4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M14.4709 34.5C16.3762 34.5 17.9208 32.9554 17.9208 31.05C17.9208 29.1446 16.3762 27.6 14.4709 27.6C12.5655 27.6 11.0209 29.1446 11.0209 31.05C11.0209 32.9554 12.5655 34.5 14.4709 34.5Z" className={`${iconColor}`} stroke="#2C57F4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M31.5292 34.5C33.4346 34.5 34.9792 32.9554 34.9792 31.05C34.9792 29.1446 33.4346 27.6 31.5292 27.6C29.6238 27.6 28.0792 29.1446 28.0792 31.05C28.0792 32.9554 29.6238 34.5 31.5292 34.5Z" className={`${iconColor}`} stroke="#2C57F4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.25 42.1666H28.75C38.3334 42.1666 42.1667 38.3333 42.1667 28.75V17.25C42.1667 7.66665 38.3334 3.83331 28.75 3.83331H17.25C7.66671 3.83331 3.83337 7.66665 3.83337 17.25V28.75C3.83337 38.3333 7.66671 42.1666 17.25 42.1666Z" className={`${iconColor}`} stroke="#2C57F4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div>
                <h2 className={`font-bold text-2xl ${titleColor}`}>{title}</h2>
                <p className={`font-normal text-base ${descColor}`}>{desc}</p>
            </div>
            <div className="flex flex-col gap-2.5">
                <div className="flex gap-8">
                    <p className={`font-medium text-lg ${descColor}`}>Rp.</p>
                    <h3 className={`font-bold text-3xl ${priceColor}`}>{price}</h3>
                </div>
                <hr />
                {
                    features.map((val) => 
                        <ListOfBenefit 
                            icon={val.status ? <CheckIcon /> : <XIcon />}
                            color={colorListBenefit}
                            text={val?.text}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default PriceCard