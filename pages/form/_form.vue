<template>
	<v-layout class="vv-container" fill-height>
		<template v-if="!genderQuestionAnswered && !showSorryMessage">
			<v-container fill-height class="raised">
				<h1>{{ $t('genderQuestion.heading') }}</h1>
				<div class="actions">
					<v-btn color="secondary darken-2" dark @click="genderQuestionAnswered = true">{{
						$t('genderQuestion.yes')
					}}</v-btn>
					<v-btn color="secondary darken-2" dark @click="proceedToSorryMessage">{{
						$t('genderQuestion.no')
					}}</v-btn>
				</div>
			</v-container>
		</template>
		<template v-else-if="!showSorryMessage">
			<v-container class="indexed">
				<v-flex xs12>
					<h1 class="display-2 text-center">{{ $t('heading') }}</h1>
					<v-form
						action="https://vuevixens.us7.list-manage.com/subscribe/post?u=bb4724549551e6cf7bb5e3165&amp;id=ecd2dfeb93"
						method="post"
						class="submit-form"
						v-model="valid"
					>
						<v-text-field
							name="EMAIL"
							:label="$t('email')"
							v-model="email"
							:rules="emailRules"
						></v-text-field>
						<v-text-field name="FNAME" :label="$t('name')" v-model="name" :rules="nameRules"></v-text-field>
						<v-text-field name="AFFIL" :label="$t('affiliation')"></v-text-field>
						<v-text-field name="FOOD" :label="$t('foodPreferences')"></v-text-field>
						<input type="text" name="CONF" class="hidden-field" :value="formEvent" />
						<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
						<div class="hidden-field">
							<input type="text" name="b_7754f9dbbdff11682c8ff2e73_54e8642cad" tabindex="-1" value />
						</div>
						<v-checkbox
							color="secondary"
							v-model="gdpr"
							:label="$t('gdpr')"
							:rules="gdprRules"
						></v-checkbox>
						<p class="text-xs-left caption">{{ $t('content.paragraph1') }}</p>
						<p class="text-xs-left caption">
							{{ $t('content.paragraph2') }}
							<a href="https://mailchimp.com/legal/" target="_blank">{{ $t('content.question') }}</a>
						</p>
						<v-btn color="secondary darken-2" dark type="submit" :disabled="!valid">{{
							$t('submit')
						}}</v-btn>
					</v-form>
				</v-flex>
			</v-container>
		</template>
		<template v-else>
			<v-container class="raised">
				<h1>{{ $t('raised') }}</h1>
				<div class="actions">
					<v-btn color="secondary darken-2" dark to="/">{{ $t('raised') }}</v-btn>
				</div>
			</v-container>
		</template>
	</v-layout>
</template>

<script>
// import storyblok from "../../mixins/storyblok";
import messages from '../../assets/translations/form';
export default {
	// mixins: [storyblok],
	i18n: {
		messages,
		locale: 'fr',
	},
	props: {
		label: 'string',
	},
	data() {
		return {
			valid: false,
			formEvent: this.$route.params.form,
			email: '',
			name: '',
			gdpr: false,
			nameRules: [name => !!name || this.$t('nameRules')],
			emailRules: [
				email => !!email || this.$t('emailRules'),
				email => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) || this.$t('emailValid'),
			],
			gdprRules: [gdpr => !!gdpr || this.$t('gdprRules')],
			genderQuestionAnswered: false,
			showSorryMessage: false,
		};
	},
	methods: {
		proceedToSorryMessage() {
			this.genderQuestionAnswered = true;
			this.showSorryMessage = true;
		},
	},
};
</script>

<style scoped>
.submit-form {
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
	margin-top: 40px;
	text-align: center;
}
.hidden-field {
	position: absolute;
	left: -5000px;
}
.card-button {
	margin-top: 20px;
}

.theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--text) {
	background-color: #373737 !important;
}
.raised {
	z-index: 3;
	text-align: center;
	flex-direction: column;
	justify-content: center;
}
.actions {
	padding-top: 40px;
}
</style>
