// localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve issue with login API failing on invalid input",
        date: "2025-06-20",
        category: "Bug Fix",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Role-based access",
        description: "Implement user role check in frontend routing",
        date: "2025-06-30",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Sneha",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Backend integration",
        description: "Integrate MongoDB with expense tracker backend",
        date: "2025-06-21",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Role-based access",
        description: "Secure admin panel with role-based middleware",
        date: "2025-06-29",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 2,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Graph rendering",
        description: "Use Chart.js to show pie chart of expenses",
        date: "2025-06-18",
        category: "Visualization",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Role-based access",
        description: "Implement conditional rendering based on role",
        date: "2025-07-01",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Pooja",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Reset password feature",
        description: "Allow users to reset password via email",
        date: "2025-06-21",
        category: "Feature",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Role-based access",
        description: "Create role-specific dashboard views",
        date: "2025-07-02",
        category: "UI/UX",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Anjali",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Expense filter UI",
        description: "Add date range and category filters for expenses",
        date: "2025-06-19",
        category: "Frontend",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Role-based access",
        description: "Ensure role-based access to charts and logs",
        date: "2025-07-03",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  }
];

const admin = [
  {
    id: 101,
    email: "admin@gmail.com",
    password: "123"
  }
];

// add data into the chrome localstorage
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  // give data in form of array
  return { employees, admin };
};
