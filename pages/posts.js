export default function Users({posts}) {
    console.log(posts);
    return(
        <div>
            <h1>Posts</h1>
            {
                posts.map(obj => {
                    return(
                        <h6>{obj.title}</h6>
                    )
                })
            }
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        const posts = await fetch(`${process.env.GET_POSTS}`)
        console.log(posts);
        const jsonData = await posts.json()
        return{ props: { posts : jsonData } }
    } catch (error) {
        console.log(error);
        return{ props: { posts : [] } }
    }
}