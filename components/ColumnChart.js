import { ResponsiveLine } from "@nivo/line";

const ColumnChart = () => {
  const data = [
    {
      id: "japan",
      color: "hsl(284, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 96,
        },
        {
          x: "helicopter",
          y: 155,
        },
        {
          x: "boat",
          y: 155,
        },
        {
          x: "train",
          y: 123,
        },
        {
          x: "subway",
          y: 246,
        },
        {
          x: "bus",
          y: 106,
        },
        {
          x: "car",
          y: 151,
        },
        {
          x: "moto",
          y: 9,
        },
        {
          x: "bicycle",
          y: 176,
        },
        {
          x: "horse",
          y: 238,
        },
        {
          x: "skateboard",
          y: 272,
        },
        {
          x: "others",
          y: 152,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(299, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 238,
        },
        {
          x: "helicopter",
          y: 257,
        },
        {
          x: "boat",
          y: 260,
        },
        {
          x: "train",
          y: 163,
        },
        {
          x: "subway",
          y: 101,
        },
        {
          x: "bus",
          y: 29,
        },
        {
          x: "car",
          y: 19,
        },
        {
          x: "moto",
          y: 181,
        },
        {
          x: "bicycle",
          y: 246,
        },
        {
          x: "horse",
          y: 56,
        },
        {
          x: "skateboard",
          y: 258,
        },
        {
          x: "others",
          y: 287,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(111, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 196,
        },
        {
          x: "helicopter",
          y: 299,
        },
        {
          x: "boat",
          y: 56,
        },
        {
          x: "train",
          y: 244,
        },
        {
          x: "subway",
          y: 196,
        },
        {
          x: "bus",
          y: 186,
        },
        {
          x: "car",
          y: 254,
        },
        {
          x: "moto",
          y: 273,
        },
        {
          x: "bicycle",
          y: 66,
        },
        {
          x: "horse",
          y: 90,
        },
        {
          x: "skateboard",
          y: 53,
        },
        {
          x: "others",
          y: 126,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(10, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 20,
        },
        {
          x: "helicopter",
          y: 120,
        },
        {
          x: "boat",
          y: 79,
        },
        {
          x: "train",
          y: 235,
        },
        {
          x: "subway",
          y: 67,
        },
        {
          x: "bus",
          y: 268,
        },
        {
          x: "car",
          y: 48,
        },
        {
          x: "moto",
          y: 124,
        },
        {
          x: "bicycle",
          y: 252,
        },
        {
          x: "horse",
          y: 276,
        },
        {
          x: "skateboard",
          y: 8,
        },
        {
          x: "others",
          y: 69,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(335, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 82,
        },
        {
          x: "helicopter",
          y: 182,
        },
        {
          x: "boat",
          y: 19,
        },
        {
          x: "train",
          y: 154,
        },
        {
          x: "subway",
          y: 66,
        },
        {
          x: "bus",
          y: 231,
        },
        {
          x: "car",
          y: 97,
        },
        {
          x: "moto",
          y: 125,
        },
        {
          x: "bicycle",
          y: 20,
        },
        {
          x: "horse",
          y: 214,
        },
        {
          x: "skateboard",
          y: 102,
        },
        {
          x: "others",
          y: 129,
        },
      ],
    },
  ];
  return (
    <>
      <div className="bg-my-silver dark:bg-back-body dark:text-gray-50 p-10 h-[300px] mt-2 rounded-lg">
        <ResponsiveLine
          data={data}
          margin={{ top: 10, right: 30, bottom: 25, left: 30 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default ColumnChart;
