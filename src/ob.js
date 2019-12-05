
    const ob = [
        {
            "id": 1,
            "Name": "Batman",
            "Featured": "Yes",
            "fav_count": 9,
            "brand": "DC",
            "rating": 1.5,
            "image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAgVBMVEX6+vozMzP///8wMDAoKCguLi4hISEUFBQrKyslJSUYGBgbGxv4+PheXl4TExMQEBDv7+98fHzX19empqZZWVm4uLiHh4ebm5vOzs7e3t7p6ek+Pj7AwMBubm51dXVPT08AAACOjo6kpKQ9PT2vr6+YmJiIiIhHR0dnZ2fFxcVTU1MOrGVXAAADq0lEQVR4nO3c2XaiQBAGYLoamlU2NREXjFuMef8HHNQoLkwG6obj1P/d5Hi8If9p7L0sCwAAAAAAAAAAAAAAAAAAAAAAAAAA4L9F1PcTvB6iaDJHbt1QtB0lyQCxdUHRLjSOchBbFzQ2vqp4C8TWQemqE/sNsbUWLf1zaspsEVtbtLR/UlNugdhaovLS1pTWSK0l2rqX1JS/Q2wtpeE1NRWkfT/Nq6DMrhvbCo2tpWn9imod9f00r4Ler/2BSiZobC3RTF9/2N6RWltpckktzJBaWzS59KMuplXtVVP4U2hegllVB7StYtN2PMCkqgvafgRm/5ljMfx39OPyOSqK9PyR7v5AjagYrxaDQbmeRPfhVFnlw3KpbL3/2s1TJFej9H3mGttzHM8P/PJQb1NVmX0q1/e0rmYKnh0GgzmCO6PoLfavQ9uq7wy9VX5+YafrvWvffKWUE6oxcrOOI43AVve07W5Wh3z4nfhaPdLBKEVwlLlPyZySM6HvNH1TNUeDKerIb87mN9oVnhtxUjvmJnoQfLNZ0DE3X/BqL20DZmrxSvC65ZSbmug+gb48VmqOM5WcWp78O6KmtuZJTo3d2GT3otaU19jCoejUaM0bsu1Fp2bR8nm+2UJwkB1bynpH9UZ2anQI/x3SM1/4luntpnsHQS48tpI1/DB9P3fPaPSX1bRfSe9Hb494dOB9SY+N9Y56pfTYDCs26adomLFJv9RBrPGH8y09NsWaW3nSY9vzpqTTvh+8XzTgjNuUEb4nTxlvBCJ84MZcblOJ4J2+Cs1ZIxBlf8pubsw1cZWI3oCx6PGcUUvOUnZsC97GlTKiD9zTkHn+Q/alGCqYP25KuZIvlzKnV0dhaYkNjlbMTqFiK7H7fpQ3Hj9tR8eDou9/oCe8dfGLD6mTen5fWnFGUt/SuxoCXQleCrktItBV0PfD94cKdqcgulQDe4KlYsnrR+zmJry+FvfXTXoRGl5naiRP5o9oy8hN+tlAi3fyKJZ8m+NH96swvuz+4IzGHXtTPUNqVvdrfons6xy1WZefNxdVaM5oatqvIBnpJ9xqlLsNpQQcpyFMH8Wea5QHdxFpPwxmo8HSic39pNUgtVtUOPUsy3b3u2PxGSJrOl6EdVELHeMNvUdpmRwLpWjPmCynm7Iz6XB2KjujvVCh+P8TyjNl/E02fyhydKx/tF5s9CxDnZ4mVRNL08aqWY/FtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF7dHyK7Ky3fe78AAAAAAElFTkSuQmCC"
    
        },
        {
            "id": 2,
            "Name": "Batman2",
            "Featured": "Yes",
            "fav_count": 9,
            "brand": "DC",
            "rating": 1.5,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPmJQZSpaNHwBY3DexkEW9zrXKxX0wm_bXoGKp29V7LVyo7nU-"
    
        },
        {
            "id": 2,
            "Name": "Batman2",
            "Featured": "Yes",
            "fav_count": 9,
            "brand": "DC",
            "rating": 1.5,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPmJQZSpaNHwBY3DexkEW9zrXKxX0wm_bXoGKp29V7LVyo7nU-",
            "description": "abc"
    
        },
        {
            "id": 2,
            "Name": "Batman2",
            "Featured": "Yes",
            "fav_count": 9,
            "brand": "DC",
            "rating": 1.5,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPmJQZSpaNHwBY3DexkEW9zrXKxX0wm_bXoGKp29V7LVyo7nU-",
            "description": "abc"
    
        }
    ];

    export const addob = (props)=>{
        console.log(props);
        ob.push(props);
        console.log(ob);

    }

    function delob(props){

    }


export default ob;


