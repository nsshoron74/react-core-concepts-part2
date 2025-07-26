 export default function Friend({friend}){
    console.log(friend);
    const {name, email, phone} = friend
    return(
        <div>
            <h3>Name: {name} </h3>
            <h3>Email: {email} </h3>
            <h3>Phone: {phone} </h3>
        </div>
    )

}