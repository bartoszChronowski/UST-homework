# UST-homework

Notes:
1. I've changed language to Typescript. Main reason was personal preference, although overall I find Typescript (and static typing) much better in modern frontend architecture.
2. I've tried to spend no more than 2 hours on this task, however - if given more time - I could find some improvements.
3. I feel like Vue 3 still got some uncovered cases (e.g. combination of composables, props and computed properties) like the one I've tried to implement in InputHint component to encapsulate regex functions in hook. However, it might also be the case of further research.
4. I've tweaked one test where password "a p" passes special character test. In my opinion passwords should not have whitespaces, and if given more time I'd create a validator (or just use a library e.g. Vuelidate).