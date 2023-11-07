function MockData() {
  const mockData = {
    wheelData: [
      {
        userId: "user one",
        userName: "John",
        wheelId: 0, //indexing to avoid N+1 query problem in mongoDB
        wheelTitle: "self-development",
        layers: [
            //key, title
          {
            key: "layer-0",
            title: "layer zero title",
          },
          {
            key: "layer-1",
            title: "layer one title",
          },
          {
            key: "layer-2",
            title: "layer two title",
          },
          {
            key: "layer-3",
            title: "layer three title",
          },
        ],
        sectors: [
          //key, title
          {
            key: "sector-0",
            title: "physical strength",
          },
          {
            key: "sector-1",
            title: "mental wellbeing",
          },
          {
            key: "sector-2",
            title: "private life",
          },
          {
            key: "sector-3",
            title: "family and friends",
          },
        ],

        segments: [
          //sectorKey, layerKey, status, description
          {
            sectorKey: "sector-0",
            layerKey: "layer-0",
            status: 2,
            description: "Description for the segment in sector 0, layer 0",
          },
          {
            sectorKey: "sector-1",
            layerKey: "layer-0",
            status: 0,
            description: "Description for the segment in sector 0, layer 1",
          },
          {
            sectorKey: "sector-2",
            layerKey: "layer-0",
            status: 1,
            description: "Description for the segment in sector 0, layer 2",
          },
          {
            sectorKey: "sector-3",
            layerKey: "layer-0",
            status: 1,
            description: "Description for the segment in sector 0, layer 3",
          },
          {
            sectorKey: "sector-0",
            layerKey: "layer-1",
            status: 0,
            description: "Description for the segment in sector 1, layer 0",
          },
          {
            sectorKey: "sector-1",
            layerKey: "layer-1",
            status: 0,
            description: "Description for the segment in sector 1, layer 1",
          },
          {
            sectorKey: "sector-2",
            layerKey: "layer-1",
            status: 2,
            description: "Description for the segment in sector 1, layer 2",
          },
          {
            sectorKey: "sector-3",
            layerKey: "layer-1",
            status: 1,
            description: "Description for the segment in sector 1, layer 3",
          },
          {
            sectorKey: "sector-0",
            layerKey: "layer-2",
            status: 1,
            description: "Description for the segment in sector 2, layer 0",
          },
          {
            sectorKey: "sector-1",
            layerKey: "layer-2",
            status: 0,
            description: "Description for the segment in sector 2, layer 1",
          },
          {
            sectorKey: "sector-2",
            layerKey: "layer-2",
            status: 0,
            description: "Description for the segment in sector 2, layer 2",
          },
          {
            sectorKey: "sector-3",
            layerKey: "layer-2",
            status: 1,
            description: "Description for the segment in sector 2, layer 3",
          },
          {
            sectorKey: "sector-0",
            layerKey: "layer-3",
            status: 2,
            description: "Description for the segment in sector 3, layer 0",
          },
          {
            sectorKey: "sector-1",
            layerKey: "layer-3",
            status: 1,
            description: "Description for the segment in sector 3, layer 1",
          },
          {
            sectorKey: "sector-2",
            layerKey: "layer-3",
            status: 1,
            description: "Description for the segment in sector 3, layer 2",
          },
          {
            sectorKey: "sector-3",
            layerKey: "layer-3",
            status: 0,
            description: "Description for the segment in sector 3, layer 3",
          },
        ],
      },
    ],
  };
}

export default MockData;
