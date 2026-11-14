# Usage

## Create an instance

```javascript
import AllowAccess from "allowaccess";

const access = new AllowAccess(401, "You don't have access");
```

| Argument     | Meaning                            |
| ------------ | ---------------------------------- |
| `statusCode` | HTTP status when access is refused |
| `message`    | Body `{ message }` sent on refusal |

## How the role is read

Middleware reads **`req.body.role`**.

Your client (or an earlier auth middleware) must put the current user’s role on the body, for example:

```javascript
// after auth, something like:
req.body.role = "admin";
```

If you keep the role on `req.user`, adapt that before these middlewares run.

## API References

Here are all you need about functions, errors and how to use them.

### `allow(roles)`

Allows the request only when `req.body.role` is in the list. Opposite of `deny()`.

```javascript
router.post("/blog", access.allow(["admin", "author"]), createPost);
```

### `open(how)`

| Value                         | Behavior                               |
| ----------------------------- | -------------------------------------- |
| `"all"`                       | Always `next()`                        |
| anything else (e.g. `"none"`) | Always refuse with your status/message |

```javascript
router.get("/blog", access.open("all"), listPosts);
router.delete("/blog/:id", access.open("none"), deletePost);
```

### `deny(roles)`

Denys the request only when `req.body.role` is in the list. Opposite of `allow()`.

```javascript
router.patch("/blog/:id", access.deny(["reader"]), updatePost);
```

## Full example

```javascript
import express from "express";
import AllowAccess from "allowaccess";

// Consider we have 3 roles: admin, author, reader

const router = express.Router();
const access = new AllowAccess(401, "You don't have access");

router.get("/blog", access.open("all"), listPosts);
router.post("/blog", access.allow(["admin", "author"]), createPost);
router.patch("/blog/:id", access.deny("reader"), updatePost);
router.delete("/blog/:id", access.open("none"), deletePost);
```
