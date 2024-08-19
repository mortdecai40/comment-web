import Link from "next/link"
export default function Header() {
    return (
        <div>
            <div className="w-full h-14 px-4 py-3 items-center flex justify-between bg-blue-400">
                <div className="flex items-center">
                    <div className="bg-white size-9 rounded-lg text-center mr-1">
                        <p className="font-mono font-extrabold text-blue-500 text-3xl">C</p>
                    </div>
                    <p className="font-bold text-white">omments</p>

                </div>
                <div>
                    <Link href="/">
                        <p className="bg-white w-28 text-center px-3 py-1 rounded-full text-sm">Logout</p>
                    </Link>
                </div>
            </div>
        </div>
    )

}