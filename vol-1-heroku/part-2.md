# Volume 1, Part 2 - Setting up a deployment

Heroku is a PaaS (platform as a service), built on top of Amazon Web Services. Using only
simple `git` commands, Heroku will deploy and take care of your application and any other services you might need with minimal intervention.

Let's deploy our app on Heroku. Assuming you've created an account, let's install the Heroku
CLI.

```bash
$ brew install heroku/brew/heroku
```

And check to make sure it's installed:

```bash
$ heroku --version
```

Now, let's login to the heroku CLI, which will enable us to deploy our applications:

```bash
$ heroku login
```

And let's create an empty `git` repository in the sample application, which we'll use to deploy to Heroku. Then let's stage and commit the files to `git`.

```bash
$ cd sample-application && git init
$ git add . && git commit -m "First deployment"
```

Now, we'll create a new heroku application. Since heroku is actually quite smart, it will detect we have a nodejs application and look for instructions on how to start it in the `package.json` file. Since our `start` command has directions for it, it will run that command and start the application.

```bash
$ heroku create
```

What we just did was tell heroku to create a new `remote`, where we can deploy to via `git`. Once we `git push` to this `remote`, heroku will automatically build and deploy our application.

Check the remote, by running:

```bash
$ git remote -v
```

And you should see a remote called `heroku`.

It's almost time to deploy. Let's move on to [part 3](part-3.md)
