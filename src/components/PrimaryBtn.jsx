const PrimaryBtn = ({title, style}) => {
    return (
        <button className={`text-white px-10 py-5 bg-[#1BBF00] rounded-full Open-Sans font-medium text-lg leading-5 border-transparent border-2 hover:border-[#1BBF00] hover:bg-transparent duration-500 ${style}`}>{title}</button>
    );
};

export default PrimaryBtn;