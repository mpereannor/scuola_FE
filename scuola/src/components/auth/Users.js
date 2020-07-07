import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../container/actions/actionCreators'

const Users = ({ 
    getUsers,
    users 
    }) => { 
    useEffect(() => {
        getUsers();
      
    }, [])
    return(
        <div>
            {users.map(user=> (
                <UserData
                    key={user.id}
                    user={user}
                    />
            ))}
        </div>
    )
}


const UserData = ({ user }) => { 
    const { id, username, position } = user
    return(
        <div>
            <p>{username} is a <span>{position}</span></p>
        </div>
    )

}
export default connect(state => state.allUsers, { getUsers })(Users)
