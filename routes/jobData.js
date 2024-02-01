import { Router } from "express";

export const createJobRouter = ({ JobDataController }) => {

    const jobsRouter = Router();
    const jobController = new JobDataController();

    jobsRouter.get("/",jobController.getRandomJobs)
    return jobsRouter;
}