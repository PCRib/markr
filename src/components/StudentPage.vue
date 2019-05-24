<template>
  <div>
    <a class="backBtn" @click="$router.go(-1)">Back</a>
    <h1>{{student}}</h1>
    <div>
      <md-tabs md-sync-route>
        <md-tab id="tab-home" md-label="Home">Home Tab</md-tab>

        <md-tab id="tab-pages" md-label="Pages">
          Pages tab
          <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
        </md-tab>

        <md-tab id="tab-posts" md-label="Posts">
          Posts tab
          <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
        </md-tab>

        <md-tab id="tab-favorites" md-label="Favorites">
          Favorites tab
          <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>
        </md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "StudentPage",
  data() {
    return {
      student: this.$route.params.id
    };
  }
};
</script>

<style lang="scss" scoped>
.backBtn {
  font-weight: 600;
}
h1 {
  margin: 2rem 0;
}
.tblclm {
  padding: 1rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
