import React, { useEffect, useRef } from "react";
import './RedQueen.css';

function RedQueen() {
  /*creating 3 useRef
    1. for alice
    2. background
    3. foreground
*/
    const alice = useRef(null);
    const background = useRef(null);
    const foreground = useRef(null);

    useEffect(() => {
    // **********working for alice first***********

    //creating frames for alice
    var spriteFrames = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' },   
      ];

    //animate function for alice, passing frames and time
      var aliceSpirit = alice.current.animate(
        spriteFrames, {
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 600,
        playbackRate: 1,
        iterations: Infinity
      });

    //adjusting speed of alice, used adjustAnimationplayback which was declared below
    setInterval(function () {
        if (aliceSpirit.playbackRate > 0.4){
            aliceSpirit.playbackRate *= 0.9;
        };
        adjustAnimationPlayback();
    }, 3000);  

    //working on background and foreground

    //scenery frame
    var sceneryFrames =   [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }   
    ];
      
    //timing of both background and foreground
    var sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity
    };
    
    var sceneryTimingForeground = {
        duration: 12000,
        iterations: Infinity
    };

    //this is for background frames and timing
    var backgroundMovement = background.current.animate(
        sceneryFrames, sceneryTimingBackground
        );
            
    //this is for the foreground frames and timing
    var foregroundMovement = foreground.current.animate(
        sceneryFrames, sceneryTimingForeground
         );

    //taking above background and foreground animations in an array
    var sceneries = [foregroundMovement, backgroundMovement];

    var adjustAnimationPlayback = function() {
        if (aliceSpirit.playbackRate < .8) {
            sceneries.forEach(function(anim) {
                anim.playbackRate = (aliceSpirit.playbackRate/2) * -1;
            });//update both background and foreground simultaneously as both are in sceneries array

        } else if (aliceSpirit.playbackRate > 1.2) {
            sceneries.forEach(function(anim) {
            anim.playbackRate = aliceSpirit.playbackRate/2;
          });

        } else {
           sceneries.forEach(function(anim) {
            anim.playbackRate = 0;    
          });
        } ;  
    }
        
    adjustAnimationPlayback();//invoking function
        

    //function to make alice and queen run faster upon clicking
    var goFaster = ()=> {
        aliceSpirit.playbackRate *= 1.1;
        adjustAnimationPlayback();
    };
          
    document.addEventListener("click", goFaster);

  });

  return (
<div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div className="alice">
          <img
            className="alicesprite"
            ref={alice}
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            alt="Red Queen Animation"
          />
        </div>
      </div>

      <div className="animation" id="foreground" ref={foreground}>
        <img
          id="treefore"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          alt="foreground view "
        />
      </div>

      <div className="animation background1" ref={background}>
        <img
          className="pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          alt="red pawn 1 "
        />
        <img
          className="pawn2"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          alt="red pawn 2 "
        />
        <img
          className="treeback"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          alt="tree"
        />
      </div>
    </div>
  );
}

export default RedQueen;