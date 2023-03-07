import React from 'react'

export const Navbar = () => {
    const handleClick = ()=>{

    };
    
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <button className="mx-auto navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item" style={{minWidth: "55%"}}>
                        <a className="nav-link active" aria-current="page" href="/" >Home</a>
                        </li>
                        <li className="nav-item" style={{minWidth: "55%"}}>
                        <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item" style={{minWidth: "55%"}}>
                        <a className="nav-link" href="/">Resume</a>
                        </li>
                        <li className="nav-item" style={{minWidth: "55%"}}>
                        <a className="nav-link" href="/">Recommended!</a>
                        </li>
                        <li className="nav-item" style={{minWidth: "55%", paddingLeft: "10px"}}>
                            <div className='container'>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"  onClick={handleClick}/>
                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{color: "var(--bs-nav-link-color)"}}>Light Mode</label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
