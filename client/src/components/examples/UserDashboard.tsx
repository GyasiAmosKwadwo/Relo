import { useState } from "react";
import UserDashboard from '../UserDashboard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function UserDashboardExample() {
  const [userType, setUserType] = useState<"tenant" | "landlord" | "student" | "hotel_manager" | "logistics">("tenant");

  const userNames = {
    tenant: "John Doe",
    landlord: "Sarah Johnson", 
    student: "Mike Chen",
    hotel_manager: "David Wilson",
    logistics: "Grace Mensah"
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center space-x-4">
        <label className="text-sm font-medium">User Type:</label>
        <Select value={userType} onValueChange={(value) => setUserType(value as typeof userType)}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tenant">Tenant</SelectItem>
            <SelectItem value="landlord">Landlord</SelectItem>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="hotel_manager">Hotel Manager</SelectItem>
            <SelectItem value="logistics">Logistics Provider</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <UserDashboard 
        userType={userType}
        userName={userNames[userType]}
      />
    </div>
  );
}