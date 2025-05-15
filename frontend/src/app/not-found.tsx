import { AiOutlineFrown } from "react-icons/ai";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center text-center items-center h-dvh">
            <AiOutlineFrown className="text-9xl"/>
            <h2 className="font-semibold text-2xl">Page Not Found</h2>
            <p className="font-light">Could not find requested resource</p>
        </div>
    );
}