export type ModalContent = {
    title: string,
    content: string,
    type: 'success' | 'error',
    successButtonText?: string,
    errorButtonText?: string, 
    callback: () => void
}