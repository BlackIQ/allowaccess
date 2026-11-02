# AllowAccess

Lightweight Express middleware for simple role checks on routes.

You create one instance with a status code and message for denied requests, then attach `allow`, `deny`, or `open` to individual routes.

```javascript
import AllowAccess from "allowaccess";

const access = new AllowAccess(401, "You don't have access");

router.post("/blog", access.allow(["admin", "author"]), createPost);
```

|        |                                                                            |
| ------ | -------------------------------------------------------------------------- |
| npm    | [npmjs.com/package/allowaccess](https://www.npmjs.com/package/allowaccess) |
| Source | [GitLab](https://gitlab.com/blackiq-packages/npm/allowaccess)              |

## Next

- [Install](learn/install.md)
- [Usage](learn/usage.md)
