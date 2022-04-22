<template>
  <div class="plan"
    :title="title"
    :style="{'background-color':statusColor}" @click="onClick">
    <div class="runTime">
      <span>起{{moment(item.start).format("HH:mm")}}</span>
      <span>至{{moment(item.end).format("HH:mm")}}</span>
    </div>
    <div class="middle">{{item.name}}</div>
    <div class="passenger"></div>

  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Test",
  props: {
    data: Object,
    item: Object,
    currentTime: moment,
    updateTimeLines: Function
  },
  data() {
    return {
      moment: moment
    };
  },
  computed: {
    title() {
      return (
        moment(this.item.start).format("HH:mm") +
        "~" +
        moment(this.item.end).format("HH:mm") +
        "  " +
        this.item.name
      );
    },
    statusColor() {
      let { item, currentTime } = this;
      let start = moment(item.start);
      let end = moment(item.end);
      if (start.isBefore(currentTime) && end.isAfter(currentTime)) {
        return "#65b2a7";
      } else if (end.isBefore(currentTime)) {
        return "#9e9e9e";
      } else {
        return "#69b3e1";
      }
    }
  },
  methods: {
    onClick() {
      this.updateTimeLines(this.item.start, this.item.end);
    }
  }
};
</script>

<style scoped>
.middle {
  flex: 1;
  padding-left: 10px;
}
/* .runTime {
  display: flex;
  flex-direction: column;
  font-size: 0.4rem;
} */
.plan {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  white-space: nowrap;
  height: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  color: #fff;
  padding-left: 5px;
  font-size: 0.8rem;
  opacity: 0.8;
}
</style>
