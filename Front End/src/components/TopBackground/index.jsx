import { TopBackground } from "./styles"
import UsersImage from "../../assets/users.png"

function DefaultBg({ ...props }) {
    return (
        <TopBackground>
            <img src={UsersImage} alt="users-image"></img>
        </TopBackground>
    )
}

export default DefaultBg