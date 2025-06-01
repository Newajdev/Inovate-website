import PrimaryBtn from "../PrimaryBtn";
import NavItems from "./navItems";

const NavContainer = () => {
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
            <img src="Logo.png" alt="" />
            <ul className="flex gap-10">
                <NavItems title={'Home'}></NavItems>
                <NavItems title={'About'}></NavItems>
                <NavItems title={'Service'}></NavItems>
                <NavItems title={'Portfolio'}></NavItems>
                <NavItems title={'Price'}></NavItems>
                <NavItems title={'Blog'}></NavItems>
            </ul>
            <PrimaryBtn title={'Contact us'}></PrimaryBtn>
            
        </div>
    );
};

export default NavContainer;