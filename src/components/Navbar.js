import React from "react"
import {Link} from "react-router-dom"

class Navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-sm bg-light navbar-light">
	            <a href="/" class="navbar-brand">Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar4">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbar4">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/about">About Us <span class="sr-only">Home</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/gallery">Gallery</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/cart">Cart</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/pegawai">pegawai</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }    
}

export default Navbar;