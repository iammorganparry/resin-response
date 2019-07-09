<template>
  <v-form v-model="valid" method="POST" id="nativeForm">
    <v-container>
      <v-layout row wrap>
        <v-flex
          xs12
          md12
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md12
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md12
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-textarea
            placeholder="Enter Message Here"
            v-model="formBody"
           />
          <v-btn type="submit" @click="submit" :disabled="!valid">submit</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  import axios from 'axios'
  axios.defaults.headers.common['Authorization'] = 'Bearer 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';
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      formBody: '',
      reqUrl: 'https://api.sendgrid.com/v3/mail/send',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
          async submit(e) {
            e.preventDefault();
            console.log('Sending')
            const body = {
  "personalizations": [
    {
      "to": [
        {
          "email": "morgan.parry@cloud-iq.com"
        }
      ],
      "subject": "Hello, World!"
    }
  ],
  "from": {
    "email": "from_address@example.com"
  },
  "content": [
    {
      "type": "text/plain",
      "value": "Hello, World!"
    }
  ]
}
            // nativeForm.submit()
            try {
              const response = axios.post(this.reqUrl,body)
              console.log(response)
            } catch (error) {
              console.log(error)
            }
          }
        }
  }
</script>
