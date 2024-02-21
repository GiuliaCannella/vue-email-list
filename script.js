// attraverso l'api di boolean

// https://flynn.boolean.careers/exercises/api/random/mail

// generare 10 indirizzi email e stamparli in pagina all'interno di una lista

// bonus:
// far comparire tutti gli indirizzi email solamente quando sono stati tutti generati
const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
      endpoint: "https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },
  methods: {
    getEmails() {
        for (let i = 0; i < 10; i++) {
          axios.get(this.endpoint).then((res) => {
              let email = res.data.response;
              if (!this.emails.includes(email)) {
                  this.emails.push(email);
              }
          });
        }

    //   while (this.emails.length === 10) {
    //     axios.get(this.endpoint).then((res) => {
    //       console.log("call");
    //       let email = res.data.response;
    //       if (!this.emails.includes(email)) {
    //         this.emails.push(email);
    //       }
    //     });
    //   }
    },
  },
  created() {
    this.getEmails();
  },
}).mount("#app");
