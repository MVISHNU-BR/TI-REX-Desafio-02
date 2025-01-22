import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import userImage from '../assets/profile-picture-1.jpg';

const ProfileTasks = () => {
	const { user } = useUser();
	const userName = `${user?.firstName ?? ""}${user?.lastName ?? ""}` || "userName";
	const setUsername = async () => {
		await user?.update({
			username: userName || undefined,
		});
	};

	useEffect(() => {
		setUsername();
	});
	return (
		<div className="lg:border-l lg:border-cinza-3 lg:ml-[21px] lg:pl-4 lg:pb-[86px]">
			<div className="flex flex-col pb-10">
				<h2 className="font-medium text-[24px] lg:pt-[124px] sm:text-[32px]">
					Latest activity
				</h2>
				<p className="font-normal text-sm opacity-50 sm:text-base">
					{user?.firstName} {user?.lastName}'s last Interactions
				</p>
			</div>
			<div className="flex flex-col gap-8 lg:pl-4">
				<div className="flex items-center gap-3">
					<img
						className="w-[50px] h-[50px] rounded-full"
						src={user?.imageUrl || userImage}
						alt=""
					/>
					<p>
						<strong>
							{user?.firstName} {user?.lastName}
						</strong>{" "}
						marked task as done
						<strong> on Set 25, 2024</strong>
					</p>
				</div>
				<div className="flex items-center gap-3">
					<img
						className="w-[50px] h-[50px] rounded-full"
						src={user?.imageUrl || userImage}
						alt=""
					/>
					<p>
						<strong>
							{user?.firstName} {user?.lastName}
						</strong>{" "}
						marked task as done
						<strong> on Set 25, 2024</strong>
					</p>
				</div>
				<div className="flex items-center gap-3">
					<img
						className="w-[50px] h-[50px] rounded-full"
						src={user?.imageUrl || userImage}
						alt=""
					/>
					<p>
						<strong>
							{user?.firstName} {user?.lastName}
						</strong>{" "}
						marked task as done
						<strong> on Set 25, 2024</strong>
					</p>
				</div>
				<div className="flex items-center gap-3">
					<img
						className="w-[50px] h-[50px] rounded-full"
						src={user?.imageUrl || userImage}
						alt=""
					/>
					<p>
						<strong>
							{user?.firstName} {user?.lastName}
						</strong>{" "}
						marked task as done
						<strong> on Set 25, 2024</strong>
					</p>
				</div>
				<div className="flex items-center gap-3">
					<img
						className="w-[50px] h-[50px] rounded-full"
						src={user?.imageUrl || userImage}
						alt=""
					/>
					<p>
						<strong>
							{user?.firstName} {user?.lastName}
						</strong>{" "}
						marked task as done
						<strong> on Set 25, 2024</strong>
					</p>
				</div>
				<div className="flex items-center gap-3">
					<img
						className="w-[50px] h-[50px] rounded-full"
						src={user?.imageUrl || userImage}
						alt=""
					/>
					<p>
						<strong>
							{user?.firstName} {user?.lastName}
						</strong>{" "}
						marked task as done
						<strong> on Set 25, 2024</strong>
					</p>
				</div>
				<div className="flex items-center gap-3">
					<img
						className="w-[50px] h-[50px] rounded-full"
						src={user?.imageUrl || userImage}
						alt=""
					/>
					<p>
						<strong>
							{user?.firstName} {user?.lastName}
						</strong>{" "}
						marked task as done
						<strong> on Set 25, 2024</strong>
					</p>
				</div>
				<div className="flex items-center gap-3">
					<img
						className="w-[50px] h-[50px] rounded-full"
						src={user?.imageUrl || userImage}
						alt=""
					/>
					<p>
						<strong>
							{user?.firstName} {user?.lastName}
						</strong>{" "}
						marked task as done
						<strong> on Set 25, 2024</strong>
					</p>
				</div>
				<div className="flex items-center gap-3">
					<img
						className="w-[50px] h-[50px] rounded-full"
						src={user?.imageUrl || userImage}
						alt=""
					/>
					<p>
						<strong>
							{user?.firstName} {user?.lastName}
						</strong>{" "}
						marked task as done
						<strong> on Set 25, 2024</strong>
					</p>
				</div>
			</div>
			<div className="pt-[73px] pb-[56px]">
				<h2 className="font-medium text-[24px] leading-9 sm:text-[32px]">
					Weekly Report
				</h2>
				<p className="font-normal text-sm opacity-50 leading-9 sm:text-base">
					Tasks estimate
				</p>
				<div className="flex flex-col pt-[14px]">
					<div className="flex">
						<p className="w-[170px] sm:w-[243px] text-sm sm:text-xl leading-9 font-medium">
							Total tasks assigned
						</p>
						<p className="text-sm sm:text-xl font-bold leading-9 text-blue-700">
							30
						</p>
					</div>
					<div className="flex">
						<p className="w-[170px] sm:w-[243px] text-sm sm:text-xl leading-9 font-medium">
							Average work time
						</p>
						<p className="sm:text-xl text-sm font-bold leading-9 text-blue-700">
							15h 25min
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileTasks;
