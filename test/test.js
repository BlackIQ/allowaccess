import AllowAccess from "allowaccess";

const allowAccess = new AllowAccess(401, "You dont have access");

allowAccess.allow(["admin", "ok", "me"]);
allowAccess.deny(["me"]);
allowAccess.open("all");
allowAccess.open("none");
