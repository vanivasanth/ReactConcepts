import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
const Navbar = () => {

    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container-fluid">
           <Link class="navbar-brand" to="/">Navbar</Link>
              <button class="navbar-toggler" type="button"
                      data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
                      aria-controls="navbarNavDropdown" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                  <li class="nav-item">
                     <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                      <Link class="nav-link" to="employee">Employee</Link>
                  </li>
                  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Advanced HTML5
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><Link class="dropdown-item" to="dragndrop">Drag and Drop</Link></li>
            <li><Link class="dropdown-item" to="geoloc">Geolocation</Link></li>
            <li><Link class="dropdown-item" to="sse">Sse</Link></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;