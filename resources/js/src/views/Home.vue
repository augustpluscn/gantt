<template>
  <div data-app="true">
    <div id="ganttastic-wrapper">
      <g-gantt-chart
        :chart-start="chartStart"
        :chart-end="chartEnd"
        :grid="grid"
        :hide-timeaxis="hideTimeaxis"
        :push-on-overlap="pushOnOverlap"
        :highlighted-hours="highlightedHours"
        :row-label-width="`${rowLabelWidth}%`"
        :row-height="rowHeight"
        :theme="selectedTheme"
        @contextmenu-bar="onContextmenuBar($event)"
        @dragend-bar="stoppedDraggingBar($event)">
        <g-gantt-row
          v-for="row in rowList"
          :key="row.title"
          :label="row.label"
          :bars="row.barList"
          :highlight-on-hover="highlightOnHover"
          bar-start="myStart"
          bar-end="myEnd">
          <template #bar-label="{bar}">
            <img
              v-if="bar.image"
              :src="require(`@/assets/${bar.image}`)"
              height="20"
              width="20"
              class="mr-1">
            <span>{{bar.label}}</span>
          </template>
        </g-gantt-row>
      </g-gantt-chart>
    </div>
    <v-menu
      v-model="showContextmenu"
      :position-x="contextmenuX"
      :position-y="contextmenuY">
      <v-list>
        <v-list-item>
          {{menuContext}}
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { GGanttChart, GGanttRow } from "vue-ganttastic";
import moment from "moment";
import Api from "@/api/task.js";
export default {
  components: {
    GGanttChart,
    GGanttRow
  },
  data() {
    return {
      task: [],
      chartStart: "",
      chartEnd: "",
      pushOnOverlap: true,
      grid: true,
      rowHeight: 40,
      rowLabelWidth: 15,
      hideTimeaxis: false,
      highlightOnHover: true,
      hours: [...Array(24).keys()],
      highlightedHours: [0],
      showContextmenu: false,
      contextmenuTimeout: null,
      contextmenuX: 0,
      contextmenuY: 0,
      selectedTheme: "default",
      rowList: [],
      bgColor: ["#404040", "#2e74a3", "#de3b26", "aa34a3"],
      menuContext: ""
    };
  },
  computed: {},
  mounted: function() {
    this.getTask();
  },
  methods: {
    stoppedDraggingBar() {},
    onContextmenuBar(e) {
      e.event.preventDefault();
      this.menuContext = e.bar.label;
      this.contextmenuY = e.event.clientY;
      this.contextmenuX = e.event.clientX;
      this.showContextmenu = true;
      if (this.contextmenuTimeout) {
        clearTimeout(this.contextmenuTimeout);
      }
      // setTimeout(() => {
      //   this.showContextmenu = false;
      // }, 3000);
    },
    getTask() {
      Api.getTask().then(res => {
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
      let bgIndex = 0;
      task.forEach(element => {
        if (lastDevice != element.机台编号) {
          bgIndex = 0;
          if (tastArr.length > 0) {
            deviceObject.barList = tastArr;
            taskList.push(deviceObject);
            tastArr = [];
          }
          //新机台
          deviceObject = {
            label: element.机台名称
          };
          if (element.上机时间) {
            time = moment(element.上机时间);
          } else {
            time = moment();
          }
          chartStart = moment.min(chartStart, time);
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
          myStart: tmpStart,
          myEnd: tmpEnd,
          label: element.产品规格,
          ganttBarConfig: {
            color: "white",
            backgroundColor: this.bgColor[bgIndex % this.bgColor.length],
            opacity: 0.5,
            immobile: true
          }
        });
        bgIndex++;
      });
      if (tastArr.length > 0) {
        deviceObject.barList = tastArr;
        taskList.push(deviceObject);
      }

      chartStart.subtract(2, "h");
      chartEnd.add(2, "h");
      this.chartStart = chartStart.format("YYYY-MM-DD HH:mm");
      this.chartEnd = chartEnd.format("YYYY-MM-DD HH:mm");
      this.rowList = taskList;
    }
  }
};
</script>

<style scoped>
#ganttastic-wrapper {
  height: 100%;
  overflow-y: auto;
}
</style>
