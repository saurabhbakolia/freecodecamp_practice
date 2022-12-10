import React from 'react'

const Box = (props) => {

    // const [on, setOn] = React.useState(props.on);



    const styles = {
        backgroundColor: props.on ? "black" : "white",
    }


    // toggle on using Derived states
    // const toggle = () => {
    //     setOn((prevOn) => {
    //         return prevOn = !prevOn;
    //     })
    // }

    console.log("Box rendering")
    return (
        <div className='Box' style={styles} onClick={()=> props.toggle(props.id)}>
        </div>
    )
}

export default Box