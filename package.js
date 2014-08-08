Package.describe({
    summary: "Select2 with spiderable compatiblity (no diacritics/accents)",
    version: "1.0.0"
});

Package.on_use(function (api) {
    if(api.versionsFrom) api.versionsFrom("METEOR-CORE@0.9.0-atm");

    api.use("jquery", "client");

    api.add_files([
        "lib/select2/select2.js"
    ], "client", {bare: true});

    api.add_files([
        "lib/select2/select2.css",
        "lib/select2/select2.png",
        "lib/select2/select2x2.png",
        "lib/select2/select2-spinner.gif",
        "path-override.css"
    ], "client");
});