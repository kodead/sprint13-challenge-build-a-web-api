// Write your "projects" router here!
const express = require ('express'); 
const Projects = require('./projects-model');
const router = express.Router();


const { validateProjectId, validateProjectBody } = require('./projects-middleware');

router.get('/:id', validateProjectId, (req, res) => {
    res.json(req.project);
});
router.post('/', validateProjectBody, async (req, res) => {
    const newProject = await Projects.insert(req.body);
    res.status(201).json(newProject);
});

router.put('/:id', validateProjectId, validateProjectBody, async (req, res) => {
    const updated = await Projects.update(req.params.id, req.body);
    res.json(updated);
});


router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get projects' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const project = await Projects.get(req.params.id);
        if (!project) {
            res.status(404).json({ message: 'Project not found' });
        } else {
            res.status(200).json(project);
        }
    } catch (err) {
        res.status(500).json({ message: 'Error getting project' });
    }
});

router.post('/', async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Missing required name or description' });
    }

    try {
        const newProject = await Projects.insert(req.body);
    res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ message: 'Failed to create project' });
    }
});

router.put('/:id', async (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ message: 'Missing required name or description' });
    }
    try {
        const updated = await Projects.update(req.params.id, req.body);
        if (!updated) {
            res.status(404).json({message: 'Project not found' });
        } else {
            res.status(200).json(updated);
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to update project' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Projects.remove(req.params.id);
        if (!deleted) {
            res.status(404).json({ message: 'Project not found'});
        } else {
            res.status(204).end();
        }
    } catch(err) {
        res.status(500).json({ message: 'Failed to delete project' });
    }
});



router.get('/:id/actions', async (req, res) => {
    try {
        const project = await Projects.get(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        const actions = await Projects.getProjectActions(req.params.id);
        res.status(200).json(actions);  
    } catch (err) {
        res.status(500).json({ message: 'Failed to get project actions' });
    }
});

module.exports = router;

