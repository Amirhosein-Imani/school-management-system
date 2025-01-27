import UserCard from "@/components/UserCard"

const AdminPage = () => {

  return (

    <div className="flex flex-col md:flex-row p-4 gap-4">

      {/* LEFT */}

      <div className="w-full lg:w-2/3">

      {/* USER CARDS */}

      <div className="flex flex-wrap justify-between gap-4">

        <UserCard type="student" />

        <UserCard type="parent" />

        <UserCard type="teacher" />

        <UserCard type="staff" />

      </div>
      
      </div>

      {/* RIGHT */}

      <div className="w-full lg:1/3">RIGHT</div>

    </div>

  )

}

export default AdminPage