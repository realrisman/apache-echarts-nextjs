import type { NextPage } from 'next'
import Head from 'next/head'
import ReactEcharts from '../components/ReactEcharts'
import type { EChartsOption } from 'echarts'

const sampleOption = {
  title: {
    text: 'Basic Sample Chart',
  },
  tooltip: {},
  xAxis: {
    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks'],
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  ],
} as EChartsOption

const lineSimple = {
  title: {
    text: 'Line Simple Chart',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
} as EChartsOption

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Sample Apache Echarts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold">Sample Apache Echarts</h1>
        <div className="mt-5">
          <ReactEcharts
            option={sampleOption}
            style={{ width: '500px', height: '500px' }}
          />
          <ReactEcharts
            option={lineSimple}
            style={{ width: '500px', height: '500px' }}
          />
        </div>
      </main>
    </div>
  )
}

export default Home
