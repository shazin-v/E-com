// import { useLogout } from "@/api/(rbac-admin)/logout/hook/LogoutHook";
import { LocalStorage } from "@/utility/localstorage";
import { IconLogout } from "@tabler/icons-react";

const Logout = ({ fromSidebar }: { fromSidebar?: boolean }) => {
  // const { mutate: Logout } = useLogout();
  const refreshToken = LocalStorage.getItem("refreshToken");

  // const handleLogout = () => {
  //   if (refreshToken) {
  //     Logout({ refreshToken: refreshToken });
  //   }
  // };
  return (
    <div 
    // onClick={handleLogout}
    >
      {fromSidebar ? (
        <div className="flex gap-3 items-center cursor-pointer mb-4 px-2">
          <IconLogout color="#003792" size={19} />
          <p className="text-[#003792] font-[500] text-lg">Logout</p>
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <IconLogout size={16} className="opacity-60" aria-hidden="true" />
          <div className="justify-start text-red-600 cursor-pointer text-sm font-normal font-['Poppins'] underline">
            Logout
          </div>
        </div>
      )}
    </div>
  );
};
export default Logout;
