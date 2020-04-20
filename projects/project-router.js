const express = require('express');

const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.find()
  .then(projects => {
    res.json(projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get projects.' });
  });
});

//works on Postman

router.get('/resources', (req, res) => {
    Projects.findResourceTable()
    .then(resource => {
      res.json(resource);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects.' });
    });
  });

//works on Postman

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project.' });
  });
});

//works on Postman

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Projects.findTasks(id)
  .then(tasks => {
    if (tasks.length) {
      res.json(tasks);
    } else {
      res.status(404).json({ message: 'Could not find tasks for given project.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});

//works on Postman

router.get('/:id/resources', (req, res) => {
    const { id } = req.params;
  
    Projects.findResources(id)
    .then(resources => {
      if (resources.length) {
        res.json(resources);
      } else {
        res.status(404).json({ message: 'Could not find resources for given project.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources.' });
    });
  });

  //works on Postman


router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project.' });
  });
});

//works on Postman



  router.post('/:id/tasks', async (req, res) => {
    const taskInfo = {...req.body, project_id: req.params.id};

    try {
        const task = await Projects.addTasks(taskInfo);
        res.status(201).json(task);
    } catch (err) {
        console.log(err);
        res.status(500).json({err})
    }
})

//works on Postman

router.post('/resources', async (req, res) => {
    const resourceInfo = {...req.body};

    try {
        const resource = await Projects.addResources(resourceInfo);
        res.status(201).json(resource);
    } catch (err) {
        console.log(err);
        res.status(500).json({err})
    }
})

//works on Postman


module.exports = router;