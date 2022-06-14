export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Ram",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "ram@gmail.com",
    age: 30,
  },
  {
    id: 2,
    username: "Shyam",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "Shyam@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Krishna",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "krishna@gmail.com",
    status: "pending",
    age: 23,
  },
  {
    id: 4,
    username: "Jatin",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "jatin@gmail.com",
    status: "active",
    age: 26,
  },
  {
    id: 5,
    username: "Mansi",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "mansi@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Devansh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "devansh@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Devesh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "devesh@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Niyati",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "niyati@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Siddhi",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "siddhi@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Anu",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "anu@gmail.com",
    status: "active",
    age: 65,
  },
];
