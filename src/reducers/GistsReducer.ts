import { getGist, getGists } from "@/services";
import type { Gist } from "@/types";
import moment from 'moment';

export const useGistsList = async () => {
    const gists = await getGists();

    return gists.data.map(item => <Gist>{
        id: item.id,
        file: {
            fileName: item.files[Object.keys(item.files)[0]].filename!,
            fileUrl: item.files[Object.keys(item.files)[0]].raw_url!,
            description: item.description!,
        },
        private: !item.public,
        createdAt: moment(item.created_at).format('DD/MM/YYYY'),
        updatedAt: moment(item.updated_at).format('DD/MM/YYYY'),

    })
}

export const useGistItem = async (id: string): Promise<Gist> => {
    const gist = await getGist(id);
    
    const gistContent = await fetch(gist.data.files[Object.keys(gist.data.files)[0]].raw_url)
        .then((res) => res.text());
    
    return {
        id: gist.data.id,
        file: {
            fileName: gist.data.files[Object.keys(gist.data.files)[0]].filename!,
            fileUrl: gist.data.files[Object.keys(gist.data.files)[0]].raw_url!,
            description: gist.data.description!,
            content: gistContent
        },
        private: !gist.data.public,
        createdAt: moment(gist.data.created_at).format('DD/MM/YYYY'),
        updatedAt: moment(gist.data.updated_at).format('DD/MM/YYYY'),
    }
}

export const filterGistsByName = (list: Gist[], search: string) => {
    return list.filter(item => item.file.description.includes(search));
}