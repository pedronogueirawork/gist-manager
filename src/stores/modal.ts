import type { ModalContent } from "@/types"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useModalStore = defineStore('modal', () => {
    const isModalActive = ref(false)
    const modalContent = ref<ModalContent>();
    
    const toggleModal = () => {
      isModalActive.value = !isModalActive.value
    }

    const setModal = (content: ModalContent) => {
        modalContent.value = content;
    }
  
    return { isModalActive, modalContent, toggleModal, setModal }
  })