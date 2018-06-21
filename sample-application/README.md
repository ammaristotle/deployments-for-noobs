# Sample application

This is the first iteration of the sample application. It's a node.js server
that acts as a (naive) in-memory key-value store.

The application has been tested on node 10+. Older versions of node may or may not
work properly. You'll also need the `yarn` package manager.

## Setting up

Assuming, you've got the repo locally:

```bash
$ yarn
$ node app.js
```

## Interacting with the application

The application runs on port 4000 locally. To save a key:

`GET /set?your_key=your_value&another_key=another_value`

returns `OK`

And then to retrieve it:

`GET /get?key=your_key`

returns `your_value`
