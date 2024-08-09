import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const firstRoom = new ClassRoom(19);
  const secondRoom = new ClassRoom(20);
  const thirdRoom = new ClassRoom(34);

  return ([firstRoom, secondRoom, thirdRoom]);
}
