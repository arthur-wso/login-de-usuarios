import PropTypes from "prop-types"
import {Title} from "./styles.js"

function DefaultTitle({ children, ...props}) {

    return (
        <Title {...props}>{children}</Title>
    )
}

DefaultTitle.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultTitle