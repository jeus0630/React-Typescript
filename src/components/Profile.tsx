import React, {useState} from 'react';

interface Iprops{
    name: string;
}

type Tprofile = ({name}: Iprops) => JSX.Element;

const Profile: Tprofile = ({name})=> {

    let [user, setUser] = useState(['hello']);

    return (
        <div>
            {name}
        </div>
    );
};

export default Profile;