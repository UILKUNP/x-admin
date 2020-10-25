export default (view) => {
  return (resolve) => require([`@/views/${view}/index.vue`], resolve)
}