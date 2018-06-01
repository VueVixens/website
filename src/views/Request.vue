<template>
    <b-container fluid>
      <b-row align-h="start">
        <b-col md="8" offset-md="2">
          <div class="card">
            <img src="../assets/pretty-fox.jpg" class="card-img-top"/>
            <div class="card-body">
              <h4 class="title">{{ $t("title") }}</h4>
              <p>{{ $t("subtitle") }}</p>
              <p>{{ $t("content") }}</p>
              <ul>
                <li>{{ $t("li1") }}</li>
                <li>{{ $t("li2") }}</li>
                <li>{{ $t("li3") }}</li>
              </ul>
              <p align="center">
                  <b-button class="btn toggle-button btn-success btn-lg"
                            size="lg"
                            href="https://ladeezfirstmedia.typeform.com/to/dlOUZe">{{ $t("button") }}</b-button>
                </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
  import messages from '../translations/request'
  export default {
    i18n: {
      messages
    }
  }
</script>

<style lang="scss">
  input[type=submit] {
    display: block;
    margin: 0 auto;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #28a745;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #28a745;
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    cursor: pointer;
    &:focus, &:active {
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(40,167,69,.5);
    }
    &:hover {
      color: #fff;
      background-color: #218838;
      border-color: #1e7e34;
    }
  }
</style>

