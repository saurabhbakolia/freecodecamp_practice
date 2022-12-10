import React, { useState } from 'react'
import { Users } from './../data/filterData';
import Table from './Table'

const Filter = () => {

    const [query, setQuery] = useState("");
    const keys = ["first_name", "last_name", "email"];

    const handleOnChange = (e) => {
        setQuery(e.target.value);
    }

    const search = ((data) => {
        return data.filter((item) =>
            // item.first_name.toLowerCase().includes(query) ||
            // item.last_name.toLowerCase().includes(query) ||
            // item.first_name.toLowerCase().includes(query))

            keys.some((key) => item[key].toLowerCase().includes(query)))
    })

    return (
        <div className='formParent'>
            <form className='formCenter' onSubmit={(e)=> e.preventDefault()}>
                <input type="text" placeholder='Search...' onChange={handleOnChange} value={query} />
                {/* <ul className='ListItems'>
                    {Users.filter((user) => user.first_name.toLocaleLowerCase().includes(query.toLocaleLowerCase())).map((name) => (
                        <li key={name.id} className="ListItem">{name.first_name}</li>
                    ))}
                </ul> */}

                <Table data={search(Users)} />
            </form>
        </div>
    )
}

export default Filter