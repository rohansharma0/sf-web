import { GoBackNavContainer } from "./GoBackNav.style";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const GoBackNav = ({ text, onBack }: { text: string; onBack: () => void }) => {
    return (
        <GoBackNavContainer onClick={onBack}>
            <KeyboardArrowLeftIcon />
            {text}
        </GoBackNavContainer>
    );
};

export default GoBackNav;
