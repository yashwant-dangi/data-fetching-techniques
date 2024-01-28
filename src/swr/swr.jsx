import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function Profile() {
    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts/1', fetcher)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>
        <h2>
            {data.title}
        </h2>
        {data.body}
    </div>
}

export default Profile;
