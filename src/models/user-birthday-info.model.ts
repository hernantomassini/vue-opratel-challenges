export default interface UserBirthdayInfo {
  id: number;
  name: string;
  date: string | undefined;
  photo: string;
  proximityMsg: string;
  favorite: boolean;
  highlight: boolean;
}
