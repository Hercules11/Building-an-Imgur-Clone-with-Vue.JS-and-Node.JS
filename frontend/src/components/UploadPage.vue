<template>
  <div class="container">
    <div class="upload-wrapper">
      <h4>Upload Images</h4>
      <div class="alert alert-warning" v-if="error">{{ error }}</div>
      <div class="alert alert-info" v-if="status">{{ status }}</div>
      <div class="upload-form">
        div#myId
          <div class="dropbox">
            <p>Drop files here or click to upload</p>
            <input type="file" class="input-file" multiple />
          </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Dropzone } from "dropzone";
const dropzone = new Dropzone("div#myId", { url: "/file/post" });
const error = ref('')
const status = ref('')
const signurl = ref('')
const dropzoneOptions = ref({
  url: 'https://httpbin.org/post',
  thumbnailWidth: 200,
  addRemoveLinks: true,
  autoProcessQueue: false,
})
const awss3 = ref({
  signingURL: 'http://aws-direct-s3.dev/',
  headers: {},
  params: {},
})

const sendingEvent = (file, xhr, formData) => {
        this.$cognitoAuth.getIdToken((err, result) => {
            if (err) {
                this.error = err;
            } else {
                const url = config.s3SignedUrl;
                axios.defaults.headers.common['Authorization'] = result;
                let headers = {
                        "Access-Control-Allow-Origin": "*"
                };
                axios({ method: 'post', url: url, headers: headers, data: { name: file.name, type: file.type }})
                    .then(x => {
                        var options = { headers: {
                            'Content-Type': file.type,
                            'Access-Control-Allow-Origin': '*'
                        }}
                        delete axios.defaults.headers.common['Authorization'];
                        axios.put(x.data.uploadURL, file, options)
                    })
                    .then(status => {
                        this.status = status;
                    })
                    .catch(err => {
                        this.error = err;
                    })
            }
        })
    }
</script>
<style scoped>
.upload-wrapper {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #e4e6e7;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
}
.upload-wrapper h4 {
  font-size: 22px;
  margin: 0;
  padding: 0;
  margin-bottom: 40px;
}
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}
.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}
.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}
.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
