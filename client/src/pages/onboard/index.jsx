import BouncingChatsy from "@/components/bouncingChatsy";
import Image from "next/image";

const OnboardPage = () => {
    return (
        <div className="w-full h-screen bg-chatsy-dark text-white flex px-10 py-32">
            <div className="w-1/2 flex h-full justify-end items-center flex-col">
                <BouncingChatsy />
                <br />
                <br />
                <br />
                <h1 className="text-4xl mb-5 font-bold">You are not from Chatsy, huh?</h1>
                <h1 className="text-5xl font-bold">Let's get you onboard!</h1>
            </div>
            <div className="w-1/2 flex h-full flex-col items-center justify-center px-10">

                <div className="flex flex-col w-[360px] items-center gap-4">
                    <h1 className="text-4xl font-bold">Create your profile</h1>
                    <br />
                    <div className="w-[150px] h-[150px] bg-chatsy-ternary-dark rounded-full overflow-hidden relative group my-3 flex justify-center items-center">
                        <div className="h-full w-full bg-chatsy-black-transparent flex justify-center items-center absolute invisible group-hover:visible cursor-pointer">
                            <Image src="/icons/camera.png" alt="Add profile picture" width={24} height={24} />
                        </div>
                        <Image src="/images/user.png" alt="Your profile picture" sizes="100vw" width="0" height="0" className="w-[75%] h-auto object-contain" />
                    </div>

                    <input type="text" placeholder="Your display name"
                        className="text-center w-full border border-x-0 border-t-0 p-3 bg-transparent placeholder:text-neutral-500 outline-none focus:border-chatsy-orange-primary"
                    />

                    <input type="text" placeholder="About you"
                        className="text-center w-full border border-x-0 border-t-0 p-3 bg-transparent placeholder:text-neutral-500 outline-none focus:border-chatsy-orange-primary"
                    />

                    <br />

                    <button className="w-full px-5 py-3 rounded-md bg-orange-500">
                        Create profile
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OnboardPage;