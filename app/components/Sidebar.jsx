import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ dict }) => {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black bg-[#00D991]"
                        href="#"
                    >
                        <Image src="/icons/trending.svg" width={24} height={24} alt="" />
                        <span>{dict?.tranding || "Tranding"}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image
                            src="/icons/newRelease.svg"
                            width={24}
                            height={24}
                            alt=""
                        />
                        <span>{dict?.new_releases || "New Releases"}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image
                            src="/icons/commingSoon.svg"
                            width={24}
                            height={24}
                            alt=""
                        />
                        <span>{dict?.coming_soon || "Coming Soon"}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image src="/icons/favourite.svg" width={24} height={24} alt="" />
                        <span>{dict?.favourites || "Favourites"}</span>
                    </Link>
                </li>
                <li>
                    <Link
                        className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                        href="#"
                    >
                        <Image
                            src="/icons/watchLater.svg"
                            width={24}
                            height={24}
                            alt=""
                        />
                        <span>{dict?.watch || "Watch later"}</span>
                    </Link>
                </li>
            </ul>
        </aside>

    )
}

export default Sidebar
