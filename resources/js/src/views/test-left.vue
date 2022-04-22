 <template>
  <div class="name" :style="{background:data.color}">
    <div class="colorBar" />
    <div class="carId">{{data.name}}{{data.id}}</div>
  </div>
</template>

<script>
export default {
  name: "TestLeft",
  props: {
    data: Object
  }
};
</script>

<style  scoped>
.name {
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0 5px;
  border-radius: 2% 0 0 2%;
  align-items: center;
  border-bottom: 1px solid #999;
}
.colorBar {
  width: 5px;
}

.carId {
  flex: 1;
}

.type {
  padding: 0 5px 0 0;
  font-size: 1.2rem;
}
</style>
