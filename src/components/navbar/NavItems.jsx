const NavItems = ({title, style}) => {
    return (
        <>
        <li className={`text-[#EFF4FA] Open-Sans font-medium text-lg hover:text-[#1BBF00] duration-500 border-b-2 border-transparent hover:border-[#1BBF00] hover:cursor-pointer ${style}`}>{title}</li>
        </>
    );
};

export default NavItems;