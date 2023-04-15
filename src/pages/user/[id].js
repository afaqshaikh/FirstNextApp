import Link from "next/link"

const User = ({ user }) => {
    // console.log(user)
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h6>User</h6>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Website</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                    <th scope="row">{user?.id}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.phone}</td>
                                    <td>{user?.website}</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
                <Link className='btn btn-outline-primary' href="/">Back to Home</Link>

            </div>
        </div>
    )
}

export default User

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    const paths = users.map((user)=>({
        params : {
            id: user.id.toString()
        }
    }))
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps({params}) {
    const {id} = params
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await res.json()
    // console.log(user)
    return {
        props: {
            user,
        }, // will be passed to the page component as props
    }
}
