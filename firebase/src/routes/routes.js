const contactController = require("../controller/contacts")

module.exports = (router) => {
    router
        .post("/api/contact/create", contactController.createContact)
        .get("/api/contact/:contactid", contactController.getOneContact)
        .get("/api/contact", contactController.getAllContacts)
        .patch("/api/contact/:contactid", contactController.updateContact)
        .delete("/api/contact/contactid", contactController.deleteContact)
    
    return router
}