import useDisplayMessage from "../hooks/useDisplayMessage"

export default function Hook(){

    //const [displayMessage] = useDisplayMessage();
    //const message = displayMessage()
    const [message, displayMessage] = useDisplayMessage();
    displayMessage();
    return(
        <div>
            <b>Message: <i>{message}</i> </b>
        </div>
    )
}