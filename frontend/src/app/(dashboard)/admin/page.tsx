import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalendar from "@/components/EventCalendar"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {

  return (

    <div className="flex flex-col md:flex-row p-4 gap-4">

      {/* LEFT */}

      <div className="w-full lg:w-2/3 flex flex-col gap-8">

        {/* USER CARDS */}

        <div className="flex flex-wrap justify-between gap-4">

          <UserCard type="student" />

          <UserCard type="parent" />

          <UserCard type="teacher" />

          <UserCard type="staff" />

        </div>

        {/* MIDDLE CHARTS */}

        <div className="flex flex-col lg:flex-row gap-4">

          {/* COUNT CHART */}

          <div className="w-full lg:w-1/3 h-[450px]">
          
            <CountChart />

          </div>

          {/* ATTENDANCE CART */}

          <div className="w-full lg:w-2/3 h-[450px]">
          
            <AttendanceChart />

          </div>

        </div>

        {/* BOTTOM CHART */}

        <div className="w-full h-[500px]">

          <FinanceChart />

        </div>
      
      </div>

      {/* RIGHT */}

      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      
        <EventCalendar />      

        <Announcements />

      </div>

    </div>

  )

}

export default AdminPage