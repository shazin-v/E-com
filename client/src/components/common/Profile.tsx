"use client";
import { ChevronDownIcon, User } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  IconLock,
  IconLogout,
  IconMail,
  IconPhone,
  IconUserCircle,
} from "@tabler/icons-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logout from "./Logout";
// import Logout from "../login/Logout";
// import { GetProfileData } from "@/interface/(rbac-admin)/profile";
// import { GetUserProfile } from "@/api/(rbac-admin)/user/api/Profile";

export default function Profile() {
  const router = useRouter();
//   const [UserProfileData, setUserProfileData] = useState<GetProfileData>();

//   const { data: getAllUserProfile } = useQuery({
//     queryKey: ["getUserProfile"],
//     queryFn: async () => GetUserProfile(),
//   });

//   useEffect(() => {
//     if (getAllUserProfile) {
//       setUserProfileData(getAllUserProfile.data);
//     }
//   }, [getAllUserProfile]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-auto p-0 hover:bg-transparent cursor-pointer"
        >
          <Avatar className="h-9 md:h-10 w-9 md:w-10">
            <AvatarImage src="/images/user.png" alt="User avatar" />
          </Avatar>
          <p className="text-base md:text-lg text-[#3D3E46] font-normal font-['poppins']">
            {/* {UserProfileData?.username || "User"} */}
            User
          </p>
          <ChevronDownIcon
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="end"
        className="min-w-64 p-4 mt-4"
      >
        <DropdownMenuLabel className="flex min-w-0 flex-col ">
          <div className="inline-flex justify-center items-center gap-3.5">
            <Avatar className="h-9 md:h-10 w-9 md:w-10">
              <AvatarImage src="/images/user.png" alt="User avatar" />
            </Avatar>
            <div className="w-52 inline-flex flex-col justify-start items-start">
              <div className="self-stretch justify-start text-zinc-700 text-sm font-medium font-['Poppins']">
                {/* {UserProfileData?.username} */} username
              </div>
              <div className="self-stretch justify-start text-zinc-700 text-sm font-normal font-['Poppins']">
                {/* {UserProfileData?.roles[0].roleName
                  .toLowerCase()
                  .replace("_", " ")} */}USer
              </div>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <IconUserCircle
              size={16}
              className="opacity-60"
              aria-hidden="true"
            />
            <div className="w-52 justify-start text-zinc-700 text-sm font-normal font-['Poppins']">
              ID : 19062003
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconMail size={16} className="opacity-60" aria-hidden="true" />
            <div className="w-52 justify-start text-zinc-700 text-sm font-normal font-['Poppins']">
              {/* {UserProfileData?.email} */} abc@mail.com
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <IconPhone size={16} className="opacity-60" aria-hidden="true" />
            <div className="w-52 justify-start text-zinc-700 text-sm font-normal font-['Poppins']">
              {/* {UserProfileData?.phoneNumber || "N/A"} */} N/A
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuItem
        //   onClick={() =>
        //     router.push(`reset-password?email=${UserProfileData?.email}`)
        //   }
        >
          <IconLock size={16} className="opacity-60" aria-hidden="true" />
          <div className="justify-start text-blue-700 cursor-pointer text-sm font-normal font-['Poppins'] underline">
            Reset password
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Logout />
          {/* Logout */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
