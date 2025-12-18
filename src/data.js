export const mockEvents = [
  {
    id: 1,
    name: "Summer Photo Fest 2025",
    startDate: "2025-07-10",
    startTime: "10:00 AM",
    duration: 72, // hours
    participants: 120,
    status: "Upcoming",
    photos: [
      "src/assets/summer.jpg",
      "src/assets/city life.jpg",
      "src/assets/nature.jpg"
    ]
  },
  {
    id: 2,
    name: "Winter Wonderland Challenge",
    startDate: "2024-12-01",
    startTime: "09:00 AM",
    duration: 168, // hours
    participants: 250,
    status: "Completed",
    photos: [
      "src/assets/night road.jpg",
      "src/assets/closeup.jpg",
      "src/assets/rose.jpg",
      "src/assets/tower blue.jpg"
    ]
  },
  {
    id: 3,
    name: "Urban Exploration",
    startDate: "2025-03-15",
    startTime: "02:00 PM",
    duration: 48,
    participants: 80,
    status: "Active",
    photos: [
      "src/assets/station.jpg",
      "src/assets/redfort.jpg",
      "src/assets/diwali.jpg"
    ]
  },
];

export const mockUsers = {
  totalUsers: 1500,
  activeUsers: 750,
  newUsersToday: 25,
};

export const mockStats = {
  totalUsers: 1500,
  totalEvents: 3,
  totalPhotos: 5432
};