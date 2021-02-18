const blogs = [];

function main() { 
    return document.getElementById("main");

}

function titleInput() {
    return document.getElementById("title");
}

function contentInput() {
    return document.getElementById("content");
}

function form() {
    return document.getElementById("form");
}

function resetFormInput() {
    titleInput().value = "";
    contentInput().value = "";
}

function resetMain() {
    main().innerHTML = "";
}

function formTemplate() {
    return `
    <h3>Create Blog</h3>
      <form id="form">
        <div class="input-field">
          <label for="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div class="input-field">
          <label for="content">Content</label><br />
          <textarea name="content" id="content" cols="30" rows="10"></textarea>
        </div>
        <input type="submit" value="Create Blog" />
      </form>
    `;
}

function renderForm() {
    resetMain();
    main().innerHTML = formTemplate();
    form().addEventListener("submit", submitForm);
}

function submitForm(e) {
    e.preventDefault();
   

    blogs.push({
        title: titleInput().value,
        content: contentInput().value,
    });

}

document.addEventListener("DOMContentLoaded", function () {
    renderForm();
})