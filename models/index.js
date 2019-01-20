const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false
});

function createSlug(title) {
  // create Slug from Title - replace digits&spaces
  return title.replace(/[0-9]/g, "").replace(/ /g, "_");
}
// our DB tables
const Page = db.define("page", {
  title: { type: Sequelize.STRING, allowNull: false },
  slug: { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: { type: Sequelize.ENUM("open", "closed") }
  // hooks: {       //     NOT WORKING WHY ???????????
  //   beforeValidate: function(page) {
  //     if (!page.slug) {
  //       page.slug = createSlug(page.title);
  //     }
  //   }
  // }
});

Page.beforeValidate(page => {
  // hook
  if (!page.slug) {
    page.slug = createSlug(page.title);
  }
});

const User = db.define("user", {
  name: { type: Sequelize.STRING, allowNull: false, defaultValue: "anonymous" },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true }
  }
});

// db.authenticate().then(() => {       // check the connection with DataBase
//   console.log("Connected to DB succesfully");
// });

module.exports = {
  Page,
  User,
  db
};
