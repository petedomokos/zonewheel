const mockState = {
  wheelState: [
    {
      userId: "user one",
      userName: "John",
      wheelId: "0", //indexing to avoid N+1 query problem in mongoDB
      title: "self-development",
      levels: [
        // as 'layers'; key:string, title: string
        {
          key: "level-0",
          title: "level zero title",
        },
        {
          key: "level-1",
          title: "level one title",
        },
        {
          key: "level-2",
          title: "level two title",
        },
        {
          key: "level-3",
          title: "level three title",
        },
      ],
      aspects: [
        // as 'sectors'; key: string, title: string
        {
          key: "aspect-0",
          title: "physical strength",
        },
        {
          key: "aspect-1",
          title: "mental wellbeing",
        },
        {
          key: "aspect-2",
          title: "private life",
        },
        {
          key: "aspect-3",
          title: "family and friends",
        },
      ],
      datapoints: [
        //as 'segments'; aspectKey: string, levelKey: string, title: string,  status:number( 0 || 1 || 2 ), desc: string
        {
          aspectKey: "aspect-0",
          levelKey: "level-0",
          title: "title 0",
          status: 2,
          desc: "Description for the datapoint in aspect 0, level 0",
        },

        {
          aspectKey: "aspect-1",
          levelKey: "level-0",
          title: "title 1",
          status: 0,
          desc: "Description for the datapoint in aspect 0, level 1",
        },
        {
          aspectKey: "aspect-2",
          levelKey: "level-0",
          title: "title 2",
          status: 1,
          desc: "Description for the datapoint in aspect 0, level 2",
        },
        {
          aspectKey: "aspect-3",
          levelKey: "level-0",
          title: "title 3",
          status: 1,
          desc: "Description for the datapoint in aspect 0, level 3",
        },
        {
          aspectKey: "aspect-0",
          levelKey: "level-1",
          title: "title 4",
          status: 0,
          desc: "Description for the datapoint in aspect 1, level 0",
        },
        {
          aspectKey: "aspect-1",
          levelKey: "level-1",
          title: "title 5",
          status: 0,
          desc: "Description for the datapoint in aspect 1, level 1",
        },
        {
          aspectKey: "aspect-2",
          levelKey: "level-1",
          title: "title 6",
          status: 2,
          desc: "Description for the datapoint in aspect 1, level 2",
        },
        {
          aspectKey: "aspect-3",
          levelKey: "level-1",
          title: "title 7",
          status: 1,
          desc: "Description for the datapoint in aspect 1, level 3",
        },
        {
          aspectKey: "aspect-0",
          levelKey: "level-2",
          title: "title 8",
          status: 1,
          desc: "Description for the datapoint in aspect 2, level 0",
        },
        {
          aspectKey: "aspect-1",
          levelKey: "level-2",
          title: "title 9",
          status: 0,
          desc: "Description for the datapoint in aspect 2, level 1",
        },
        {
          aspectKey: "aspect-2",
          levelKey: "level-2",
          title: "title 10",
          status: 0,
          desc: "Description for the datapoint in aspect 2, level 2",
        },
        {
          aspectKey: "aspect-3",
          levelKey: "level-2",
          title: "title 11",
          status: 1,
          desc: "Description for the datapoint in aspect 2, level 3",
        },
        {
          aspectKey: "aspect-0",
          levelKey: "level-3",
          title: "title 12",
          status: 2,
          desc: "Description for the datapoint in aspect 3, level 0",
        },
        {
          aspectKey: "aspect-1",
          levelKey: "level-3",
          title: "title 13",
          status: 1,
          desc: "Description for the datapoint in aspect 3, level 1",
        },
        {
          aspectKey: "aspect-2",
          levelKey: "level-3",
          title: "title 14",
          status: 1,
          desc: "Description for the datapoint in aspect 3, level 2",
        },
        {
          aspectKey: "aspect-3",
          levelKey: "level-3",
          title: "title 15",
          status: 0,
          desc: "Description for the datapoint in aspect 3, level 3",
        },
      ],
    },
  ],
};

export default mockState;
