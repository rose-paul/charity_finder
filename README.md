# Charity Finder

Charity Finder offers a simple, easy-to-use interface for finding charities based on location and interest area.

[Live Link](https://charityfinderapp.herokuapp.com/#/)

## Technologies

### Frontend
* React Hooks, CSS, Webpack
* [Charity Navigator API](https://www.charitynavigator.org/index.cfm?bay=content.view&cpid=1397)

### Backend
* Express.js (for Heroku and env vars)

## Code

### Questions Component
The ```Questions``` component keeps track of display and state. 
```useEffect``` mimics componentDidMount to first render the ```Location``` component, which is given the ```handleSubmit``` function. On submission of the ```Location``` component, the switch statement in ```handleSubmit``` sets ```Questions``` state with whatever the user inputed to the ```Location``` component. Then, ```handleSubmit``` sets the display to the next component in the sequence.

```javascript
const Questions = () => {

    //display stage order: Location, Interest Area, Index
    const [currDisplay, setDisplay] = React.useState()
    const [displayNum, setNum] = React.useState(0)
    
    // query vars
    const [city, setCity] = React.useState("")
    const [state, setState] = React.useState("")
    const [category, setCategory] = React.useState("")

     React.useEffect( () => {
       setDisplay(<Location handleSubmit={handleSubmit} />);
     }, []);

    const handleSubmit = (type, data) => {
      switch (type) {
        
        case "loc":
          setCity(data.city)
          setState(data.state)
          setNum(1)
          return setTimeout( () => (
            setDisplay(<Interest handleSubmit={handleSubmit} />)
          ), 500)

        case "interest":
          setCategory(data.category)
          setNum(2)
      }
    }

    // both location and interest are submitted, setDisplay out here to have access to vars and pass as props
    if (displayNum == 2) {
      setNum(3)
      setDisplay(<CharityIndex city={city} state={state} category={category} />)
    };


    return (
        <div className="time-outer">
          {currDisplay}
        </div>
    );

}
```

### CharityIndex Component
The final switch statement renders the ```CharityIndex``` component, which is given the user's search params. On mount, a get request is made to the backend to fetch the API results. I incorporate some formatting checks at each stage of input. 

```javascript
React.useEffect( () => {
        let fixedCity = city.split(" ");
        if (fixedCity.length === 1) {
            fixedCity = city
        } else {
            fixedCity = fixedCity.join("%20")
        }
        axios.get("/call", { 
            params: {
            fixedCity,
            state,
            category
          }
        })
          .then(res => {
            res.data.message ? setError(res.data.message) : setIndex(res.data);
          })
    }, [])  
```
### Express Backend
 On the backend, I use axios to make a get request to the Charity Navigator API using the API keys (environment vairables). 

```javascript
    app.get("/call", async (req, res) => {
  await axios.get(
    `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&categoryID=${req.query.category}&state=${req.query.state}&city=${req.query.fixedCity}`
  ).then( response => {
    res.send(response.data)
  }
  ).catch( err =>
    res.send(err)
  )
})
```





