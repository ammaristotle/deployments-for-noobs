# Volume 1, Part 3 - Actually deploying

Now that we've created a remote for heroku, once we `git push`, heroku will
automatically detect our application language, our start command, and packages to install (using yarn or package.json) and start the application automatically.

Let's do that now.

```bash
$ git push heroku master
```

If you notice we used `heroku` as the git remote location. You should soon be seeing logs of heroku building, packaging, and running the application.

Eventually you'll see a few lines at the end that say:

```
remote:        Released v1
remote:        https://some-random-url-generated-by-heroku.herokuapp.com/ deployed to Heroku
```

This is great. Now let's go to the URL and see what happens!

...hopefully you see that our app is displaying `Online!`. Let's try getting and setting keys.

Visit `${your-heroku-url}/set?name=Donald_Duck` and you should get an `OK` response.

Now let's see if we can retrieve that.... Visit `${your-heroku-url}/get?key=name` and you should see `Donald_Duck` as the response! Woohoo! Our application is deployed.

## A few questions...

### How did Heroku know which port to use?
Our sample application locally runs on port 4000. We have a line in `app.js` which says:

```javascript
app.set('port', process.env.PORT || 4000);
```

Which means that our application will look for an environment variable called PORT, and run it there, or run it on 4000. So which port is our app actually running on? Let's look into the logs!

```bash
$ heroku logs
```

And you should get output of your app build and start command similar to:

```
KV store running on 36613!
```

So our app in this case is actually running on a random high port! But then how were we able to access it on https, or port 443? Heroku actually handles the magic. Since we are deploying a web server which Heroku detected, it automatically runs our app on a port of its choosing, then redirects requests from both 80 and 443 to our app port. If we try to access our app on http (80) we'll see that it still shows `Online!`.

Now that we've got our application deployed, let's have it route to a domain! Proceed to [part 4](part-4.md)
