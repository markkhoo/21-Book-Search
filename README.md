# Google Books Search

## Site Picture
![Site]()

## Technologies Used
- Javascript - adds special effects on pages
- Node.js - an open source server environment that uses JavaScript on the server
- React - a JavaScript library for building user interfaces
- Express - a Node.js web application framework that provides a robust set of features for web and mobile applications.
- MongoDB - stores data in JSON-like documents. 
- GitBash - for cloning repository and pushing code to GitHub
- GitHub - holds repository that deploys to GitHub Pages

# Summary
This file contains code that creates a React-based Google Books Search app. It allows the user so search snd save books based on what they input in the search bar. It also contains code that was created using Javascript, React and Node.js. 

## Code Snippet
```javascript
function App() {
  return (
    <div className="App">
      <Router>
        <div>
        
          <Route exact path="/" component={Search} />
          <Route exact path="/home" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>

    </div>
  );
}
```

```javascript
<javascript>

</javascript>
```

## Author Links 

Mark Khoo <br />
[Linkedin](https://github.com/markkhoo) <br />
[Github](https://www.linkedin.com/in/markdkhoo/)

Javier Mondragon <br />
[Linkedin](https://www.linkedin.com/in/javier-mondragon-7b471719b/) <br />
[Github](https://github.com/javimarashall)

Manuel Villasenor <br />
[LinkedIn](https://www.linkedin.com/in/manuel-villasenor-854186205/)<br />
[GitHub](https://github.com/manuelvrsr)

Rosario Miranda <br />
[LinkedIn](https://www.linkedin.com/in/rosario-miranda-b81170132/)<br />
[GitHub](https://github.com/rtmiranda18)
