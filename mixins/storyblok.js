const formatPath = (path, locale) => {
  const slug = path === '/' ? 'upcoming' : path;
  return locale && locale === 'en'
    ? `cdn/stories/${slug}`
    : `cdn/stories/${locale}/${slug}`;
};

export default {
  data() {
    return {
      story: {},
      loading: false,
    };
  },
  i18n: {},
  methods: {
    async loadStory(locale) {
      const path = formatPath(this.$route.path, locale);
      const response = await this.$storyapi.get(path, { version: 'published' });
      this.story = response.data.story;
    },
    listener(locale) {
      this.loadStory(locale);
    },
  },
  async asyncData(context) {
    let version =
      context.query._storyblok || context.isDev ? 'draft' : 'published';
    const path = formatPath(context.route.path, context.app.i18n.locale);

    const response = await context.app.$storyapi
      .get(path, {
        version,
      })
      .catch(err => {
        return context.error({ statusCode: 404 });
      });

    return response.data;
  },
  mounted() {
    this.$storyblok.init();
    this.$storyblok.on('change', () => {
      location.reload(true);
    });
    this.$storyblok.on('published', () => {
      location.reload(true);
    });
    this.$bus.$on('changeLocale', this.listener);
  },
  beforeDestroy() {
    this.$bus.$off('changeLocale', this.listener);
  },
};
