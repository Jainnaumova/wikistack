const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (page, author) =>
  layout(html`
    <h3>Edit a Page</h3>
    <hr />
    <form method="POST" action="/wiki/${page.slug}">
      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Title</label>
        <div class="col-sm-10">
          <input
            id="title"
            name="title"
            type="text"
            class="form-control"
            value="${page.title}"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="authorName" class="col-sm-2 control-label">Your name</label>
        <div class="col-sm-10">
          <input
            id="authorName"
            name="authorName"
            type="text"
            class="form-control"
            value="${author.name}"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="authorEmail" class="col-sm-2 control-label"
          >Your email</label
        >
        <div class="col-sm-10">
          <input
            id="authorEmail"
            name="authorEmail"
            type="email"
            class="form-control"
            value="${author.email}"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="content" class="col-sm-2 control-label">Your post</label>
        <div class="col-sm-10">
          <textarea rows="15" cols="101" name="content">${
              page.content
            }</textarea>
        </div>
      </div>

      <div class="form-group">
        <label for="status" class="col-sm-2 control-label">Page status</label>
        <div class="col-sm-10">
          <select name="status">
            <option ${page.status == "open" ? "selected" : ""}>open</option>
            <option ${page.status == "closed" ? "selected" : ""}>closed</option>
          </select>
        </div>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
