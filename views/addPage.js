const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
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
          />
        </div>
      </div>
      <div class="form-group">
        <label for="content" class="col-sm-2 control-label">Your post</label>
        <div class="col-sm-10"><textarea name="content"></textarea></div>
      </div>
      <div class="form-group">
        <label for="status" class="col-sm-2 control-label">Page status</label>
        <div class="col-sm-10">
          <select
            id="status"
            name="status"
            type="text"
            class="col-sm-2 control-label"
          >
            <option>Open</option>
            <option>Close</option>
          </select>
        </div>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  `);
