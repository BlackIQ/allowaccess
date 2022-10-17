# AllowAccess

**AllowAccess\* is a simple, light-weight, fast and usefull middleware to give access to roles ( permissions ) to your routes in **ExpressJs\*\*.

In this instructure you will learn about how to use this package in your apps.

## Table of content

- [Installation](#installation)
- [Config](#config)
- [methods](#methods)
- [Example](#example)
- [Development](#development)

## Installation

How to install **AllowAccess**? To install this package, use **NPM**.

```shell
$ npm i allowaccess
```

## Config

So, import the package.

```javascript
// ESM 6 and higher
import AllowAccess from "allowaccess";

// ESM 5 and lower
const AllowAccess = require("allowaccess");
```

Now create your instance with 2 params.

- Status Code: The status code you want to send at response.
- Message: The message that will be send in response.

```javascript
const allowAccess = new AllowAccess(401, "You dont have access");
```

Ok then, next step is add middleware to routes.

## Methods

There are 2 ways to protect your route.

- Allow permissions
- Deny permissions
- Allow or Deny route for every one

### Allow

In **Allow**, you just say to allow this route to these permissionns.

> Ex: Now we just open `/blog` route `post` method for author and admin.

```javascript
router.post(
  "/blog",
  allowAccess.allow(["admin", "author"]),
  userControllers.CREATE()
);
```

### Deny

Here we just say to deny access to this route for permissions we say.

> Ex: Now we open `/blog/:id` route `put` method only for author and admin.

```javascript
router.put(
  "/blog/:id",
  allowAccess.deny(["author", "reader"]),
  userControllers.UPDATE()
);
```

### Open

Now assume that you have a route for get all blogs. List of blogs. Now you can say open for all. How!?

Just pass the `all` or `none`!

> Ex: Now we open `/blog` route `get` method only for author and admin.
> And it next code we also open our single blog for all too. `/blog/:id` route `get` method.

```javascript
router.get(
  "/blog",
  allowAccess.open("all"),
  userControllers.ALL()
);
```

```javascript
router.get(
  "/blog/:id",
  allowAccess.open("all"),
  userControllers.SINGLE()
);
```

> Ex: Now we close `/blog/:id` route `delete` method for every permission.

```javascript
router.delete(
  "/blog/:id",
  allowAccess.open("none"),
  userControllers.DELETE()
);
```

## Example

If you did the practice correctly, your code will be show up like this.

```javascript
// Import AllowAccess and Express
import AllowAccess from "allowaccess";
import express from "express";

// Create Express router
const router = express.Router();

// Create instance for allowAccess
const allowAccess = new AllowAccess(401, "You dont have access");

// Route /blog | Method: Get | Access Type: Allow | For: Everyone
router.get("/blog", allowAccess.open("all"), userControllers.ALL());

// Route /blog | Method: Post | Access Type: Allow | For: Admin, Auther
router.post("/blog", allowAccess.allow(["admin", "author"]), userControllers.CREATE());

// Route /blog/:id | Method: Get | Access Type: Allow | For: Everyone
router.get("/blog/:id", allowAccess.open("all"), userControllers.SINGLE());

// Route /blog | Method: Put | Access Type: Deny | For: Auther, Reader
router.put("/blog/:id", allowAccess.deny(["author", "reader"]), userControllers.UPDATE());

// Route /blog/:id | Method: Delete | Access Type: Deny | For: Everyone
router.delete("/blog/:id", allowAccess.open("none"), userControllers.DELETE());
```

All done, use it in the right way!

---

## Development

If you want to develop the package, it is so simple. just follow steps below.

- Clone the project
- Install dependencies by running `$ npm install`
- Start changing!
  - Link package
  - Test

> Before you start: **Remember the base or code are stored in `lib/allowaccess.js`**. You need to edit there.

### Cloning the project

To clone the project, you need to have git installed. Ok, now clone it same as command below.

```shell
$ git clone https://gitlab.com/BlackIQ/allowaccess
```

### installing dependencies

Next, install what package uses with `npm i` or `npm install`.

```shell
$ npm i
```

### Changing

To change package or anything, your need a testing environment to use linked package. Just follow steps.

#### Link package

We asoume you are in `lib` directory. Right. You can open a **tmux** or in another terminal to cd in `test` directory.

In `lib` directory enter link command:

```shell
$ npm link
```

So, in other terminal, or other tmux part, link your development package to your `test` directory. If you are in the `test` directory ok, if not, just say `cd test` and enter the linking command:

```shell
$ npm link allowaccess
```

Linking step is done.

#### Test

Your test app is linked. Change anything in package and test it in `test` directory.
