<template>
  <div id="app">
    <div :style="{height:'calc(100vh - 30px - 30px)'}">
      <v-gantt-chart :startTime="startTime"
        :endTime="endTime"
        :cellWidth="cellWidth"
        :cellHeight="cellHeight"
        :titleHeight="titleHeight"
        :scale="scale"
        :titleWidth="titleWidth"
        showCurrentTime
        :dataKey="dataKey"
        :datas="datas">
        <template v-slot:block="{data,item}">
          <Test :data="data"
            :currentTime="currentTime"
            :item="item"></Test>
        </template>
        <template v-slot:left="{data}">
          <TestLeft :data="data"></TestLeft>
        </template>
        <template v-slot:title>
          排程甘特图
        </template>
      </v-gantt-chart>
    </div>
    <footer class="main-footer"></footer>
  </div>
</template>

<script>
import Test from "./test.vue";
import TestLeft from "./test-left.vue";
import moment from "moment";
import Api from "@/api/task.js";

const scaleList = `1,2,3,4,5,6,10,12,15,20,30,60,120,180,240,360,720,1440`
  .split(",")
  .map(n => parseInt(n));
export default {
  name: "App",
  components: { Test, TestLeft },
  data() {
    return {
      miyao: "",
      currentTime: moment(),
      startTime: moment()
        .subtract(5, "h")
        .toString(),
      endTime: moment()
        .add(2, "d")
        .add(2, "h")
        .add(5, "s")
        .toString(),
      cellWidth: 30,
      cellHeight: 30,
      titleHeight: 40,
      titleWidth: 250,
      scale: 60,
      datasNum: 100,
      datas: [],
      dataKey: "id",
      scaleList: scaleList,
      scrollToTime: moment()
        .add(1, "d")
        .toString(),
      scrollToPostion: { x: 10000, y: 10000 }
    };
  },
  mounted: function() {
    let query = this.$route.query;
    // if (query.hasOwnProperty("miyao")) {
    if (Object.prototype.hasOwnProperty.call(query, "miyao")) {
      this.miyao = query.miyao;
    }
    this.getTask();
  },
  methods: {
    getTask() {
      Api.getTask(this.miyao).then(res => {
        this.task = res.data.task;
        this.setTaskFormat(res.data.task);
      });
    },
    setTaskFormat(task) {
      let chartStart = moment("2900-01-01 00:00");
      let chartEnd = moment("1900-01-01 00:00");
      let lastDevice = "";
      let taskList = [];
      let deviceObject = {};
      let tastArr = [];
      let tmpStart = "";
      let tmpEnd = "";
      let time = "";
      let minute = 0;
      task.forEach(element => {
        if (lastDevice != element.机台编号) {
          if (tastArr.length > 0) {
            deviceObject.gtArray = tastArr;
            taskList.push(deviceObject);
            tastArr = [];
          }
          //新机台
          deviceObject = {
            id: element.机台名称,
            name: element.机台名称
          };
          if (element.上机时间) {
            time = moment(element.上机时间);
            chartStart = moment.min(chartStart, moment(element.上机时间));
          } else {
            time = moment();
            chartStart = moment.min(chartStart, moment());
          }
          lastDevice = element.机台编号;
        }
        minute =
          (element.数量 - element.完成数量) * element.单支时间 +
          element.调机时间;
        minute = minute < 0 ? 0 : minute;
        tmpStart = time.format("YYYY-MM-DD HH:mm");
        time.add(minute, "m");
        chartEnd = moment.max(chartEnd, time);
        tmpEnd = time.format("YYYY-MM-DD HH:mm");
        tastArr.push({
          id: element.任务单号,
          name: element.产品规格,
          cus: element.CompSimple,
          qty: element.数量 - element.完成数量,
          passenger: 100,
          start: tmpStart,
          end: tmpEnd
        });
      });
      if (tastArr.length > 0) {
        deviceObject.gtArray = tastArr;
        taskList.push(deviceObject);
      }

      chartStart.subtract(2, "h");
      chartEnd.add(2, "h");
      this.startTime = chartStart.format("YYYY-MM-DD HH:mm");
      this.endTime = chartEnd.format("YYYY-MM-DD HH:mm");
      this.datas = taskList;
    }
  }
};
</script>

<style scoped>
label {
  margin-left: 10px;
}
input {
  width: 40px;
  height: 20px;
  vertical-align: middle;
}
input[type="range"] {
  width: 100px;
}
</style>
