import Image from "next/image";

const BouncingChatsy = ({ src = "/logo.png", width = 200, height = 200, shadowWidth = 140, shadowHeight = 24 }) => {
    return (
        <div className="flex items-center flex-col">
            <Image 
                src={src} alt="Chatsy" 
                width="0" height="0" sizes="100vw"
                style={{ width: width, height: "auto" }} 
                className="animate-bounce mb-3" priority
            />
            <div className="bg-chatsy-almost-black rounded-[100%] animate-beat" style={{ width: shadowWidth, height: shadowHeight }}></div>
        </div>
    )
}


export default BouncingChatsy;