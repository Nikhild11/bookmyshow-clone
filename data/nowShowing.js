const nowShowing = [
  {
    id: 1,
    title: "DS: Infinity Castle",
    lang: "Japanese • Action",
    img: "/movie1.avif",
    theatres: [
      {
        id: 101,
        name: "PVR Cinemas",
        location: "Delhi",
        shows: [
          {
            time: "10:00 AM",
            price: { normal: 150, premium: 250, recliner: 400 },
            seats: { total: 100, available: 72 },
          },
          {
            time: "2:00 PM",
            price: { normal: 180, premium: 280, recliner: 450 },
            seats: { total: 100, available: 49 },
          },
          {
            time: "6:00 PM",
            price: { normal: 180, premium: 280, recliner: 450 },
            seats: { total: 100, available: 49 },
          },
          {
            time: "9:00 PM",
            price: { normal: 180, premium: 280, recliner: 450 },
            seats: { total: 100, available: 49 },
          },
        ],
      },
      {
        id: 102,
        name: "INOX",
        location: "Bengaluru",
        shows: [
          {
            time: "11:00 AM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
          {
            time: "2:30 PM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
          {
            time: "6:00 PM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
          {
            time: "9:30 PM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
        ],
      },
      {
        id: 103,
        name: "INOX",
        location: "Hyderabad",
        shows: [
          {
            time: "11:00 AM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
          {
            time: "2:30 PM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
          {
            time: "6:00 PM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
          {
            time: "9:30 PM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
        ],
      },
      {
        id: 103,
        name: "ASIAN CINEMAS",
        location: "Hyderabad",
        shows: [
          {
            time: "11:00 AM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
          {
            time: "6:00 PM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          }
        ],
      },
      {
        id: 103,
        name: "SUDHARSHAN",
        location: "Hyderabad",
        shows: [
          {
            time: "8:00 AM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
          {
            time: "2:00 PM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          }
        ],
      },
      {
        id: 104,
        name: "INOX",
        location: "Mumbai",
        shows: [
          {
            time: "11:00 AM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
          {
            time: "2:30 PM",
            price: { normal: 200, premium: 300, recliner: 500 },
            seats: { total: 120, available: 85 },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Mirai",
    lang: "English • Animation",
    img: "/movie2.avif",
    theatres: [
      {
        id: 201,
        name: "Cinepolis",
        location: "Chennai",
        shows: [
          {
            time: "11:00 AM",
            price: { normal: 120, premium: 220, recliner: 380 },
            seats: { total: 90, available: 60 },
          },
          {
            time: "11:00 AM",
            price: { normal: 120, premium: 220, recliner: 380 },
            seats: { total: 90, available: 60 },
          },
        ],
      },
      {
        id: 202,
        name: "Asian Cinemas",
        location: "hyderabad",
        shows: [
          {
            time: "11:00 AM",
            price: { normal: 120, premium: 220, recliner: 380 },
            seats: { total: 90, available: 60 },
          },
          {
            time: "2:00 PM",
            price: { normal: 100, premium: 120, recliner: 180 },
            seats: { total: 90, available: 60 },
          },
          {
            time: "6:00 PM",
            price: { normal: 100, premium: 120, recliner: 180 },
            seats: { total: 90, available: 60 },
          },
          {
            time: "9:00 PM",
            price: { normal: 100, premium: 120, recliner: 180 },
            seats: { total: 90, available: 60 },
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "The Conjuring",
    lang: "English • Horror",
    img: "/movie3.avif",
    theatres: [
      {
        id: 301,
        name: "PVR ICON",
        location: "Mumbai",
        shows: [
          {
            time: "9:00 PM",
            price: { normal: 200, premium: 300, recliner: 450 },
            seats: { total: 150, available: 97 },
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Kotha Lokh",
    lang: "Telugu • Drama",
    img: "/movie4.avif",
    theatres: [
      {
        id: 401,
        name: "Asian Cinemas",
        location: "Hyderabad",
        shows: [
          {
            time: "12:00 PM",
            price: { normal: 100, premium: 180, recliner: 300 },
            seats: { total: 120, available: 77 },
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Ghaati",
    lang: "Telugu • Drama",
    img: "/movie5.avif",
    theatres: [
      {
        id: 501,
        name: "SV Multiplex",
        location: "Hyderabad",
        shows: [
          {
            time: "4:00 PM",
            price: { normal: 130, premium: 200, recliner: 350 },
            seats: { total: 110, available: 80 },
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Bhaagi 4",
    lang: "Hindi • Action",
    img: "/movie6.avif",
    theatres: [
      {
        id: 601,
        name: "Carnival Cinemas",
        location: "Delhi",
        shows: [
          {
            time: "6:30 PM",
            price: { normal: 180, premium: 280, recliner: 450 },
            seats: { total: 140, available: 102 },
          },
          {
            time: "2:30 PM",
            price: { normal: 180, premium: 280, recliner: 450 },
            seats: { total: 140, available: 102 },
          },
        ],
      },
      {
        id: 601,
        name: "Carnival Cinemas",
        location: "Delhi",
        shows: [
          {
            time: "6:30 PM",
            price: { normal: 180, premium: 280, recliner: 450 },
            seats: { total: 140, available: 102 },
          },
          {
            time: "2:30 PM",
            price: { normal: 180, premium: 280, recliner: 450 },
            seats: { total: 140, available: 102 },
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Little Hearts",
    lang: "Telugu • Drama",
    img: "/movie7.avif",
    theatres: [
      {
        id: 701,
        name: "AMB Cinemas",
        location: "Hyderabad",
        shows: [
          {
            time: "8:00 PM",
            price: { normal: 150, premium: 250, recliner: 400 },
            seats: { total: 120, available: 88 },
          },
        ],
      },
    ],
  },
];

export default nowShowing;
