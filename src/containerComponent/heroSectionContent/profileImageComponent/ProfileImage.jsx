import React from "react";
import './profileImage.css'

const ProfileImage = () => {
    return (
        <div id="profileImageContainer">
            <img id="profilePicture" className="hiddenImage" src="me.jpg" alt="profile" onLoad={(e) => console.log(e.target.classList.remove("hiddenImage"))} />
        </div>
    )
}

export default ProfileImage;