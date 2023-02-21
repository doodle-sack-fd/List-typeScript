import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../store/reducers'
import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    console.log(users)
    return (
        <div>UserList</div>
    )
}

export default UserList