import BouncingChatsy from "@/components/bouncingChatsy";
import Image from "next/image";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/firebase/firebase-auth.js";
import axios from "axios";
import { AUTH_ROUTES } from "@/constants/apiRoutes";
import { useRouter } from "next/router";


const AuthPage = () => {
    const router = useRouter();

    const handleGoogleAuth = async () => {
        const provider = new GoogleAuthProvider();
        const { user } = await signInWithPopup(firebaseAuth, provider);
        const { displayName: name, email, photoURL: profile_picture } = user;

        try {
            if (email) {
                const { data } = await axios.post(AUTH_ROUTES.CHECK_USER, { email });

                if (!data.status) {
                    router.replace("/onboard");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="w-full h-screen bg-chatsy-dark text-white flex">
            <div className="w-1/2 flex justify-center items-center p-10">
                <div className="w-[400px] flex flex-col">
                    <h1 className="text-4xl mb-4 font-bold">Hey buddy!</h1>
                    <h1 className="text-5xl font-bold">Let's Chatsy</h1>

                    <br /><br /><br />

                    <div className="flex flex-col w-full">
                        <input type="text" placeholder="Email or Phone Number"
                            className="w-full border border-none p-3 rounded-md bg-white text-chatsy-dark placeholder:text-chatsy-ternary-dark outline-none"
                        />

                        <br />

                        <button className="w-full px-5 py-3 rounded-md bg-orange-500">
                            Continue
                        </button>
                    </div>

                    <br />

                    <div className="w-full text-center text-chatsy-ternary-dark relative">
                        <span className="px-5 bg-chatsy-dark leading-none relative z-40">or</span>
                        <hr className="border border-chatsy-ternary-dark absolute w-full top-[calc(50%+1px)]" />
                    </div>

                    <br />

                    <div>
                        <button
                            onClick={handleGoogleAuth}
                            className="w-full flex gap-4 justify-center items-center border border-none p-3 rounded-md bg-white text-chatsy-dark placeholder:text-chatsy-ternary-dark outline-none"
                        >
                            <Image src="/icons/google.png" alt="Google Auth" width="24" height="24" />
                            <span className="text-black">Continue with Google</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-1/2 p-10 overflow-hidden">
                <div className="translate-x-[calc((50vw-400px)/-4)] translate-y-16 flex justify-center items-center flex-col h-full">
                    <BouncingChatsy />
                </div>
            </div>
        </div>
    )
}

export default AuthPage;