const express = require("express");
const knex = require("../db/client");
const router = express.Router();

router.get("/", (req, res) => {
  knex("cohorts")
    .select("*")
    .from("cohorts")
    .orderBy("createdAt", "desc")
    .then((cohorts) => {
      res.render("cohorts/index", { cohorts: cohorts });
    });
});

router.get("/new", (req, res) => {
  res.render("cohorts/new");
});

router.post("/", (req, res) => {
  knex("cohorts")
    .insert({
      imageUrl: req.body.imageUrl,
      name: req.body.name,
      members: req.body.members,
    })
    .then(() => {
      knex("cohorts")
        .select("*")
        .from("cohorts")
        .orderBy("createdAt", "desc")
        .then((cohorts) => {
          res.render("cohorts/index", { cohorts: cohorts });
        });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const splitTeams = [];
  knex("cohorts")
    .where("id", id)
    .first()
    .then((cohort) => {
      if (cohort) {
        if (req.query.method && req.query.quantity) {
          let method = req.query.method;
          let quantity = req.query.quantity;
          let arrOfMembers = cohort.members.split(", ");
          let shuffledMembers = arrOfMembers.sort(function (a, b) {
            return 0.5 - Math.random();
          });
          if (method === "teamCount") {
            for (let i = quantity; i > 0; i--) {
              splitTeams.push(
                shuffledMembers.splice(0, Math.ceil(shuffledMembers.length / i))
              );
              console.log(splitTeams);
            }
          } else if (method === "numPerTeam") {
            while (shuffledMembers.length !== 0) {
              splitTeams.push(shuffledMembers.splice(0, quantity));
            }
          }
        }

        res.render("cohorts/show", { cohort: cohort, splitTeams: splitTeams });
      } else {
        res.redirect("/");
      }
    });
});

router.delete("/:id", (req, res) => {
  knex("cohorts")
    .where("id", req.params.id)
    .del()
    .then(() => {
      res.redirect("/cohorts");
    });
});

router.get("/:id/edit", (req, res) => {
  knex("cohorts")
    .where("id", req.params.id)
    .first()
    .then((cohort) => {
      res.render("cohorts/edit", { cohort: cohort });
    });
});

router.patch("/:id", (req, res) => {
  const updateCohort = {
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    members: req.body.members,
  };
  knex("cohorts")
    .where("id", req.params.id)
    .update(updateCohort)
    .then(() => {
      res.redirect(`/cohorts/${req.params.id}`);
    });
});
module.exports = router;
