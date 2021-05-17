function collide(sprite, target){
    if (sprite.x - target.x < target.width / 2 + sprite.width / 2 && 
    target.x - sprite.x < target.width / 2 + sprite.width / 2 &&
     sprite.y - target.y < target.height / 2 + sprite.height / 2 &&
      target.y - sprite.y < target.height / 2 + sprite.height / 2)
    {
        target.velocityY = 0;
        target.velocityX = 0;
        sprite.velocityY = 0;
        sprite.velocityX = 0;
    } 
}

function isTouching(sprite, target) {
    if (sprite.x - target.x < target.width/2 + sprite.width/2
      && target.x - sprite.x < target.width/2 + sprite.width/2
      && sprite.y - target.y < target.height/2 + sprite.height/2
      && target.y - sprite.y < target.height/2 + sprite.height/2)
        {
               return true;
        }
    else {
                return false;
         } 
}

    
      
      function bounceOff(sprite, target) {
        if (sprite.x - target.x < target.width/2 + sprite.width/2
            && target.x - sprite.x < target.width/2 + sprite.width/2
            && sprite.y - target.y < target.height/2 + sprite.height/2
            && target.y - sprite.y < target.height/2 + sprite.height/2)
            {
                sprite.velocityY = sprite.velocityY * (-1);
                sprite.velocityX = sprite.velocityX * (-1);
            }
        else {
                sprite.shapeColor = "green";
                target.shapeColor = "green";
            }
        }
    

    
    function bounce(sprite, target){
     if (sprite.x - target.x < target.width/2 + sprite.width/2
        && target.x - sprite.x < target.width/2 + sprite.width/2
        && sprite.y - target.y < target.height/2 + sprite.height/2
        && target.y - sprite.y < target.height/2 + sprite.height/2)
   {
    target.velocityY = sprite.velocityY ;
    target.velocityX = sprite.velocityX ;
    sprite.velocityY = 0;
    sprite.velocityX = 0;
    }
     else {
        sprite.shapeColor = "green";
        target.shapeColor = "green";
     }
    }