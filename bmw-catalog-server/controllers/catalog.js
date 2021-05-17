var bwm_car_catalog_mock = require('../mock-data/bmw-mock.json')

exports.catalog = (req, res) => {
    res.json({bwm_car_catalog_mock})
}