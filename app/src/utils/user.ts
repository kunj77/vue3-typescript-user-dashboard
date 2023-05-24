import { computed, Ref } from 'vue';

export const getDefaultLogo = (userName: string) => {
    // Compute the user's initials
    const userInitials: Ref<string> = computed(() => {
        const names: string[] = userName.split(' ');
        return names.map(name => name.charAt(0)).join('');
    });
    return `<div class="default-logo">${userInitials.value}</div>`;
}