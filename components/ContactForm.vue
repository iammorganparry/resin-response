<template>
  <v-form v-model="valid" method="post" action="https://send.pageclip.co/P6nk7fN2Ew6eHjcC0dFOGaUlvk3w2z7S" id="nativeForm">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 lg6>
          <h2>Facebook</h2>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhttps%3A%2F%2Fwww.facebook.com%2FResin-Response-749896211720926%2F%2F&tabs=messages&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2322334131355709" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </v-flex>
        <v-flex xs12 md6 lg6>
        <h2 class='text-xs-center'>Email</h2>
        <v-flex
          xs12
          md12
        >
          <v-text-field
            v-model="firstname"
            name="firstName"
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
            name="lastName"
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
            name="email"
            required
          ></v-text-field>
          <v-textarea
            placeholder="Enter Message Here"
            v-model="formBody"
            name="body"
           />
          <input type="hidden" name="subject" value="Free Quote" />
          <v-btn type="submit" large color="primary" class="text-xs-center" :disabled="!valid">submit</v-btn>
        </v-flex>
      </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      formBody: '',
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
        //   submit(e) {
        //     console.log('Sending')
        //     nativeForm.submit()
        //   }
        }
  }
</script>
