# AllowAccess

Lightweight Express middleware for simple role checks on routes.

You create one instance with a status code and message for denied requests, then attach `allow`, `deny`, or `open` to individual routes.

> Peer idea: use with **Express** (or any middleware stack with `(req, res, next)`).

```javascript
import AllowAccess from "allowaccess";

const access = new AllowAccess(401, "You don't have access");

router.post("/blog", access.allow(["admin", "author"]), createPost);
```

| Title  | URL                                                                        |
| ------ | -------------------------------------------------------------------------- |
| npm    | [npmjs.com/package/allowaccess](https://www.npmjs.com/package/allowaccess) |
| Source | [GitHub](https://github.com/BlackIQ/allowaccess)                           |

## Next

- [Install](learn/install.md)
- [Usage](learn/usage.md)
