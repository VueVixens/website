<template>
	<v-layout class="vv-container" fill-height>
		<v-container class="indexed">
			<v-flex xs12 class="text-center">
				<v-breadcrumbs justify-center>
					<v-icon medium slot="divider">forward</v-icon>
					<v-breadcrumbs-item to="/gallery" nuxt>
						<h2 class="vv-subheading font-lato text-center">Gallery</h2>
					</v-breadcrumbs-item>
					<v-breadcrumbs-item>
						<h2 class="vv-subheading font-lato text-center text--secondary">{{ story.name }}</h2>
					</v-breadcrumbs-item>
				</v-breadcrumbs>
			</v-flex>
			<v-container grid-list-lg>
				<v-layout wrap v-if="!!story.content">
					<v-flex xs6 md3 v-for="(item, index) in story.content.body" :key="item.img">
						<v-card class="vv-card gallery-image" text @click.native="setCarouselStart(index)">
							<client-only>
								<v-img :src="item.img" height="200px" class="grey lighten-2">
									<v-layout slot="placeholder" fill-height align-center justify-center ma-0>
										<v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
									</v-layout>
								</v-img>
							</client-only>
						</v-card>
					</v-flex>
				</v-layout>
			</v-container>
		</v-container>
		<v-dialog v-model="dialog" v-if="!!story.content" max-width="960px">
			<client-only>
				<v-carousel hide-delimiters v-model="currentPhotoIndex" :cycle="false" height="600px">
					<v-carousel-item
						v-for="item in story.content.body"
						:key="item.img"
						:src="item.img"
					></v-carousel-item>
				</v-carousel>
			</client-only>
		</v-dialog>
	</v-layout>
</template>

<script>
import storyblok from '../../mixins/storyblok';
export default {
	mixins: [storyblok],
	data() {
		return {
			dialog: false,
			currentPhotoIndex: null,
		};
	},
	methods: {
		setCarouselStart(index) {
			this.currentPhotoIndex = index;
			this.dialog = true;
		},
	},
};
</script>

<style lang="scss">
.v-carousel {
	.v-jumbotron__image {
		max-width: 100%;
	}
}

.gallery-image {
	cursor: pointer;
}

@media (max-width: 960px) {
	.v-carousel,
	.v-carousel__item {
		height: 480px !important;
	}
}

@media (max-width: 420px) {
	.v-carousel,
	.v-carousel__item {
		height: 250px !important;
	}
}
</style>
