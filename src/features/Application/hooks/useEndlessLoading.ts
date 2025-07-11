import {onBeforeUnmount, onMounted, useTemplateRef, type VNodeRef, watch} from "vue";
import generateUID from "@/utils/uuid.ts";


const useEndlessLoading = (c1: () => void, trackedItems: any[]) => {
    const triggerRefID: VNodeRef = generateUID('endless')
    const trigger = useTemplateRef<HTMLElement>(triggerRefID)
    let observer: IntersectionObserver | null = null;
    const checkIfPageIsFilled = () => {
        if (trigger.value && trigger.value.getBoundingClientRect().top < window.innerHeight) {
            c1();
        }
    };
    onMounted(() => {
        observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        c1();
                    }
                });
            },
            {
                threshold: 0.1,
            }
        )
        if (trigger.value) {
            observer.observe(trigger.value);
        }
    })
    onBeforeUnmount(() => {
        if (observer && trigger.value) {
            observer.unobserve(trigger.value);
        }
    })
    watch(
        trackedItems,
        () => {
            if (trackedItems?.length) {
                checkIfPageIsFilled();
            }
        },
    );
    return {
        trigger: triggerRefID
    }
}


export default useEndlessLoading;