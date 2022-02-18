import React from 'react'

import teatr from '../assets/img/teatr.png'
function Home() {

    return (
       <div class="container-fluid home-slide">
           <div class="row">
               <h1 className="text-center">Туймазинский государственный <br/> татарский драматический театр</h1>
           </div>
           <div class="row">
               <div class="col-md-6">
                   <img src={teatr} alt="фото театра" className="img-fluid" />
               </div>
               <div class="col-md-6"></div>
           </div>
       </div>
    )
}

export default Home