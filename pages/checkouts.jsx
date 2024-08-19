
import { Link } from 'react-router-dom';
import { AiFillCheckCircle } from "react-icons/ai";

const Checkouts = () => {
    return (
        <>
            <div className="checkoutMessage">
                <div className="checkoutTitleContainer">
                    <AiFillCheckCircle className="checkoutIcon" />
                    <center><h3>Thank you for your order!</h3></center>
                </div>
                <center><span>
                    Your order is being processed and will be delivered as fast as
                    possible.
                </span></center>
            </div>
            <div>
                <center><button className="feedback-ui">
                    <Link to="/feedback">Feedback</Link>
                </button></center>
            </div>
        </>
    );
};

export default Checkouts;
