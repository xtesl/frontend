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
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
              </div>
              <div class="flex items-center">
                <img class="h-8 w-8 rounded-full object-cover" :src="profileImage" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </nav>
  
      <!-- Main Content -->
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Stats Overview -->
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.name" class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <component :is="stat.icon" class="h-6 w-6 text-teal-500" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">{{ stat.name }}</dt>
                    <dd class="text-lg font-semibold text-gray-900">{{ stat.value }}</dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-5 py-3">
              <div class="text-sm">
                <a href="#" class="font-medium text-teal-500 hover:text-teal-600">
                  {{ stat.change }} from last month
                </a>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Financial Overview Chart -->
        <div class="mt-8 bg-white overflow-hidden shadow rounded-lg">
          <div class="p-6">
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-lg font-medium text-gray-900">Financial Overview</h2>
              <div class="flex space-x-2">
                <button 
                  v-for="period in timePeriods" 
                  :key="period"
                  @click="selectedPeriod = period"
                  :class="[
                    'px-3 py-1 text-sm rounded-md',
                    selectedPeriod === period 
                      ? 'bg-teal-500 text-white' 
                      : 'text-gray-500 hover:bg-gray-100'
                  ]"
                >
                  {{ period }}
                </button>
              </div>
            </div>
            
            <div class="h-96">
              <v-chart class="h-full" :option="chartOption" autoresize />
            </div>
          </div>
        </div>
  
        <!-- Team Performance and Projects -->
        <div class="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          <!-- Team Performance -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Team Performance</h2>
              <div class="space-y-4">
                <div v-for="member in teamMembers" :key="member.id" class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <img :src="member.avatar" alt="" class="h-10 w-10 rounded-full" />
                    <div>
                      <p class="text-sm font-medium text-gray-900">{{ member.name }}</p>
                      <p class="text-sm text-gray-500">{{ member.role }}</p>
                    </div>
                  </div>
                  <div class="flex items-center space-x-4">
                    <div class="text-right">
                      <p class="text-sm font-medium text-gray-900">${{ member.revenue }}</p>
                      <p class="text-sm text-gray-500">Revenue</p>
                    </div>
                    <div 
                      :class="[
                        'px-2 py-1 text-xs font-medium rounded-full',
                        member.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      ]"
                    >
                      {{ member.status }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Project Profitability -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-6">
              <h2 class="text-lg font-medium text-gray-900 mb-4">Project Profitability</h2>
              <div class="space-y-4">
                <div v-for="project in projects" :key="project.id" class="border rounded-lg p-4">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="text-sm font-medium text-gray-900">{{ project.name }}</h3>
                    <span :class="[
                      'px-2 py-1 text-xs font-medium rounded-full',
                      project.profitMargin >= 30 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    ]">
                      {{ project.profitMargin }}% margin
                    </span>
                  </div>
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-gray-500">Revenue: ${{ project.revenue }}</span>
                    <span class="text-gray-500">Costs: ${{ project.costs }}</span>
                  </div>
                  <div class="mt-2">
                    <div class="relative pt-1">
                      <div class="overflow-hidden h-2 text-xs flex rounded bg-teal-100">
                        <div
                          :style="{ width: `${project.progress}%` }"
                          class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { use } from 'echarts/core'
  import { CanvasRenderer } from 'echarts/renderers'
  import { LineChart, BarChart } from 'echarts/charts'
  import {
    GridComponent,
    TooltipComponent,
    LegendComponent,
    DataZoomComponent,
    ToolboxComponent
  } from 'echarts/components'
  import VChart from 'vue-echarts'
  
  use([
    CanvasRenderer,
    LineChart,
    BarChart,
    GridComponent,
    TooltipComponent,
    LegendComponent,
    DataZoomComponent,
    ToolboxComponent
  ])
  
  const profileImage = ref('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')
  const selectedPeriod = ref('Month')
  const timePeriods = ['Week', 'Month', 'Quarter', 'Year']
  
  const stats = ref([
    {
      name: 'Monthly Revenue',
      value: '$45,850',
      change: '+12.5%',
      icon: 'CurrencyDollarIcon',
    },
    {
      name: 'Total Profit',
      value: '$28,450',
      change: '+8.2%',
      icon: 'TrendingUpIcon',
    },
    {
      name: 'Active Projects',
      value: '12',
      change: '+2',
      icon: 'BriefcaseIcon',
    },
    {
      name: 'Team Utilization',
      value: '87%',
      change: '+5.4%',
      icon: 'UserGroupIcon',
    },
  ])
  
  const chartOption = ref({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Revenue', 'Expenses', 'Profit']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '${value}k'
        }
      }
    ],
    series: [
      {
        name: 'Revenue',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        color: '#0D9488',
        data: [42, 45, 51, 53, 48, 52, 55]
      },
      {
        name: 'Expenses',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        color: '#DC2626',
        data: [28, 32, 35, 34, 32, 35, 38]
      },
      {
        name: 'Profit',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        color: '#2563EB',
        data: [14, 13, 16, 19, 16, 17, 17]
      }
    ]
  })
  
  const teamMembers = ref([
    {
      id: 1,
      name: 'Sarah Wilson',
      role: 'Senior Developer',
      revenue: '12,450',
      status: 'Available',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'UI Designer',
      revenue: '9,820',
      status: 'In Project',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    {
      id: 3,
      name: 'Emma Garcia',
      role: 'Project Manager',
      revenue: '15,300',
      status: 'Available',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  ])
  
  const projects = ref([
    {
      id: 1,
      name: 'E-commerce Platform',
      profitMargin: 35,
      revenue: '85,000',
      costs: '55,250',
      progress: 75
    },
    {
      id: 2,
      name: 'Mobile App Development',
      profitMargin: 28,
      revenue: '45,000',
      costs: '32,400',
      progress: 60
    },
    {
      id: 3,
      name: 'Website Redesign',
      profitMargin: 42,
      revenue: '28,000',
      costs: '16,240',
      progress: 90
    }
  ])
  </script>