import YoutubeIcon from "../vectors/youtube-icon";
import { Input } from "@mui/material";

const Header = ({ onChangeSearch }) => {
    return (
        <div className="w-full">
            <div className="logo" >
                <YoutubeIcon />
                <div>YouTube</div>
            </div>
            <Input placeholder="Search" className="mr-8 w-30" onChange={onChangeSearch} />
        </div>
    );
};

export default Header;
