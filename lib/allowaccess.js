class AllowAccess {
  constructor(statusCode, message) {
    this.statusCode = statusCode;
    this.message = message;
  }

  allow = (roles) => {
    return (req, res, next) => {
      const { role } = req.body;

      if (roles.includes(role)) {
        next();
      } else {
        res.status(this.statusCode).send({ message: this.message });
      }
    };
  };

  deny = (roles) => {
    return (req, res, next) => {
      const { role } = req.body;

      if (roles.includes(role)) {
        next();
      } else {
        res.status(this.statusCode).send({ message: this.message });
      }
    };
  };

  open = (how) => {
    return (req, res, next) => {
      if (how === "all") {
        next();
      } else {
        res.status(this.statusCode).send({ message: this.message });
      }
    };
  };
}

export default AllowAccess;
