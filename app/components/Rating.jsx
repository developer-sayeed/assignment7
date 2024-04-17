import { IoMdStarHalf } from "react-icons/io";
import { IoStarOutline } from "react-icons/io5";
import { MdStar } from "react-icons/md";
const RatingStar = ({ rating }) => {

    const star = Array.from({ length: 5 }, (value, i) => {
        let number = i + 0.5

        return (
            <span key={i}>
                {
                    rating >= i + 1 ? <MdStar className="text-[#00D991] text-xl" /> : rating >= number ? <IoMdStarHalf className="text-[#00D991] text-xl" /> : <IoStarOutline className="text-[#00D991] text-xl" />
                }
            </span>
        )
    })

    return (
        star
    )
}

export default RatingStar
