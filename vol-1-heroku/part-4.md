# Volume 1, Part 4 - Getting a domain

Our application is deployed and life is good. There's only one problem. That really long heroku URL isn't gonna fly with our slick app. We have a domain that we'd like to use for it.

The question then becomes, how do we direct our domain to our heroku app? Enter DNS.

DNS (Domain name system) is the system that translates domains into IP addresses. So when you type in google.com into your browser, a DNS query is made, the browser finds out that the server's IP address is actually 172.217.7.238, and it connects. (Obviously there's more to it, but I've simplified the process here so we can focus on what we need to be worried about).

Similarly, we want to access our app on `mydomain.com` and have it go to our deployed heroku app. There's only one problem. Because Heroku is a really fancy abstraction that makes deploying so easy, we can't actually have a dedicated IP or server without paying extra. So what we instead need to do is use a `CNAME`. `CNAME`, or canonical name, is basically a method to alias one domain to another.

The idea is that if we create a `CNAME` for `mydomain.com` pointing to `my-heroku-url.herokuapp.com`, when we visit `mydomain.com` we'll be able to look at our heroku app. So let's try that!

DNS settings are controlled by NS (name servers). If you've purchased a domain from a registrar, your DNS settings are typically still there, unless you've changed them to somewhere else.

Let's go into our DNS settings and create a `CNAME` entry for `mydomain.com`, pointing to `my-heroku-url.herokuapp.com`. Wait a little while for it to propagate...and it should be live!

If you open up `mydomain.com` you'll now see your heroku app! Magic, isn't it?

Ok, it's all fun and games, now try accessing your app on https. You should see a certificate problem in your browser. Why? Let's proceed to [part 5](part-5.md) to investigate.
