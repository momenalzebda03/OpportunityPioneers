export default {
  css: [
    "@/assets/scss/main.scss",
    "@fortawesome/fontawesome-free/css/all.css",
    "bootstrap/dist/css/bootstrap.css",
  ],
  app: {
    head: {
      title: "TRELLO",
      link: [
        {
          rel: "icon",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
        },
      ],
    },
  },
  devtools: { enabled: true },
};
