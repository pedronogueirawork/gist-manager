export type Gist = {
    id: string,
    file: {
        fileName: string,
        description: string,
        fileUrl: string,
        content?: string,
    },
    private: boolean,
    createdAt: string,
    updatedAt: string,
}

export type GistUpdateDTO = {
    description: string,
    content: string,
    fileName: string,
}