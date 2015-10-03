Startup Robot
=================

[Startuprobot] is a platform that makes it easier for entrepreneurs to incorporate companies and maintain tax and legal compliance.

[Startuprobot], is powered by Parse.
# Getting Started

Assuming you already done the following:

* install [git], if you haven't done so, run the following command in the terminal:
```Bash
$ sudo apt-get install git
```
* generate a ssh key pair and added it to gitlab.
* clone the [Startuprobot-v3.0] git repo.
* install make, if you haven't done so, run the following command in the terminal:
```Bash
sudo apt-get install make
````

Your next step is to setup the environment for the project. To do this, download
the command line tool by running this command:
curl -s https://www.parse.com/downloads/cloud_code/installer.sh | sudo /bin/bash

Whenever you are deploying the project to Appengine, the following conditions must be met:
* The python virtual environment must be running.
* The css and javascript code should be minified.
* Your Google Account must be connected to Appengine.
* You must be inside of the Startuprobot root folder (outside of the main folder).

***NOTE***: there are two instances of Startuprobot, [startuprobot.com] and [beta.startuprobot.com].
[startuprobot.com] is the official version of Startuprobot, while [beta.startuprobot.com] is the testing version of Startuprobot.

## Deployment Instructions.

There are two ways to deploy the project to Appengine. Automated deployment and manual deployment.

## Automated Deployment.

By running the following command will compile and deploy the project to its respective version.
* run the `make update_live_server` command to deploy the project to [startuprobot.com].
* run the `make update_test_server` command to deploy the project to [beta.startuprobot.com].

***Note:*** Everyday at 12pm, [beta.startuprobot.com] will be updated with the latest stable build of Startuprobot's master branch.

## Manual Deployment.

Manual Deployment is a bit tricky, due to the fact that you have to change the application id located in the [main/app.yaml] file. ***NB: this may cause a problem if not careful adjusted during development***.

#### Deploying to [startuprobot.com]

In order for you to deploy to [startuprobot.com], ensure that the application id, located in the [main/app.yaml] file is set to ***startuprobot***. Run the following commands:

```BASH

./run.py -m
appcfg.py update main

```

This will minify the css and javascript files, and deploy the project to [startuprobot.com].

#### Deploying to [beta.startuprobot.com]

In order for you to deploy to [beta.startuprobot.com], ensure that the application id, located in the [main/app.yaml] file is set to ***test-startuprobot***. Afterwards run the following commands:

```BASH

./run.py -m
appcfg.py update main

```

This will minify the css and javascript files, and deploy the project to [beta.startuprobot.com].
***NOTE: after the project has been deployed, change the application id back to*** `startuprobot` *** to avoid any application errors. ***

#### Another way to deploy to beta.startuprobot.com

If you don't want to run the automated update script or manually update [beta.startuprobot.com], you can go to [Startuprobot's Jenkins website] and click `build with parameters`.

Tech Stack
----------

  - [Google App Engine][], [NDB][]
  - [Jinja2][], [Flask][], [Flask-WTF][]
  - [CoffeeScript][], [Less][]
  - [Bootstrap][], [Font Awesome][], [Social Buttons][]
  - [jQuery][], [NProgress][], [Moment.js][]
  - [OpenID][] sign in (Google, Facebook, Twitter)
  - [Python 2.7][], [pip][], [virtualenv][]
  - [Grunt][], [Bower][]

Requirements
------------

  - [Google App Engine SDK for Python][]
  - [Node.js][], [pip][], [virtualenv][]
  - [OSX][] or [Linux][] or [Windows][]

Contributors - [Number of Contributions](https://gitlab.com/startuprobot/startuprobot/graphs/master)
-----------------------

### Other interesting Wikis

[Merge Request](merge-request)

[Git Workflow](git-work-flow)
[Deploying to Appengine](Deploying-to-Appengine)

@all