export default {
  data() {
    return {
      story: {},
      loading: false,
    }
  },
  created: function () {
    this.$storyblok.on('change', () => {
      this.loadStory('draft', this.$i18n.locale)
    });
    this.$storyblok.on('published', () => {
      this.loadStory('draft', this.$i18n.locale)
    });
    this.$storyblok.pingEditor(() => {
      this.loadStory(this.$storyblok.inEditor ? 'draft' : 'published', this.$i18n.locale)
    });
    this.$eventBus.$on('changeLocale', locale => {
      this.loadStory('published', locale)
    });
  },
  methods: {
    loadStory(version, locale) {
      this.loading = true;
      this.$storyblok.get({
        slug: locale ? `${locale}/${this.slug}`: `en/${this.slug}`,
        version: version
      }, (data) => {
        this.story = {
          content: {}
        };
        this.$nextTick(() => {
          this.story = data.story;
          this.loading = false;
        });
      }, (error) => {
        this.loading = false;
      });
    }
  }
}