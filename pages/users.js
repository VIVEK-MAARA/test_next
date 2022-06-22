export default function Users({users}) {
    console.log(users);
    return(
        <div>
            <h1>Users</h1>
            {
                users.map(obj => {
                    return(
                        <h6 key={obj.id}>{obj.name}</h6>
                    )
                })
            }
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        const users = await fetch(`${process.env.GET_USERS}`)
        const jsonData = await users.json()
        return{ props: { users : jsonData } }
    } catch (error) {
        console.log(error);
        return{ props: { users : [] } }
    }
}