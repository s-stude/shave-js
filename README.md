# shave.js

Tiny JavaScript Templating Engine

## What?
Another JS templating engine, which helps you replace tokens with object's values

## How?

Include: 
```html
<script src="src/shave.js"></script>
```

Use: 
```javascript
  var obj = {
      
      about: {
          title: "Tiny JavaScript templating engine - shave.js",
          more: {
              desc: "You don't like string.replace, do you? Just use shave.js for this"
          }
      }
     
  };
  
  var whoami = shave("- What is this? - {about.title}!!!", obj);
  var details = shave("- Details, please?! - Sure - {about.more.desc}.", obj);
  
  console.log(whoami);
  console.log(details);
  /*
    `whoami` is:
      - What is this? - Tiny JavaScript templating engine - Shave.js!!! 
  */
```

## Features

- deep properties: `{obj.that.has.too.many.properties}`
- keep tags in the output string, if value was not found
- fun!

## TODO

- Default value if nothing was found - `{user.firstName|'Hey, noname!'}`
- Formatters - e.g. `{book.title:uppercase}`
- Plurals
- ...


# License
MIT
