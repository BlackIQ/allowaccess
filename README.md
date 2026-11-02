# allowaccess

Simple Express middleware for role-based route access.

```bash
npm install allowaccess
```

```javascript
import AllowAccess from "allowaccess";

const access = new AllowAccess(401, "You don't have access");

router.post("/blog", access.allow(["admin", "author"]), createPost);
router.get("/blog", access.open("all"), listPosts);
```

Role is read from **`req.body.role`**.

**Methods:** `allow(roles)` · `deny(roles)` · `open("all" | "none")`

## Docs

[allowaccess.amirhossein.info](https://allowaccess.amirhossein.info)

## Links

|        |                                                     |
| ------ | --------------------------------------------------- |
| npm    | https://www.npmjs.com/package/allowaccess           |
| Source | https://gitlab.com/blackiq-packages/npm/allowaccess |

## License

MIT
