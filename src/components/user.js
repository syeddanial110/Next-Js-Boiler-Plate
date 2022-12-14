function User(props) {
    const { user } = props
    return (
        <>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </>
    )
}

export default User