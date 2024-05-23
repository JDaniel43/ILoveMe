import  toast, { Toaster } from "react-hot-toast";
import LoginButton from "@/componentes/login-btn";
import Button from "@/componentes/Button";
export default function Demo(){
    const notify = () => toast.success('Hello word');
    const badNotify = () => toast.error('what happened dude??')
    return(
        <>
        
        <Toaster/>
        <p> Aca va el HTML </p>
        <button onClick={notify} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> hola bb </button>
        <br/>
        <Button onClick={notify}> holaa</Button>
        <br/>
        <Button onClick={badNotify} > my bad</Button>
        <LoginButton/>
        </>

    )

}