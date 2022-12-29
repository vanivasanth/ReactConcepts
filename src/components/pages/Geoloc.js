import React from "react";

class Geoloc extends React.Component {

  constructor(props){
    super(props);
    this.state={
        latitude:null,
        longitude:null,
      
    };
    this.getLocation=this.getLocation.bind(this);
    this.getCoordinates=this.getCoordinates.bind(this);
  }

  getLocation()
   {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
    }
    else
    {
      alert("Geolocation is not supported by this browser");
    }
  }
  getCoordinates(position){
    this.setState({
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    })
  }
  handleLocationError(error){
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred");
    }
  }
  render()
  {
    return (
      <div class="container mt-5  geoloc">
          <div class="row">
          <div class="col">
      
          </div>
          <div class="col-6">
          <h4 class="text-center"> Using HTML5 GeoLocation</h4>
                  <div class="card mt-5 text-center">
                      <div class="card-header ">
                        <button type="button" class="btn btn-primary" onClick={this.getLocation}>Get coordinates</button>
                      </div>
                      <div class="card-body">
                       
                        <p class="card-text">latitude:{this.state.latitude}</p>
                        <p class="card-text">longitude:{this.state.longitude}</p>
                      </div>
                      <div class="card-body mb-3">
                          {this.state.latitude && this.state.longitude? 
                            <img src={`https://google.com/maps?q=${this.state.latitude}, ${this.state.longitude}`} alt=''/>
                           :null}
                      </div>
                    </div>
          </div>
          <div class="col">
      
      </div>
      </div>      
      </div>      
    );
  }
  
}

export default Geoloc;
