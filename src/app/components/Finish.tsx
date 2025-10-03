import Image from 'next/image'
import Link from "next/link"
import { useRouter } from "next/navigation"

type Props = {
    isGameOver: boolean
    allPlayerFinished: boolean
}

const Finish = (props: Props) => {
    const { isGameOver, allPlayerFinished } = props
    const router = useRouter() // ✅ Use router for navigation

    const handleNextGame = () => {
        router.push("/next-game") // ✅ Change this to your actual next game page
    }

    return (
        <>
            <div className="bg-red-600 absolute h-1 w-[100vw] top-20">
                <Image 
                    className="absolute left-1/2 max-sm:left-1/3 bottom-0" 
                    src={'/tree_prev_ui.png'}
                    alt={'doll'}
                    width={150} 
                    height={150}
                />
            </div>

            {isGameOver && (
                <>
                        <Image src={"/lose-game123-ezgif.com-gif-to-webp-converter.webp"} alt={""} fill/>
                        <Link href={"/"}>
                            <button className="mt-4">
                                Restart Game
                            </button>
                        </Link>
                </>
            )}

            {allPlayerFinished && !isGameOver && (
                <>
                        <Image src={"/winning-gif.gif"} alt={""} fill/>
                        <button className="mt-4" onClick={handleNextGame}>
                            Next Game
                        </button>
                </>
            )}
        </>
    )
}

export default Finish
