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

## `allow(roles)`

Allows the request only when `req.body.role` is in the list.

```javascript
router.post("/blog", access.allow(["admin", "author"]), createPost);
```

## `open(how)`

| Value                         | Behavior                               |
| ----------------------------- | -------------------------------------- |
| `"all"`                       | Always `next()`                        |
| anything else (e.g. `"none"`) | Always refuse with your status/message |

```javascript
router.get("/blog", access.open("all"), listPosts);
router.delete("/blog/:id", access.open("none"), deletePost);
```

## `deny(roles)`

Named as a deny-list helper. In the **current** published logic it uses the same membership check as `allow` (listed roles call `next()`). Prefer `allow([...])` with the roles you want to accept until you change that implementation.

## Full example

```javascript
import express from "express";
import AllowAccess from "allowaccess";

const router = express.Router();
const access = new AllowAccess(401, "You don't have access");

router.get("/blog", access.open("all"), listPosts);
router.post("/blog", access.allow(["admin", "author"]), createPost);
router.get("/blog/:id", access.open("all"), getPost);
router.delete("/blog/:id", access.open("none"), deletePost);
```
