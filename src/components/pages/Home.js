

function Home() {
    return (
      <div className="Dragndrop">
          <div class="container mt-5  geoloc">
                 
                  <div class="card mt-5 text-center">
                      <div class="card-header ">
                        <h5 class="card-title">UI Learning plan</h5>
                      </div>
                      <div class="card-body">
                       
                        <p class="card-text" id='location'> 
                            This react application is 
                            created to practice concepts 
                            specified in UI learning plan
                        </p>
                        
                      </div>
                      <div class="card-body mb-3" id="map-canvas">
          
                      </div>
                    </div>
              </div>      
      </div>
    );
  }
  
  export default Home;
  