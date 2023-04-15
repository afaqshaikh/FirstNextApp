import Link from "next/link"

const Users = ({ users }) => {
    // console.log(users)
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h6>Users</h6>
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
                            {users?.map((v, i) => {
                                return <tr key={i}>
                                    <th scope="row">{v.id}</th>
                                    <td>{v.name}</td>
                                    <td>{v.phone}</td>
                                    <td>{v.website}</td>
                                </tr>
                            })}


                        </tbody>
                    </table>
                </div>
                <Link className='btn btn-outline-primary' href="/">Back to Home</Link>

            </div>
        </div>
    )
}

export default Users

export async function getStaticProps(context) {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    // console.log(users)
    return {
        props: {
            users,
        }, // will be passed to the page component as props
    }
}
