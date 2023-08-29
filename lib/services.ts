import { ListProjectsQuery, Project } from "API";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from '@aws-amplify/api';
import { listProjects } from "graphql/queries";
import test from '@content/test.json';

async function getProjects() {
    try {
        const projects = (await API.graphql(
            graphqlOperation(listProjects, {
                filter: { pinned: { eq: true } },
            }),
        )) as GraphQLResult<ListProjectsQuery> || [];
        return {
        projects: projects.data?.listProjects?.items,
        error: false
    }
    } catch (err) {
        console.error('LOl ERR: ', err);
        return {
        projects: null,
        error: true
    }
    }
}

function getAboutPage() {
    return test.about;
}

function getLinkedin() {
    return test.linkedin;
}

export {getProjects, getAboutPage, getLinkedin}