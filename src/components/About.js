import React, { useState } from 'react'

export default function About() {
    
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white",
    });
    const [btnText, setBtnText] = useState("dark");

    const toggleStyle = () => {
        if(myStyle.color === "white"){
            setBtnText("dark");
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
        }else{
            setBtnText("light");
            setMyStyle({
                color: "white",
                backgroundColor: "#323232",
                border: "1px solid white"
            })
        }
    }

    return (
        <div className="container" style={myStyle}>
            <div className="accordion" id="accordionExample">
                <h2>About Us</h2>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        What is TextUtilX?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>TextUtliX is a text utility website with an X factor.</strong> It has a lot of built in utility functions, with new functionality added every now and then as and when required.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Who is behind TextUtilX?
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit nihil, deleniti voluptatibus voluptas pariatur at. Voluptates atque eum dolores repellat non. Laudantium eveniet expedita accusantium ratione velit quidem ipsum.
                        Nesciunt est optio quas autem vitae hic quam obcaecati qui fuga quidem ab ipsam, eaque velit. Necessitatibus corporis nostrum veniam facilis officiis? Fugit repellendus laudantium sequi officia sed eveniet nesciunt?
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Wanna reach out?
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quod, voluptatibus consectetur recusandae voluptates consequuntur soluta cumque eos doloremque error et cum, praesentium iste aperiam itaque eum perferendis mollitia corporis!
                    </div>
                    </div>
                </div>
            </div>
            <button onClick={toggleStyle} type="button" className="btn btn-dark my-3">Switch to {btnText} mode</button>
        </div>
  )
}
