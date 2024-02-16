import {useRouteError} from "react-router-dom";

const Error = () =>{

    const ErrorMsg = useRouteError();
    console.log(ErrorMsg)
    return(
        <div>
            <h1>Bro kuch toh gadbad hai!</h1>
            <p>something wrong please check</p>
            <h3>
                {ErrorMsg.status} - {ErrorMsg.statusText}
            </h3>
        </div>
    )
}

export default Error;