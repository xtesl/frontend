<template>
  <div class="min-h-screen mt-16 bg-gray-50">
    <!-- Top Navigation -->
    <nav class="bg-teal-500 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <span class="text-white text-xl font-bold">Dashboard</span>
          </div>
          <div class="flex items-center space-x-4">
            <div class="relative">
              <button class="text-white hover:bg-teal-600 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
              <span
                class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"
              ></span>
            </div>
            <div class="flex items-center">
              <img
                class="h-8 w-8 rounded-full object-cover"
                :src="profileImage"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Stats Overview -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="bg-white overflow-hidden shadow rounded-lg"
        >
          <div class="p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <component :is="stat.icon" class="h-6 w-6 text-teal-500" />
              </div>
              <div class="ml-5 w-0 flex-1">
                <dl>
                  <dt class="text-sm font-medium text-gray-500 truncate">
                    {{ stat.name }}
                  </dt>
                  <dd class="text-lg font-semibold text-gray-900">
                    {{ stat.value }}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-5 py-3">
            <div class="text-sm">
              <a href="#" class="font-medium text-teal-500 hover:text-teal-600"
                >View all</a
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Projects and Tasks -->
      <div class="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <!-- Active Projects -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-medium text-gray-900">Active Projects</h2>
              <button
                class="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
              >
                New Project
              </button>
            </div>
            <div class="space-y-4">
              <div
                v-for="project in projects"
                :key="project.id"
                class="border rounded-lg p-4"
              >
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">
                      {{ project.name }}
                    </h3>
                    <p class="text-sm text-gray-500">
                      Due {{ project.dueDate }}
                    </p>
                  </div>
                  <span
                    :class="[
                      'px-2 py-1 text-xs font-medium rounded-full',
                      project.status === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800',
                    ]"
                  >
                    {{ project.status }}
                  </span>
                </div>
                <div class="mt-2">
                  <div class="relative pt-1">
                    <div
                      class="overflow-hidden h-2 text-xs flex rounded bg-teal-100"
                    >
                      <div
                        :style="{ width: project.progress + '%' }"
                        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Upcoming Deadlines -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-6">
            <h2 class="text-lg font-medium text-gray-900 mb-4">
              Upcoming Deadlines
            </h2>
            <div class="space-y-4">
              <div
                v-for="deadline in deadlines"
                :key="deadline.id"
                class="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <span
                      class="inline-flex items-center justify-center h-10 w-10 rounded-full"
                      :class="deadline.bgColor"
                    >
                      {{ deadline.date }}
                    </span>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-gray-900">
                      {{ deadline.task }}
                    </p>
                    <p class="text-sm text-gray-500">{{ deadline.project }}</p>
                  </div>
                </div>
                <div>
                  <span
                    :class="[
                      'px-2 py-1 text-xs font-medium rounded-full',
                      deadline.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-blue-100 text-blue-800',
                    ]"
                  >
                    {{ deadline.priority }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="mt-8 bg-white shadow rounded-lg">
        <div class="p-6">
          <h2 class="text-lg font-medium text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div class="flow-root">
            <ul class="-mb-8">
              <li
                v-for="(activity, activityIdx) in recentActivity"
                :key="activity.id"
              >
                <div class="relative pb-8">
                  <span
                    v-if="activityIdx !== recentActivity.length - 1"
                    class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  ></span>
                  <div class="relative flex space-x-3">
                    <div>
                      <span
                        class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                        :class="activity.iconBackground"
                      >
                        <component
                          :is="activity.icon"
                          class="h-5 w-5 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div
                      class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                    >
                      <div>
                        <p class="text-sm text-gray-500">
                          {{ activity.content }}
                          <a href="#" class="font-medium text-gray-900">{{
                            activity.project
                          }}</a>
                        </p>
                      </div>
                      <div
                        class="text-right text-sm whitespace-nowrap text-gray-500"
                      >
                        <time :datetime="activity.datetime">{{
                          activity.time
                        }}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8">
    <div class="bg-white overflow-hidden shadow rounded-lg">
      <div class="p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-medium text-gray-900">
            Productivity Metrics
          </h2>
          <div class="flex space-x-2">
            <button
              v-for="period in timePeriods"
              :key="period"
              @click="selectedPeriod = period"
              :class="[
                'px-3 py-1 text-sm rounded-md',
                selectedPeriod === period
                  ? 'bg-teal-500 text-white'
                  : 'text-gray-500 hover:bg-gray-100',
              ]"
            >
              {{ period }}
            </button>
          </div>
        </div>

        <div class="chart-container">
    <v-chart :option="chartOptions" autoresize style="width: 100%; height: 100%;" />
  </div>

        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div class="bg-teal-50 p-4 rounded-lg">
            <div class="text-sm text-teal-600 font-medium">
              Average Billable Hours
            </div>
            <div class="mt-1 text-2xl font-semibold text-teal-700">6.8h</div>
            <div class="text-sm text-teal-600">+12% from last week</div>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg">
            <div class="text-sm text-blue-600 font-medium">
              Task Completion Rate
            </div>
            <div class="mt-1 text-2xl font-semibold text-blue-700">92%</div>
            <div class="text-sm text-blue-600">+5% from last week</div>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <div class="text-sm text-purple-600 font-medium">
              Overall Efficiency
            </div>
            <div class="mt-1 text-2xl font-semibold text-purple-700">85%</div>
            <div class="text-sm text-purple-600">+8% from last week</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { use } from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import VChart from "vue-echarts";
const profileImage = ref(
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
);

const timePeriods = ["Week", "Month", "Quarter"];
const selectedPeriod = ref("Week");

use([
  LineChart,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
]);

// Chart Data
const metricsData = [
  { date: "Mon", billableHours: 6, tasksCompleted: 8, efficiencyScore: 75 },
  { date: "Tue", billableHours: 7.5, tasksCompleted: 10, efficiencyScore: 85 },
  { date: "Wed", billableHours: 5.5, tasksCompleted: 7, efficiencyScore: 80 },
  { date: "Thu", billableHours: 8, tasksCompleted: 12, efficiencyScore: 90 },
  { date: "Fri", billableHours: 7, tasksCompleted: 9, efficiencyScore: 88 },
  { date: "Sat", billableHours: 4, tasksCompleted: 5, efficiencyScore: 82 },
  { date: "Sun", billableHours: 2, tasksCompleted: 3, efficiencyScore: 78 },
];

//chart options
const chartOptions = ref({
  tooltip: { trigger: "axis" },
  legend: { data: ["Billable Hours", "Tasks Completed", "Efficiency Score"] },
  grid: { top: 20, right: 30, left: 20, bottom: 5 },
  xAxis: {
    type: "category",
    data: metricsData.map((item) => item.date),
  },
  yAxis: { type: "value" },
  series: [
    {
      name: "Billable Hours",
      type: "line",
      data: metricsData.map((item) => item.billableHours),
      smooth: true,
      lineStyle: { color: "#0D9488" },
    },
    {
      name: "Tasks Completed",
      type: "line",
      data: metricsData.map((item) => item.tasksCompleted),
      smooth: true,
      lineStyle: { color: "#3B82F6" },
    },
    {
      name: "Efficiency Score",
      type: "line",
      data: metricsData.map((item) => item.efficiencyScore),
      smooth: true,
      lineStyle: { color: "#8B5CF6" },
    },
  ],
});


const stats = ref([
  {
    name: 'Total Earnings',
    value: '$45,850',
    icon: 'CurrencyDollarIcon',
  },
  {
    name: 'Active Projects',
    value: '12',
    icon: 'BriefcaseIcon',
  },
  {
    name: 'Hours Tracked',
    value: '164.5',
    icon: 'ClockIcon',
  },
  {
    name: 'Completed Projects',
    value: '38',
    icon: 'CheckCircleIcon',
  },
])

const projects = ref([
  {
    id: 1,
    name: "E-commerce Website Redesign",
    dueDate: "Dec 25",
    status: "In Progress",
    progress: 65,
  },
  {
    id: 2,
    name: "Mobile App Development",
    dueDate: "Dec 30",
    status: "Review",
    progress: 85,
  },
  {
    id: 3,
    name: "Brand Identity Design",
    dueDate: "Jan 05",
    status: "In Progress",
    progress: 25,
  },
]);

const deadlines = ref([
  {
    id: 1,
    date: "25",
    task: "Client Meeting",
    project: "E-commerce Website",
    priority: "High",
    bgColor: "bg-teal-100 text-teal-800",
  },
  {
    id: 2,
    date: "28",
    task: "Design Review",
    project: "Mobile App",
    priority: "Medium",
    bgColor: "bg-blue-100 text-blue-800",
  },
  {
    id: 3,
    date: "30",
    task: "Project Deadline",
    project: "Brand Identity",
    priority: "High",
    bgColor: "bg-red-100 text-red-800",
  },
]);

const recentActivity = ref([
  {
    id: 1,
    content: "Completed milestone for",
    project: "E-commerce Website",
    time: "2h ago",
    icon: "CheckIcon",
    iconBackground: "bg-green-500",
  },
  {
    id: 2,
    content: "Started working on",
    project: "Mobile App Development",
    time: "4h ago",
    icon: "PlayIcon",
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "Received payment for",
    project: "Brand Identity",
    time: "6h ago",
    icon: "CurrencyDollarIcon",
    iconBackground: "bg-teal-500",
  },
]);
</script>


<style scoped>
.chart-container {
  width: 100%;
  height: 400px; /* Default height for mid-sized screens */
}

@media screen and (max-width: 768px) {
  .chart-container {
    height: 300px; /* Adjust for phones */
  }
}

@media screen and (min-width: 1200px) {
  .chart-container {
    height: 500px; /* Adjust for large screens */
  }
}
</style>