function counter(n) 
{
    let curr = n;
 
    let timerId = setInterval
    (
        function () 
        {
            console.log(curr);
            if (curr === 0) 
            {
                clearInterval(timerId);
            }
            curr--;
        },

        1000
    );
 }
 

 
 function createCounter(n) 
 {
    let curr = n;
    let timerId;
 
    return {
       start() 
       {
          timerId = setInterval(
            function () 
            {
                console.log(curr);
                if (curr === 0) 
                {
                    clearInterval(timerId);
                }
                curr--;
            }, 

            1000
            );
       },
       pause() {
          clearInterval(timerId);
       },
       stop() {
          clearInterval(timerId);
          curr = n;
       }
    };
 }
 
 // Пример использования:
 let counterObj = createCounter(5);
 counterObj.start();
 counterObj.pause();
 counterObj.stop();