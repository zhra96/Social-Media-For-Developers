const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const checkObjectId = require('../../middleware/checkObjectId');
const User = require('../../models/User');
const Job = require('../../models/Job');

// @route    POST api/jobs
// @desc     Create a job post
// @access   Private
router.post(
  '/',
  auth,
  check('title', ' is required').notEmpty(),
  check('experienceInYears', ' is required').notEmpty(),
  check('salary', ' is required').notEmpty(),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const company = await User.findById(req.user.id).select('-password');

      const newJob = new Job({
        title: req.body.title,
        skillsRequired: req.body.skills,
        jobDescription: req.body.job-description,
        experienceInYears:req.body.experience,
        salary: req.body.salary,
        companyName: company.companyName,
        company: req.company.id,
       

      });

      const job = await newJob.save();

      res.json(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);



// @route    GET api/jobs
// @desc     Get all jobs
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 });
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



// @route    GET api/jobs/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', auth, checkObjectId('id'), async (req, res) => {
  try {
    const job = await JobSchema.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: 'job not found' });
    }

    res.json(job);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});



// @route    DELETE api/jobs/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', [auth, checkObjectId('id')], async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({ msg: 'Job not found' });
    }

    // Check user
    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await job.remove();

    res.json({ msg: 'Job removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});

module.exports = router;