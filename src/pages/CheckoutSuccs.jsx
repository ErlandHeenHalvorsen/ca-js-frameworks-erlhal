import { Link } from "react-router";
import { CircleCheck } from "lucide-react";

const CheckoutSuccs = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="justify-center items-center flex flex-col text-center">
                <h1 className=" flex text-center items-center text-2xl font-bold">YOUR CHECKOUT IS COMPLETE</h1>
                <span className="mx-2 mb-4 text-green-400"><CircleCheck strokeWidth={3} /></span>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    );
};

export default CheckoutSuccs;