import { computed, onMounted, onUnmounted, ref } from "vue";

export function useWindowsWidth() {
  // SSR/prerender'da window yoktur; masaüstü genişliğini varsay.
  const hasWindow = typeof window !== "undefined";
  let windowWidth = ref(hasWindow ? window.innerWidth : 1200);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const type = computed(() => {
    if (windowWidth.value < 992) return "mobile";
    if (windowWidth.value >= 992) return "desktop";
    return null; // This is an unreachable line, simply to keep eslint happy.
  });

  let width = computed(() => {
    return windowWidth.value;
  });
  return { width, type };
}
