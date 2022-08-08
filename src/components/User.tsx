// import { useEffect, useState } from 'react'
import dingo from '../assets/dingo.png'
import './User.css'

const User = () => {

    // const [avatar, setAvatar] = useState("");
    // const [username, setUsername] = useState("");

    // const fetchAvatar = async () => {
    //     setAvatar("");
    //     if(avatar === "") {
    //         axios({
    //             method: 'GET',
    //             url: 'https://discord.com/api/v9/users/525330274784116746',
    //             headers: {
    //                 Authorization: 'Bot',
    //             },
    //             withCredentials: true,
    //         }).then(response => {
    //             const { username, discriminator } = response.data;
    //             setAvatar(response.data.avatar);
    //             setUsername(username + discriminator);
    //         })
    //     }
    // }

    // useEffect(() => {
    //     fetchAvatar();
    // });

    return (
        <>
            <div className="user">
                    <img src={dingo} alt="dingo-avatar" />
                <div className="user-contain">
                    <span className="username">dingo<span className="discriminator">#5334</span></span>
                    <div className="position">Founder</div>
                </div>
            </div>
            <span className="uid">&lt;525330274784116746&gt;</span>
        </>
    )
}

export default User