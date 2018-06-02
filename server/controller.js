module.exports = {

  // CREATE PRODUCT
  createHouse: (req, res) => {
    console.log("Got POST request!");
    
    const db = req.app.get('db');
    
    const { name, address, city, state, zip } = req.body;
    
    console.log(req.body);

    db.create_house([ name, address, city, state, zip ])
      .then( house => {
        console.log(house);
        res.status(200).send(house);
      })
      .catch( () => res.status(500).send() );
  },


  // READ HOUSES
  readHouses: (req, res) => {
    console.log("Getting all houses...");
    const db = req.app.get('db');

    db.read_houses()
      .then( products => {
        res.status(200).send(products);
      })
      .catch( err => {
        console.log(err);
        res.status(500).send(err);
      })
  }


}