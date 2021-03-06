export default function Users({posts}) {
    console.log(posts);
    return(
        <div>
            <h1>Posts</h1>
            {
                posts.map(obj => {
                    return(
                        <h6 key={obj.id}>{obj.title}</h6>
                    )
                })
            }
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        const posts = await fetch(`${process.env.GET_POSTS}`)
        const jsonData = await posts.json()
        return{ props: { posts : jsonData } }
    } catch (error) {
        console.log(error);
        return{ props: { posts : [] } }
    }
}