import React from 'react'

const Counter = (props) => {
    let i = 1;

    return (
        props.data && <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Letter</th>
                        <th scope="col">No of Occurences</th>
                    </tr>
                </thead>


                {Array.from(props.data, ([value, key]) => <tbody key={value}>
                    <tr key={value}>
                        <td>{i++}</td>
                        <td>{value}</td>
                        <td >{key}</td>
                    </tr>
                </tbody>)}
            </table>
        </div>
    )
}

export default Counter
