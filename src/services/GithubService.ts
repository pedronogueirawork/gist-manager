import { Octokit } from "@octokit/core";
import { getAuthToken } from ".";
import type { GistUpdateDTO } from "@/types";

const octokit = async () => {
    const token = await getAuthToken();
   
    return new Octokit({
        auth: token,
    })
};

export const getGists = async () => {
    const api = await octokit();
    const response = api.request('GET /gists');

    return response;
}

export const getGist = async (id: string) => {
    const api = await octokit();
    const response = api.request(`GET /gists/${id}`, {
        gist_id: id,
    });

    return response;
}

export const createGist = async (gist: GistUpdateDTO) => {
    const api = await octokit();
    const response = api.request(`POST /gists/`, {
        description: gist.description,
        public: false,
        files: {
            [gist.fileName]: {
                content: gist.content
            }
        }
    });

    return response;
}

export const updateGist = async (id: string, gist: GistUpdateDTO) => {
    const api = await octokit();
    const response = api.request(`PATCH /gists/${id}`, {
        gist_id: id,
        description: gist.description,
        files: {
            [gist.fileName]: {
                content: gist.content
            }
        }
    });

    return response;
}

export const deleteGist = async (id: string) => {
    const api = await octokit();

    const response = api.request(`DELETE /gists/${id}`, {
        gist_id: id,
    });

    return response;
}