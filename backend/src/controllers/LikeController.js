//  imports
const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const tartgetDev = await Dev.findById(devId);

        if (!tartgetDev) {
            return res.status(400).json({ error: 'Dev not exists' });
        }

        loggedDev.likes.push(tartgetDev._id);

        await loggedDev.save();


        return res.json(loggedDev);
    }

};