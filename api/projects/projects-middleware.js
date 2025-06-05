// add middlewares here related to projects
const Projects = require('./projects-model');

async function validateProjectId(req, res, next) {
    try {
        const project = await Projects.get(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found'});
        }
        req.project = project;
        next();
    } catch (err) {
        res.status(500).json({ message: 'Error validating project ID' })
    }
}
function validateProjectBody(req, res, next) {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: "Name and description are required" });
    }
    next();
}
module.exports = { 
    validateProjectId,
    validateProjectBody
}