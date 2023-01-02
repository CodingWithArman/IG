    let docTitle = document.title;
        window.addEventListener("blur", () => {
            document.title = "Cone back : (";
        })
        window.addEventListener("focus", () => {
            document.title = docTitle;
        })