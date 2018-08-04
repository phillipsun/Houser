module.exports = {

  // CREATE HOUSE
  createHouse: (req, res) => {
    console.log("Posting a new house...");
    const db = req.app.get('db');
    const { name, address, city, state, zip, img, mortgage, rent } = req.body;

    db.create_house([ name, address, city, state, zip, img, mortgage, rent ])
      .then( house => {
        res.status(200).send(house);
      })
      .catch( () => res.status(500).send() );
  },

  // READ HOUSES
  readHouses: (req, res) => {
    console.log("Fetching houses...");
    const db = req.app.get('db');

    db.read_houses()
      .then( houses => {
        res.status(200).send(houses);
      })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      })
  },

  // DELETE HOUSE
  deleteHouse: (req, res) => {
    console.log("Deleting house...");
    const db = req.app.get('db');

    const { params } = req;

    db.delete_house( [params.id] )
      .then( houses => {
        res.status(200).send(houses);
      })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      })
  }
}