<template>
    <b-container fluid>
          <b-row>
              <b-col md="6" offset-md="3">
                <article class="card">                  
                    <img src="../assets/cry-fox.jpg" class="card-img-top"/>
                    <div class="card-body">
                      <h4 class="title">{{ $t("title") }}</h4>
                      <p class="card-text">
                        {{ $t("subtitle") }}
                      </p>
                    </div>
                </article>
              </b-col>             
          </b-row>
      </b-container>
</template>
<script>
import VueFormGenerator from 'vue-form-generator'
import messages from '../translations/notFound'
export default {
  name: 'Form',
  components: {
    'vue-form-generator': VueFormGenerator.component
  },
  i18n: {
    messages
  },
  data () {
    return {
      model: {
        id: 1,
        password: 'J0hnD03!x4',
        skills: ['Javascript', 'VueJS'],
        email: 'john.doe@gmail.com',
        status: true
      },

      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'First Name',
            model: 'first-name',
            maxlength: 50,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Last Name',
            model: 'last-name',
            maxlength: 50,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Event Name',
            model: 'event-name',
            maxlength: 50,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Event Location',
            model: 'event-location',
            maxlength: 50,
            required: true
          },
          {
            type: 'input',
            inputType: 'email',
            label: 'Email',
            model: 'email',
            maxlength: 50,
            required: true
          }
        ]
      },

      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      },
      companies: []
    }
  },
  methods: {}
}
</script>
