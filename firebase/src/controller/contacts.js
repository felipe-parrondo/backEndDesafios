const { nanoid } = require("nanoid");
const { doc } = require("../db/connection");
const db = require("../db/connection");
const query = db.collection("contacts"); // Voy a trabajar con la collección llamada contacts

exports.createContact = async (req, res, next) => {
  try {
    const id = nanoid();
    const document = await query
      .doc(`${id}`)
      .create({ name: "Coder", lastName: "House", email: "coder@house.com" });
    res.json(document);
  } catch (error) {
    res.json(error);
  }
};

exports.getOneContact = async (req, res, next) => {
  const id = "_7wjTTGensn77tqXfNchF";
  const document = await query.doc(`${id}`).get();
  const reponse = document.data();
  res.json(reponse);
};

exports.getAllContacts = async (req, res, next) => {
  const all = await query.get();
  const docs = all.docs;

  const response = docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
    lastName: doc.data().lastName,
    email: doc.data().email,
  }));
  res.json(response);
};

exports.updateContact = async (req, res, next) => {
  const id = "_7wjTTGensn77tqXfNchF";
  const response = await query.doc(`${id}`).update({ name: "Pepito Perez" });
  res.json(response)
};

exports.deleteContact = async (req, res, next) => {
  const id = "_7wjTTGensn77tqXfNchF";
  const response = await query.doc(`${id}`).delete()
  res.json(response)
};